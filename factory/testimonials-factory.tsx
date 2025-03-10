import React from 'react';
import type { TestimonialsSectionProps } from '../types';
import type { TestimonialsSectionTemplate } from '@schnellsite/types';
import { TestimonialCarouselSection } from '../sections/testimonials/testimonial-carousel-section';

/**
 * Factory function to create a testimonial section based on the template ID
 */
export const createTestimonialSection = (
    props: TestimonialsSectionProps & { templateId: TestimonialsSectionTemplate }
): React.ReactElement | null => {
    const { templateId, ...restProps } = props;

    switch (templateId) {
        case 'default':
            return <TestimonialCarouselSection {...restProps} />;
        default:
            console.warn(`Template not found: ${templateId}`);
            return <TestimonialCarouselSection {...restProps} />;
    }
};

export default createTestimonialSection; 