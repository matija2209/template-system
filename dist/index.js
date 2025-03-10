// Only export the factory functions and createSection to the public API
// Factory exports
export { default as createServicesSection } from "./factory/services-factory";
export { default as createTestimonialSection } from "./factory/testimonials-factory";
import React from "react";
import createServicesSection from "./factory/services-factory";
import createTestimonialSection from "./factory/testimonials-factory";
/**
 * Creates a section component based on the specified type and template ID
 * @param type - The type of section to create (e.g., "services", "testimonials")
 * @param templateId - The template ID for the specific section variant
 * @param props - Additional props to pass to the section
 * @returns A React component for the requested section
 */
export const createSection = (type, templateId, props) => {
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
// Export as default to ensure it's properly recognized as a value
export default {
    createSection,
    createServicesSection,
    createTestimonialSection,
};
