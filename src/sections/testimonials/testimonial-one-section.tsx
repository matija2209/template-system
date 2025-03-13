import React from 'react';
import type { TestimonialsSectionProps } from '../../types';
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';
import { twMerge } from 'tailwind-merge';

export const TestimonialOneSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  id,
  ImageComponent,
sectionClasses,
customStyles,
  title,
  subtitle,
}) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id={id} className={twMerge(`py-12 px-4`, sectionClasses)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel
            testimonials={testimonials}
            ImageComponent={ImageComponent}
          />
        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
};
