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
  design,
  visibility,
  customStyles,
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
    <section id={id} className={twMerge(`py-12 px-4`, sectionClasses?.replaceAll(",", " "))}>
      <SectionHeading
        className={twMerge("max-w-7xl mx-auto", headingClasses?.replaceAll(",", " "))}
      >
        {title}
      </SectionHeading>
      <div className="max-w-7xl mx-auto">
        <div className={twMerge(design?.gridColumns ? `md:${design.gridColumns}` : "bg-white", "service-cards-grid grid gap-4 grid-cols-1 ")}>
          {services.map((service, index) => (
            <BasicServiceCard
              transparentCards={design?.transparentCards}
              key={service.id || index}
              service={service}
              ImageComponent={ImageComponent}
            />
          ))}
        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
};