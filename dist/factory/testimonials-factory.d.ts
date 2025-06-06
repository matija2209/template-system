import React from 'react';
import type { TestimonialsSectionProps } from '../types/index.js';
import type { TestimonialsSectionTemplate } from '../types/templates.js';
/**
 * Factory function to create a testimonial section based on the template ID
 */
export declare const createTestimonialSection: (props: TestimonialsSectionProps & {
    templateId: TestimonialsSectionTemplate | string;
}) => React.ReactElement | null;
export default createTestimonialSection;
