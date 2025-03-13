import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BasicServiceCard } from '../../blocks/services/index.js';
import SectionHeading from '../../blocks/common/section-heading.js';
import { twMerge } from 'tailwind-merge';
export const ServicesCardsSection = ({ services, cta, excludeSection, includeServices, subtitle, title, type, visibility, customStyles, contentClasses, extraBlocks, headingClasses, sectionClasses, sectionTemplate, subtitleClasses, ImageComponent, id, }) => {
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsxs("section", { id: id, className: `py-12 px-4 ${sectionClasses}`, children: [_jsx(SectionHeading, { className: twMerge("max-w-7xl mx-auto", headingClasses), children: title }), _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-4", children: services.map((service, index) => (_jsx(BasicServiceCard, { service: service, className: "h-full", ImageComponent: ImageComponent }, service.id || index))) }) }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
