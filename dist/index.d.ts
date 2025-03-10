export { default as createServicesSection } from "./factory/services-factory";
export { default as createTestimonialSection } from "./factory/testimonials-factory";
import type { ServicesSectionProps, TestimonialsSectionProps } from "./types";
export type { ServicesSectionProps, TestimonialsSectionProps };
import React from "react";
/**
 * Creates a section component based on the specified type and template ID
 * @param type - The type of section to create (e.g., "services", "testimonials")
 * @param templateId - The template ID for the specific section variant
 * @param props - Additional props to pass to the section
 * @returns A React component for the requested section
 */
export declare const createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
declare const _default: {
    createSection: (type: string, templateId: string, props: any) => React.ReactElement | null;
    createServicesSection: (props: ServicesSectionProps & {
        templateId: import("@schnellsite/types").ServicesSectionTemplate;
    }) => React.ReactElement | null;
    createTestimonialSection: (props: TestimonialsSectionProps & {
        templateId: import("@schnellsite/types").TestimonialsSectionTemplate;
    }) => React.ReactElement | null;
};
export default _default;
