// Export types
export * from "./types";

// Export section templates
export * from "./sections/services";


// Export factories
export { default as createServicesSection } from "./factory/services-factory";


import React from "react";

import createServicesSection from "./factory/services-factory";
import { ServiceMenuSectionTemplate } from "@schnellsite/types";


export const createSection = (
  type: string,
  templateId: ServiceMenuSectionTemplate,
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
