import React from 'react';
import type { FaqSectionProps } from '../types/index.js';
import type { FaqSectionTemplate } from '../types/templates.js';
/**
 * Factory function to create a FAQ section based on the template ID
 */
export declare const createFaqSection: (props: FaqSectionProps & {
    templateId: FaqSectionTemplate | string;
}) => React.ReactElement | null;
export default createFaqSection;
