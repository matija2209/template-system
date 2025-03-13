"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Instagram, Twitter, Facebook, Linkedin, Youtube, Github } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe.js';
import FormComponent from '../../blocks/contact/form-component.js';
// Define form schema with Zod
const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
});
export const ContactSplitSection = ({ email, phone, customStyles, address, socialLinks, excludeSection, formId, includeAddress, visibility, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title, subtitle, form, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    // Initialize the form
    // Helper function to format day names
    const formatDay = (day) => {
        return day.charAt(0).toUpperCase() + day.slice(1);
    };
    // Helper function to format time ranges
    const formatTimeRange = (from, to) => {
        return `${from} - ${to}`;
    };
    // Function to get the appropriate social icon
    const getSocialIcon = (platform) => {
        switch (platform.toLowerCase()) {
            case 'instagram':
                return _jsx(Instagram, { className: "h-5 w-5" });
            case 'twitter':
            case 'x':
                return _jsx(Twitter, { className: "h-5 w-5" });
            case 'facebook':
                return _jsx(Facebook, { className: "h-5 w-5" });
            case 'linkedin':
                return _jsx(Linkedin, { className: "h-5 w-5" });
            case 'youtube':
                return _jsx(Youtube, { className: "h-5 w-5" });
            case 'github':
                return _jsx(Github, { className: "h-5 w-5" });
            default:
                return _jsx("span", { children: platform });
        }
    };
    return (_jsx("section", { id: id, className: twMerge("section", sectionClasses), children: _jsxs("div", { className: 'max-w-7xl mx-auto', children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]", children: [_jsxs("div", { className: " text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-between", children: [_jsxs("div", { children: [!visibility?.hideSectionTitle && (_jsx("h2", { className: "text-3xl font-bold", children: title })), !visibility?.hideSectionSubtitle && (_jsx("p", { className: "mt-4 text-primary-foreground/80 max-w-md", children: subtitle })), _jsxs("div", { className: "mt-12 space-y-8", children: [email && (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary-foreground/10 p-3 rounded-full mr-4", children: _jsx(Mail, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-primary-foreground/70", children: "Email" }), _jsx("a", { href: `mailto:${email}`, className: "text-primary-foreground hover:underline", children: email })] })] })), phone && (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary-foreground/10 p-3 rounded-full mr-4", children: _jsx(Phone, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-primary-foreground/70", children: "Phone" }), _jsx("a", { href: `tel:${phone}`, className: "text-primary-foreground hover:underline", children: phone })] })] })), address && (_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "bg-primary-foreground/10 p-3 rounded-full mr-4 mt-1", children: _jsx(MapPin, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-primary-foreground/70", children: "Address" }), _jsx("p", { className: "text-primary-foreground", children: address })] })] }))] })] }), openingTimes && Object.keys(openingTimes).length > 0 && (_jsxs("div", { className: "mt-12 border-t border-primary-foreground/20 pt-8", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Clock, { className: "h-5 w-5 mr-2" }), _jsx("h3", { className: "text-lg font-medium", children: "Opening Hours" })] }), openingTimesCustom?.active && openingTimesCustom.message && (_jsxs("div", { className: "flex p-3 mb-4 bg-primary-foreground/10 border-l-4 border-primary-foreground/30 rounded", children: [_jsx(AlertCircle, { className: "h-5 w-5 mr-2 flex-shrink-0" }), _jsx("p", { className: "text-sm", children: openingTimesCustom.message })] })), _jsx("div", { className: "space-y-2", children: Object.entries(openingTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { className: hours.closed ? "text-primary-foreground/60" : "text-primary-foreground", children: hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to) })] }, day))) })] })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-12", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Follow Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx("span", { className: "sr-only", children: link.platform })) : (getSocialIcon(link.platform)) }, index))) })] }))] }), _jsx("div", { className: twMerge(visibility?.transparentFormCard ? "" : "", " p-8 md:p-12 lg:p-16 flex items-center"), children: _jsxs("div", { className: "w-full max-w-md mx-auto", children: [!visibility?.hideFormTitle && (_jsx("h3", { className: "text-2xl font-bold text-  mb-8", children: title })), !visibility?.hideFormSubtitle && (_jsx("p", { className: "text-foreground/80 mb-8", children: subtitle })), form && includeForm &&
                                        _jsx(FormComponent, { form: form })] }) })] }), includeMap && googlePlaceId && (_jsx(GoogleMapsIframe, { googlePlaceId: googlePlaceId })), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }) }));
};
