import * as React from 'react';
import type { FaqItem, Service, Testimonial, OpeningHours, SocialPlatform, OpeningTimesCustom } from "@schnellsite/types";
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
export interface ContactSectionProps extends SectionBaseProps {
    email?: string;
    phone?: string;
    address?: string;
    socialLinks?: {
        platform: SocialPlatform;
        url: string;
        icon?: string;
    }[];
    mapUrl?: string;
    title?: string;
    subtitle?: string;
    formEndpoint?: string;
    action?: (formData: FormData) => Promise<any>;
    openingTimes?: OpeningHours;
    emergencyOpeningTimes?: OpeningHours;
    openingTimesCustom?: OpeningTimesCustom;
}
