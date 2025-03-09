import React from 'react';
import { ServiceCardProps } from '../../types';

export const SimpleListServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className = '',
  onClick,
  ImageComponent,
}) => {
  const { name, cta, image, icon, description } = service;
  const ImgComponent = ImageComponent || 'img';
  
  // Determine which visual to display (image or icon)
  const visualElement = image || icon;

  return (
    <div 
      className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {visualElement && ImageComponent && (
            <div className="mr-3 flex-shrink-0">
              <ImgComponent 
                src={visualElement.url} 
                alt={visualElement.alt || ''} 
                className={`w-10 h-10 ${icon ? '' : 'object-cover rounded'}`} 
                {...(ImageComponent ? { width: 40, height: 40 } : {})}
              />
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
