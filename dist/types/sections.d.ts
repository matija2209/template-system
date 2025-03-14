import type { FaqItem, Testimonial, OpeningHours, SocialPlatform, OpeningTimesCustom, ContactSection, Form, ServicesSection, TestimonialsSection, FaqSection } from "@schnellsite/types";
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
