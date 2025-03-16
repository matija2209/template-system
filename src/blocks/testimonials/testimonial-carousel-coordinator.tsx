"use client";
import React, { useState, useEffect, useRef } from "react";
import type { Testimonial } from "@schnellsite/types";

import useIsMobile from "../../hooks/useIsMobile.js";
import TestimonialCardVariantOne from "./testimonials-card-variant-one.js";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { TestimonialsSectionProps } from "@/types/sections.js";

export default function TestimonialCarousel(props: TestimonialsSectionProps) {
  const {
    testimonials,
    ImageComponent,
    contentClasses,
  } = props;
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

  // Ensure we have at least 3 testimonials (or duplicate the existing ones)
  const ensureMinimumSlides = (items: Testimonial[]): Testimonial[] => {
    if (items.length >= 3) return items;

    // Duplicate items until we have at least 3
    let result = [...items];
    while (result.length < 3) {
      result = [...result, ...items];
    }
    return result.slice(0, Math.max(3, items.length));
  };

  // Make sure we have at least 3 testimonials for the carousel
  const processedTestimonials = ensureMinimumSlides(sortedTestimonials);
  const totalSlides = processedTestimonials.length;

  // Create an augmented array with duplicated items for infinite scrolling
  // Add extra copies at both ends to support infinite scrolling in both directions
  const repeatedTestimonials = [
    ...processedTestimonials.slice(-slidesToShow),  // Add last slides at the beginning
    ...processedTestimonials,  // Original items
    ...processedTestimonials.slice(0, slidesToShow)  // Add first slides at the end
  ];

  // Initialize with an offset to account for the prepended slides
  useEffect(() => {
    // Initial position should be after the prepended slides
    setCurrentIndex(slidesToShow);

    // Disable transition for initial positioning
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'transform 500ms ease-in-out';
        }
      }, 50);
    }
  }, [slidesToShow]);

  const next = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const previous = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  // Handle transition end for infinite scroll
  useEffect(() => {
    const transitionEndHandler = () => {
      setIsTransitioning(false);

      // If we've scrolled to the duplicate section at the end
      if (currentIndex >= totalSlides + slidesToShow) {
        // Disable transition temporarily
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }

        // Jump to the real slides (after the prepended ones)
        setCurrentIndex(slidesToShow);

        // Re-enable transition
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        }, 50);
      }

      // If we've scrolled to the duplicate section at the beginning
      else if (currentIndex < slidesToShow) {
        // Disable transition temporarily
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }

        // Jump to the end (before the appended duplicates)
        setCurrentIndex(totalSlides + (currentIndex % slidesToShow));

        // Re-enable transition
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
  }, [currentIndex, totalSlides, slidesToShow]);

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

  // Setup auto-scroll (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        next();
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="w-full overflow-hidden">
      {/* Fixed width container with consistent max width */}
      <div className="mx-auto px-4 md:px-6">
        {/* Carousel viewport */}
        <div className="relative overflow-hidden">
          {/* Carousel track */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / repeatedTestimonials.length)}%)`,
              width: `${repeatedTestimonials.length * 100}%`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {repeatedTestimonials.map((testimonial: Testimonial, index: number) => (
              <div
                key={`testimonial-${index}`}
                className="px-2 md:px-4"
                style={{
                  width: `${100 / repeatedTestimonials.length}%`,
                  flex: `0 0 ${100 / repeatedTestimonials.length}%`,
                }}
              >
                <div className="h-full">
                  <TestimonialCardVariantOne
                    testimonial={testimonial}
                    index={index % totalSlides} // Use modulo to normalize the index for props
                    {...props}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-2 items-center justify-center mt-6">
        <button
          className="rounded-full p-2 bg-gray-100 hover:bg-primary hover:text-white focus:outline-none transition-colors duration-200"
          onClick={previous}
          disabled={isTransitioning}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <button
          className="rounded-full p-2 bg-gray-100 hover:bg-primary hover:text-white focus:outline-none transition-colors duration-200"
          onClick={next}
          disabled={isTransitioning}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}