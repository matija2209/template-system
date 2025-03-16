import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ServicesCardsSection, ServicesListSection, ServicesDefaultSection, ServicesBasicOneSection } from '../sections/services/index.js';
/**
 * Factory function to create a services section based on the template ID
 */
export const createServicesSection = (props) => {
    const { templateId, ...restProps } = props;
    switch (templateId) {
        case 'services-cards':
            return _jsx(ServicesCardsSection, { ...restProps });
        case 'services-list':
            return _jsx(ServicesListSection, { ...restProps });
        case 'default':
            return _jsx(ServicesDefaultSection, { ...restProps });
        case 'basic-one':
            return _jsx(ServicesBasicOneSection, { ...restProps });
        default:
            console.warn(`Template not found: ${templateId}`);
            return _jsx(ServicesCardsSection, { ...restProps });
    }
};
export default createServicesSection;
