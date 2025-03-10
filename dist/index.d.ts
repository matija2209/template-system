export * from "./types";
export * from "./sections/services";
export { default as createServicesSection } from "./factory/services-factory";
import React from "react";
import { ServiceMenuSectionTemplate } from "@schnellsite/types";
export declare const createSection: (type: string, templateId: ServiceMenuSectionTemplate, props: any) => React.ReactElement | null;
