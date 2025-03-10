"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { twMerge } from "tailwind-merge";
import useIsMobile from "../../hooks/useIsMobile";
import { Icon } from "@iconify/react";
import { daysAgo } from '../../utils/date-utils';
var TestimonialCardVariantThree = function (_a) {
    var testimonial = _a.testimonial, className = _a.className, contentClasses = _a.contentClasses;
    var isMobile = useIsMobile();
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    return (
    // h-[550px] md:h-[380px]
    _jsxs("article", __assign({ className: twMerge("flex flex-col shadow-xl w-full", "min-h-96 h-full md:min-h-0", className, contentClasses === null || contentClasses === void 0 ? void 0 : contentClasses.replaceAll(",", " ")) }, { children: [_jsx("div", __assign({ className: "flex-grow" }, { children: _jsx("div", __assign({ className: "p-8" }, { children: _jsxs("p", __assign({ className: "text-left text-slate-700 text-lg" }, { children: [isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
                                ? testimonial.text
                                : testimonial.text.substring(0, isMobile ? 150 : 300) + "...", testimonial.text.length > (isMobile ? 150 : 300) && (_jsx("span", __assign({ className: "pl-2 text-primary font-bold text-sm hover:underline text-left", onClick: function () { return setIsExpanded(!isExpanded); } }, { children: isExpanded ? "Weniger anzeigen" : "Mehr anzeigen" })))] })) })) })), _jsxs("div", __assign({ className: twMerge("h-28 flex justify-between p-4", "bg-primary") }, { children: [_jsxs("div", __assign({ className: "flex flex-col" }, { children: [_jsx("div", __assign({ className: "flex" }, { children: Array.from({ length: 5 }, function (_, i) { return (_jsx(Icon, { icon: "material-symbols:star", className: twMerge("text-md", "text-white") }, i)); }) })), _jsx("p", __assign({ className: twMerge("text-left text-xl font-semibold", "text-action2") }, { children: testimonial.name })), _jsx("p", __assign({ className: "text-sm text-white text-left" }, { children: daysAgo(testimonial.date) }))] })), _jsx("div", { children: _jsx(Icon, { className: twMerge("text-7xl text-action2"), icon: "oi:double-quote-sans-left" }) })] }))] })));
};
export default TestimonialCardVariantThree;
