import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { twMerge } from 'tailwind-merge';
import SectionHeading from '../../blocks/common/section-heading.js';
export const ServicesDefaultSection = ({ services, cta, excludeSection, includeServices, subtitle, title, type, design, visibility, customStyles, contentClasses, extraBlocks, headingClasses, sectionClasses, sectionTemplate, subtitleClasses, ImageComponent, id, }) => {
    if (!services || services.length === 0) {
        return null;
    }
    // Define base classes
    let gridColsClass = "md:grid-cols-3";
    let gridRowsClass = "";
    // Adjust grid columns and rows based on the number of services
    const numberOfServices = services.length;
    if (numberOfServices && numberOfServices <= 4) {
        gridColsClass = `md:grid-cols-${numberOfServices}`;
        gridRowsClass = "grid-rows-1";
    }
    else if (numberOfServices === 5) {
        gridColsClass = "md:grid-cols-3";
        gridRowsClass = "grid-rows-3"; // Explicitly defining rows might not be necessary if the content defines it, but set for clarity
    }
    // Merge classes dynamically if needed
    const gridClasses = twMerge(`grid grid-cols-1 ${gridColsClass} ${gridRowsClass} gap-4 px-0 md:px-12`);
    return (_jsxs("section", { id: id, className: twMerge(`py-12 px-4`, sectionClasses), children: [_jsx(SectionHeading, { className: twMerge("max-w-7xl mx-auto", headingClasses?.replaceAll(",", " ")), children: title }), _jsx("div", { className: twMerge("max-w-7xl mx-auto", contentClasses), children: _jsx("ul", { className: twMerge(gridClasses), children: services.map((service, index) => (_jsxs("li", { className: twMerge(`flex items-center gap-6 md:gap-2 px-0 md:px-12`, numberOfServices === 5 && index === 4 ? "md:col-span-3" : ""), children: [_jsx("div", { className: "flex-none w-8", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "text-primary w-8 h-8 md:w-8 md:h-8", children: _jsx("path", { fillRule: "evenodd", d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z", clipRule: "evenodd" }) }) }), _jsx("p", { className: "flex-1 text-lg text-left", children: service.name })] }, service.id || index))) }) }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
