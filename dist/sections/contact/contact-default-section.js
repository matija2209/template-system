"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, ExternalLink } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import FormComponent from '../../blocks/contact/form-component.js';
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe';
// Form schema for validation
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});
export const ContactDefaultSection = ({ email, phone, address, socialLinks, excludeSection, form: contactForm, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, customStyles, extraBlocks, contentClasses, visibility, type, id, title = 'Get in Touch', subtitle, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    // Helper function to format day names
    const formatDay = (day) => {
        return day.charAt(0).toUpperCase() + day.slice(1);
    };
    // Helper function to format time ranges
    const formatTimeRange = (from, to) => {
        return `${from} - ${to}`;
    };
    // Define form using react-hook-form
    const form = useForm();
    // Handle form submission with form action
    async function onSubmit(values) {
        // When using form action, we would normally not need this function
        // as the form would be submitted directly to the server
        alert('Form submitted! In a real implementation, this would send data to your endpoint.');
    }
    return (_jsxs("section", { id: id, className: `sectionpy-12 px-4 ${sectionClasses}`, children: [_jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [!visibility?.hideSectionTitle && (_jsx(_Fragment, { children: title && _jsx("h2", { className: "text-3xl font-bold mb-4", children: title }) })), !visibility?.hideSectionSubtitle && (_jsx(_Fragment, { children: subtitle && _jsx("p", { className: "text-lg text-gray-600", children: subtitle }) }))] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 mr-2 text-primary" }), _jsx("a", { href: `mailto:${email}`, className: "text-primary hover:underline", children: email })] })), phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 mr-2 text-primary" }), _jsx("a", { href: `tel:${phone}`, className: "text-primary hover:underline", children: phone })] })), address && (_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-5 w-5 mr-2 mt-1 text-primary" }), _jsx("p", { className: "text-gray-700", children: address })] }))] }), openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (_jsx(OpeningTimesDisplay, { openingTimes: openingTimes, openingTimesCustom: openingTimesCustom, titleClassName: "text-primary", messageClassName: "bg-yellow-50 border-yellow-400 text-yellow-700" })), emergencyOpeningTimes && Object.keys(emergencyOpeningTimes).length > 0 && includeEmergencyOpeningTimes && (_jsx(OpeningTimesDisplay, { openingTimes: emergencyOpeningTimes, title: "Emergency Hours", titleClassName: "text-primary" })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "text-lg font-medium mb-2", children: "Follow Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:text-primary-dark transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx(ExternalLink, { className: "h-5 w-5" })) : (_jsx("span", { children: link.platform })) }, index))) })] })), includeMap && googlePlaceId && (_jsx(GoogleMapsIframe, { googlePlaceId: googlePlaceId }))] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [!visibility?.hideSectionTitle && (_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Send Us a Message" })), contactForm && includeForm && _jsx(Form, { ...form, children: _jsx("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: _jsx(FormComponent, { form: contactForm }) }) })] })] })] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
