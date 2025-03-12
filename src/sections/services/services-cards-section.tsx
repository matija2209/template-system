import React from 'react';
import type { ServicesSectionProps } from '../../types/index.js';
import { BasicServiceCard } from '../../blocks/services/index.js';
import SectionHeading from '../../blocks/common/section-heading.js';
import { twMerge } from 'tailwind-merge';

export const ServicesCardsSection: React.FC<ServicesSectionProps> = ({
  services,
  cta,
  excludeSection,
  includeServices,
  subtitle,
  title,
  type,
  contentClasses,
  extraBlocks,
  headingClasses,
  sectionClasses,
  sectionTemplate,
  subtitleClasses,
  ImageComponent,
  id,
}) => {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 px-4 ${sectionClasses}`}>
      <SectionHeading
        className={twMerge("max-w-7xl mx-auto", headingClasses)}
      >
        {title}
      </SectionHeading>
      <div className="max-w-7xl mx-auto">
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