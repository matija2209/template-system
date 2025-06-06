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
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';
// Define form schema with Zod
const formSchema = z.object({
    name: z.string().min(1, "Name ist erforderlich"),
    email: z.string().email("Ungültige E-Mail-Adresse").min(1, "E-Mail ist erforderlich"),
    subject: z.string().min(1, "Betreff ist erforderlich"),
    message: z.string().min(1, "Nachricht ist erforderlich"),
});
export const ContactSplitSection = ({ email, phone, customStyles, address, socialLinks, excludeSection, formId, includeAddress, visibility, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, design, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title, subtitle, form, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    // Initialize the form
    // Helper function to format day names
    const formatDay = (day) => {
        // Translate day names to German
        const germanDays = {
            monday: "Montag",
            tuesday: "Dienstag",
            wednesday: "Mittwoch",
            thursday: "Donnerstag",
            friday: "Freitag",
            saturday: "Samstag",
            sunday: "Sonntag"
        };
        return germanDays[day.toLowerCase()] || day.charAt(0).toUpperCase() + day.slice(1);
    };
    // Helper function to format time ranges
    const formatTimeRange = (from, to) => {
        return `${from} - ${to}`;
    };
    // Helper function to format periods
    const formatPeriods = (periods) => {
        if (!periods || periods.length === 0)
            return "Geschlossen";
        return periods.map(period => {
            return `${period.open} - ${period.close}`;
        }).join(", ");
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
    return (_jsx("section", { id: id, className: twMerge("section", sectionClasses), children: _jsxs("div", { className: 'max-w-7xl mx-auto', children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]", children: [_jsxs("div", { className: twMerge("contact-info-card", design?.transparentInfoCard ? "" : "", " text-primary_text p-8 md:p-12 lg:p-16 flex flex-col justify-between"), children: [_jsxs("div", { children: [!visibility?.hideSectionTitle && (_jsx("h2", { className: twMerge("text-3xl font-bold text-primary_text", headingClasses?.replaceAll(",", " ")), children: title })), !visibility?.hideSectionSubtitle && (_jsx("p", { className: twMerge("mt-4 max-w-md text-primary_text", subtitleClasses?.replaceAll(",", " ")), children: subtitle })), _jsxs("div", { className: "mt-12 space-y-8", children: [email && includeEmail && (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary p-3 rounded-full mr-4", children: _jsx(Mail, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-primary_text", children: "E-Mail" }), _jsx("a", { href: `mailto:${email}`, className: "text-sm text-primary_text hover:underline", children: email })] })] })), phone && includePhone && (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "bg-primary p-3 rounded-full mr-4", children: _jsx(Phone, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm  text-primary_text", children: "Telefon" }), _jsx("a", { href: `tel:${phone}`, className: "text-primary_text hover:underline", children: phone })] })] })), address && includeAddress && (_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "bg-primary p-3 rounded-full mr-4 mt-1", children: _jsx(MapPin, { className: "h-6 w-6" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm  text-primary_text", children: "Adresse" }), _jsx("p", { className: "text-primary_text", children: address })] })] }))] })] }), openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (_jsx("div", { className: "mt-12 border-t border-primary-foreground/20 pt-8", children: _jsx(OpeningTimesDisplay, { openingTimes: openingTimes, openingTimesCustom: openingTimesCustom, className: "mt-0" }) })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-12", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Folgen Sie uns" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx("span", { className: "sr-only", children: link.platform })) : (getSocialIcon(link.platform)) }, index))) })] }))] }), _jsx("div", { className: twMerge("contact-form-card", design?.transparentFormCard ? "" : "", " p-8 md:p-12 lg:p-16 flex items-center"), children: _jsxs("div", { className: "w-full max-w-md mx-auto", children: [!visibility?.hideFormTitle && (_jsx("h3", { className: "text-2xl font-bold text-primary_text  mb-8", children: title })), !visibility?.hideFormSubtitle && (_jsx("p", { className: "text-primary_text mb-8", children: subtitle })), form && includeForm &&
                                        _jsx(FormComponent, { form: form })] }) })] }), includeMap && googlePlaceId && (_jsx(GoogleMapsIframe, { googlePlaceId: googlePlaceId })), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }) }));
};
