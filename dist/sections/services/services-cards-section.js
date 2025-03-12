import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { BasicServiceCard } from '../../blocks/services/index.js';
export const ServicesCardsSection = ({ services, ImageComponent, id, className = '', }) => {
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsx("section", { id: id, className: `py-12 px-4 ${className}`, children: _jsx("div", { className: "container mx-auto", children: _jsx("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-4", children: services.map((service, index) => (_jsx(BasicServiceCard, { service: service, className: "h-full", ImageComponent: ImageComponent }, service.id || index))) }) }) }));
};
