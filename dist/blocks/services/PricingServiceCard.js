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
export var PricingServiceCard = function (_a) {
    var service = _a.service, _b = _a.className, className = _b === void 0 ? '' : _b, ImageComponent = _a.ImageComponent, onClick = _a.onClick;
    var name = service.name, description = service.description, price = service.price, cta = service.cta;
    return (_jsxs("div", __assign({ className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100 ".concat(className), onClick: onClick }, { children: [_jsx("h3", __assign({ className: "text-xl font-semibold mb-2" }, { children: name })), price && (_jsx("div", __assign({ className: "text-2xl font-bold text-primary mb-4" }, { children: price }))), description && _jsx("p", __assign({ className: "text-gray-600 mb-4" }, { children: description })), cta && (_jsx("a", __assign({ href: cta.link, className: "block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary-dark transition-colors" }, { children: cta.text || 'Select' })))] })));
};
export default PricingServiceCard;
