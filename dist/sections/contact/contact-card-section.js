"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, Send, Instagram, Twitter, Facebook, Linkedin, Youtube, Github, ArrowRight } from 'lucide-react';
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe.js';
import FormComponent from '../../blocks/contact/form-component.js';
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';
import { twMerge } from 'tailwind-merge';
export const ContactCardSection = ({ email, phone, address, socialLinks, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, form: contactForm, action, visibility, subtitleClasses, customStyles, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', subtitle, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
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
    return (_jsxs("section", { id: id, className: twMerge(`section py-16 bg-muted/30`, sectionClasses?.replaceAll(",", " ")), children: [_jsxs("div", { className: "container px-4 md:px-6 mx-auto", children: [_jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [!visibility?.hideSectionTitle && (_jsx("h2", { className: twMerge("text-3xl font-bold tracking-tight text-foreground mb-4", headingClasses?.replaceAll(",", " ")), children: title })), !visibility?.hideSectionSubtitle && (_jsx("p", { className: twMerge("text-lg text-muted-foreground", subtitleClasses?.replaceAll(",", " ")), children: subtitle }))] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [email && (_jsxs("div", { className: "bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow", children: [_jsx("div", { className: "inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4", children: _jsx(Mail, { className: "h-6 w-6 text-primary" }) }), _jsx("h3", { className: "text-lg font-medium mb-2", children: "Email Us" }), _jsx("p", { className: "text-muted-foreground mb-4", children: "We'll respond as soon as possible" }), _jsxs("a", { href: `mailto:${email}`, className: "inline-flex items-center text-primary hover:text-primary/80 font-medium", children: [email, _jsx(ArrowRight, { className: "ml-1 h-4 w-4" })] })] })), phone && (_jsxs("div", { className: "bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow", children: [_jsx("div", { className: "inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4", children: _jsx(Phone, { className: "h-6 w-6 text-primary" }) }), _jsx("h3", { className: "text-lg font-medium mb-2", children: "Call Us" }), _jsx("p", { className: "text-muted-foreground mb-4", children: "Mon-Fri from 8am to 5pm" }), _jsxs("a", { href: `tel:${phone}`, className: "inline-flex items-center text-primary hover:text-primary/80 font-medium", children: [phone, _jsx(ArrowRight, { className: "ml-1 h-4 w-4" })] })] })), address && (_jsxs("div", { className: "bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow", children: [_jsx("div", { className: "inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4", children: _jsx(MapPin, { className: "h-6 w-6 text-primary" }) }), _jsx("h3", { className: "text-lg font-medium mb-2", children: "Visit Us" }), _jsx("p", { className: "text-muted-foreground mb-4", children: "Come say hello at our office" }), _jsx("p", { className: "text-foreground", children: address })] }))] }), _jsx("div", { className: "bg-card rounded-xl shadow p-6 md:p-8 max-w-4xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-4", children: "Send us a message" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "Fill out the form and our team will get back to you as soon as possible." }), openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (_jsx(OpeningTimesDisplay, { openingTimes: openingTimes, openingTimesCustom: openingTimesCustom, className: "mt-8 p-4 bg-muted rounded-lg", titleClassName: "text-primary", messageClassName: "bg-yellow-100 border-yellow-400 text-yellow-700 text-sm", dayClassName: "text-foreground", timeClassName: "text-foreground" })), socialLinks && socialLinks.length > 0 && (_jsxs("div", { className: "mt-8", children: [_jsx("h4", { className: "font-medium mb-3", children: "Connect With Us" }), _jsx("div", { className: "flex space-x-3", children: socialLinks.map((link, index) => (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors", "aria-label": link.platform, children: link.icon ? (_jsx("span", { className: "sr-only", children: link.platform })) : (getSocialIcon(link.platform)) }, index))) })] }))] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground mb-1", children: "Name" }), _jsx("input", { type: "text", id: "name", name: "name", required: true, className: "w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground mb-1", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", required: true, className: "w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "your.email@example.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-sm font-medium text-foreground mb-1", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", required: true, className: "w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary", placeholder: "How can we help you?" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-foreground mb-1", children: "Message" }), _jsx("textarea", { id: "message", name: "message", rows: 4, required: true, className: "w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none", placeholder: "Tell us more about your inquiry..." })] }), _jsxs("button", { type: "submit", className: "w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: [_jsx(Send, { className: "h-4 w-4 mr-2" }), "Send Message"] })] })] }) }), contactForm && includeForm &&
                        _jsx(FormComponent, { form: contactForm }), includeMap && googlePlaceId && (_jsx("div", { className: "mt-12 rounded-xl overflow-hidden shadow-sm", children: _jsx(GoogleMapsIframe, { googlePlaceId: googlePlaceId }) }))] }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
