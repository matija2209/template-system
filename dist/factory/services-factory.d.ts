import React from 'react';
import type { ServicesSectionProps } from '../types';
import type { ServicesSectionTemplate } from '@schnellsite/types';
/**
 * Factory function to create a services section based on the template ID
 */
export declare const createServicesSection: (props: ServicesSectionProps & {
    templateId: ServicesSectionTemplate;
}) => React.ReactElement | null;
export default createServicesSection;
