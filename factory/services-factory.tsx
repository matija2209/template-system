import React from 'react';
import { ServicesSectionProps, ServicesSectionTemplate } from '../types';
import { ServicesGrid, ServicesList } from '../sections/services';

/**
 * Factory function to create a services section based on the template ID
 */
export const createServicesSection = (
    props: ServicesSectionProps & { templateId: ServicesSectionTemplate }
): React.ReactElement | null => {
    const { templateId, ...restProps } = props;

    switch (templateId) {
        case 'services-grid':
            return <ServicesGrid {...restProps} />;
        case 'services-list':
            return <ServicesList {...restProps} />;
        case 'services-cards':
            // Fallback to grid with different settings
            return <ServicesGrid {...restProps} showImages={true} />;
        case 'services-icons':
            // Fallback to grid with icon settings
            return <ServicesGrid {...restProps} showIcons={true} showImages={false} />;
        case 'services-tabs':
            // Not implemented yet, fallback to list
            return <ServicesList {...restProps} />;
        default:
            console.warn(`Template not found: ${templateId}`);
            return <ServicesGrid {...restProps} />;
    }
};

export default createServicesSection; 