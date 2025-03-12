import React from 'react';
import type { ContactSectionProps } from '../types/index.js';
import type { ContactSectionTemplate } from '@schnellsite/types';
/**
 * Factory function to create a contact section based on the template ID
 */
export declare const createContactSection: (props: ContactSectionProps & {
    templateId: ContactSectionTemplate;
}) => React.ReactElement | null;
export default createContactSection;
