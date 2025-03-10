import createServicesSection from './services-factory.js';
import createTestimonialSection from './testimonials-factory.js';
export { createServicesSection, createTestimonialSection };
declare const _default: {
    createServicesSection: (props: import("../index.js").ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: import("../index.js").TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
};
export default _default;
