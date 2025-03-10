// Only export the factory functions and createSection to the public API

// Import and re-export from factory/index.ts
import { createServicesSection, createTestimonialSection } from './factory';
export { createServicesSection, createTestimonialSection };

// Types needed for public API
import type {
  ServicesSectionProps,
  TestimonialsSectionProps,
} from "./types";

// Re-export only the types needed for the public API
export type { ServicesSectionProps, TestimonialsSectionProps };

import React from "react";

/**
 * Creates a section component based on the specified type and template ID
 * @param type - The type of section to create (e.g., "services", "testimonials")
 * @param templateId - The template ID for the specific section variant
 * @param props - Additional props to pass to the section
 * @returns A React component for the requested section
 */
export const createSection = (
  type: string,
  templateId: string,
  props: any
): React.ReactElement | null => {
  switch (type) {
    case "services":
      return createServicesSection({ ...props, templateId });
    case "testimonials":
      return createTestimonialSection({ ...props, templateId });
    // Add other section types as they are implemented
    // case 'hero':
    //   return createHeroSection({ ...props, templateId });
    // case 'about':
    //   return createAboutSection({ ...props, templateId });
    default:
      console.warn(`Section type not supported: ${type}`);
      return null;
  }
};

/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export const getAvailableTemplates = () => {
  return {
    services: [
      {
        id: "services-cards",
        value: "services-cards",
        name: "Services Cards",
        description: "Displays services in a grid of cards"
      },
      {
        id: "services-list",
        value: "services-list",
        name: "Services List",
        description: "Displays services in a vertical list"
      }
    ],
    testimonials: [
      {
        id: "default",
        value: "default",
        name: "Testimonial Carousel",
        description: "Displays testimonials in a carousel format"
      },
      {
        id: "testimonial-single",
        value: "testimonial-single",
        name: "Single Testimonial",
        description: "Displays one testimonial at a time with navigation controls"
      }
    ]
  };
};

// Export as default to ensure it's properly recognized as a value
export default {
  createSection,
  createServicesSection,
  createTestimonialSection,
  getAvailableTemplates,
};
