// Export types
export * from "./types";

// Export blocks
export { default as Container } from "./blocks/common/containers/container";
export { default as CenteredHeader } from "./blocks/common/headers/centered-header";
export { default as LeftAlignedHeader } from "./blocks/common/headers/left-aligned-header";
export { default as Button } from "./blocks/common/buttons/button";
export { default as ServiceCard } from "./blocks/services/service-card";
export { default as ServiceCardGrid } from "./blocks/services/service-card-grid";
export { default as ServiceCardList } from "./blocks/services/service-card-list";

// Export section templates
export * from "./sections/services";
// export * from './sections/hero';
// export * from './sections/about';
// export * from './sections/contact';

// Export factories
export { default as createServicesSection } from "./factory/services-factory";

// Export registry
export {
  default as templateRegistry,
  getTemplatesByCategory,
  getCategoryRegistry,
} from "./registry";

/**
 * Create a section based on type and template ID
 */
import React from "react";
import { SectionTemplate } from "./types";
import createServicesSection from "./factory/services-factory";

export const createSection = (
  type: string,
  templateId: SectionTemplate,
  props: any
): React.ReactElement | null => {
  switch (type) {
    case "services":
      return createServicesSection({ ...props, templateId });
    // Add other section types as they are implemented
    // case 'hero':
    //   return createHeroSection({ ...props, templateId });
    // case 'about':
    //   return createAboutSection({ ...props, templateId });
    // case 'contact':
    //   return createContactSection({ ...props, templateId });
    default:
      console.warn(`Section type not supported: ${type}`);
      return null;
  }
};
