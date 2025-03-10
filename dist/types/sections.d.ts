/// <reference types="react" />
import { Service } from "@schnellsite/types";
export interface SectionBaseProps {
    id?: string;
    className?: string;
    ImageComponent?: React.ComponentType<{
        src: string;
        alt: string;
        width?: number;
        height?: number;
        className?: string;
    }>;
}
export interface ServicesSectionProps extends SectionBaseProps {
    services: Service[];
}
