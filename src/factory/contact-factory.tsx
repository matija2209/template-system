import React from 'react';
import type { ContactSectionProps } from '../types/index.js';
import { 
  ContactDefaultSection,
  ContactModernSection,
  ContactSplitSection,
  ContactCardSection
} from '../sections/contact/index.js';
import type { ContactSectionTemplate } from '@schnellsite/types';
import ContactWellnessSection from '../sections/contact/contact-wellness-section.js';

/**
 * Factory function to create a contact section based on the template ID
 */
export const createContactSection = (
  props: ContactSectionProps & { templateId: ContactSectionTemplate }
): React.ReactElement | null => {
  const { templateId, ...restProps } = props;

  switch (templateId) {
    case 'default':
      return <ContactDefaultSection {...restProps} />;
    case 'modern':
      return <ContactModernSection {...restProps} />;
    case 'split':
      return <ContactSplitSection {...restProps} />;
    case 'card':
      return <ContactCardSection {...restProps} />;
    case 'wellness':
      return <ContactWellnessSection
       {...restProps} />;
    default:
      console.warn(`Template not found: ${templateId}`);
      return <ContactDefaultSection {...restProps} />;
  }
};

export default createContactSection; 