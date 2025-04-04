import React from 'react';
import type { FaqSectionProps } from '../types/index.js';
import { FaqAccordionSection } from '../sections/faq/index.js';
import type { FaqSectionTemplate } from '../types/templates.js';

/**
 * Factory function to create a FAQ section based on the template ID
 */
export const createFaqSection = (
  props: FaqSectionProps & { templateId: FaqSectionTemplate | string }
): React.ReactElement | null => {
  const { templateId, ...restProps } = props;

  switch (templateId) {
    case 'faq-accordion':
      return <FaqAccordionSection {...restProps} />;
    default:
      console.warn(`Template not found: ${templateId}`);
      return <FaqAccordionSection {...restProps} />;
  }
};

export default createFaqSection; 