"use client";
import React, { useState } from 'react';
import { twMerge } from "tailwind-merge";
import useIsMobile from "../../hooks/useIsMobile.js";
import { daysAgo } from '../../utils/date-utils.js';
import { Quote, Star } from 'lucide-react';
import type { TestimonialsSectionProps } from '@/types/sections.js';
import type { Testimonial } from '@schnellsite/types';

const TestimonialCardVariantOne: React.FC<TestimonialsSectionProps & { testimonial: Testimonial, index: number }> = (props) => {
  const {
    testimonial,
    index,
    testimonials,
    id,
    ImageComponent,
    excludeSection,
    customStyles,
    sectionClasses,
    title,
    subtitle,
    type,
    sectionTemplate,
    design,
    visibility,
    contentClasses,
    extraBlocks,
    headingClasses,
    includeTestimonials,
    subtitleClasses

  } = props
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={twMerge(
        "bg-white flex flex-col p-6 rounded-sm shadow-md space-y-4 w-full justify-between",
        "h-full", // Ensure consistent height
        "min-h-[380px] md:min-h-[480px]",
        isExpanded && "h-auto", // Allow expansion when needed
        contentClasses?.replaceAll(",", " ")
      )}
      style={{
        width: '100%', // Force full width inside its container
        boxSizing: 'border-box' // Include padding in width calculation
      }}
    >
      <div className="space-y-4 flex-grow">
        <div
          className={twMerge(
            "flex self-start",
            "text-orange-400"
          )}
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={i < (testimonial.rating || 0) ? "text-orange-400" : "text-gray-300"}
              fill={i < (testimonial.rating || 0) ? "currentColor" : "none"}
            />
          ))}
        </div>
        <div className="space-y-2">
          <Quote className="text-3xl text-primary"
          ></Quote>
          <p className={twMerge("self-start text-left text-lg")}>
            {isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
              ? testimonial.text
              : testimonial.text.substring(0, isMobile ? 150 : 300) + "..."}
            {testimonial.text.length > (isMobile ? 150 : 300) && (
              <span
                className="pl-2 text-primary font-bold text-sm hover:underline text-left cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="self-start text-left mt-auto">
        <p className="text-primary font-bold">{testimonial.name}</p>
        <p className="text-sm">{daysAgo(testimonial.date)}</p>
      </div>
    </article>
  );
};

export default TestimonialCardVariantOne;