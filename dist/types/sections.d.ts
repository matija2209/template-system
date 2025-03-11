import * as React from 'react';
import type { FaqItem, Service, Testimonial } from "@schnellsite/types";
export interface ImageComponentProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    style?: React.CSSProperties;
    sizes?: string;
    loading?: 'lazy' | 'eager';
    blurDataURL?: string;
    fill?: boolean;
    [key: string]: any;
}
export interface SectionBaseProps {
    id?: string;
    className?: string;
    ImageComponent?: any;
}
export interface ServicesSectionProps extends SectionBaseProps {
    services: Service[];
    title?: string;
    subtitle?: string;
}
export interface TestimonialsSectionProps extends SectionBaseProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
}
export interface FaqSectionProps extends SectionBaseProps {
    faqs: FaqItem[];
    title?: string;
    subtitle?: string;
}
