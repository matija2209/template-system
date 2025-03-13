import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion.js';
import { twMerge } from 'tailwind-merge';
export const FaqAccordionSection = ({ faqs, id, customStyles, title, subtitle, sectionClasses, }) => {
    if (!faqs || faqs.length === 0) {
        return null;
    }
    // Flatten all FAQ items from all repositories
    const allFaqItems = faqs.sort((a, b) => a.order - b.order);
    return (_jsxs("section", { id: id, className: twMerge(`py-12 px-4`, sectionClasses), children: [_jsxs("div", { className: "container mx-auto max-w-4xl", children: [(title || subtitle) && (_jsxs("div", { className: "text-center mb-10", children: [title && _jsx("h2", { className: "text-3xl font-bold mb-4", children: title }), subtitle && _jsx("p", { className: "text-lg text-gray-600", children: subtitle })] })), _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: allFaqItems.map((faq) => (_jsxs(AccordionItem, { value: faq.id, children: [_jsx(AccordionTrigger, { className: "text-left", children: faq.question }), _jsx(AccordionContent, { children: _jsx("div", { dangerouslySetInnerHTML: { __html: faq.answer } }) })] }, faq.id))) })] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
