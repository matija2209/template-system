// Block component type definitions
import { Image, CTA as ExternalCTA, Service } from "@schnellsite/types";

// Extend the external CTA interface with our additional properties
export interface CTA extends Omit<ExternalCTA, 'blockType'> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

// Header block types
export interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// Container block types
export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

// Button block types
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
}

// Service block types
export interface ServiceCardProps {
  service: Service;
  variant?: "basic" | "detailed" | "pricing";
  className?: string;
  ImageComponent?: React.ElementType;
}

export interface ServiceCardGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  variant?: "basic" | "detailed" | "pricing";
  className?: string;
}

export interface ServiceCardListProps {
  services: Service[];
  variant?: "basic" | "detailed" | "pricing" | "horizontal";
  gap?: "sm" | "md" | "lg";
  className?: string;
}

// Feature block types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: Image;
}

export interface FeatureListProps {
  features: Feature[];
  layout?: "vertical" | "horizontal";
  className?: string;
}

// About block types
export interface TextBlockProps {
  content: string;
  className?: string;
}

export interface ImageBlockProps {
  image: Image;
  className?: string;
  rounded?: boolean;
  shadow?: boolean;
}

// Hero block types
export interface HeroContentProps {
  title: string;
  subtitle?: string;
  cta?: CTA;
  secondaryCta?: CTA;
  className?: string;
}

// Contact block types
export interface ContactInfoProps {
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  className?: string;
}

export interface ContactFormProps {
  fields: Array<{
    id: string;
    name: string;
    type: "text" | "email" | "textarea" | "checkbox";
    label: string;
    placeholder?: string;
    required?: boolean;
  }>;
  submitLabel?: string;
  className?: string;
}
