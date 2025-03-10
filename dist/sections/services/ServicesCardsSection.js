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
import { BasicServiceCard } from '../../blocks/services/BasicServiceCard';
export var ServicesCardsSection = function (_a) {
    var services = _a.services, ImageComponent = _a.ImageComponent, id = _a.id, _b = _a.className, className = _b === void 0 ? '' : _b;
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsx("section", __assign({ id: id, className: "py-12 px-4 ".concat(className) }, { children: _jsx("div", __assign({ className: "container mx-auto" }, { children: _jsx("div", __assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, { children: services.map(function (service, index) { return (_jsx(BasicServiceCard, { service: service, className: "h-full", ImageComponent: ImageComponent }, service.id || index)); }) })) })) })));
};
// Metadata for the template registry
export var ServicesCardsSectionMetadata = {
    id: "services-cards",
    name: "Services Cards",
    description: "A grid layout of service cards with images",
    thumbnail: "/thumbnails/services-cards.jpg",
    category: "services",
    blocks: ["centered-header", "service-card-grid", "button"],
};
