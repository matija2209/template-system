import { createServicesSection, createTestimonialSection, createFaqSection, createContactSection } from './factory/index.js';
export { createServicesSection, createTestimonialSection, createFaqSection, createContactSection };
import { getAvailableTemplates } from './templates-data.js';
export { getAvailableTemplates };
import type { ServicesSectionProps, TestimonialsSectionProps, FaqSectionProps, ContactSectionProps } from "./types/index.js";
export type { ServicesSectionProps, TestimonialsSectionProps, FaqSectionProps, ContactSectionProps };
import React from "react";
/**
 * Creates a section component based on the specified type and template ID
 * @param type - The type of section to create (e.g., "services", "testimonials")
 * @param templateId - The template ID for the specific section variant
 * @param props - Additional props to pass to the section
 * @returns A React component for the requested section
 */
export declare const createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
declare const _default: {
    createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
    createServicesSection: (props: ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate | string;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
    createFaqSection: (props: FaqSectionProps & {
        templateId: import("@schnellsite/types").FaqSectionTemplate | string;
    }) => React.ReactElement | null;
    createContactSection: (props: ContactSectionProps & {
        templateId: import("@schnellsite/types").ContactSectionTemplate;
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
        about: {
            id: string;
        }[];
        faq: {
            id: string;
            value: string;
            name: string;
            description: string;
        }[];
        contact: {
            id: string;
            value: string;
            name: string;
            description: string;
        }[];
    };
};
export default _default;
