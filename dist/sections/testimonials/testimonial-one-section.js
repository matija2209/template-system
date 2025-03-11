import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';
export const TestimonialOneSection = ({ testimonials, id, ImageComponent, className = '', title, subtitle, }) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }
    return (_jsx("section", { id: id, className: `py-12 px-4 ${className}`, children: _jsxs("div", { className: "container mx-auto", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-12", children: [title && _jsx("h2", { className: "text-3xl font-bold mb-4", children: title }), subtitle && _jsx("p", { className: "text-lg text-gray-600", children: subtitle })] })), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx(TestimonialCarousel, { testimonials: testimonials, ImageComponent: ImageComponent }) })] }) }));
};
