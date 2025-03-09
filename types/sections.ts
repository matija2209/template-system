// Section template type definitions
import { Service } from "@schnellsite/types";

// Base section props that all sections share
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

// Services section props
export interface ServicesSectionProps extends SectionBaseProps {
  services: Service[];
}