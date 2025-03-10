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
export var SimpleListServiceCard = function (_a) {
    var service = _a.service, _b = _a.className, className = _b === void 0 ? '' : _b, onClick = _a.onClick, ImageComponent = _a.ImageComponent;
    var name = service.name, cta = service.cta, image = service.image, icon = service.icon, description = service.description;
    var ImgComponent = ImageComponent || 'img';
    // Determine which visual to display (image or icon)
    var visualElement = image || icon;
    return (_jsx("div", __assign({ className: "p-4 border-b border-gray-100 hover:bg-gray-50 ".concat(className), onClick: onClick }, { children: _jsxs("div", __assign({ className: "flex justify-between items-center" }, { children: [_jsxs("div", __assign({ className: "flex items-center" }, { children: [visualElement && ImageComponent && (_jsx("div", __assign({ className: "mr-3 flex-shrink-0" }, { children: _jsx(ImgComponent, __assign({ src: visualElement.url, alt: visualElement.alt || '', className: "w-10 h-10 ".concat(icon ? '' : 'object-cover rounded') }, (ImageComponent ? { width: 40, height: 40 } : {}))) }))), _jsxs("div", { children: [_jsx("h3", __assign({ className: "font-medium" }, { children: name })), description && _jsx("p", __assign({ className: "text-sm text-gray-600 mt-1" }, { children: description }))] })] })), cta && (_jsx("a", __assign({ href: cta.link, className: "text-sm text-primary ml-4 flex-shrink-0" }, { children: cta.text || 'View' })))] })) })));
};
export default SimpleListServiceCard;
