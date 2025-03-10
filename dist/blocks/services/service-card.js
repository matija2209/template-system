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
export var ServiceCard = function (_a) {
    var service = _a.service, _b = _a.variant, variant = _b === void 0 ? 'basic' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, ImageComponent = _a.ImageComponent;
    var name = service.name, description = service.description, icon = service.icon, image = service.image, price = service.price, cta = service.cta;
    // Default to standard img tag if no ImageComponent is provided
    var ImgComponent = ImageComponent || 'img';
    // Basic card with minimal styling
    if (variant === 'basic') {
        return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ".concat(className) }, { children: [icon && (_jsx("div", __assign({ className: "text-primary text-3xl mb-4" }, { children: _jsx(ImgComponent, __assign({ src: icon.url, alt: icon.alt || '', className: "w-10 h-10" }, (ImageComponent ? { width: 40, height: 40 } : {}))) }))), _jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "text-primary font-medium hover:underline" }, { children: cta.text || 'Learn more' })))] })));
    }
    // Detailed card with image
    if (variant === 'detailed') {
        return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ".concat(className) }, { children: [image && (_jsx("div", __assign({ className: "h-48 overflow-hidden" }, { children: _jsx(ImgComponent, __assign({ src: image.url, alt: image.alt || name, className: "w-full h-full object-cover" }, (ImageComponent ? {
                        width: 800,
                        height: 400,
                        layout: "responsive",
                        objectFit: "cover"
                    } : {}))) }))), _jsxs("div", __assign({ className: "p-6" }, { children: [_jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "text-primary font-medium hover:underline" }, { children: cta.text || 'Learn more' })))] }))] })));
    }
    // Pricing card with price highlighted
    if (variant === 'pricing') {
        return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 ".concat(className) }, { children: [_jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), price && (_jsx("div", __assign({ className: "text-2xl font-bold text-primary mb-4" }, { children: price }))), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary-dark transition-colors" }, { children: cta.text || 'Select' })))] })));
    }
    return null;
};
export default ServiceCard;
