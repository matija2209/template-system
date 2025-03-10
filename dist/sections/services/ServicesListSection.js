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
import { SimpleListServiceCard } from '../../blocks/services/SimpleListServiceCard';
export var ServicesListSection = function (_a) {
    var services = _a.services, id = _a.id, _b = _a.className, className = _b === void 0 ? '' : _b;
    if (!services || services.length === 0) {
        return null;
    }
    return (_jsx("section", __assign({ id: id, className: "py-12 px-4 ".concat(className) }, { children: _jsx("div", __assign({ className: "container mx-auto" }, { children: _jsx("div", __assign({ className: "max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden" }, { children: services.map(function (service, index) { return (_jsx(SimpleListServiceCard, { service: service, className: index === services.length - 1 ? 'border-b-0' : '', ImageComponent: service.image || service.icon ? 'img' : undefined }, service.id || index)); }) })) })) })));
};
// Metadata for the template registry
export var ServicesListSectionMetadata = {
    id: "services-list",
    name: "Services List",
    description: "A vertical list of services with minimal styling",
    thumbnail: "/thumbnails/services-list.jpg",
    category: "services",
    blocks: ["centered-header", "service-list", "button"],
};
