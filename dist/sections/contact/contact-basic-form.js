import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { twMerge } from 'tailwind-merge';
import SectionHeading from "../../blocks/common/section-heading";
import OpeningTimesDisplay from "../../blocks/contact/opening-times-display";
import ContactDetails from "../../blocks/contact/contact-details";
import FormComponent from "../../blocks/contact/form-component";
export const ContactBasicForm = ({ ...props }) => {
    const { email, customStyles, phone, address, socialLinks, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, visibility, includeOpeningTimes, includePhone, includeMap, form: contactForm, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses, } = props;
    if (excludeSection)
        return null;
    if (includeForm && !contactForm)
        return null; // Prevent errors if form is required but not found
    return (_jsxs("section", { id: id || "kontakt", className: twMerge(sectionClasses?.replaceAll(", ", " ")), children: [_jsx("div", { className: "section relative 2xl:max-w-screen-2xl px-4 lg:px-10 xl:px-14 mx-auto", children: _jsxs("div", { className: "flex flex-col lg:flex-row py-12 lg:py-24 gap-12", children: [_jsx("div", { className: "w-full lg:w-1/2 z-10", children: _jsxs("div", { className: "text-left", children: [!visibility?.hideSectionTitle && (_jsx("header", { className: "space-y-4", children: _jsx(SectionHeading, { className: twMerge("mb-4", headingClasses?.replaceAll(",", " ")), children: title }) })), _jsxs("div", { className: "mb-8", children: [openingTimesCustom?.active && (_jsx("p", { className: twMerge("text-xl", "text-white"), children: openingTimesCustom.message })), includeOpeningTimes && openingTimes && (_jsx(OpeningTimesDisplay, { openingTimes: openingTimes, openingTimesCustom: openingTimesCustom, className: "mb-4", titleClassName: "text-lg lg:text-xl font-semibold mb-2", dayClassName: "text-white", timeClassName: "text-white" })), includeEmergencyOpeningTimes && emergencyOpeningTimes && (_jsx(OpeningTimesDisplay, { openingTimes: emergencyOpeningTimes, title: "Notdienst", titleClassName: "text-lg lg:text-xl font-semibold", dayClassName: "text-white", timeClassName: "text-white" }))] }), _jsx(ContactDetails, { ...props })] }) }), includeForm && contactForm && (_jsx("div", { className: "w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0", children: _jsx("div", { className: twMerge("bg-white p-6 lg:p-10 shadow-sm rounded-sm w-full", contentClasses?.replaceAll(",", " ")), children: contactForm && includeForm &&
                                    _jsx(FormComponent, { form: contactForm }) }) }))] }) }), customStyles && _jsx("style", { dangerouslySetInnerHTML: { __html: customStyles } })] }));
};
