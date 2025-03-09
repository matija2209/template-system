import { TemplateRegistry } from "../types";
import { ServicesGrid, ServicesList } from "../sections/services";
import {
  ServicesGridMetadata,
  ServicesListMetadata,
} from "../sections/services";

/**
 * Registry of all services section templates
 */
export const servicesRegistry: TemplateRegistry = {
  "services-grid": {
    ...ServicesGridMetadata,
    component: ServicesGrid,
  },
  "services-list": {
    ...ServicesListMetadata,
    component: ServicesList,
  },
  "services-cards": {
    id: "services-cards",
    name: "Services Cards",
    description: "A grid layout of service cards with images",
    thumbnail: "/thumbnails/services-cards.jpg",
    category: "services" as const,
    blocks: ["centered-header", "service-card-grid", "button"],
    component: ServicesGrid, // Reuse ServicesGrid with different props
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
};

export default servicesRegistry;
