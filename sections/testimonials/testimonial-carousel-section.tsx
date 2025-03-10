import React from 'react';
import type { TestimonialsSectionProps } from '../../types';
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';

export const TestimonialCarouselSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  id,
  ImageComponent,
  className = '',
  title,
  subtitle,
}) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">x {title} sss</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          <TestimonialCarousel
            testimonials={testimonials}
            ImageComponent={ImageComponent}
            contentClasses="bg-white"
          />
        </div>
      </div>
    </section>
  );
}; 