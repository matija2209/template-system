import type { HeroSectionTemplate, ServicesSectionTemplate, GallerySectionTemplate, AboutSectionTemplate, TestimonialsSectionTemplate, ContactSectionTemplate, GastroMenuSectionTemplate, ServiceMenuSectionTemplate, FreestyleSectionTemplate, FaqSectionTemplate } from "./types/templates";
type TemplateItem = {
    id: string;
    value: string;
    name: string;
    description: string;
};
type TemplatesMap = {
    hero: Array<TemplateItem & {
        value: HeroSectionTemplate;
    }>;
    services: Array<TemplateItem & {
        value: ServicesSectionTemplate;
    }>;
    gallery: Array<TemplateItem & {
        value: GallerySectionTemplate;
    }>;
    about: Array<TemplateItem & {
        value: AboutSectionTemplate;
    }>;
    testimonials: Array<TemplateItem & {
        value: TestimonialsSectionTemplate;
    }>;
    contact: Array<TemplateItem & {
        value: ContactSectionTemplate;
    }>;
    menu: Array<TemplateItem & {
        value: GastroMenuSectionTemplate;
    }>;
    "menu-service": Array<TemplateItem & {
        value: ServiceMenuSectionTemplate;
    }>;
    freestyle: Array<TemplateItem & {
        value: FreestyleSectionTemplate;
    }>;
    faq: Array<TemplateItem & {
        value: FaqSectionTemplate;
    }>;
};
/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export declare const getAvailableTemplates: () => TemplatesMap;
export {};
