"use client";
import React, { useState, useEffect, useRef } from 'react';
import type { TestimonialsSectionProps } from '../../types/index.js';
import { twMerge } from 'tailwind-merge';
import type { Testimonial } from "@schnellsite/types";

// Single Testimonial Component
const TestimonialCard: React.FC<{ testimonial: Testimonial; isActive: boolean }> = ({
  testimonial,
  isActive
}) => {
  const [expanded, setExpanded] = useState(false);
  const maxCharLength = 150; // Maximum characters to show initially
  const isTextLong = testimonial.text.length > maxCharLength;

  // Generate stars based on rating
  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Parse the date from Firebase format
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return `vor ${Math.ceil((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30))} Monaten`;
    } catch {
      return dateString;
    }
  };

  // Function to handle the "Read more" click
  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  // Function to get the displayed text based on expanded state
  const getDisplayText = () => {
    if (!isTextLong || expanded) {
      return testimonial.text;
    }
    return `${testimonial.text.substring(0, maxCharLength)}...`;
  };

  return (
    <div
      className={`testimonial-card max-w-lg mx-auto p-6 text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'
        } ${testimonial.customClasses || ''}`}
    >
      {renderStars(testimonial.rating)}
      <div className="min-h-[120px] flex flex-col justify-center">
        <p className="text-center mb-2 italic font-light">
          "{getDisplayText()}"
        </p>
        {isTextLong && (
          <button
            onClick={toggleExpand}
            className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      <p className="font-semibold">{testimonial.name}</p>
      <p className="text-sm">{formatDate(testimonial.date)}</p>
    </div>
  );
};

// Testimonials Section Component
export const TestimonialSingleSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  id,
  sectionClasses,
  headingClasses,
  subtitleClasses,
  customStyles,
  title,
  subtitle,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  // Pagination dots
  const renderPaginationDots = () => {
    return (
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Mouse event handlers for pausing
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id={id} className={twMerge('testimonials-gradient py-16 text-white bg-primary', sectionClasses?.replaceAll(",", " "))}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          {title && <h2 className={twMerge("text-3xl font-bold text-center mb-2", headingClasses?.replaceAll(",", " "))}>{title}</h2>}
          {subtitle && <p className={twMerge("text-lg text-center mb-12", subtitleClasses?.replaceAll(",", " "))}>{subtitle}</p>}
        </div>

        {/* Testimonials carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={testimonialRef}
        >
          {/* Left navigation button */}
          <button
            onClick={handlePrev}
            className="arrow-button border rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-20 text-white p-2  z-10 hover:bg-opacity-30 transition-all nav-arrow"
            aria-label="Previous testimonial"
          >
            <svg className="arrow-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="relative h-[250px] testimonials-container">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id || index}
                testimonial={testimonial}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Right navigation button */}
          <button
            onClick={handleNext}
            className="arrow-button border  absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-20 text-white p-2 rounded-full z-10 hover:bg-opacity-30 transition-all nav-arrow"
            aria-label="Next testimonial"
          >
            <svg className="arrow-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        {renderPaginationDots()}
      </div>

      {/* CSS styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Additional custom CSS for enhanced animation effects */
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .testimonial-card.active {
          animation: fadeInOut 5s ease-in-out;
        }

        /* Custom scrollbar for the testimonials section */
        .testimonials-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .testimonials-container {
          -ms-overflow-style: none;  /* Hide scrollbar for IE and Edge */
          scrollbar-width: none;  /* Hide scrollbar for Firefox */
        }

        /* Make the arrows more interactive */
        .nav-arrow {
          transition: all 0.3s ease;
        }

   
        /* Enhanced dot indicators */
        .dot-indicator {
          transition: all 0.3s ease;
        }

        .dot-indicator.active {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }
      `}} />
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}

    </section>
  );
}; 