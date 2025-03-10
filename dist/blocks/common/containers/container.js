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
import { jsx as _jsx } from "react/jsx-runtime";
export var Container = function (_a) {
    var children = _a.children, _b = _a.maxWidth, maxWidth = _b === void 0 ? 'lg' : _b, _c = _a.padding, padding = _c === void 0 ? 'md' : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var maxWidthClass = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        full: 'max-w-full',
    }[maxWidth];
    var paddingClass = {
        none: 'px-0',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
    }[padding];
    return (_jsx("div", __assign({ className: "mx-auto ".concat(maxWidthClass, " ").concat(paddingClass, " ").concat(className) }, { children: children })));
};
export default Container;
