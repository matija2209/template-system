import React from 'react';
import './TemplatePreview.css';

// Import the actual components directly with relative paths
import { BasicServiceCard } from '../../../blocks/services/BasicServiceCard';
import { SimpleListServiceCard } from '../../../blocks/services/SimpleListServiceCard';

// Custom Image component that mimics Next.js Image component
const CustomImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}> = (props) => {
  const { src, alt, width, height, className, ...rest } = props;
  
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
      loading="lazy"
      style={{ objectFit: 'cover' }}
    />
  );
};

// Sample service for demonstration
// Note: Adjust the properties to match your actual Service type
const sampleService = {
  id: '1',
  name: 'Web Development',
  description: 'Custom websites built with modern technologies for optimal performance and user experience.',
  image: {
    url: 'https://via.placeholder.com/300/4a90e2/ffffff?text=Web+Dev',
    alt: 'Web Development Icon',
  },
  cta: {
    text: 'Learn more about web development',
    link: '/services/web-development',
    blockType: 'cta', // Set to 'cta' to match the expected type
  },
} as any; // Using 'as any' to bypass type checking for the preview

interface TemplatePreviewProps {
  templateType: string;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ templateType }) => {
  // Render the selected component
  const renderTemplate = () => {
    switch (templateType) {
      case 'basic-service-card':
        return (
          <div className="template-container">
            <h2 className="template-title">BasicServiceCard Component</h2>
            <div className="component-preview">
              {/* Apply any necessary global styles for proper rendering */}
              <div className="tailwind-reset">
                <BasicServiceCard 
                  service={sampleService}
                  ImageComponent={CustomImage}
                  className="component-instance"
                />
              </div>
            </div>
            <div className="component-code">
              <h3>Component Usage:</h3>
              <pre>
                {`<BasicServiceCard 
  service={service}
  ImageComponent={ImageComponent}
/>`}
              </pre>
            </div>
          </div>
        );
      case 'simple-list-service-card':
        return (
          <div className="template-container">
            <h2 className="template-title">SimpleListServiceCard Component</h2>
            <div className="component-preview">
              {/* Apply any necessary global styles for proper rendering */}
              <div className="tailwind-reset">
                <SimpleListServiceCard 
                  service={sampleService}
                  ImageComponent={CustomImage}
                  className="component-instance"
                />
              </div>
            </div>
            <div className="component-code">
              <h3>Component Usage:</h3>
              <pre>
                {`<SimpleListServiceCard 
  service={service}
  ImageComponent={ImageComponent}
/>`}
              </pre>
            </div>
          </div>
        );
      default:
        return (
          <div className="template-placeholder">
            Select a component to preview
          </div>
        );
    }
  };

  return (
    <div className="template-preview">
      {renderTemplate()}
    </div>
  );
};

export default TemplatePreview; 