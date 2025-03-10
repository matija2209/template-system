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
export var LeftAlignedHeader = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (_jsxs("div", __assign({ className: "mb-12 ".concat(className) }, { children: [_jsx("h2", __assign({ className: "text-3xl font-bold mb-2" }, { children: title })), _jsx("div", { className: "w-16 h-1 bg-primary mb-4" }), subtitle && _jsx("p", __assign({ className: "text-xl text-gray-600 max-w-2xl" }, { children: subtitle }))] })));
};
export default LeftAlignedHeader;
