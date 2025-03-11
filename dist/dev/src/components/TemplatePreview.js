import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './TemplatePreview.css';
// Import the actual components directly with relative paths
import { BasicServiceCard } from '../../../blocks/services/BasicServiceCard';
import { SimpleListServiceCard } from '../../../blocks/services/SimpleListServiceCard';
// Custom Image component that mimics Next.js Image component
const CustomImage = (props) => {
    const { src, alt, width, height, className, ...rest } = props;
    return (_jsx("img", { src: src, alt: alt, width: width, height: height, className: className, loading: "lazy", style: { objectFit: 'cover' } }));
};
// Sample service for demonstration
// Note: Adjust the properties to match your actual Service type
const sampleService = {
    id: '1',
    name: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    image: {
        url: 'https://via.placeholder.com/300/4a90e2/ffffff?text=Web+Dev',
        alt: 'Web Development Icon',
    },
    cta: {
        text: 'Learn more about web development',
        link: '/services/web-development',
        blockType: 'cta', // Set to 'cta' to match the expected type
    },
}; // Using 'as any' to bypass type checking for the preview
const TemplatePreview = ({ templateType }) => {
    // Render the selected component
    const renderTemplate = () => {
        switch (templateType) {
            case 'basic-service-card':
                return (_jsxs("div", { className: "template-container", children: [_jsx("h2", { className: "template-title", children: "BasicServiceCard Component" }), _jsx("div", { className: "component-preview", children: _jsx("div", { className: "tailwind-reset", children: _jsx(BasicServiceCard, { service: sampleService, ImageComponent: CustomImage, className: "component-instance" }) }) }), _jsxs("div", { className: "component-code", children: [_jsx("h3", { children: "Component Usage:" }), _jsx("pre", { children: `<BasicServiceCard 
  service={service}
  ImageComponent={ImageComponent}
/>` })] })] }));
            case 'simple-list-service-card':
                return (_jsxs("div", { className: "template-container", children: [_jsx("h2", { className: "template-title", children: "SimpleListServiceCard Component" }), _jsx("div", { className: "component-preview", children: _jsx("div", { className: "tailwind-reset", children: _jsx(SimpleListServiceCard, { service: sampleService, ImageComponent: CustomImage, className: "component-instance" }) }) }), _jsxs("div", { className: "component-code", children: [_jsx("h3", { children: "Component Usage:" }), _jsx("pre", { children: `<SimpleListServiceCard 
  service={service}
  ImageComponent={ImageComponent}
/>` })] })] }));
            default:
                return (_jsx("div", { className: "template-placeholder", children: "Select a component to preview" }));
        }
    };
    return (_jsx("div", { className: "template-preview", children: renderTemplate() }));
};
export default TemplatePreview;
