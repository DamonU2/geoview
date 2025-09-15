import { VectorLayerEntryConfig, VectorLayerEntryConfigProps } from '@/core/utils/config/validation-classes/vector-layer-entry-config';
import { TypeSourceWkbVectorInitialConfig } from '@/api/config/types/layer-schema-types';
export interface WkbLayerEntryConfigProps extends VectorLayerEntryConfigProps {
    /** Source settings to apply to the GeoView layer source at creation time. */
    source?: TypeSourceWkbVectorInitialConfig;
}
export declare class WkbLayerEntryConfig extends VectorLayerEntryConfig {
    /** Tag used to link the entry to a specific schema. */
    schemaTag: import("@/api/config/types/layer-schema-types").TypeGeoviewLayerType;
    /** Layer entry data type. */
    entryType: import("@/api/config/types/layer-schema-types").TypeLayerEntryType;
    /** The layer entry props that were used in the constructor. */
    layerEntryProps: WkbLayerEntryConfigProps;
    source: TypeSourceWkbVectorInitialConfig;
    /**
     * The class constructor.
     * @param {WkbLayerEntryConfigProps | WkbLayerEntryConfig} layerConfig - The layer configuration we want to instanciate.
     */
    constructor(layerConfig: WkbLayerEntryConfigProps | WkbLayerEntryConfig);
}
//# sourceMappingURL=wkb-layer-entry-config.d.ts.map