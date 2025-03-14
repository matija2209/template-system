// Section template type definitions
import * as React from "react";
import type {
  FaqItem,
  Service,
  Testimonial,
  OpeningHours,
  SocialPlatform,
  OpeningTimesCustom,
  ContactSection,
  Form,
  ServicesSection,
  TestimonialsSection,
  FaqSection,
} from "@schnellsite/types";

// Services section props
export interface ServicesSectionProps extends ServicesSection {
  ImageComponent?: any;
}

// Testimonials section props
export interface TestimonialsSectionProps extends TestimonialsSection {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  ImageComponent?: any;
}

// FAQ section props
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
  action?: any; // React server action
  openingTimes?: OpeningHours;
  form?: Form;
  emergencyOpeningTimes?: OpeningHours;
  openingTimesCustom?: OpeningTimesCustom;
}
