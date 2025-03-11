"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
// Single Testimonial Component
const TestimonialCard = ({ testimonial, isActive }) => {
    const [expanded, setExpanded] = useState(false);
    const maxCharLength = 150; // Maximum characters to show initially
    const isTextLong = testimonial.text.length > maxCharLength;
    // Generate stars based on rating
    const renderStars = (rating = 5) => {
        return (_jsx("div", { className: "flex justify-center mb-2", children: [...Array(5)].map((_, i) => (_jsx("svg", { className: `w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i))) }));
    };
    // Parse the date from Firebase format
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return `vor ${Math.ceil((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 30))} Monaten`;
        }
        catch {
            return dateString;
        }
    };
    // Function to handle the "Read more" click
    const toggleExpand = (e) => {
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
    return (_jsxs("div", { className: `testimonial-card max-w-lg mx-auto p-6 text-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'} ${testimonial.customClasses || ''}`, children: [renderStars(testimonial.rating), _jsxs("div", { className: "min-h-[120px] flex flex-col justify-center", children: [_jsxs("p", { className: "text-center mb-2 italic font-light", children: ["\"", getDisplayText(), "\""] }), isTextLong && (_jsx("button", { onClick: toggleExpand, className: "text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors", children: expanded ? 'Show less' : 'Read more' }))] }), _jsx("p", { className: "font-semibold", children: testimonial.name }), _jsx("p", { className: "text-sm text-gray-600", children: formatDate(testimonial.date) })] }));
};
// Testimonials Section Component
export const TestimonialSingleSection = ({ testimonials, id, className = '', title, subtitle, }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const testimonialRef = useRef(null);
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
        setActiveIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
    };
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    // Pagination dots
    const renderPaginationDots = () => {
        return (_jsx("div", { className: "flex justify-center mt-6 space-x-2", children: testimonials.map((_, index) => (_jsx("button", { onClick: () => setActiveIndex(index), className: `w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`, "aria-label": `Go to testimonial ${index + 1}` }, index))) }));
    };
    // Mouse event handlers for pausing
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    return (_jsxs("section", { id: id, className: twMerge('testimonials-gradient py-16 text-white', className), children: [_jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-12", children: [title && _jsx("h2", { className: "text-3xl font-bold text-center mb-2", children: title }), subtitle && _jsx("p", { className: "text-lg text-center mb-12", children: subtitle })] }), _jsxs("div", { className: "relative overflow-hidden", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ref: testimonialRef, children: [_jsx("button", { onClick: handlePrev, className: "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full z-10 hover:bg-opacity-30 transition-all nav-arrow", "aria-label": "Previous testimonial", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsx("div", { className: "relative h-[250px] testimonials-container", children: testimonials.map((testimonial, index) => (_jsx(TestimonialCard, { testimonial: testimonial, isActive: index === activeIndex }, testimonial.id || index))) }), _jsx("button", { onClick: handleNext, className: "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 rounded-full z-10 hover:bg-opacity-30 transition-all nav-arrow", "aria-label": "Next testimonial", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }), renderPaginationDots()] }), _jsx("style", { dangerouslySetInnerHTML: { __html: `
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

        .nav-arrow:hover {
          transform: scale(1.2);
          background-color: rgba(255, 255, 255, 0.3);
        }

        /* Add a subtle gradient overlay to the testimonials section */
        .testimonials-gradient {
          background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
        }

        /* Enhanced dot indicators */
        .dot-indicator {
          transition: all 0.3s ease;
        }

        .dot-indicator.active {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }
      ` } })] }));
};
