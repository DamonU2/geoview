import type { Vector as VectorSource } from 'ol/source';
import { AbstractGVVector } from '@/geo/layer/gv-layers/vector/abstract-gv-vector';
import type { OgcWfsLayerEntryConfig } from '@/api/config/validation-classes/vector-validation-classes/wfs-layer-entry-config';
import type { TypeOutfields, TypeOutfieldsType } from '@/api/types/map-schema-types';
/**
 * Manages a WFS layer.
 *
 * @exports
 * @class GVWFS
 */
export declare class GVWFS extends AbstractGVVector {
    /**
     * Constructs a GVWFS layer to manage an OpenLayer layer.
     * @param {VectorSource} olSource - The OpenLayer source.
     * @param {OgcWfsLayerEntryConfig} layerConfig - The layer configuration.
     */
    constructor(olSource: VectorSource, layerConfig: OgcWfsLayerEntryConfig);
    /**
     * Overrides the parent class's getter to provide a more specific return type (covariant return).
     * @returns {OgcWfsLayerEntryConfig} The strongly-typed layer configuration specific to this layer.
     * @override
     */
    getLayerConfig(): OgcWfsLayerEntryConfig;
    /**
     * Returns field type of the given field name using the povided WFS metadata.
     * @param {TypeOutfields[]} layerMetadata - The WFS metadata
     * @param {string} fieldName - The field name to get the field type information
     * @returns {TypeOutfieldsType} The field type information for the given field name
     */
    static getFieldType(layerMetadata: TypeOutfields[] | undefined, fieldName: string): TypeOutfieldsType;
}
//# sourceMappingURL=gv-wfs.d.ts.map