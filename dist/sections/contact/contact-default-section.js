"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, ExternalLink } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
// Form schema for validation
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});
export const ContactDefaultSection = ({ email, phone, address, socialLinks, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', subtitle, redirectUrl, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    // Helper function to format day names
    const formatDay = (day) => {
        return day.charAt(0).toUpperCase() + day.slice(1);
    };
    // Helper function to format time ranges
    const formatTimeRange = (from, to) => {
        return `${from} - ${to}`;
    };
    // Define form using react-hook-form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });
    // Handle form submission with form action
    async function onSubmit(values) {
        // When using form action, we would normally not need this function
        // as the form would be submitted directly to the server
        alert('Form submitted! In a real implementation, this would send data to your endpoint.');
    }
    return (_jsx("section", { id: id, className: `py-12 px-4 ${sectionClasses}`, children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [title && _jsx("h2", { className: "text-3xl font-bold mb-4", children: title }), subtitle && _jsx("p", { className: "text-lg text-gray-600", children: subtitle })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Contact Information" }), _jsxs("div", { className: "space-y-4", children: [email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 mr-2 text-primary" }), _jsx("a", { href: `mailto:${email}`, className: "text-primary hover:underline", children: email })] })), phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 mr-2 text-primary" }), _jsx("a", { href: `tel:${phone}`, className: "text-primary hover:underline", children: phone })] })), address && (_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-5 w-5 mr-2 mt-1 text-primary" }), _jsx("p", { className: "text-gray-700", children: address })] }))] }), openingTimes && Object.keys(openingTimes).length > 0 && (_jsxs("div", { className: "mt-6", children: [_jsxs("h4", { className: "text-lg font-medium mb-2 flex items-center", children: [_jsx(Clock, { className: "h-5 w-5 mr-2 text-primary" }), "Opening Hours"] }), openingTimesCustom?.active && openingTimesCustom.message ? (_jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4", children: _jsxs("div", { className: "flex", children: [_jsx(AlertCircle, { className: "h-5 w-5 mr-2 text-yellow-700" }), _jsx("p", { className: "text-yellow-700", children: openingTimesCustom.message })] }) })) : null, _jsx("div", { className: "space-y-2", children: Object.entries(openingTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { children: hours.closed ? (_jsx("span", { className: "text-gray-500", children: "Closed" })) : (formatTimeRange(hours.from, hours.to)) })] }, day))) })] })), emergencyOpeningTimes && Object.keys(emergencyOpeningTimes).length > 0 && (_jsxs("div", { className: "mt-6", children: [_jsxs("h4", { className: "text-lg font-medium mb-2 flex items-center", children: [_jsx(AlertCircle, { className: "h-5 w-5 mr-2 text-primary" }), "Emergency Hours"] }), _jsx("div", { className: "space-y-2", children: Object.entries(emergencyOpeningTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { children: hours.closed ? (_jsx("span", { className: "text-gray-500", children: "Closed" })) : (formatTimeRange(hours.from, hours.to)) })] }, day))) })] })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-6", children: [_jsx("h4", { className: "text-lg font-medium mb-2", children: "Follow Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:text-primary-dark transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx(ExternalLink, { className: "h-5 w-5" })) : (_jsx("span", { children: link.platform })) }, index))) })] })), googlePlaceId && (_jsxs("div", { className: "mt-6", children: [_jsxs("h4", { className: "text-lg font-medium mb-2 flex items-center", children: [_jsx(MapPin, { className: "h-5 w-5 mr-2 text-primary" }), "Our Location"] }), _jsx("div", { className: "aspect-w-16 aspect-h-9 rounded-lg overflow-hidden", children: _jsx("iframe", { src: googlePlaceId, title: "Location Map", className: "w-full h-64 border-0 rounded-lg", allowFullScreen: true, loading: "lazy" }) })] }))] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-4", children: "Send Us a Message" }), _jsx(Form, { ...form, children: _jsxs("form", { action: action, onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter your name", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Email" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter your email", type: "email", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "subject", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Subject" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter subject", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "message", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Message" }), _jsx(FormControl, { children: _jsx(Textarea, { placeholder: "Enter your message", className: "min-h-32", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", className: "w-full", children: "Send Message" })] }) })] })] })] }) }));
};
