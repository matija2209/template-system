// Export the factory functions
import createServicesSection from './services-factory.js';
import createTestimonialSection from './testimonials-factory.js';
import createFaqSection from './faq-factory.js';
// Re-export as named exports
export { createServicesSection, createTestimonialSection, createFaqSection };
// Also re-export as default exports for backward compatibility
export default {
    createServicesSection,
    createTestimonialSection,
    createFaqSection
};
