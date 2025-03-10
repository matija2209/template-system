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
import ServiceCard from './service-card';
export var ServiceCardList = function (_a) {
    var services = _a.services, _b = _a.variant, variant = _b === void 0 ? 'basic' : _b, _c = _a.gap, gap = _c === void 0 ? 'md' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var gapClass = {
        sm: 'space-y-4',
        md: 'space-y-6',
        lg: 'space-y-8',
    }[gap];
    // Vertical list of cards
    if (variant !== 'horizontal') {
        return (_jsx("div", __assign({ className: "".concat(gapClass, " ").concat(className) }, { children: services.map(function (service) { return (_jsx(ServiceCard, { service: service, variant: variant }, service.id)); }) })));
    }
    // Helper function to check if icon is a string or Image object
    var isIconString = function (icon) {
        return typeof icon === 'string';
    };
    // Horizontal list with icon/image on left
    return (_jsx("div", __assign({ className: "".concat(gapClass, " ").concat(className) }, { children: services.map(function (service) { return (_jsxs("div", __assign({ className: "flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" }, { children: [service.icon && isIconString(service.icon) && (_jsx("div", __assign({ className: "text-primary text-4xl flex-shrink-0" }, { children: _jsx("i", { className: service.icon }) }))), service.image && (_jsx("div", __assign({ className: "w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-md" }, { children: _jsx("img", { src: service.image.url, alt: service.image.alt || service.name, className: "w-full h-full object-cover" }) }))), _jsxs("div", { children: [_jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: service.name })), service.description && (_jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: service.description }))), service.price && (_jsx("div", __assign({ className: "font-bold text-primary" }, { children: service.price }))), service.cta && (_jsx("a", __assign({ href: service.cta.link, className: "text-primary font-medium hover:underline mt-2 inline-block" }, { children: service.cta.text })))] })] }), service.id)); }) })));
};
export default ServiceCardList;
