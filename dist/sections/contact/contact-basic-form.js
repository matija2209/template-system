import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { twMerge } from 'tailwind-merge';
import SectionHeading from "../../blocks/common/section-heading";
import OpeningTimes from "../../blocks/contact/opening-times";
import ContactDetails from "../../blocks/contact/contact-details";
import FormComponent from "../../blocks/contact/form-component";
export const ContactBasicForm = ({ ...props }) => {
    const { email, phone, address, socialLinks, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, form, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', redirectUrl, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses, } = props;
    if (excludeSection)
        return null;
    const contactForm = form;
    if (includeForm && !contactForm)
        return null; // Prevent errors if form is required but not found
    return (_jsx("section", { id: id || "kontakt", className: twMerge(sectionClasses?.replaceAll(", ", " ")), children: _jsx("div", { className: "relative 2xl:max-w-screen-2xl px-4 lg:px-10 xl:px-14 mx-auto", children: _jsxs("div", { className: "flex flex-col lg:flex-row py-12 lg:py-24 gap-12", children: [_jsx("div", { className: "w-full lg:w-1/2 z-10", children: _jsxs("div", { className: "text-left", children: [_jsx("header", { className: "space-y-4", children: _jsx(SectionHeading, { className: twMerge("mb-4", headingClasses?.replaceAll(",", " ")), children: title }) }), _jsxs("div", { className: "mb-8", children: [openingTimesCustom?.active && (_jsx("p", { className: twMerge("text-xl", "text-white"), children: openingTimesCustom.message })), includeOpeningTimes && openingTimes && (_jsxs("div", { className: "mb-4", children: [_jsx("h6", { className: twMerge("text-lg lg:text-xl font-semibold", "mb-2"), children: "\u00D6ffnungszeiten" }), _jsx(OpeningTimes, { openingHours: openingTimes })] })), includeEmergencyOpeningTimes && emergencyOpeningTimes && (_jsxs("div", { className: "", children: [_jsx("h6", { className: twMerge("text-lg lg:text-xl font-semibold"), children: "Notdienst" }), _jsx(OpeningTimes, { openingHours: emergencyOpeningTimes })] }))] }), _jsx(ContactDetails, { ...props })] }) }), includeForm && contactForm && (_jsx("div", { className: "w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0", children: _jsx("div", { className: twMerge("bg-white p-6 lg:p-10 shadow-sm rounded-sm w-full", contentClasses?.replaceAll(",", " ")), children: _jsx(FormComponent, { headingClasses: headingClasses?.replaceAll(",", " "), form: contactForm }) }) }))] }) }) }));
};
