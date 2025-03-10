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
import servicesRegistry from "./services-registry";
/**
 * Combined registry of all section templates
 */
export var templateRegistry = __assign({}, servicesRegistry);
/**
 * Get all templates for a specific category
 */
export var getTemplatesByCategory = function (category) {
    return Object.entries(templateRegistry)
        .filter(function (_a) {
        var _ = _a[0], template = _a[1];
        return template.category === category;
    })
        .reduce(function (acc, _a) {
        var id = _a[0], template = _a[1];
        acc[id] = template;
        return acc;
    }, {});
};
/**
 * Organize templates by category
 */
export var getCategoryRegistry = function () {
    return Object.entries(templateRegistry).reduce(function (acc, _a) {
        var id = _a[0], template = _a[1];
        var category = template.category;
        if (!acc[category]) {
            acc[category] = {};
        }
        acc[category][id] = template;
        return acc;
    }, {});
};
export default templateRegistry;
