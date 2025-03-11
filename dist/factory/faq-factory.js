import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { FaqAccordionSection } from '../sections/faq/index.js';
/**
 * Factory function to create a FAQ section based on the template ID
 */
export const createFaqSection = (props) => {
    const { templateId, ...restProps } = props;
    switch (templateId) {
        case 'faq-accordion':
            return _jsx(FaqAccordionSection, { ...restProps });
        default:
            console.warn(`Template not found: ${templateId}`);
            return _jsx(FaqAccordionSection, { ...restProps });
    }
};
export default createFaqSection;
