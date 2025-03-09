// Registry type definitions
import { SectionTemplate } from "./sections";
import React from "react";

// Template metadata
export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category:
    | "hero"
    | "services"
    | "about"
    | "features"
    | "contact"
    | "testimonials"
    | "gallery"
    | "pricing"
    | "faq"
    | "cta";
  blocks: string[];
  tags?: string[];
  author?: string;
  version?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Template entry in the registry
export interface TemplateEntry<P = any> extends TemplateMetadata {
  component: React.ComponentType<P>;
}

// Registry by template ID
export interface TemplateRegistry {
  [templateId: string]: TemplateEntry;
}

// Registry by category
export interface CategoryRegistry {
  [category: string]: {
    [templateId: string]: TemplateEntry;
  };
}

// Template factory function type
export type TemplateFactory<P> = (
  props: P & { templateId: SectionTemplate }
) => React.ReactElement | null;
