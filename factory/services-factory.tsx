import React from 'react';
import { ServicesSectionProps } from '../types';
import { ServicesCardsSection, ServicesListSection } from '../sections/services';

import { ServiceMenuSectionTemplate, ServicesSectionTemplate } from '@schnellsite/types';

/**
 * Factory function to create a services section based on the template ID
 */
export const createServicesSection = (
    props: ServicesSectionProps & { templateId: ServicesSectionTemplate }
): React.ReactElement | null => {
    const { templateId, ...restProps } = props;

    switch (templateId) {
        case 'services-cards':
            return <ServicesCardsSection {...restProps} />;
        case 'services-list':
            return <ServicesListSection {...restProps} />;
        default:
            console.warn(`Template not found: ${templateId}`);
            return <ServicesCardsSection {...restProps} />;
    }
};

export default createServicesSection; 