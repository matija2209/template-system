import { TemplateRegistry } from "../types";
/**
 * Combined registry of all section templates
 */
export declare const templateRegistry: TemplateRegistry;
/**
 * Get all templates for a specific category
 */
export declare const getTemplatesByCategory: (category: string) => TemplateRegistry;
/**
 * Organize templates by category
 */
export declare const getCategoryRegistry: () => CategoryRegistry;
export default templateRegistry;
