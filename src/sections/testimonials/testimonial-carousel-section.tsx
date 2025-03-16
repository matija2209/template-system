import React from 'react';
import type { TestimonialsSectionProps } from '../../types/index.js';
import { TestimonialCarouselCoordinator } from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';

export const TestimonialCarouselSection: React.FC<TestimonialsSectionProps> = (props) => {
  const { customStyles, testimonials, id, sectionClasses, title, subtitle, headingClasses, subtitleClasses, includeTestimonials } = props;


  return (
    <section id={id} className={twMerge(`py-16 px-4 bg-gray-50`, sectionClasses)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={twMerge("text-3xl font-bold mb-4", headingClasses?.replaceAll(",", " "))}>{title}</h2>}
            {subtitle && <p className={twMerge("text-lg text-gray-600", subtitleClasses?.replaceAll(",", " "))}>{subtitle}</p>}
          </div>
        )}
        {includeTestimonials && (
          <div className="max-w-7xl mx-auto">
            <TestimonialCarouselCoordinator
              {...props}
            />
          </div>
        )}
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
}; 