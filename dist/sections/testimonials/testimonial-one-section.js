import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
export const TestimonialOneSection = (props) => {
    const { customStyles, googleReviewCta, testimonials, id, sectionClasses, title, subtitle, headingClasses, subtitleClasses, includeTestimonials } = props;
    if (!testimonials || testimonials.length === 0) {
        return null;
    }
    return (_jsxs("section", { id: id, className: twMerge(`py-12 px-4`, sectionClasses?.replaceAll(",", " ")), children: [_jsxs("div", { className: "container mx-auto", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-12", children: [title && _jsx("h2", { className: twMerge("text-3xl font-bold mb-4", headingClasses?.replaceAll(",", " ")), children: title }), subtitle && _jsx("p", { className: twMerge("text-lg text-gray-600", subtitleClasses?.replaceAll(",", " ")), children: subtitle })] })), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx(TestimonialCarousel, { ...props }) }), googleReviewCta && (_jsx("div", { children: _jsx(Button, { asChild: true, children: _jsx("a", { href: googleReviewCta.link, target: googleReviewCta?.target ?? "_blank", children: googleReviewCta.text }) }) })), _jsx("div", {})] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
