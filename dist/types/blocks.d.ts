/// <reference types="react" />
import { Service } from "@schnellsite/types";
export interface ServiceCardProps {
    service: Service;
    className?: string;
    ImageComponent?: React.ElementType;
    onClick?: () => void;
}
