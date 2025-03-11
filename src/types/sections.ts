// Section template type definitions
import * as React from 'react';
import type { FaqItem, FAQRepository, Service, Testimonial } from "@schnellsite/types";

// Generic image props that align with Next.js Image component
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
  [key: string]: any; // Allow any additional props from Next.js Image
}

// Base section props that all sections share
export interface SectionBaseProps {
  id?: string;
  className?: string;
  ImageComponent?: any;
}

  // Services section props
  export interface ServicesSectionProps extends SectionBaseProps {
    services: Service[];
    title?:string,
    subtitle?:string
  }

  // Testimonials section props
  export interface TestimonialsSectionProps extends SectionBaseProps {
    testimonials: Testimonial[];
    title?: string;
    subtitle?: string;
  }

    // FAQ section props
    export interface FaqSectionProps extends SectionBaseProps {
      faqs: FaqItem[];
      title?: string;
      subtitle?: string;
    }