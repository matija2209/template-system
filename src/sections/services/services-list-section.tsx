import React from 'react';
import type { ServicesSectionProps } from '../../types/index.js';
import { SimpleListServiceCard } from '../../blocks/services/index.js';
import SectionHeading from '../../blocks/common/section-heading.js';

export const ServicesListSection: React.FC<ServicesSectionProps> = ({
  services,
  id,
  ImageComponent,
  cta,
  excludeSection,
  includeServices,
  customStyles,
  subtitle,
  title,
  type,
  contentClasses,
  extraBlocks,
  headingClasses,
  sectionClasses,
  sectionTemplate,
  subtitleClasses,
}) => {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 px-4 ${sectionClasses}`}>
      <SectionHeading
        className={headingClasses}
      >
        {title}
      </SectionHeading>
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
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
};
