"use client";
import React, { useState, useEffect, useRef } from "react";
import type { Testimonial } from "@schnellsite/types";
import { twMerge } from "tailwind-merge";
import useIsMobile from "../../hooks/useIsMobile";
import TestimonialCardVariantOne from "./testimonials-card-variant-one";
import { Icon } from "@iconify/react";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  contentClasses?: string;
  ImageComponent?: React.ComponentType<any>;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  children?: React.ReactNode;
  className?: string;
  contentClasses?: string;
  ImageComponent?: React.ComponentType<any>;
}

export default function TestimonialCarousel({
  testimonials,
  children,
  className,
  contentClasses,
  ImageComponent
}: TestimonialCarouselProps) {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesToShow = isMobile ? 1 : 3;

  // Sort testimonials by date (newest first)
  const sortedTestimonials = testimonials && testimonials.length > 0 
    ? [...testimonials].sort((a: Testimonial, b: Testimonial) => 
        new Date(b.date).getTime() - new Date(a.date).getTime())
    : [];

  // Create an augmented array with duplicated items for infinite scrolling
  const repeatedTestimonials = [
    ...sortedTestimonials,  // Original items
    ...sortedTestimonials.slice(0, slidesToShow)  // Add first few slides again at the end
  ];
  
  const totalSlides = sortedTestimonials.length;
  const totalDisplaySlides = repeatedTestimonials.length;
  
  const next = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      
      // If we reach the duplicate section at the end
      if (nextIndex >= totalSlides) {
        // We'll handle the "jump back" after transition ends
        return nextIndex;
      }
      
      return nextIndex;
    });
  };

  const previous = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      // If we're at the first slide
      if (prevIndex === 0) {
        // Jump to the end instantly (will be handled in useEffect)
        return totalSlides - 1;
      }
      
      return prevIndex - 1;
    });
  };

  // Handle transition end
  useEffect(() => {
    const transitionEndHandler = () => {
      setIsTransitioning(false);
      
      // If we've scrolled past the original items to the duplicates
      if (currentIndex >= totalSlides) {
        // Disable transition temporarily
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }
        
        // Jump back to the start
        setCurrentIndex(currentIndex % totalSlides);
        
        // Re-enable transition after a small delay
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        }, 50);
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('transitionend', transitionEndHandler);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('transitionend', transitionEndHandler);
      }
    };
  }, [currentIndex, totalSlides]);

  // Touch events for mobile swiping
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) { // Swipe left - go to next
      next();
    } else if (diff < -50) { // Swipe right - go to previous
      previous();
    }
  };

  return (
    <div className="relative overflow-hidden max-w-screen-xl mx-auto">
      {/* Carousel container */}
      <div 
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${(currentIndex * (100 / slidesToShow))}%)`,
          width: `${(totalDisplaySlides / slidesToShow) * 100}%` 
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {repeatedTestimonials.map((testimonial: Testimonial, index: number) => (
          <div
            key={`testimonial-${index}`}
            className={twMerge(
              "flex-shrink-0",
              className,
              "px-2"
            )}
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <div className="mx-2">
              {children ? (
                React.cloneElement(React.Children.only(children) as React.ReactElement, {
                  testimonial,
                  contentClasses,
                  ImageComponent
                })
              ) : (
                <TestimonialCardVariantOne 
                  contentClasses={contentClasses} 
                  testimonial={testimonial} 
                  ImageComponent={ImageComponent}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      {testimonials && testimonials.length > slidesToShow && (
        <div className="flex gap-2 items-center justify-center mt-4">
          <button 
            className="rounded-full hover:bg-primary p-1 focus:outline-none transition-colors duration-300"
            onClick={previous}
            disabled={isTransitioning}
          >
            <Icon
              icon="iconamoon:arrow-left-2-thin"
              className="text-4xl text-primary hover:text-white"
            />
          </button>
          <button 
            className="rounded-full hover:bg-primary p-1 focus:outline-none transition-colors duration-300"
            onClick={next}
            disabled={isTransitioning}
          >
            <Icon
              icon="iconamoon:arrow-right-2-thin"
              className="text-4xl text-primary hover:text-white"
            />
          </button>
        </div>
      )}
    </div>
  );
}