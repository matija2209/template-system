# Template Package

A flexible, SEO-friendly template system for static site generation using a block-based composition pattern.

## Overview

This package provides a system for creating and managing section templates for static websites. It uses a block-based composition pattern where:

- **Blocks** are atomic, reusable UI components (headers, card grids, etc.)
- **Section Templates** are compositions of these blocks into complete layouts
- **Factory Functions** create the appropriate template based on configuration
- **Static Generation** ensures all content is pre-rendered for SEO

## Installation

```bash
npm install template-package
# or
yarn add template-package
```

## Usage

### Basic Usage

```tsx
import { createSection } from "template-package";

function SitePage({ siteData }) {
  return (
    <main>
      {siteData.sections.map((section) =>
        createSection(section.type, section.sectionTemplate, {
          title: section.title,
          subtitle: section.subtitle,
          // Pass the appropriate data based on section type
          ...(section.type === "services" && {
            services: siteData.content.services.services,
          }),
          className: section.sectionClasses,
        })
      )}
    </main>
  );
}
```

### Using Specific Templates

```tsx
import { ServicesGrid, ServicesList } from "template-package";

function ServicesPage({ services }) {
  return (
    <div>
      <ServicesGrid
        title="Our Services"
        subtitle="We offer a range of services to meet your needs"
        services={services}
        columns={3}
        showIcons={true}
      />

      <ServicesList
        title="Featured Services"
        subtitle="Our most popular services"
        services={services.filter((s) => s.featured)}
        showImages={true}
      />
    </div>
  );
}
```

### Using the Template Registry

```tsx
import { templateRegistry, getTemplatesByCategory } from "template-package";

// Get all service templates
const serviceTemplates = getTemplatesByCategory("services");

// Render a specific template
function TemplateRenderer({ templateId, data }) {
  const Template = templateRegistry[templateId]?.component;

  if (!Template) {
    return <div>Template not found</div>;
  }

  return <Template {...data} />;
}
```

## Template Categories

- **Services**: Templates for displaying services
- **Hero**: Templates for hero sections (coming soon)
- **About**: Templates for about sections (coming soon)
- **Contact**: Templates for contact sections (coming soon)

## Available Templates

### Services Templates

- **services-grid**: A grid layout of service cards with a centered header
- **services-list**: A horizontal list layout of services with a left-aligned header
- **services-cards**: A grid layout of service cards with images
- **services-icons**: A grid layout of service cards with icons
- **services-tabs**: Services organized in tabs by category

## Block Components

### Common Blocks

- **Container**: Responsive container with configurable width and padding
- **CenteredHeader**: Centered heading with title and optional subtitle
- **LeftAlignedHeader**: Left-aligned heading with title, subtitle, and accent line
- **Button**: Versatile button component with multiple variants and sizes

### Service Blocks

- **ServiceCard**: Individual service card with multiple display variants
- **ServiceCardGrid**: Grid layout for service cards
- **ServiceCardList**: List layout for service cards

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
