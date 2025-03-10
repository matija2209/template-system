import React from 'react';
import type { ServicesSectionProps } from '../../types/index.js';
import { BasicServiceCard } from '../../blocks/services/index.js';

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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
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