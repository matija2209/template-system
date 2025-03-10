import createServicesSection from './services-factory';
import createTestimonialSection from './testimonials-factory';
export { createServicesSection, createTestimonialSection };
declare const _default: {
    createServicesSection: (props: import("..").ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: import("..").TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
};
export default _default;
