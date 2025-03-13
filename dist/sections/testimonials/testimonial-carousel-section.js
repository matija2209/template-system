import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { TestimonialCarouselCoordinator } from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';
export const TestimonialCarouselSection = ({ testimonials, id, ImageComponent, excludeSection, customStyles, sectionClasses, title, subtitle, }) => {
    if (!testimonials || testimonials.length === 0) {
        return null;
    }
    return (_jsxs("section", { id: id, className: twMerge(`py-16 px-4 bg-gray-50`, sectionClasses), children: [_jsxs("div", { className: "container mx-auto", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-12", children: [title && _jsxs("h2", { className: "text-3xl font-bold mb-4", children: ["x ", title, " sss"] }), subtitle && _jsx("p", { className: "text-lg text-gray-600", children: subtitle })] })), _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx(TestimonialCarouselCoordinator, { testimonials: testimonials, ImageComponent: ImageComponent, contentClasses: "bg-white" }) })] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
