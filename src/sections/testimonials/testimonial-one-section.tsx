import React from 'react';
import type { TestimonialsSectionProps } from '../../types';
import TestimonialCarousel from '../../blocks/testimonials/testimonial-carousel-coordinator';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
export const TestimonialOneSection: React.FC<TestimonialsSectionProps> = (props) => {
  const { customStyles,googleReviewCta, testimonials, id, sectionClasses, title, subtitle, headingClasses, subtitleClasses, includeTestimonials } = props;
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id={id} className={twMerge(`py-12 px-4`, sectionClasses?.replaceAll(",", " "))}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={twMerge("text-3xl font-bold mb-4", headingClasses?.replaceAll(",", " "))}>{title}</h2>}
            {subtitle && <p className={twMerge("text-lg text-gray-600", subtitleClasses?.replaceAll(",", " "))}>{subtitle}</p>}
          </div>
        )}
        <div className="max-w-6xl mx-auto">
          <TestimonialCarousel
            {...props}
          />
        </div>

        {googleReviewCta && (
          <div>
            <Button asChild>
              <a href={googleReviewCta.link} target={googleReviewCta?.target ?? "_blank"}>
                {googleReviewCta.text}
              </a>
            </Button>
          </div>
        )}
        <div>

        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
};
