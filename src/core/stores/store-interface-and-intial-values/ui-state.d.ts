import type { TypeValidAppBarCoreProps, TypeValidFooterBarTabsCoreProps, TypeValidMapCorePackageProps, TypeValidNavBarProps } from '@/api/types/map-schema-types';
import type { TypeSetStore, TypeGetStore } from '@/core/stores/geoview-store';
import type { TypeMapFeaturesConfig } from '@/core/types/global-types';
/**
 * Represents the UI Zustand store slice.
 *
 * Manages state for the UI including app-bar, footer-bar, nav-bar, and focus-trap states.
 */
export interface IUIState {
    /** Whether the GeoView-level keyboard focus trap is active. */
    activeTrapGeoView: boolean;
    /** The list of app-bar component identifiers rendered in the app bar. */
    appBarComponents: TypeValidAppBarCoreProps[];
    /** The currently active app-bar tab and its open / focus-trap state. */
    activeAppBarTab: ActiveAppBarTabType;
    /** The list of footer-bar tab component identifiers. */
    footerBarComponents: TypeValidFooterBarTabsCoreProps[];
    /** The currently active footer-bar tab and its open / focus-trap state. */
    activeFooterBarTab: ActiveFooterBarTabType;
    /** The list of core package component identifiers. */
    corePackagesComponents: TypeValidMapCorePackageProps[];
    /** Identifies which element currently holds focus-trap control. */
    focusItem: FocusItemProps;
    /** Tab identifiers that are hidden from the footer bar. */
    hiddenTabs: string[];
    /** The list of nav-bar component identifiers. */
    navBarComponents: TypeValidNavBarProps[];
    /** The current resize value (percentage) for the footer panel. */
    footerPanelResizeValue: number;
    /** Sets default UI configuration values from the map features config. */
    setDefaultConfigValues: (geoviewConfig: TypeMapFeaturesConfig) => void;
    /** Actions to mutate the UI state. */
    actions: {
        /** Enables the focus trap on a specific UI element. */
        enableFocusTrap: (uiFocus: FocusItemProps) => void;
        /** Disables the focus trap and optionally restores focus to a callback element. */
        disableFocusTrap: (callbackElementId?: string) => void;
        /** Sets the active footer-bar tab by id. */
        setActiveFooterBarTab: (id: string | undefined) => void;
        /** Sets the active app-bar tab, its open state, and whether focus is trapped. */
        setActiveAppBarTab: (tabId: string | undefined, isOpen: boolean, isFocusTrapped: boolean) => void;
        /** Toggles the GeoView-level keyboard focus trap. */
        setActiveTrapGeoView: (active: boolean) => void;
        /** Sets the footer panel resize value. */
        setFooterPanelResizeValue: (value: number) => void;
        /** Sets the list of hidden tab identifiers. */
        setHiddenTabs: (hiddenTabs: string[]) => void;
        /** Sets the footer bar open state. */
        setFooterBarIsOpen: (open: boolean) => void;
    };
}
/**
 * Initializes an UI State and provide functions which use the get/set Zustand mechanisms.
 *
 * @param set - The setter callback to be used by this state
 * @param get - The getter callback to be used by this state
 * @returns The initialized UI State
 */
export declare function initializeUIState(set: TypeSetStore, get: TypeGetStore): IUIState;
/** Hooks the current focus-trap item from the UI state. */
export declare const useUIActiveFocusItem: () => FocusItemProps;
/** Hooks the active app-bar tab state. */
export declare const useUIActiveAppBarTab: () => ActiveAppBarTabType;
/** Hooks the active footer-bar tab state. */
export declare const useUIActiveFooterBarTab: () => ActiveFooterBarTabType;
/** Hooks whether the GeoView-level keyboard focus trap is active. */
export declare const useUIActiveTrapGeoView: () => boolean;
/** Hooks the app-bar component identifiers. */
export declare const useUIAppbarComponents: () => TypeValidAppBarCoreProps[];
/** Hooks the footer-bar component identifiers. */
export declare const useUIFooterBarComponents: () => TypeValidFooterBarTabsCoreProps[];
/** Hooks the core package component identifiers. */
export declare const useUICorePackagesComponents: () => TypeValidMapCorePackageProps[];
/** Hooks the footer panel resize value. */
export declare const useUIFooterPanelResizeValue: () => number;
/** Hooks the list of hidden tab identifiers. */
export declare const useUIHiddenTabs: () => string[];
/** Hooks the nav-bar component identifiers. */
export declare const useUINavbarComponents: () => TypeValidNavBarProps[];
/**
 * Gets the active footer-bar tab from the store.
 *
 * @param mapId - The map id.
 * @returns The active footer-bar tab state.
 */
export declare const getStoreActiveFooterBarTab: (mapId: string) => ActiveFooterBarTabType;
/**
 * Gets the active app-bar tab from the store.
 *
 * @param mapId - The map id.
 * @returns The active app-bar tab state.
 */
export declare const getStoreActiveAppBarTab: (mapId: string) => ActiveAppBarTabType;
/**
 * Gets the footer-bar component identifiers from the store.
 *
 * @param mapId - The map id.
 * @returns The array of footer-bar component props.
 */
export declare const getStoreFooterBarComponents: (mapId: string) => TypeValidFooterBarTabsCoreProps[];
/**
 * Gets the app-bar component identifiers from the store.
 *
 * @param mapId - The map id.
 * @returns The array of app-bar component props.
 */
export declare const getStoreAppBarComponents: (mapId: string) => TypeValidAppBarCoreProps[];
/**
 * Gets the nav-bar component identifiers from the store.
 *
 * @param mapId - The map id.
 * @returns The array of nav-bar component props.
 */
export declare const getStoreNavBarComponents: (mapId: string) => TypeValidNavBarProps[];
/**
 * Gets the core package component identifiers from the store.
 *
 * @param mapId - The map id.
 * @returns The array of core package component props.
 */
export declare const getStoreCorePackageComponents: (mapId: string) => TypeValidMapCorePackageProps[];
/**
 * Sets the active footer bar tab.
 *
 * @param mapId - The map identifier
 * @param tab - The tab identifier, or undefined to deactivate
 */
export declare const setStoreActiveFooterBarTab: (mapId: string, tab: string | undefined) => void;
/**
 * Sets the active app bar tab with its open and focus trap state.
 *
 * @param mapId - The map identifier
 * @param tab - The tab identifier, or undefined to deactivate
 * @param isOpen - Whether the tab is open
 * @param isFocusTrapped - Whether focus is trapped on the tab
 */
export declare const setStoreActiveAppBarTab: (mapId: string, tab: string | undefined, isOpen: boolean, isFocusTrapped: boolean) => void;
/**
 * Sets the footer bar open state.
 *
 * @param mapId - The map identifier
 * @param isOpen - Whether the footer bar is open
 */
export declare const setStoreFooterBarIsOpen: (mapId: string, isOpen: boolean) => void;
/**
 * Enables the focus trap on a specific UI element.
 *
 * @param mapId - The map identifier
 * @param uiFocus - The focus item containing active and callback element identifiers
 */
export declare const enableStoreFocusTrap: (mapId: string, uiFocus: FocusItemProps) => void;
/**
 * Disables the focus trap and restores focus to a callback element.
 *
 * Uses requestAnimationFrame to ensure DOM updates complete before focus restoration.
 *
 * @param mapId - The map identifier
 * @param callbackElementId - Optional element identifier to restore focus to. If 'no-focus' is passed, focus is not restored
 */
export declare const disableStoreFocusTrap: (mapId: string, callbackElementId?: string) => void;
/**
 * Toggles the GeoView-level keyboard focus trap.
 *
 * @param mapId - The map identifier
 * @param active - Whether the focus trap is active
 */
export declare const setStoreActiveTrapGeoView: (mapId: string, active: boolean) => void;
/**
 * Sets the footer panel resize value (percentage).
 *
 * @param mapId - The map identifier
 * @param value - The resize percentage value
 */
export declare const setStoreFooterPanelResizeValue: (mapId: string, value: number) => void;
/**
 * Shows a tab button by removing it from the hidden tabs list.
 *
 * @param mapId - The map identifier
 * @param tab - The tab identifier to show
 */
export declare const showStoreTabButton: (mapId: string, tab: string) => void;
/**
 * Hides a tab button by adding it to the hidden tabs list.
 *
 * @param mapId - The map identifier
 * @param tab - The tab identifier to hide
 */
export declare const hideStoreTabButton: (mapId: string, tab: string) => void;
/** Describes which element holds the focus trap and where to restore focus on release. */
export type FocusItemProps = {
    /** The id of the element that currently has focus, or false if no focus trap is active. */
    activeElementId: string | false;
    /** The id of the element to restore focus to when the trap is released, or false. */
    callbackElementId: string | false;
};
/** Describes the active app-bar tab state. */
export type ActiveAppBarTabType = {
    /** The identifier of the active tab. */
    tabId: string;
    /** Whether the app-bar panel is open. */
    isOpen: boolean;
    /** Optional flag indicating whether focus is trapped inside the panel. */
    isFocusTrapped?: boolean;
};
/** Describes the active footer-bar tab state. */
export type ActiveFooterBarTabType = {
    /** The identifier of the active tab. */
    tabId: string;
    /** Whether the footer-bar panel is open. */
    isOpen: boolean;
    /** Optional flag indicating whether focus is trapped inside the panel. */
    isFocusTrapped?: boolean;
};
//# sourceMappingURL=ui-state.d.ts.map