// Block component type definitions
import { Service } from "@schnellsite/types";

// Service block types
export interface ServiceCardProps {
  service: Service;
  className?: string;
  ImageComponent?: React.ElementType;
  onClick?: () => void;
}
