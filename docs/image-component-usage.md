# Using the ServiceCard Component in Next.js and React

This document explains how to use the `ServiceCard` component in both Next.js and React environments, particularly focusing on image handling differences.

## Background

Next.js provides an optimized `Image` component (`next/image`) that offers several benefits over the standard HTML `img` tag:

- Automatic image optimization
- Lazy loading
- Preventing layout shifts with proper sizing
- Responsive images
- Image format conversion

However, in a standard React application without Next.js, this component is not available, and we need to use the standard HTML `img` tag.

## The Solution: Environment-Aware Components

Our `ServiceCard` component is designed to work in both environments by accepting an optional `ImageComponent` prop. This allows you to:

1. Pass Next.js's `Image` component when using the component in a Next.js application
2. Omit the prop when using it in a standard React application (it will default to the HTML `img` tag)

## Usage Examples

### In Next.js

```tsx
import Image from 'next/image';
import { ServiceCard } from '../blocks/services/service-card';

const MyNextJsComponent = () => {
  const serviceData = {
    id: '1',
    name: 'Service Name',
    description: 'Service description goes here',
    icon: {
      url: '/images/icon.svg',
      alt: 'Service Icon'
    },
    image: {
      url: '/images/service.jpg',
      alt: 'Service Image'
    },
    cta: {
      text: 'Learn More',
      link: '/services/details'
    }
  };

  return (
    <ServiceCard 
      service={serviceData} 
      ImageComponent={Image} 
      variant="detailed"
    />
  );
};

export default MyNextJsComponent;
```

### In React

```tsx
import { ServiceCard } from '../blocks/services/service-card';

const MyReactComponent = () => {
  const serviceData = {
    id: '1',
    name: 'Service Name',
    description: 'Service description goes here',
    icon: {
      url: '/images/icon.svg',
      alt: 'Service Icon'
    },
    image: {
      url: '/images/service.jpg',
      alt: 'Service Image'
    },
    cta: {
      text: 'Learn More',
      link: '/services/details'
    }
  };

  return (
    <ServiceCard 
      service={serviceData}
      // No need to pass ImageComponent, it will default to 'img'
      variant="detailed"
    />
  );
};

export default MyReactComponent;
```

## How It Works

The `ServiceCard` component handles the different image components with the following approach:

1. It accepts an optional `ImageComponent` prop
2. It sets a default image component using: `const ImgComponent = ImageComponent || 'img'`
3. It uses this component for rendering all images
4. It conditionally adds Next.js-specific props when the `ImageComponent` is provided:

```tsx
<ImgComponent 
  src={icon.url} 
  alt={icon.alt || ''} 
  className="w-10 h-10" 
  {...(ImageComponent ? { width: 40, height: 40 } : {})}
/>
```

## Benefits

This approach provides several benefits:

1. **Code Reusability**: The same component can be used in both Next.js and React applications
2. **Optimized Images**: Next.js applications get the benefits of the optimized Image component
3. **Graceful Fallback**: React applications use the standard img tag without any issues
4. **Future-Proof**: If you migrate from React to Next.js (or vice versa), your components will work without modification

## Implementation Details

The `ServiceCardProps` interface in `types/blocks.ts` includes the optional `ImageComponent` prop:

```tsx
export interface ServiceCardProps {
  service: Service;
  variant?: "basic" | "detailed" | "pricing";
  className?: string;
  ImageComponent?: React.ElementType;
}
```

This pattern can be applied to other components that need to render images in both Next.js and React environments. 