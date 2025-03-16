import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { TestimonialCarouselCoordinator } from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';
export const TestimonialCarouselSection = (props) => {
    const { customStyles, testimonials, id, sectionClasses, title, subtitle, headingClasses, subtitleClasses, includeTestimonials } = props;
    return (_jsxs("section", { id: id, className: twMerge(`py-16 px-4 bg-gray-50`, sectionClasses), children: [_jsxs("div", { className: "container mx-auto", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-12", children: [title && _jsx("h2", { className: twMerge("text-3xl font-bold mb-4", headingClasses?.replaceAll(",", " ")), children: title }), subtitle && _jsx("p", { className: twMerge("text-lg text-gray-600", subtitleClasses?.replaceAll(",", " ")), children: subtitle })] })), includeTestimonials && (_jsx("div", { className: "max-w-7xl mx-auto", children: _jsx(TestimonialCarouselCoordinator, { ...props }) }))] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
