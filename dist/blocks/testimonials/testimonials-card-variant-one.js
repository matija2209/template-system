"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import useIsMobile from "../../hooks/useIsMobile.js";
import { daysAgo } from '../../utils/date-utils.js';
import { Quote, Star } from 'lucide-react';
const TestimonialCardVariantOne = (props) => {
    const { testimonial, index, testimonials, id, ImageComponent, excludeSection, customStyles, sectionClasses, title, subtitle, type, sectionTemplate, design, visibility, contentClasses, extraBlocks, headingClasses, includeTestimonials, subtitleClasses } = props;
    const isMobile = useIsMobile();
    const [isExpanded, setIsExpanded] = useState(false);
    return (_jsxs("article", { className: twMerge("bg-white flex flex-col p-6 rounded-sm shadow-md space-y-4 w-full justify-between", "h-full", // Ensure consistent height
        "min-h-[380px] md:min-h-[480px]", isExpanded && "h-auto", // Allow expansion when needed
        contentClasses?.replaceAll(",", " ")), style: {
            width: '100%', // Force full width inside its container
            boxSizing: 'border-box' // Include padding in width calculation
        }, children: [_jsxs("div", { className: "space-y-4 flex-grow", children: [_jsxs("div", { className: twMerge("flex self-start", "text-orange-400"), children: [_jsx(Star, { className: "text-orange-400" }), _jsx(Star, { className: "text-orange-400" }), _jsx(Star, { className: "text-orange-400" }), _jsx(Star, { className: "text-orange-400" }), _jsx(Star, { className: "text-orange-400" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Quote, { className: "text-3xl text-primary" }), _jsxs("p", { className: twMerge("self-start text-left text-lg"), children: [isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
                                        ? testimonial.text
                                        : testimonial.text.substring(0, isMobile ? 150 : 300) + "...", testimonial.text.length > (isMobile ? 150 : 300) && (_jsx("span", { className: "pl-2 text-primary font-bold text-sm hover:underline text-left cursor-pointer", onClick: (e) => {
                                            e.stopPropagation();
                                            setIsExpanded(!isExpanded);
                                        }, children: isExpanded ? "Weniger anzeigen" : "Mehr anzeigen" }))] })] })] }), _jsxs("div", { className: "self-start text-left mt-auto", children: [_jsx("p", { className: "text-primary font-bold", children: testimonial.name }), _jsx("p", { className: "text-sm", children: daysAgo(testimonial.date) })] })] }));
};
export default TestimonialCardVariantOne;
