import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { SimpleListServiceCard } from '../../blocks/services/index.js';
import SectionHeading from '../../blocks/common/section-heading.js';
export const ServicesListSection = ({ services, id, ImageComponent, cta, excludeSection, includeServices, customStyles, subtitle, title, type, contentClasses, extraBlocks, headingClasses, sectionClasses, sectionTemplate, subtitleClasses, }) => {
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsxs("section", { id: id, className: `py-12 px-4 ${sectionClasses}`, children: [_jsx(SectionHeading, { className: headingClasses, children: title }), _jsx("div", { className: "container mx-auto", children: _jsx("div", { className: "max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden", children: services.map((service, index) => (_jsx(SimpleListServiceCard, { service: service, className: index === services.length - 1 ? 'border-b-0' : '', ImageComponent: ImageComponent }, service.id || index))) }) }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
