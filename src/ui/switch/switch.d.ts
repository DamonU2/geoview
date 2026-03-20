import type { SwitchProps } from '@mui/material';
interface ExtendedSwitchProps extends SwitchProps {
    label: string;
}
/**
 * Create a customized Material UI Switch component.
 *
 * Wraps the Material-UI Switch with a FormControlLabel to ensure
 * proper labeling and accessibility. Generates unique IDs to associate
 * the label with the switch control.
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Switch
 *   label="Toggle Switch"
 *   checked={isChecked}
 *   onChange={handleChange}
 * />
 *
 * // Disabled state
 * <Switch
 *   label="Disabled Switch"
 *   disabled
 *   checked={false}
 * />
 *
 * // With size variant
 * <Switch
 *   label="Small Switch"
 *   size="small"
 *   checked={isChecked}
 * />
 * ```
 *
 * @param {ExtendedSwitchProps} props - All valid Material-UI Switch props
 * @returns {JSX.Element} The Switch component wrapped in FormControlLabel
 *
 * @see {@link https://mui.com/material-ui/react-switch/}
 */
declare function SwitchUI(props: ExtendedSwitchProps): JSX.Element;
export declare const Switch: typeof SwitchUI;
export {};
//# sourceMappingURL=switch.d.ts.map