import * as React from "react";
import type { Service } from "@schnellsite/types";
export interface ServiceCardProps {
    service: Service;
    ImageComponent?: React.ComponentType<ImageComponentProps>;
    onClick?: () => void;
    transparentCards?: boolean;
}
export interface SiteFooterProps {
    LinkComponent?: React.ComponentType<LinkComponentProps>;
    ImageComponent?: React.ComponentType<ImageComponentProps>;
}
export interface ImageComponentProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: "blur" | "empty";
    style?: React.CSSProperties;
    sizes?: string;
    loading?: "lazy" | "eager";
    blurDataURL?: string;
    fill?: boolean;
    [key: string]: any;
}
export interface LinkComponentProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}
