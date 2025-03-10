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
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';
export var TestimonialOneSection = function (_a) {
    var testimonials = _a.testimonials, id = _a.id, ImageComponent = _a.ImageComponent, _b = _a.className, className = _b === void 0 ? '' : _b, title = _a.title, subtitle = _a.subtitle;
    if (!testimonials || testimonials.length === 0) {
        return null;
    }
    return (_jsx("section", __assign({ id: id, className: "py-12 px-4 ".concat(className) }, { children: _jsxs("div", __assign({ className: "container mx-auto" }, { children: [(title || subtitle) && (_jsxs("div", __assign({ className: "text-center mb-12" }, { children: [title && _jsx("h2", __assign({ className: "text-3xl font-bold mb-4" }, { children: title })), subtitle && _jsx("p", __assign({ className: "text-lg text-gray-600" }, { children: subtitle }))] }))), _jsx("div", __assign({ className: "max-w-6xl mx-auto" }, { children: _jsx(TestimonialCarousel, { testimonials: testimonials, ImageComponent: ImageComponent }) }))] })) })));
};
