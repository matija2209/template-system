import React from 'react';
import type { ServiceCardProps } from '../../types';

export const SimpleListServiceCard: React.FC<ServiceCardProps> = ({
  service,

  onClick,
  ImageComponent,
}) => {
  const { name, cta, image, icon, description } = service;

  // Determine which visual to display (image or icon)
  const visualElement = image || icon;

  // Render the visual (image or icon) based on whether a custom ImageComponent is provided or not
  const renderVisual = () => {
    if (!visualElement || !visualElement.url) return null;

    // Ensure alt and src are always strings
    const altText = visualElement.alt || '';
    const srcUrl = visualElement.url;

    if (ImageComponent) {
      // When a custom ImageComponent is provided (like Next.js Image)
      const CustomImage = ImageComponent;
      return (
        <CustomImage
          src={srcUrl}
          alt={altText}
          width={40}
          height={40}
          className={`w-10 h-10 ${icon ? '' : 'object-cover rounded'}`}
        />
      );
    } else {
      // When using the default img tag
      return (
        <img
          src={srcUrl}
          alt={altText}
          className={`w-10 h-10 ${icon ? '' : 'object-cover rounded'}`}
          loading="lazy"
        />
      );
    }
  };

  return (
    <div
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 `}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {visualElement && (
            <div className="mr-3 flex-shrink-0">
              {renderVisual()}
            </div>
          )}
          <div>
            <h3 className="font-medium">{name}</h3>
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>
        </div>
        {cta && (
          <a href={cta.link} className="text-sm text-primary ml-4 flex-shrink-0">
            {cta.text || 'View'}
          </a>
        )}
      </div>
    </div>
  );
};

export default SimpleListServiceCard;
