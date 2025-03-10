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
export var DetailedServiceCard = function (_a) {
    var service = _a.service, _b = _a.className, className = _b === void 0 ? '' : _b, ImageComponent = _a.ImageComponent, onClick = _a.onClick;
    var name = service.name, description = service.description, image = service.image, cta = service.cta;
    var ImgComponent = ImageComponent || 'img';
    return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ".concat(className), onClick: onClick }, { children: [image && (_jsx("div", __assign({ className: "h-48 overflow-hidden" }, { children: _jsx(ImgComponent, __assign({ src: image.url, alt: image.alt || name, className: "w-full h-full object-cover" }, (ImageComponent ? {
                    width: 800,
                    height: 400,
                    layout: "responsive",
                    objectFit: "cover"
                } : {}))) }))), _jsxs("div", __assign({ className: "p-6" }, { children: [_jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "text-primary font-medium hover:underline" }, { children: cta.text || 'Learn more' })))] }))] })));
};
export default DetailedServiceCard;
