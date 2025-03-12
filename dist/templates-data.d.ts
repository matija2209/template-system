/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export declare const getAvailableTemplates: () => {
    services: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
    testimonials: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
    about: {
        id: string;
    }[];
    faq: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
    contact: {
        id: string;
        value: string;
        name: string;
        description: string;
    }[];
};
