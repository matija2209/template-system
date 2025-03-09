# Installing the Template System

There are several ways to install and use this library in your projects:

## Option 1: Install from Local Directory

You can install the package directly from your local directory:

```bash
# In your project directory
npm install --save /Users/ziberna/Documents/Projects/template-system
```

## Option 2: Use npm link

For development, you can use npm link to create a symlink:

```bash
# In the template-system directory
cd /Users/ziberna/Documents/Projects/template-system
npm link

# In your project directory
npm link @schnellsite/template-system
```

## Option 3: Publish to npm Registry

For production use, you can publish the package to npm:

```bash
# In the template-system directory
npm login
npm publish --access public
```

Then install it in your project:

```bash
npm install --save @schnellsite/template-system
```

## Option 4: Publish to GitHub Packages

You can also publish to GitHub Packages:

1. Create a GitHub repository
2. Push your code to the repository
3. Set up GitHub Packages in your package.json
4. Publish to GitHub Packages

## Usage in Your Project

Once installed, you can import and use the library:

```tsx
import { createSection, ServicesGrid } from '@schnellsite/template-system';

// Using the factory function
const MySection = createSection('services', 'services-grid', {
  title: 'Our Services',
  subtitle: 'We offer a range of services',
  services: [...],
});

// Or using components directly
function MyPage() {
  return (
    <ServicesGrid
      title="Our Services"
      subtitle="We offer a range of services"
      services={[...]}
    />
  );
}
``` 