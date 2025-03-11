import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export const BasicServiceCard = ({ service, className = '', ImageComponent, onClick, }) => {
    const { name, description, image, cta } = service;
    // Render the image based on whether a custom ImageComponent is provided or not
    const renderImage = () => {
        if (!image || !image.url)
            return null;
        // Ensure alt and src are always strings
        const altText = image.alt || '';
        const srcUrl = image.url;
        // NOTE: For best results, standardize your images before uploading:
        // - Use consistent dimensions (e.g., 400x400px for icons)
        // - Use consistent file formats (e.g., WebP or PNG with transparency)
        // - Optimize images for web to reduce file size
        if (ImageComponent) {
            // When a custom ImageComponent is provided (like Next.js Image)
            // Pass all thsse props that Next.js Image component expects
            const CustomImage = ImageComponent;
            return (_jsx(CustomImage, { src: srcUrl, alt: altText, className: "object-cover", fill: true, priority: false }));
        }
        else {
            // When using the default img tag, only pass props that the HTML img tag supports
            return (_jsx("img", { src: srcUrl, alt: altText, style: { width: '100%', height: '100%', objectFit: 'fill' }, loading: "lazy" }));
        }
    };
    return (_jsxs("div", { className: `bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full ${className}`, onClick: onClick, children: [image && (_jsx("div", { className: "relative w-full h-64 mb-4 overflow-hidden", children: renderImage() })), _jsx("h3", { className: "text-xl font-semibold mb-2", children: name }), description && _jsx("p", { className: "text-gray-600 mb-4", children: description }), _jsx("div", { className: "mt-auto", children: cta && (_jsx("a", { href: cta.link, className: "text-primary font-medium hover:underline", children: cta.text || 'Learn more' })) })] }));
};
export default BasicServiceCard;
