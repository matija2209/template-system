import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { TestimonialCarouselSection, TestimonialSingleSection } from '../sections/testimonials/index.js';
/**
 * Factory function to create a testimonial section based on the template ID
 */
export const createTestimonialSection = (props) => {
    const { templateId, ...restProps } = props;
    switch (templateId) {
        case 'default':
            return _jsx(TestimonialCarouselSection, { ...restProps });
        case 'testimonial-single':
            return _jsx(TestimonialSingleSection, { ...restProps });
        default:
            console.warn(`Template not found: ${templateId}`);
            return _jsx(TestimonialCarouselSection, { ...restProps });
    }
};
export default createTestimonialSection;
