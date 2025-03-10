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
import CenteredHeader from '../../blocks/common/headers/centered-header';
import ServiceCardGrid from '../../blocks/services/service-card-grid';
import Button from '../../blocks/common/buttons/button';
export var ServicesGrid = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, services = _a.services, cta = _a.cta, _b = _a.columns, columns = _b === void 0 ? 3 : _b, _c = _a.showImages, showImages = _c === void 0 ? false : _c, _d = _a.showIcons, showIcons = _d === void 0 ? true : _d, _e = _a.showPrices, showPrices = _e === void 0 ? false : _e, _f = _a.className, className = _f === void 0 ? '' : _f, _g = _a.headerClassName, headerClassName = _g === void 0 ? '' : _g, _h = _a.contentClassName, contentClassName = _h === void 0 ? '' : _h;
    // Determine the variant based on what to show
    var variant = 'basic';
    if (showPrices) {
        variant = 'pricing';
    }
    else if (showImages) {
        variant = 'detailed';
    }
    // Prepare services with the right properties
    var preparedServices = services.map(function (service) { return (__assign(__assign({}, service), { 
        // Only include icon if showIcons is true
        icon: showIcons ? service.icon : undefined, 
        // Only include image if showImages is true
        image: showImages ? service.image : undefined, 
        // Only include price if showPrices is true
        price: showPrices ? service.price : undefined })); });
    return (_jsx("section", __assign({ className: "py-16 ".concat(className) }, { children: _jsxs(Container, { children: [_jsx(CenteredHeader, { title: title, subtitle: subtitle, className: headerClassName }), _jsx(ServiceCardGrid, { services: preparedServices, columns: columns, variant: variant, className: contentClassName }), cta && (_jsx("div", __assign({ className: "mt-12 text-center" }, { children: _jsx(Button, __assign({ href: cta.link, variant: cta.variant || 'primary', size: cta.size || 'md' }, { children: cta.text })) })))] }) })));
};
// Metadata for the template registry
export var metadata = {
    id: 'services-grid',
    name: 'Services Grid',
    description: 'A grid layout of service cards with a centered header',
    thumbnail: '/thumbnails/services-grid.jpg',
    category: 'services',
    blocks: ['centered-header', 'service-card-grid', 'button'],
};
export default ServicesGrid;
