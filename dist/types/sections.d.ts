import * as React from 'react';
import type { FaqItem, Testimonial, OpeningHours, SocialPlatform, OpeningTimesCustom, ContactSection, Form, ServicesSection, TestimonialsSection, FaqSection } from "@schnellsite/types";
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
export interface ServicesSectionProps extends ServicesSection {
    ImageComponent?: any;
}
export interface TestimonialsSectionProps extends TestimonialsSection {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
    ImageComponent?: any;
}
export interface FaqSectionProps extends FaqSection {
    faqs: FaqItem[];
    title?: string;
    subtitle?: string;
    ImageComponent?: any;
}
export interface ContactSectionProps extends ContactSection {
    email?: string;
    phone?: string;
    googlePlaceId?: string;
    address?: string;
    socialLinks?: {
        platform: SocialPlatform;
        url: string;
        icon?: string;
    }[];
    action?: any;
    openingTimes?: OpeningHours;
    form?: Form;
    emergencyOpeningTimes?: OpeningHours;
    openingTimesCustom?: OpeningTimesCustom;
}
