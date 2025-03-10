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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
import daysAgo from "@/utils/daysAgo";
import useIsMobile from "@/hooks/useIsMobile";
import { useSiteData } from "@/contexts/useTemplate";
import { classNames } from "@/utils/helpers";
export default function TestimonialCarousel() {
    var sections = useSiteData().sections;
    var testimonialsSection = sections.find(function (s) { return s.type === "testimonials"; });
    // Correctly type the ref to possibly hold a Slider instance
    var sliderRef = useRef(null);
    var _a = useSiteData(), templateName = _a.templateName, content = _a.content;
    var isMobile = useIsMobile();
    var testimonials = content === null || content === void 0 ? void 0 : content.testimonials;
    var contentClasses = testimonialsSection === null || testimonialsSection === void 0 ? void 0 : testimonialsSection.contentClasses;
    var next = function () {
        var _a;
        // Use type assertion safely
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickNext();
    };
    var previous = function () {
        var _a;
        // Use type assertion safely
        (_a = sliderRef.current) === null || _a === void 0 ? void 0 : _a.slickPrev();
    };
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
    };
    return (_jsxs(_Fragment, { children: [_jsx(Slider, __assign({}, settings, { ref: sliderRef }, { children: testimonials && testimonials.length > 0 && testimonials
                    //@ts-ignore
                    .sort(function (a, b) { return new Date(b.date) - new Date(a.date); })
                    .map(function (testimonial, index) { return (_jsx("div", __assign({ className: classNames(templateName === "restaurant" || templateName === "wellness"
                        ? "min-h-96 h-full md:min-h-[500px] md:h-[500px]"
                        : templateName === "installation"
                            ? "min-h-[400px] h-full md:min-h-[500px] md:h-[500px]"
                            : "") }, { children: templateName === "wellness" || templateName === "restaurant" ? (_jsx(TestimonialCardVariantThree, { testimonial: testimonial, contentClasses: contentClasses })) : (_jsx(TestimonialCardVariantOne, { contentClasses: contentClasses, testimonial: testimonial })) }), index)); }) })), testimonials && testimonials.length > 3 && (_jsxs("div", __assign({ className: "flex gap-2 items-center justify-center mt-4" }, { children: [_jsx("button", __assign({ className: "rounded-full hover:bg-primary", onClick: previous }, { children: _jsx(Icon, { icon: "iconamoon:arrow-left-2-thin", className: "text-5xl text:text-slate-900 text-primary  hover:text-white" }) })), _jsx("button", __assign({ className: "rounded-full  hover:bg-primary", onClick: next }, { children: _jsx(Icon, { icon: "iconamoon:arrow-right-2-thin", className: "text-5xl text-primary hover:text-white" }) }))] })))] }));
}
var TestimonialCardVariantOne = function (_a) {
    var testimonial = _a.testimonial, className = _a.className, contentClasses = _a.contentClasses;
    var isMobile = useIsMobile();
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var templateName = useSiteData().templateName;
    return (_jsxs("article", __assign({ className: classNames("bg-white flex flex-col p-6 rounded-sm shadow-md space-y-4 w-full justify-between ", className, 
        // `h-full md:h-[380px]` // [480px]
        "min-h-[380px] md:min-h-[480px]", isExpanded && "h-full", contentClasses === null || contentClasses === void 0 ? void 0 : contentClasses.replaceAll(",", " ")) }, { children: [_jsxs("div", __assign({ className: "space-y-4 " }, { children: [_jsxs("div", __assign({ className: classNames("flex self-start", templateName === "installation"
                            ? "text-amber-500"
                            : "text-orange-400") }, { children: [_jsx(Icon, { icon: "material-symbols:star" }), _jsx(Icon, { icon: "material-symbols:star" }), _jsx(Icon, { icon: "material-symbols:star" }), _jsx(Icon, { icon: "material-symbols:star" }), _jsx(Icon, { icon: "material-symbols:star" })] })), _jsxs("div", __assign({ className: "space-y-2" }, { children: [_jsx(Icon, { className: "text-3xl text-primary", icon: "ph:quotes-fill" }), _jsxs("p", __assign({ className: classNames("self-start text-left text-lg") }, { children: [isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
                                        ? testimonial.text
                                        : testimonial.text.substring(0, isMobile ? 150 : 300) + "...", testimonial.text.length > (isMobile ? 150 : 300) && (_jsx("span", __assign({ className: "pl-2 text-primary font-bold text-sm hover:underline text-left", onClick: function () { return setIsExpanded(!isExpanded); } }, { children: isExpanded ? "Weniger anzeigen" : "Mehr anzeigen" })))] }))] }))] })), _jsxs("div", __assign({ className: "self-start text-left" }, { children: [_jsx("p", __assign({ className: "text-primary font-bold" }, { children: testimonial.name })), _jsx("p", __assign({ className: "text-sm" }, { children: daysAgo(testimonial.date) }))] }))] })));
};
var TestimonialCardVariantThree = function (_a) {
    var testimonial = _a.testimonial, contentClasses = _a.contentClasses;
    var templateName = useSiteData().templateName;
    var isMobile = useIsMobile();
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    return (
    // h-[550px] md:h-[380px]
    _jsxs("article", __assign({ className: classNames("flex flex-col shadow-xl w-full", "min-h-96 h-full md:min-h-0 ", contentClasses === null || contentClasses === void 0 ? void 0 : contentClasses.replaceAll(",", " ")) }, { children: [_jsx("div", __assign({ className: "flex-grow " }, { children: _jsx("div", __assign({ className: "p-8" }, { children: _jsxs("p", __assign({ className: "text-left text-slate-700 text-lg" }, { children: [isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
                                ? testimonial.text
                                : testimonial.text.substring(0, isMobile ? 150 : 300) + "...", testimonial.text.length > (isMobile ? 150 : 300) && (_jsx("span", __assign({ className: "pl-2 text-primary font-bold text-sm hover:underline text-left", onClick: function () { return setIsExpanded(!isExpanded); } }, { children: isExpanded ? "Weniger anzeigen" : "Mehr anzeigen" })))] })) })) })), _jsxs("div", __assign({ className: classNames("h-28  flex justify-between p-4", templateName === "restaurant" ? "bg-secondary" : "bg-primary") }, { children: [_jsxs("div", __assign({ className: "flex flex-col" }, { children: [_jsx("div", __assign({ className: "flex" }, { children: Array.from({ length: 5 }, function (_, i) { return ( // testimonial?.rating ?? 5
                                _jsx(Icon, { icon: "material-symbols:star", className: classNames("text-md", "text-white") }, i)); }) })), _jsx("p", __assign({ className: classNames("text-left text-xl  font-semibold", "text-action2") }, { children: testimonial.name })), _jsx("p", __assign({ className: "text-sm text-white text-left" }, { children: daysAgo(testimonial.date) }))] })), _jsx("div", { children: _jsx(Icon, { className: classNames("text-7xl text-action2"), icon: "oi:double-quote-sans-left" }) })] }))] })));
};
