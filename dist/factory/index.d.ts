import createServicesSection from './services-factory.js';
import createTestimonialSection from './testimonials-factory.js';
import createFaqSection from './faq-factory.js';
import createContactSection from './contact-factory.js';
export { createServicesSection, createTestimonialSection, createFaqSection, createContactSection };
declare const _default: {
    createServicesSection: (props: import("../index.js").ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate | string;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: import("../index.js").TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate | string;
    }) => React.ReactElement | null;
    createFaqSection: (props: import("../index.js").FaqSectionProps & {
        templateId: import("@schnellsite/types").FaqSectionTemplate | string;
    }) => React.ReactElement | null;
    createContactSection: (props: import("../index.js").ContactSectionProps & {
        templateId: import("@schnellsite/types").ContactSectionTemplate;
    }) => React.ReactElement | null;
};
export default _default;
