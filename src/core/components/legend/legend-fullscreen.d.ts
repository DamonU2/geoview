import type { TypeLegendLayer } from '@/core/components/layers/types';
import type { TypeContainerBox } from '@/core/types/global-types';
/**
 * Properties for the LegendFullscreen component.
 * @interface LegendFullscreenProps
 * @property {TypeLegendLayer[]} layersList - Array of legend layers to display in fullscreen mode.
 * @property {string} mapId - The unique identifier of the map.
 * @property {TypeContainerBox} containerType - The type of container where the legend is displayed.
 * @property {boolean} isOpen - Controls whether the fullscreen dialog is open.
 * @property {() => void} onClose - Callback function invoked when the fullscreen dialog is closed.
 * @property {React.RefObject<HTMLButtonElement>} buttonRef - Reference to the fullscreen button for focus restoration.
 */
interface LegendFullscreenProps {
    layersList: TypeLegendLayer[];
    mapId: string;
    containerType: TypeContainerBox;
    isOpen: boolean;
    onClose: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}
/**
 * Properties for the LegendFullscreenButton component.
 * @interface FullscreenButtonProps
 * @property {TypeContainerBox} containerType - The type of container where the button is displayed.
 * @property {() => void} onClick - Callback function invoked when the button is clicked.
 * @property {React.RefObject<HTMLButtonElement>} buttonRef - Reference to the button element for focus management.
 */
interface FullscreenButtonProps {
    containerType: TypeContainerBox;
    onClick: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
}
/**
 * Renders a button that opens the legend in fullscreen mode.
 * Only displays when the legend is shown in the app bar container.
 * @param props - The component properties.
 * @param props.containerType - The type of container where the button is displayed.
 * @param props.onClick - Callback function invoked when the fullscreen button is clicked.
 * @returns The fullscreen button element, or null if not in the app bar.
 */
export declare function LegendFullscreenButton({ containerType, onClick, buttonRef }: FullscreenButtonProps): JSX.Element | null;
/**
 * Renders the legend in a fullscreen dialog with responsive multi-column layout.
 * Manages layer collapse state by expanding all layers when entering fullscreen and
 * restoring the previous collapse state when exiting.
 * @param props - The component properties.
 * @param props.layersList - Array of legend layers to display.
 * @param props.mapId - The unique identifier of the map.
 * @param props.containerType - The type of container where the legend is displayed.
 * @param props.isOpen - Controls whether the fullscreen dialog is open.
 * @param props.onClose - Callback function invoked when the dialog is closed.
 * @returns The fullscreen legend dialog component.
 */
export declare function LegendFullscreen({ layersList, mapId, containerType, isOpen, onClose, buttonRef }: LegendFullscreenProps): JSX.Element;
export {};
//# sourceMappingURL=legend-fullscreen.d.ts.map