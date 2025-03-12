"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Instagram, Twitter, Facebook, Linkedin, Youtube, Github } from 'lucide-react';
export const ContactModernSection = ({ email, phone, address, socialLinks, mapUrl, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', subtitle, redirectUrl, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
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
    return (_jsx("section", { id: id, className: `py-16 bg-background ${sectionClasses}`, children: _jsxs("div", { className: "container px-4 md:px-6 mx-auto", children: [_jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsxs("div", { className: "flex flex-col justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-primary", children: title }), _jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: subtitle }), _jsxs("div", { className: "mt-8 space-y-6", children: [email && (_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-6 w-6 text-primary mr-3" }), _jsx("a", { href: `mailto:${email}`, className: "text-foreground hover:text-primary transition-colors", children: email })] })), phone && (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-6 w-6 text-primary mr-3" }), _jsx("a", { href: `tel:${phone}`, className: "text-foreground hover:text-primary transition-colors", children: phone })] })), address && (_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "h-6 w-6 text-primary mr-3 mt-0.5" }), _jsx("p", { className: "text-muted-foreground", children: address })] }))] })] }), openingTimes && Object.keys(openingTimes).length > 0 && (_jsxs("div", { className: "mt-10 p-6 bg-muted rounded-lg", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Clock, { className: "h-5 w-5 text-primary mr-2" }), _jsx("h3", { className: "text-lg font-medium", children: "Opening Hours" })] }), openingTimesCustom?.active && openingTimesCustom.message && (_jsxs("div", { className: "flex p-3 mb-4 bg-yellow-100 border-l-4 border-yellow-400 rounded", children: [_jsx(AlertCircle, { className: "h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" }), _jsx("p", { className: "text-sm text-yellow-700", children: openingTimesCustom.message })] })), _jsx("div", { className: "space-y-2", children: Object.entries(openingTimes).map(([day, hours]) => (_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "font-medium", children: formatDay(day) }), _jsx("span", { className: hours.closed ? "text-muted-foreground" : "text-foreground", children: hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to) })] }, day))) })] })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Connect With Us" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx("span", { className: "sr-only", children: link.platform })) : (getSocialIcon(link.platform)) }, index))) })] }))] }), _jsxs("div", { className: "bg-card rounded-xl shadow-sm p-8", children: [_jsx("h3", { className: "text-xl font-semibold mb-6", children: "Send us a message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground mb-2", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", required: true, className: "w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", required: true, className: "w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "your.email@example.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-foreground mb-2", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", required: true, className: "w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "How can we help you?" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-foreground mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", rows: 4, required: true, className: "w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none", placeholder: "Tell us more about your inquiry..." })] }), _jsxs("button", { type: "submit", className: "w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: [_jsx(Send, { className: "h-4 w-4 mr-2" }), "Send Message"] })] })] })] }), mapUrl && (_jsx("div", { className: "mt-12 rounded-xl overflow-hidden shadow-sm", children: _jsx("iframe", { src: mapUrl, title: "Location Map", className: "w-full h-[400px] border-0", allowFullScreen: true, loading: "lazy" }) }))] }) }));
};
