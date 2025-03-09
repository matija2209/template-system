import React from 'react';
import { ServicesSectionProps } from '../../types';
import { SimpleListServiceCard } from '../../blocks/services/SimpleListServiceCard';

export const ServicesListSection: React.FC<ServicesSectionProps> = ({
  services,
  id,
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
              ImageComponent={service.image || service.icon ? 'img' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Metadata for the template registry
export const ServicesListSectionMetadata = {
  id: "services-list",
  name: "Services List",
  description: "A vertical list of services with minimal styling",
  thumbnail: "/thumbnails/services-list.jpg",
  category: "services" as const,
  blocks: ["centered-header", "service-list", "button"],
}; 