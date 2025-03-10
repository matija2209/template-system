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
export var IconServiceCard = function (_a) {
    var service = _a.service, _b = _a.className, className = _b === void 0 ? '' : _b, ImageComponent = _a.ImageComponent, onClick = _a.onClick;
    var name = service.name, description = service.description, icon = service.icon, cta = service.cta;
    var ImgComponent = ImageComponent || 'img';
    var handleClick = function () {
        if (onClick) {
            onClick();
        }
        else if (cta === null || cta === void 0 ? void 0 : cta.link) {
            window.location.href = cta.link;
        }
    };
    return (_jsxs("div", __assign({ className: "text-center p-6 hover:bg-gray-50 rounded-lg transition-colors ".concat(className, " ").concat((onClick || (cta === null || cta === void 0 ? void 0 : cta.link)) ? 'cursor-pointer' : ''), onClick: handleClick }, { children: [icon && (_jsx("div", __assign({ className: "mx-auto mb-4" }, { children: _jsx(ImgComponent, __assign({ src: icon.url, alt: icon.alt || '', className: "w-16 h-16 mx-auto" }, (ImageComponent ? { width: 64, height: 64 } : {}))) }))), _jsx("h3", __assign({ className: "text-lg font-semibold mb-2" }, { children: name })), description && (_jsx("p", __assign({ className: "text-gray-600 text-sm mb-3 line-clamp-2" }, { children: description }))), cta && (_jsx("a", __assign({ href: cta.link, className: "text-sm text-primary font-medium" }, { children: cta.text || 'Learn more' })))] })));
};
export default IconServiceCard;
