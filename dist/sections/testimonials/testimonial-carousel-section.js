import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { TestimonialCarouselCoordinator } from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';
import SectionHeading from '../../blocks/common/section-heading.js';
export const TestimonialCarouselSection = (props) => {
    const { customStyles, testimonials, id, sectionClasses, title, subtitle, headingClasses, contentClasses, visibility, subtitleClasses, includeTestimonials } = props;
    // Use optional chaining with templateName as it might not be in the type
    const templateName = props.templateName;
    // Helper function for combining classes
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };
    return (_jsxs("section", { id: id, className: twMerge(`py-16 px-4 bg-gray-50`, sectionClasses), children: [_jsxs("div", { className: twMerge("max-w-7xl mx-auto", contentClasses?.replaceAll(",", " ")), children: [(title || subtitle) && (_jsxs("header", { className: classNames("text-left", templateName === "wellness" && "text-center"), children: [subtitle && (_jsx("h4", { className: classNames("text-md uppercase font-semibold text-primary", templateName === "wellness" ? "font-marope" : ""), children: subtitle })), title && (_jsx(SectionHeading, { className: headingClasses?.replaceAll(",", " "), children: title }))] })), includeTestimonials && (_jsx("div", { className: "", children: _jsx(TestimonialCarouselCoordinator, { ...props }) }))] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
