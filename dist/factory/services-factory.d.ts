import React from 'react';
import type { ServicesSectionProps, ServicesSectionTemplate } from '../types/index.js';
/**
 * Factory function to create a services section based on the template ID
 */
export declare const createServicesSection: (props: ServicesSectionProps & {
    templateId: ServicesSectionTemplate | string;
}) => React.ReactElement | null;
export default createServicesSection;
