# @schnellsite/template-system

A flexible, SEO-friendly template system for static site generation using a block-based composition pattern.

## Overview

This package provides a system for creating and managing section templates for static websites. It uses a block-based composition pattern where:

- **Blocks** are atomic, reusable UI components (headers, card grids, etc.)
- **Section Templates** are compositions of these blocks into complete layouts
- **Factory Functions** create the appropriate template based on configuration
- **Static Generation** ensures all content is pre-rendered for SEO

## Documentation

For detailed documentation, please refer to the following resources:

- [Installation Guide](docs/INSTALL.md) - How to install and use this package
- [Implementation Summary](docs/SUMMARY.md) - Overview of the implemented components
- [Image Component Usage](docs/image-component-usage.md) - How to use image components in Next.js and React

## Installation

```bash
npm install @schnellsite/template-system
```

For detailed installation instructions, see the [Installation Guide](docs/INSTALL.md).

## Usage

```javascript
import { createSection, createServicesSection, createTestimonialSection } from '@schnellsite/template-system';

// Create a section using the generic factory function
const servicesSection = createSection('services', 'services-cards', {
  services: [...],
  className: 'my-custom-class'
});

// Or use the specific factory function
const testimonialsSection = createTestimonialSection({
  templateId: 'testimonial-single',
  testimonials: [...],
  className: 'my-custom-class'
});
```

## Development

### Local Development

To work on this package locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the package:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```

### Working with Client Projects

If you're developing this package alongside a client project, you can use the following scripts to link them together:

#### From the template-system project:

```bash
# Build and link to the client project
npm run build:link
```

#### From the client project:

```bash
# Link to the local template-system
./scripts/switch-to-dev.sh
```

This will create a symbolic link to the compiled output (dist directory) of the template-system, ensuring that the client project uses the latest changes.

### Important Notes

- Always use the `.js` extension in import statements, even for TypeScript files
- Make sure to build the package before linking to client projects
- When importing from the package, use named imports:
  ```javascript
  import { createSection } from '@schnellsite/template-system';
  ```

## Available Templates

### Services

- `services-cards`: Displays services in a grid of cards
- `services-list`: Displays services in a vertical list

### Testimonials

- `default`: Displays testimonials in a carousel format
- `testimonial-single`: Displays one testimonial at a time with navigation controls

## Template Categories

- **Services**: Templates for displaying services
- **Hero**: Templates for hero sections (coming soon)
- **About**: Templates for about sections (coming soon)
- **Contact**: Templates for contact sections (coming soon)

## Block Components

### Common Blocks

- **Container**: Responsive container with configurable width and padding
- **CenteredHeader**: Centered heading with title and optional subtitle
- **LeftAlignedHeader**: Left-aligned heading with title, subtitle, and accent line
- **Button**: Versatile button component with multiple variants and sizes

### Service Blocks

- **ServiceCard**: Individual service card with multiple display variants (supports both Next.js Image and standard img tag)
- **ServiceCardGrid**: Grid layout for service cards
- **ServiceCardList**: List layout for service cards

### Environment-Aware Components

Some components like `ServiceCard` are designed to work in both Next.js and React environments:

```tsx
// In Next.js
import Image from 'next/image';
import { ServiceCard } from 'template-package';

<ServiceCard 
  service={serviceData} 
  ImageComponent={Image} 
/>

// In React
import { ServiceCard } from 'template-package';

<ServiceCard 
  service={serviceData} 
  // No need to pass ImageComponent, it will default to 'img'
/>
```

For more details, see the [Image Component Usage](docs/image-component-usage.md) guide.

## SEO Benefits

This template system is designed with SEO in mind:

1. **Static Generation**: All templates are statically generated at build time
2. **Semantic HTML**: Uses appropriate heading levels and semantic elements
3. **Content in Initial HTML**: All content is present in the initial HTML
4. **Minimal JavaScript**: Content doesn't rely on client-side JavaScript
5. **Fast Loading**: Static content loads quickly, improving SEO signals

## Extending the System

### Creating a New Block

```tsx
// 1. Define the component props interface
export interface FeatureListProps {
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  layout?: "vertical" | "horizontal";
  className?: string;
}

// 2. Implement the component
export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  layout = "vertical",
  className = "",
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex ${
            layout === "vertical" ? "flex-col" : "flex-row items-start"
          } gap-4`}
        >
          {/* Feature content */}
        </div>
      ))}
    </div>
  );
};
```

### Creating a New Template

```tsx
// 1. Import the necessary blocks
import { LeftAlignedHeader } from "../../blocks/common/headers/left-aligned-header";
import { FeatureList } from "../../blocks/features/feature-list";
import { Container } from "../../blocks/common/containers/container";

// 2. Define the template props
export interface FeaturesOneProps {
  title: string;
  subtitle?: string;
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  className?: string;
}

// 3. Implement the template
export const FeaturesOne: React.FC<FeaturesOneProps> = ({
  title,
  subtitle,
  features,
  className = "",
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <Container>
        <LeftAlignedHeader title={title} subtitle={subtitle} />
        <FeatureList features={features} layout="horizontal" />
      </Container>
    </section>
  );
};

// 4. Export metadata for the registry
export const metadata = {
  id: "features-one",
  name: "Features with Icons",
  description: "Horizontal feature list with left-aligned header",
  thumbnail: "/thumbnails/features-one.jpg",
  blocks: ["left-aligned-header", "feature-list"],
  category: "features",
};
```

## License

MIT


`npm install git+ssh://git@github.com/matija2209/schnellsite_types.git --save`