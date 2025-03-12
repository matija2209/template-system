import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ContactDefaultSection, ContactModernSection, ContactSplitSection, ContactCardSection, ContactBasicForm, ContactSectionWellness } from '../sections/contact/index.js';
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
            return _jsx(ContactSectionWellness, { ...restProps });
        case "basic-with-form":
            return _jsx(ContactBasicForm, { ...restProps });
        default:
            console.warn(`Template not found: ${templateId}`);
            return _jsx(ContactDefaultSection, { ...restProps });
    }
};
export default createContactSection;
