import React from 'react';
import type { TestimonialsSectionProps } from '@/types/sections.js';
import type { Testimonial } from '@schnellsite/types';
declare const TestimonialCardVariantOne: React.FC<TestimonialsSectionProps & {
    testimonial: Testimonial;
    index: number;
}>;
export default TestimonialCardVariantOne;
