import React from 'react';
import { ServiceCardProps } from '../../types';

export const BasicServiceCard: React.FC<ServiceCardProps> = ({
  service,
  className = '',
  ImageComponent,
  onClick,
}) => {
  const { name, description, image, cta } = service;
  const ImgComponent = ImageComponent || 'img';

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="text-primary text-3xl mb-4">
          <ImgComponent
            src={image.url}
            alt={image.alt || ''}
            className="w-10 h-10"
            {...(ImageComponent ? { width: 40, height: 40 } : {})}
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {cta && (
        <a href={cta.link} className="text-primary font-medium hover:underline">
          {cta.text || 'Learn more'}
        </a>
      )}
    </div>
  );
};

export default BasicServiceCard;
