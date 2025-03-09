// Section template type definitions
import { CTA, Image, Service, Feature } from "./blocks";

// Base section props that all sections share
export interface SectionBaseProps {
  id?: string;
  className?: string;
  backgroundColor?: string;
  paddingTop?: "none" | "sm" | "md" | "lg" | "xl";
  paddingBottom?: "none" | "sm" | "md" | "lg" | "xl";
}

// Hero section props
export interface HeroSectionProps extends SectionBaseProps {
  title: string;
  subtitle?: string;
  cta?: CTA;
  secondaryCta?: CTA;
  backgroundImage?: Image;
  image?: Image;
  overlay?: boolean;
  overlayOpacity?: number;
  textColor?: string;
  alignment?: "left" | "center" | "right";
  height?: "small" | "medium" | "large" | "full";
}

// Services section props
export interface ServicesSectionProps extends SectionBaseProps {
  title: string;
  subtitle?: string;
  services: Service[];
  cta?: CTA;
  layout?: "grid" | "list" | "carousel";
  columns?: 2 | 3 | 4;
  showImages?: boolean;
  showIcons?: boolean;
  showPrices?: boolean;
  headerClassName?: string;
  contentClassName?: string;
}

// About section props
export interface AboutSectionProps extends SectionBaseProps {
  title: string;
  subtitle?: string;
  content: string;
  image?: Image;
  imagePosition?: "left" | "right";
  cta?: CTA;
  features?: Feature[];
  headerClassName?: string;
  contentClassName?: string;
}

// Features section props
export interface FeaturesSectionProps extends SectionBaseProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  layout?: "grid" | "list" | "alternating";
  columns?: 2 | 3 | 4;
  showIcons?: boolean;
  showImages?: boolean;
  headerClassName?: string;
  contentClassName?: string;
}

// Contact section props
export interface ContactSectionProps extends SectionBaseProps {
  title: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  mapUrl?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  formFields?: Array<{
    id: string;
    name: string;
    type: "text" | "email" | "textarea" | "checkbox";
    label: string;
    placeholder?: string;
    required?: boolean;
  }>;
  submitLabel?: string;
  headerClassName?: string;
  contentClassName?: string;
}

// Template types for each section
export type HeroSectionTemplate =
  | "hero-centered"
  | "hero-split"
  | "hero-video"
  | "hero-minimal"
  | "hero-animated";

export type ServicesSectionTemplate =
  | "services-grid"
  | "services-list"
  | "services-cards"
  | "services-icons"
  | "services-tabs";

export type AboutSectionTemplate =
  | "about-standard"
  | "about-split"
  | "about-timeline"
  | "about-team"
  | "about-story";

export type FeaturesSectionTemplate =
  | "features-grid"
  | "features-list"
  | "features-icons"
  | "features-alternating"
  | "features-tabs";

export type ContactSectionTemplate =
  | "contact-standard"
  | "contact-split"
  | "contact-minimal"
  | "contact-map"
  | "contact-full";

// Union type of all section templates
export type SectionTemplate =
  | HeroSectionTemplate
  | ServicesSectionTemplate
  | AboutSectionTemplate
  | FeaturesSectionTemplate
  | ContactSectionTemplate;
