import React from "react";
import type { Testimonial } from "@schnellsite/types";
export interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
    contentClasses?: string;
    ImageComponent?: React.ComponentType<any>;
}
interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    children?: React.ReactNode;
    className?: string;
    contentClasses?: string;
    ImageComponent?: React.ComponentType<any>;
}
export default function TestimonialCarousel({ testimonials, children, className, contentClasses, ImageComponent }: TestimonialCarouselProps): import("react/jsx-runtime").JSX.Element;
export {};
