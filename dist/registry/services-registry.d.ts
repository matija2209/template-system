/// <reference types="react" />
/**
 * Registry of all services section templates
 */
export declare const servicesRegistry: {
    "services-cards": {
        component: import("react").FC<import("..").ServicesSectionProps>;
        id: string;
        name: string;
        description: string;
        thumbnail: string;
        category: "services";
        blocks: string[];
    };
    "services-list": {
        component: import("react").FC<import("..").ServicesSectionProps>;
        id: string;
        name: string;
        description: string;
        thumbnail: string;
        category: "services";
        blocks: string[];
    };
};
export default servicesRegistry;
