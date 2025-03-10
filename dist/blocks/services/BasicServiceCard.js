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
export var BasicServiceCard = function (_a) {
    var service = _a.service, _b = _a.className, className = _b === void 0 ? '' : _b, ImageComponent = _a.ImageComponent, onClick = _a.onClick;
    var name = service.name, description = service.description, image = service.image, cta = service.cta;
    var ImgComponent = ImageComponent || 'img';
    return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ".concat(className), onClick: onClick }, { children: [image && (_jsx("div", __assign({ className: "text-primary text-3xl mb-4" }, { children: _jsx(ImgComponent, __assign({ src: image.url, alt: image.alt || '', className: "w-10 h-10" }, (ImageComponent ? { width: 40, height: 40 } : {}))) }))), _jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "text-primary font-medium hover:underline" }, { children: cta.text || 'Learn more' })))] })));
};
export default BasicServiceCard;
