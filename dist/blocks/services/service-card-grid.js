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
import ServiceCard from './service-card';
export var ServiceCardGrid = function (_a) {
    var services = _a.services, _b = _a.columns, columns = _b === void 0 ? 3 : _b, _c = _a.gap, gap = _c === void 0 ? 'md' : _c, _d = _a.variant, variant = _d === void 0 ? 'basic' : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var columnsClass = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[columns];
    var gapClass = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
    }[gap];
    return (_jsx("div", __assign({ className: "grid ".concat(columnsClass, " ").concat(gapClass, " ").concat(className) }, { children: services.map(function (service) { return (_jsx(ServiceCard, { service: service, variant: variant }, service.id)); }) })));
};
export default ServiceCardGrid;
