import React from 'react';
import type { TestimonialsSectionProps } from '../../types/index.js';
import {TestimonialCarouselCoordinator} from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';

export const TestimonialCarouselSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  id,
  ImageComponent,
  excludeSection,
  customStyles,
  sectionClasses,
  title,
  subtitle,
}) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id={id} className={twMerge(`py-16 px-4 bg-gray-50`, sectionClasses)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">x {title} sss</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          <TestimonialCarouselCoordinator
            testimonials={testimonials}
            ImageComponent={ImageComponent}
            contentClasses="bg-white"
          />
        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
}; 