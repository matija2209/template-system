import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const SimpleListServiceCard = ({ service, className = '', onClick, ImageComponent, }) => {
    const { name, cta, image, icon, description } = service;
    // Determine which visual to display (image or icon)
    const visualElement = image || icon;
    // Render the visual (image or icon) based on whether a custom ImageComponent is provided or not
    const renderVisual = () => {
        if (!visualElement || !visualElement.url)
            return null;
        // Ensure alt and src are always strings
        const altText = visualElement.alt || '';
        const srcUrl = visualElement.url;
        if (ImageComponent) {
            // When a custom ImageComponent is provided (like Next.js Image)
            const CustomImage = ImageComponent;
            return (_jsx(CustomImage, { src: srcUrl, alt: altText, width: 40, height: 40, className: `w-10 h-10 ${icon ? '' : 'object-cover rounded'}` }));
        }
        else {
            // When using the default img tag
            return (_jsx("img", { src: srcUrl, alt: altText, className: `w-10 h-10 ${icon ? '' : 'object-cover rounded'}`, loading: "lazy" }));
        }
    };
    return (_jsx("div", { className: `p-4 border-b border-gray-100 hover:bg-gray-50 ${className}`, onClick: onClick, children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center", children: [visualElement && (_jsx("div", { className: "mr-3 flex-shrink-0", children: renderVisual() })), _jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: name }), description && _jsx("p", { className: "text-sm text-gray-600 mt-1", children: description })] })] }), cta && (_jsx("a", { href: cta.link, className: "text-sm text-primary ml-4 flex-shrink-0", children: cta.text || 'View' }))] }) }));
};
export default SimpleListServiceCard;
