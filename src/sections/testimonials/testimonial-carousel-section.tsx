import React from 'react';
import type { TestimonialsSectionProps } from '../../types/index.js';
import { TestimonialCarouselCoordinator } from '../../blocks/testimonials/index.js';
import { twMerge } from 'tailwind-merge';
import SectionHeading from '../../blocks/common/section-heading.js';


export const TestimonialCarouselSection: React.FC<TestimonialsSectionProps> = (props) => {
  const { customStyles, testimonials, id, sectionClasses, title, subtitle, headingClasses, contentClasses, visibility, subtitleClasses, includeTestimonials } = props;
  // Use optional chaining with templateName as it might not be in the type
  const templateName = (props as any).templateName;

  // Helper function for combining classes
  const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <section id={id} className={twMerge(`py-16 px-4 bg-gray-50`, sectionClasses)}>
      <div className={twMerge("max-w-7xl mx-auto", contentClasses?.replaceAll(",", " "))}>
        {(title || subtitle) && (
          <header
            className={classNames(
              "text-left",
              templateName === "wellness" && "text-center"
            )}
          >
            {subtitle && (
              <h4
                className={classNames(
                  "text-md uppercase font-semibold text-primary",
                  templateName === "wellness" ? "font-marope" : ""
                )}
              >
                {subtitle}
              </h4>
            )}
            {title && (
              <SectionHeading className={headingClasses?.replaceAll(",", " ")}>{title}</SectionHeading>
            )}
          </header>
        )}
        {includeTestimonials && (
          <div className="">
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