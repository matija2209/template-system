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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export var Button = function (_a) {
    var children = _a.children, href = _a.href, onClick = _a.onClick, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, icon = _a.icon, _f = _a.iconPosition, iconPosition = _f === void 0 ? 'left' : _f;
    var baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors';
    var variantClasses = {
        // @ts-ignore
        primary: 'bg-primary text-white hover:bg-primary-dark',
        // @ts-ignore
        secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        // @ts-ignore
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
        // @ts-ignore
        text: 'bg-transparent text-primary hover:underline',
    }[variant];
    var sizeClasses = {
        // @ts-ignore
        sm: 'text-sm py-2 px-4',
        // @ts-ignore
        md: 'text-base py-2 px-6',
        // @ts-ignore
        lg: 'text-lg py-3 px-8',
    }[size];
    var widthClass = fullWidth ? 'w-full' : '';
    var buttonClasses = "".concat(baseClasses, " ").concat(variantClasses, " ").concat(sizeClasses, " ").concat(widthClass, " ").concat(className);
    var iconElement = icon ? (_jsx("span", __assign({ className: "".concat(iconPosition === 'left' ? 'mr-2' : 'ml-2') }, { children: _jsx("i", { className: icon }) }))) : null;
    var content = (_jsxs(_Fragment, { children: [icon && iconPosition === 'left' && iconElement, children, icon && iconPosition === 'right' && iconElement] }));
    if (href) {
        return (_jsx("a", __assign({ href: href, className: buttonClasses }, { children: content })));
    }
    return (_jsx("button", __assign({ type: "button", onClick: onClick, className: buttonClasses }, { children: content })));
};
export default Button;
