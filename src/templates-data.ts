import type {
  TSection,
  HeroSectionTemplate,
  ServicesSectionTemplate,
  GallerySectionTemplate,
  AboutSectionTemplate,
  TestimonialsSectionTemplate,
  ContactSectionTemplate,
  GastroMenuSectionTemplate,
  ServiceMenuSectionTemplate,
  FreestyleSectionTemplate,
  FaqSectionTemplate,
} from "./types/templates";

type TemplateItem = {
  id: string;
  value: string;
  name: string;
  description: string;
};

type TemplatesMap = {
  hero: Array<TemplateItem & { value: HeroSectionTemplate }>;
  services: Array<TemplateItem & { value: ServicesSectionTemplate }>;
  gallery: Array<TemplateItem & { value: GallerySectionTemplate }>;
  about: Array<TemplateItem & { value: AboutSectionTemplate }>;
  testimonials: Array<TemplateItem & { value: TestimonialsSectionTemplate }>;
  contact: Array<TemplateItem & { value: ContactSectionTemplate }>;
  menu: Array<TemplateItem & { value: GastroMenuSectionTemplate }>;
  "menu-service": Array<TemplateItem & { value: ServiceMenuSectionTemplate }>;
  freestyle: Array<TemplateItem & { value: FreestyleSectionTemplate }>;
  faq: Array<TemplateItem & { value: FaqSectionTemplate }>;
};

/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export const getAvailableTemplates = (): TemplatesMap => {
  return {
    hero: [
      {
        id: "default",
        value: "default",
        name: "Default Hero",
        description: "Default hero section layout",
      },
    ],
    services: [
      {
        id: "services-cards",
        value: "services-cards",
        name: "Services Cards",
        description: "Displays services in a grid of cards",
      },
      {
        id: "services-list",
        value: "services-list",
        name: "Services List",
        description: "Displays services in a vertical list",
      },
      {
        id: "default",
        value: "default",
        name: "Services Checklist",
        description: "Displays services as a checklist with checkmarks",
      },
    ],
    gallery: [
      {
        id: "default",
        value: "default",
        name: "Default Gallery",
        description: "Default gallery layout",
      },
    ],
    testimonials: [
      {
        id: "default",
        value: "default",
        name: "Testimonial Carousel",
        description: "Displays testimonials in a carousel format",
      },
      {
        id: "carousel-one",
        value: "carousel-one",
        name: "Carousel Style One",
        description: "Alternative carousel design for testimonials",
      },
      {
        id: "testimonial-single",
        value: "testimonial-single",
        name: "Single Testimonial",
        description:
          "Displays one testimonial at a time with navigation controls",
      },
    ],
    about: [
      {
        id: "default",
        value: "default",
        name: "Default About",
        description: "Default about section layout",
      },
    ],
    faq: [
      {
        id: "faq-accordion",
        value: "faq-accordion",
        name: "FAQ Accordion",
        description: "Displays FAQs in an accordion format using Shadcn UI",
      },
    ],
    contact: [
      {
        id: "wellness",
        value: "wellness",
        name: "Opening Times and Contact Form With Map",
        description: "Opening times and contact form. With a map underneath",
      },
      {
        id: "basic-with-form",
        value: "basic-with-form",
        name: "Opening Times and Contact Form",
        description: "Opening times and contact form. Without a map",
      },
      {
        id: "default",
        value: "default",
        name: "Contact Form with Info",
        description: "Displays a contact form alongside contact information",
      },
      {
        id: "modern",
        value: "modern",
        name: "Modern Contact Form",
        description: "A modern, sleek contact form design",
      },
      {
        id: "split",
        value: "split",
        name: "Split Contact Layout",
        description: "Contact form with a split layout design",
      },
      {
        id: "card",
        value: "card",
        name: "Card Contact Form",
        description: "Contact form presented in a card format",
      },
    ],
    menu: [
      {
        id: "default",
        value: "default",
        name: "Default Menu",
        description: "Default gastro menu layout",
      },
    ],
    "menu-service": [
      {
        id: "default",
        value: "default",
        name: "Default Service Menu",
        description: "Default service menu layout",
      },
    ],
    freestyle: [
      {
        id: "default",
        value: "default",
        name: "Default Freestyle",
        description: "Default freestyle section",
      },
    ],
  } as const;
};
