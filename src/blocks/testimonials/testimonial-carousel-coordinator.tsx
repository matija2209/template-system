"use client";
import React, { useState, useEffect, useRef } from "react";
import type { Testimonial } from "@schnellsite/types";

import useIsMobile from "../../hooks/useIsMobile.js";
import TestimonialCardVariantOne from "./testimonials-card-variant-one.js";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { TestimonialsSectionProps } from "@/types/sections.js";

export default function TestimonialCarousel(props: TestimonialsSectionProps) {
  const { testimonials, ImageComponent, contentClasses } = props;
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
    if (items.length === 0) return [];
    if (items.length >= 3) return items;

    // Duplicate items until we have at least 3
    let result = [...items];
    while (result.length < 3) {
      result = [...result, ...items];
    }
    return result.slice(0, Math.max(3, items.length * 2));
  };

  // Make sure we have at least 3 testimonials for the carousel
  const processedTestimonials = ensureMinimumSlides(sortedTestimonials);
  const totalSlides = processedTestimonials.length;

  // Calculate the maximum index to prevent going past the end
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const next = () => {
    if (isTransitioning || currentIndex >= maxIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };

  const previous = () => {
    if (isTransitioning || currentIndex === 0) return;
    setIsTransitioning(true);
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Slightly longer than the transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Touch events for mobile swiping
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;

    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && currentIndex < maxIndex) { // Swipe left - go to next
      next();
    } else if (diff < -50 && currentIndex > 0) { // Swipe right - go to previous
      previous();
    }

    isSwiping.current = false;
  };

  // Auto-scroll with proper cleanup and pause during transitions
  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Only start auto-scroll if not transitioning
    if (!isTransitioning) {
      interval = setInterval(() => {
        if (currentIndex >= maxIndex) {
          // Reset to beginning when reaching the end
          setCurrentIndex(0);
        } else {
          next();
        }
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTransitioning, currentIndex, maxIndex]);

  // Handle window resize to recalculate indices
  useEffect(() => {
    const handleResize = () => {
      // Ensure current index is still valid after resize
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, maxIndex]);

  // Early return if no testimonials
  if (totalSlides === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * (100 / slidesToShow)}%`
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {processedTestimonials.map((testimonial: Testimonial, index: number) => (
            <div
              key={`testimonial-${index}`}
              style={{
                width: `${100 / totalSlides}%`,
              }}
              className="px-2" // Add horizontal spacing between items
            >
              <div className="mx-2 h-full"> {/* Additional margin for spacing */}
                <TestimonialCardVariantOne
                  testimonial={testimonial}
                  index={index}
                  {...props}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalSlides > slidesToShow && (
        <div className="flex gap-4 items-center justify-center mt-6">
          <button
            className={`rounded-full p-2 transition-colors duration-200 ${currentIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-primary hover:text-white focus:outline-none"
              }`}
            onClick={previous}
            disabled={isTransitioning || currentIndex === 0}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            className={`rounded-full p-2 transition-colors duration-200 ${currentIndex >= maxIndex
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 hover:bg-primary hover:text-white focus:outline-none"
              }`}
            onClick={next}
            disabled={isTransitioning || currentIndex >= maxIndex}
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}