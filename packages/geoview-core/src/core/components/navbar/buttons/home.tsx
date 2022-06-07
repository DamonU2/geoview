import { useContext } from 'react';

import { View } from 'ol';
import { fromLonLat } from 'ol/proj';

import { MapContext } from '../../../app-start';

import { Button, HomeIcon } from '../../../../ui';

import { api } from '../../../../app';

/**
 * Interface used for home button properties
 */
interface HomeProps {
  className?: string | undefined;
  iconClassName?: string | undefined;
}

/**
 * default properties values
 */
const defaultProps = {
  className: '',
  iconClassName: '',
};

/**
 * Create a home button to return the user to the map center
 *
 * @param {HomeProps} props the home button properties
 * @returns {JSX.Element} the created home button
 */
export default function Home(props: HomeProps): JSX.Element {
  const { className, iconClassName } = props;

  const mapConfig = useContext(MapContext);

  const mapId = mapConfig.id;

  /**
   * Return user to map initial center
   */
  function setHome() {
    // get map and set initial bounds to use in zoom home
    const { center, zoom } = api.map(mapId).mapProps.map.initialView;

    const { currentProjection } = api.map(mapId);

    const projectionConfig = api.projection.projections[currentProjection];

    api.map(mapId).map.setView(
      new View({
        projection: projectionConfig.projection,
        zoom,
        center: fromLonLat(center, projectionConfig.projection),
      })
    );
  }

  return (
    <Button
      id="home"
      type="icon"
      tooltip="mapnav.home"
      tooltipPlacement="left"
      icon={<HomeIcon />}
      onClick={() => setHome()}
      className={className}
      iconClassName={iconClassName}
    />
  );
}

Home.defaultProps = defaultProps;
