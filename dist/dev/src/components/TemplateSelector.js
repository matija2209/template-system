import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { templateTypes } from '../data/mockData';
import './TemplateSelector.css';
const TemplateSelector = ({ selectedTemplate, onSelectTemplate }) => {
    return (_jsxs("div", { className: "template-selector", children: [_jsx("h2", { children: "Components" }), _jsx("ul", { className: "template-list", children: templateTypes.map((template) => (_jsx("li", { className: `template-item ${selectedTemplate === template.id ? 'selected' : ''}`, onClick: () => onSelectTemplate(template.id), children: template.name }, template.id))) })] }));
};
export default TemplateSelector;
