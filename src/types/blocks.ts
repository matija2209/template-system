// Block component type definitions
import * as React from 'react';
import type { Service } from "@schnellsite/types";
import type { ImageComponentProps } from "./sections";

// Service block types
export interface ServiceCardProps {
  service: Service;
  className?: string;
  ImageComponent?: React.ComponentType<ImageComponentProps>;
  onClick?: () => void;
}
