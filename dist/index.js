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
// Export types
export * from "./types";
// Export section templates
export * from "./sections/services";
// Export factories
export { default as createServicesSection } from "./factory/services-factory";
import createServicesSection from "./factory/services-factory";
export var createSection = function (type, templateId, props) {
    switch (type) {
        case "services":
            return createServicesSection(__assign(__assign({}, props), { templateId: templateId }));
        // Add other section types as they are implemented
        // case 'hero':
        //   return createHeroSection({ ...props, templateId });
        // case 'about':
        //   return createAboutSection({ ...props, templateId });
        // case 'contact':
        //   return createContactSection({ ...props, templateId });
        default:
            console.warn("Section type not supported: ".concat(type));
            return null;
    }
};
