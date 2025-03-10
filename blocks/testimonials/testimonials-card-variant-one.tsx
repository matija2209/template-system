"use client";
import React, { useState } from 'react';
import type { Testimonial } from "@schnellsite/types";
import { twMerge } from "tailwind-merge";
import useIsMobile from "../../hooks/useIsMobile";
import { Icon } from "@iconify/react";
import type { TestimonialCardProps } from './testimonial-carousel-coordinator';
import { daysAgo } from '../../utils/date-utils';

const TestimonialCardVariantOne: React.FC<TestimonialCardProps> = ({
    testimonial,
    className,
    contentClasses
  }) => {
    const isMobile = useIsMobile();
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <article
        className={twMerge(
          "bg-white flex flex-col p-6 rounded-sm shadow-md space-y-4 w-full justify-between ",
          className,
          // `h-full md:h-[380px]` // [480px]
          `min-h-[380px] md:min-h-[480px]`,
          isExpanded && "h-full",
          contentClasses?.replaceAll(",", " ")
        )}
      >
        <div className="space-y-4 ">
          <div
            className={twMerge(
              "flex self-start",
              "text-orange-400"
            )}
          >
            <Icon icon="material-symbols:star"></Icon>
            <Icon icon="material-symbols:star"></Icon>
            <Icon icon="material-symbols:star"></Icon>
            <Icon icon="material-symbols:star"></Icon>
            <Icon icon="material-symbols:star"></Icon>
          </div>
          <div className="space-y-2">
            <Icon
              className="text-3xl text-primary"
              icon={"ph:quotes-fill"}
            ></Icon>
            <p className={twMerge("self-start text-left text-lg")}>
              {isExpanded || testimonial.text.length <= (isMobile ? 150 : 300)
                ? testimonial.text
                : testimonial.text.substring(0, isMobile ? 150 : 300) + "..."}
              {testimonial.text.length > (isMobile ? 150 : 300) && (
                <span
                  className="pl-2 text-primary font-bold text-sm hover:underline text-left"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="self-start text-left">
          <p className="text-primary font-bold">{testimonial.name}</p>
          <p className="text-sm">{daysAgo(testimonial.date)}</p>
        </div>
      </article>
    );
  };
  
export default TestimonialCardVariantOne;