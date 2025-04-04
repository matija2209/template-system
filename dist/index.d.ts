import { createServicesSection, createTestimonialSection, createFaqSection, createContactSection } from "./factory/index.js";
export { createServicesSection, createTestimonialSection, createFaqSection, createContactSection, };
import { getAvailableTemplates } from "./templates-data.js";
export { getAvailableTemplates };
import type { ServicesSectionProps, TestimonialsSectionProps, FaqSectionProps, ContactSectionProps } from "./types/index.js";
import type { TSection, HeroSectionTemplate, ServicesSectionTemplate, GallerySectionTemplate, AboutSectionTemplate, TestimonialsSectionTemplate, ContactSectionTemplate, GastroMenuSectionTemplate, ServiceMenuSectionTemplate, FreestyleSectionTemplate, FaqSectionTemplate } from "./types/templates.js";
export type { ServicesSectionProps, TestimonialsSectionProps, FaqSectionProps, ContactSectionProps, TSection, HeroSectionTemplate, ServicesSectionTemplate, GallerySectionTemplate, AboutSectionTemplate, TestimonialsSectionTemplate, ContactSectionTemplate, GastroMenuSectionTemplate, ServiceMenuSectionTemplate, FreestyleSectionTemplate, FaqSectionTemplate, };
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
        templateId: ServicesSectionTemplate | string;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: TestimonialsSectionProps & {
        templateId: TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
    createFaqSection: (props: FaqSectionProps & {
        templateId: FaqSectionTemplate | string;
    }) => React.ReactElement | null;
    createContactSection: (props: ContactSectionProps & {
        templateId: ContactSectionTemplate;
    }) => React.ReactElement | null;
    getAvailableTemplates: () => {
        hero: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: HeroSectionTemplate;
        }>;
        services: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: ServicesSectionTemplate;
        }>;
        gallery: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: GallerySectionTemplate;
        }>;
        about: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: AboutSectionTemplate;
        }>;
        testimonials: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: TestimonialsSectionTemplate;
        }>;
        contact: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: ContactSectionTemplate;
        }>;
        menu: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: GastroMenuSectionTemplate;
        }>;
        "menu-service": Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: ServiceMenuSectionTemplate;
        }>;
        freestyle: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: FreestyleSectionTemplate;
        }>;
        faq: Array<{
            id: string;
            value: string;
            name: string;
            description: string;
        } & {
            value: FaqSectionTemplate;
        }>;
    };
};
export default _default;
