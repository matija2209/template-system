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
import { ServicesCardsSection, ServicesListSection } from "../sections/services";
import { ServicesCardsSectionMetadata, ServicesListSectionMetadata } from "../sections/services";
/**
 * Registry of all services section templates
 */
export var servicesRegistry = {
    "services-cards": __assign(__assign({}, ServicesCardsSectionMetadata), { component: ServicesCardsSection }),
    "services-list": __assign(__assign({}, ServicesListSectionMetadata), { component: ServicesListSection }),
    // Keep other entries but comment them out until components are implemented
    /*
    "services-grid": {
      ...ServicesGridMetadata,
      component: ServicesGrid,
    },
    "services-icons": {
      id: "services-icons",
      name: "Services with Icons",
      description: "A grid layout of service cards with icons",
      thumbnail: "/thumbnails/services-icons.jpg",
      category: "services" as const,
      blocks: ["centered-header", "service-card-grid", "button"],
      component: ServicesGrid, // Reuse ServicesGrid with different props
    },
    "services-tabs": {
      id: "services-tabs",
      name: "Services with Tabs",
      description: "Services organized in tabs by category",
      thumbnail: "/thumbnails/services-tabs.jpg",
      category: "services" as const,
      blocks: ["centered-header", "service-tabs", "button"],
      component: ServicesList, // Fallback to ServicesList until implemented
    },
    */
};
export default servicesRegistry;
