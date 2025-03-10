import React from 'react';
import type { TestimonialsSectionProps } from '../types/index.js';
import type { TestimonialsSectionTemplate } from '@schnellsite/types';
import { TestimonialCarouselSection, TestimonialSingleSection } from '../sections/testimonials/index.js';

/**
 * Factory function to create a testimonial section based on the template ID
 */
export const createTestimonialSection = (
    props: TestimonialsSectionProps & { templateId: TestimonialsSectionTemplate | string }
): React.ReactElement | null => {
    const { templateId, ...restProps } = props;

    switch (templateId) {
        case 'default':
            return <TestimonialCarouselSection {...restProps} />;
        case 'testimonial-single':
            return <TestimonialSingleSection {...restProps} />;
        default:
            console.warn(`Template not found: ${templateId}`);
            return <TestimonialCarouselSection {...restProps} />;
    }
};

export default createTestimonialSection; 