import { TypeLegendLayer } from '@/core/components/layers/types';
interface SecondaryControlsProps {
    layer: TypeLegendLayer;
    isVisible: boolean;
    isInVisibleRange: boolean;
}
export declare function SecondaryControls({ layer, isVisible, isInVisibleRange }: SecondaryControlsProps): JSX.Element;
export {};
