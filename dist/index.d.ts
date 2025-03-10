import { createServicesSection, createTestimonialSection } from './factory';
export { createServicesSection, createTestimonialSection };
import type { ServicesSectionProps, TestimonialsSectionProps } from "./types";
export type { ServicesSectionProps, TestimonialsSectionProps };
import React from "react";
/**
 * Creates a section component based on the specified type and template ID
 * @param type - The type of section to create (e.g., "services", "testimonials")
 * @param templateId - The template ID for the specific section variant
 * @param props - Additional props to pass to the section
 * @returns A React component for the requested section
 */
export declare const createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export declare const getAvailableTemplates: () => {
    services: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
    testimonials: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
};
declare const _default: {
    createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
    createServicesSection: (props: ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
    getAvailableTemplates: () => {
        services: {
            id: string;
            value: string;
            name: string;
            description: string;
        }[];
        testimonials: {
            id: string;
            value: string;
            name: string;
            description: string;
        }[];
    };
};
export default _default;
