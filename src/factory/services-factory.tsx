import React from 'react';
import type { ServicesSectionProps } from '../types/index.js';
import type { ServicesSectionTemplate } from '@schnellsite/types';
import { ServicesCardsSection, ServicesListSection, ServicesDefaultSection, ServicesBasicOneSection } from '../sections/services/index.js';

/**
 * Factory function to create a services section based on the template ID
 */
export const createServicesSection = (
    props: ServicesSectionProps & { templateId: ServicesSectionTemplate | string }
): React.ReactElement | null => {
    const { templateId, ...restProps } = props;

    switch (templateId) {
        case 'services-cards':
            return <ServicesCardsSection {...restProps} />;
        case 'services-list':
            return <ServicesListSection {...restProps} />;
        case 'default':
            return <ServicesDefaultSection {...restProps} />;
        case 'basic-one':
            return <ServicesBasicOneSection {...restProps} />;
        default:
            console.warn(`Template not found: ${templateId}`);
            return <ServicesCardsSection {...restProps} />;
    }
};

export default createServicesSection; 