import React from 'react';
import { ServicesSectionProps } from '../types';
import { ServiceMenuSectionTemplate } from '@schnellsite/types';
/**
 * Factory function to create a services section based on the template ID
 */
export declare const createServicesSection: (props: ServicesSectionProps & {
    templateId: ServiceMenuSectionTemplate;
}) => React.ReactElement | null;
export default createServicesSection;
