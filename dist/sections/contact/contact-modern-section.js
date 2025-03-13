"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Instagram, Twitter, Facebook, Linkedin, Youtube, Github } from 'lucide-react';
// Import shadcn components
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card";
import { twMerge } from 'tailwind-merge';
export const ContactModernSection = ({ email, phone, address, socialLinks, excludeSection, form, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, visibility, title = 'Get in Touch', subtitle, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Form submitted! In a real implementation, this would send data to your endpoint.');
    };
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
    return (_jsx("section", { id: id, className: `py-16 bg-background ${sectionClasses}`, children: _jsxs("div", { className: "container px-4 md:px-6 mx-auto", children: [_jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsxs("div", { className: "flex flex-col justify-between", children: [_jsxs("div", { children: [!visibility?.hideSectionTitle && (_jsx("h2", { className: `text-3xl font-bold tracking-tight text-primary ${headingClasses}`, children: title })), !visibility?.hideSectionSubtitle && (_jsx("p", { className: `mt-4 text-muted-foreground max-w-md ${subtitleClasses}`, children: subtitle })), _jsxs("div", { className: "mt-8 space-y-6", children: [email && includeEmail && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-6 w-6 text-primary mr-3" }), _jsx("a", { href: `mailto:${email}`, className: "text-foreground hover:text-primary transition-colors", children: email })] })), phone && includePhone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-6 w-6 text-primary mr-3" }), _jsx("a", { href: `tel:${phone}`, className: "text-foreground hover:text-primary transition-colors", children: phone })] })), address && includeAddress && (_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-6 w-6 text-primary mr-3 mt-0.5" }), _jsx("p", { className: "text-muted-foreground", children: address })] }))] })] }), openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (_jsx(Card, { className: "mt-10", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Clock, { className: "h-5 w-5 text-primary mr-2" }), _jsx("h3", { className: "text-lg font-medium", children: "Opening Hours" })] }), openingTimesCustom?.active && openingTimesCustom.message && (_jsxs("div", { className: "flex p-3 mb-4 bg-yellow-100 border-l-4 border-yellow-400 rounded", children: [_jsx(AlertCircle, { className: "h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" }), _jsx("p", { className: "text-sm text-yellow-700", children: openingTimesCustom.message })] })), _jsx("div", { className: "space-y-2", children: Object.entries(openingTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { className: hours.closed ? "text-muted-foreground" : "text-foreground", children: hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to) })] }, day))) })] }) })), emergencyOpeningTimes && includeEmergencyOpeningTimes && (_jsx(Card, { className: "mt-6", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(AlertCircle, { className: "h-5 w-5 text-primary mr-2" }), _jsx("h3", { className: "text-lg font-medium", children: "Emergency Hours" })] }), _jsx("div", { className: "space-y-2", children: Object.entries(emergencyOpeningTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { className: hours.closed ? "text-muted-foreground" : "text-foreground", children: hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to) })] }, day))) })] }) })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Connect With Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx("span", { className: "sr-only", children: link.platform })) : (getSocialIcon(link.platform)) }, index))) })] }))] }), includeForm && (_jsxs(Card, { className: twMerge(visibility?.transparentFormCard ? "bg-transparent" : "bg-background"), children: [!visibility?.hideFormTitle || visibility?.hideFormSubtitle && (_jsxs(CardHeader, { children: [!visibility?.hideFormTitle && (_jsx(CardTitle, { className: "text-xl font-semibold", children: "Send us a message" })), !visibility?.hideFormSubtitle && (_jsx(CardDescription, { children: subtitle }))] })), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { type: "text", id: "name", name: "name", required: true, placeholder: "Your name" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { type: "email", id: "email", name: "email", required: true, placeholder: "your.email@example.com" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "subject", children: "Subject" }), _jsx(Input, { type: "text", id: "subject", name: "subject", required: true, placeholder: "How can we help you?" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "message", children: "Message" }), _jsx(Textarea, { id: "message", name: "message", rows: 4, required: true, placeholder: "Tell us more about your inquiry..." })] }), _jsxs(Button, { type: "submit", className: "w-full", children: [_jsx(Send, { className: "h-4 w-4 mr-2" }), "Send Message"] })] }) })] }))] }), googlePlaceId && includeMap && (_jsx("div", { className: "mt-12 rounded-xl overflow-hidden shadow-sm", children: _jsx("iframe", { src: googlePlaceId, title: "Location Map", className: "w-full h-96 border-0", allowFullScreen: true, loading: "lazy" }) }))] }) }));
};
