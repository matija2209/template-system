import React from 'react';
import type { ServicesSectionProps } from '../../types';
import { SimpleListServiceCard } from '../../blocks/services/SimpleListServiceCard';

export const ServicesListSection: React.FC<ServicesSectionProps> = ({
  services,
  id,
  ImageComponent,
  className = '',
}) => {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          {services.map((service, index) => (
            <SimpleListServiceCard
              key={service.id || index}
              service={service}
              className={index === services.length - 1 ? 'border-b-0' : ''}
              ImageComponent={ImageComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
