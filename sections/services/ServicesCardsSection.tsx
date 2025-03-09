import React from 'react';
import { ServicesSectionProps } from '../../types';
import { BasicServiceCard } from '../../blocks/services/BasicServiceCard';

export const ServicesCardsSection: React.FC<ServicesSectionProps> = ({
  services,
  ImageComponent,
  id,
  className = '',
}) => {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <BasicServiceCard
              key={service.id || index}
              service={service}
              className="h-full"
              ImageComponent={ImageComponent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Metadata for the template registry
export const ServicesCardsSectionMetadata = {
  id: "services-cards",
  name: "Services Cards",
  description: "A grid layout of service cards with images",
  thumbnail: "/thumbnails/services-cards.jpg",
  category: "services" as const,
  blocks: ["centered-header", "service-card-grid", "button"],
}; 