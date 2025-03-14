// Block component type definitions
import * as React from "react";
import type { Service } from "@schnellsite/types";

// Service block types
export interface ServiceCardProps {
  service: Service;
  ImageComponent?: React.ComponentType<ImageComponentProps>;
  onClick?: () => void;
  transparentCards?: boolean;
}

export interface SiteFooterProps {
  LinkComponent?: React.ComponentType<LinkComponentProps>;
  ImageComponent?: React.ComponentType<ImageComponentProps>;
}

// Generic image props that align with Next.js Image component
export interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  style?: React.CSSProperties;
  sizes?: string;
  loading?: "lazy" | "eager";
  blurDataURL?: string;
  fill?: boolean;
  [key: string]: any; // Allow any additional props from Next.js Image
}

export interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow any additional props
}
