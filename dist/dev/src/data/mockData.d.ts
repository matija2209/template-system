export interface MockService {
    id: string;
    name: string;
    description?: string;
    image?: {
        url: string;
        alt?: string;
    };
    cta?: {
        text?: string;
        link: string;
        blockType?: string;
    };
}
export declare const mockServices: MockService[];
export declare const templateTypes: {
    id: string;
    name: string;
}[];
