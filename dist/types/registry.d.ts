import { SectionTemplate } from "./sections";
import React from "react";
export interface TemplateMetadata {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    category: "hero" | "services" | "about" | "features" | "contact" | "testimonials" | "gallery" | "pricing" | "faq" | "cta";
    blocks: string[];
    tags?: string[];
    author?: string;
    version?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface TemplateEntry<P = any> extends TemplateMetadata {
    component: React.ComponentType<P>;
}
export interface TemplateRegistry {
    [templateId: string]: TemplateEntry;
}
export interface CategoryRegistry {
    [category: string]: {
        [templateId: string]: TemplateEntry;
    };
}
export type TemplateFactory<P> = (props: P & {
    templateId: SectionTemplate;
}) => React.ReactElement | null;
