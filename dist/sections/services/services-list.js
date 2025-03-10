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
import Container from '../../blocks/common/containers/container';
import LeftAlignedHeader from '../../blocks/common/headers/left-aligned-header';
import ServiceCardList from '../../blocks/services/service-card-list';
import Button from '../../blocks/common/buttons/button';
export var ServicesList = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, services = _a.services, cta = _a.cta, _b = _a.showImages, showImages = _b === void 0 ? true : _b, _c = _a.showIcons, showIcons = _c === void 0 ? true : _c, _d = _a.showPrices, showPrices = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.headerClassName, headerClassName = _f === void 0 ? '' : _f, _g = _a.contentClassName, contentClassName = _g === void 0 ? '' : _g;
    // Prepare services with the right properties
    var preparedServices = services.map(function (service) { return (__assign(__assign({}, service), { 
        // Only include icon if showIcons is true
        icon: showIcons ? service.icon : undefined, 
        // Only include image if showImages is true
        image: showImages ? service.image : undefined, 
        // Only include price if showPrices is true
        price: showPrices ? service.price : undefined })); });
    return (_jsx("section", __assign({ className: "py-16 bg-gray-50 ".concat(className) }, { children: _jsxs(Container, { children: [_jsx(LeftAlignedHeader, { title: title, subtitle: subtitle, className: headerClassName }), _jsx(ServiceCardList, { services: preparedServices, variant: "horizontal", className: contentClassName }), cta && (_jsx("div", __assign({ className: "mt-12" }, { children: _jsx(Button, __assign({ href: cta.link, variant: cta.variant || 'primary', size: cta.size || 'md' }, { children: cta.text })) })))] }) })));
};
// Metadata for the template registry
export var metadata = {
    id: 'services-list',
    name: 'Services List',
    description: 'A horizontal list layout of services with a left-aligned header',
    thumbnail: '/thumbnails/services-list.jpg',
    category: 'services',
    blocks: ['left-aligned-header', 'service-card-list', 'button'],
};
export default ServicesList;
