import React from 'react';
import type { TestimonialsSectionProps } from '../types';
import type { TestimonialsSectionTemplate } from '@schnellsite/types';
/**
 * Factory function to create a testimonial section based on the template ID
 */
export declare const createTestimonialSection: (props: TestimonialsSectionProps & {
    templateId: TestimonialsSectionTemplate | string;
}) => React.ReactElement | null;
export default createTestimonialSection;
