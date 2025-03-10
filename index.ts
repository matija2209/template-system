// Export types
export * from "./types";

// Export section templates
export * from "./sections/services";


// Export factories
export { default as createServicesSection } from "./factory/services-factory";
export { default as createTestimonialSection } from "./factory/testimonials-factory";

import React from "react";

import createServicesSection from "./factory/services-factory";
import type { ServiceMenuSectionTemplate, TestimonialsSectionTemplate } from "@schnellsite/types";
import createTestimonialSection from "./factory/testimonials-factory";


// Export the createSection function as a named export
export const createSection = (
  type: string,
  templateId: ServiceMenuSectionTemplate | TestimonialsSectionTemplate,
  props: any
): React.ReactElement | null => {
  switch (type) {
    case "services":
      return createServicesSection({ ...props, templateId });
    // Add other section types as they are implemented
    // case 'hero':
    //   return createHeroSection({ ...props, templateId });
    // case 'about':
    //   return createAboutSection({ ...props, templateId });
    case 'testimonials':
      return createTestimonialSection({ ...props, templateId });
    default:
      console.warn(`Section type not supported: ${type}`);
      return null;
  }
};

// Also export as default to ensure it's properly recognized as a value
export default { createSection, createServicesSection, createTestimonialSection };
