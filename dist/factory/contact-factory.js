import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ContactDefaultSection, ContactModernSection, ContactSplitSection, ContactCardSection } from '../sections/contact/index.js';
import ContactWellnessSection from '../sections/contact/contact-wellness-section.js';
/**
 * Factory function to create a contact section based on the template ID
 */
export const createContactSection = (props) => {
    const { templateId, ...restProps } = props;
    switch (templateId) {
        case 'default':
            return _jsx(ContactDefaultSection, { ...restProps });
        case 'modern':
            return _jsx(ContactModernSection, { ...restProps });
        case 'split':
            return _jsx(ContactSplitSection, { ...restProps });
        case 'card':
            return _jsx(ContactCardSection, { ...restProps });
        case 'wellness':
            return _jsx(ContactWellnessSection, { ...restProps });
        default:
            console.warn(`Template not found: ${templateId}`);
            return _jsx(ContactDefaultSection, { ...restProps });
    }
};
export default createContactSection;
