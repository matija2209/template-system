import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { SimpleListServiceCard } from '../../blocks/services/SimpleListServiceCard';
export const ServicesListSection = ({ services, id, ImageComponent, className = '', }) => {
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsx("section", { id: id, className: `py-12 px-4 ${className}`, children: _jsx("div", { className: "container mx-auto", children: _jsx("div", { className: "max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden", children: services.map((service, index) => (_jsx(SimpleListServiceCard, { service: service, className: index === services.length - 1 ? 'border-b-0' : '', ImageComponent: ImageComponent }, service.id || index))) }) }) }));
};
