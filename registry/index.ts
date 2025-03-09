import { TemplateRegistry, CategoryRegistry } from "../types";
import servicesRegistry from "./services-registry";

/**
 * Combined registry of all section templates
 */
export const templateRegistry: TemplateRegistry = {
  ...servicesRegistry,
  // Add other registries as they are implemented
  // ...heroRegistry,
  // ...aboutRegistry,
  // ...contactRegistry,
};

/**
 * Get all templates for a specific category
 */
export const getTemplatesByCategory = (category: string): TemplateRegistry => {
  return Object.entries(templateRegistry)
    .filter(([_, template]) => template.category === category)
    .reduce((acc, [id, template]) => {
      acc[id] = template;
      return acc;
    }, {} as TemplateRegistry);
};

/**
 * Organize templates by category
 */
export const getCategoryRegistry = (): CategoryRegistry => {
  return Object.entries(templateRegistry).reduce((acc, [id, template]) => {
    const { category } = template;

    if (!acc[category]) {
      acc[category] = {};
    }

    acc[category][id] = template;
    return acc;
  }, {} as CategoryRegistry);
};

export default templateRegistry;
