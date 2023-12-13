import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material';
import { CloseButton, LayerTitle, ResponsiveGrid } from '../common';
import { Box, DeleteOutlineIcon, IconButton, Paper } from '@/ui';
import { getSxClasses } from './layers-style';
import { useLayersDisplayState, useSelectedLayer } from '@/core/stores/store-interface-and-intial-values/layer-state';
import { LayersActions } from './left-panel/layers-actions';
import { LayerDetails } from './right-panel/layer-details';
import { AddNewLayer } from './left-panel/add-new-layer';
import { LeftPanel } from './left-panel/left-panel';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));

export function LayersPanel() {
  const { t } = useTranslation<string>();

  const theme = useTheme();
  const sxClasses = getSxClasses(theme);

  const [isLayersListPanelVisible, setIsLayersListPanelVisible] = useState(false);

  const layerDetailsRef = useRef<HTMLDivElement>(null);

  const selectedLayer = useSelectedLayer(); // get store value
  const displayState = useLayersDisplayState();

  /*
  // Using helpers
  const helpers = useLegendHelpers();
  useEffect(() => {
    helpers.populateLegendStoreWithFakeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  useEffect(() => {
    if (layerDetailsRef.current) {
      layerDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedLayer]);

  const leftPanel = () => {
    return (
      <div>
        <LayersActions />
        {displayState === 'add' ? <AddNewLayer /> : <LeftPanel setIsLayersListPanelVisible={setIsLayersListPanelVisible} />}
      </div>
    );
  };

  const rightPanel = () => {
    if (selectedLayer && displayState === 'view') {
      return (
        <Item ref={layerDetailsRef}>
          <LayerDetails layerDetails={selectedLayer} />
        </Item>
      );
    }
    if (displayState === 'remove') {
      const markup = { __html: t('layers.removeLayerDescription') };
      /* eslint-disable react/no-danger */
      return (
        <Paper sx={{ padding: '20px' }}>
          <h3>{t('layers.removingLayers')}</h3>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2', alignItems: 'center' }}>
            <IconButton edge="end" size="small">
              <DeleteOutlineIcon color="error" />
            </IconButton>
            <Box>
              <div dangerouslySetInnerHTML={markup} />
            </Box>
          </Box>
        </Paper>
      );
      /* eslint-enable react/no-danger */
    }
    if (displayState === 'order') {
      const markup = { __html: t('layers.sortingDescription') };
      /* eslint-disable react/no-danger */
      return (
        <Paper sx={{ padding: '20px' }}>
          <h3>{t('layers.reArrangeLayers')}</h3>
          <Box sx={sxClasses.buttonDescriptionContainer}>
            <div dangerouslySetInnerHTML={markup} />
          </Box>
        </Paper>
      );
      /* eslint-enable react/no-danger */
    }

    return null;
  };

  return (
    <Box sx={sxClasses.layersPanelContainer}>
      <ResponsiveGrid.Root>
        <ResponsiveGrid.Left isEnlargeDataTable={false} isLayersPanelVisible={isLayersListPanelVisible}>
          <LayerTitle>{t('general.layers')}</LayerTitle>
        </ResponsiveGrid.Left>
        <ResponsiveGrid.Right isEnlargeDataTable={false} isLayersPanelVisible={isLayersListPanelVisible}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'right',
            }}
          >
            <CloseButton isLayersPanelVisible={isLayersListPanelVisible} setIsLayersPanelVisible={setIsLayersListPanelVisible} />
          </Box>
        </ResponsiveGrid.Right>
      </ResponsiveGrid.Root>
      <ResponsiveGrid.Root sx={{ mt: 8 }}>
        <ResponsiveGrid.Left isEnlargeDataTable={false} isLayersPanelVisible={isLayersListPanelVisible}>
          {leftPanel()}
        </ResponsiveGrid.Left>

        <ResponsiveGrid.Right isEnlargeDataTable={false} isLayersPanelVisible={isLayersListPanelVisible}>
          {rightPanel()}
        </ResponsiveGrid.Right>
      </ResponsiveGrid.Root>
    </Box>
  );
}
