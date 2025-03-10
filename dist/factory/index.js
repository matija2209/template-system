// Export the factory functions
import createServicesSection from './services-factory.js';
import createTestimonialSection from './testimonials-factory.js';
// Re-export as named exports
export { createServicesSection, createTestimonialSection };
// Also re-export as default exports for backward compatibility
export default {
    createServicesSection,
    createTestimonialSection
};
