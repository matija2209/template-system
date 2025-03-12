import React from 'react';
import type { ContactSectionProps } from '../../types/index.js';

export const ContactDefaultSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  mapUrl,
  id,
  className = '',
  title = 'Contact Us',
  subtitle = 'Get in touch with our team',
  formEndpoint,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    // This would typically use the formEndpoint for server submission
    alert('Form submitted! In a real implementation, this would send data to your endpoint.');
  };

  // Helper function to format day names
  const formatDay = (day: string): string => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  // Helper function to format time ranges
  const formatTimeRange = (from: string, to: string): string => {
    return `${from} - ${to}`;
  };

  return (
    <section id={id} className={`py-12 px-4 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {email && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href={`tel:${phone}`} className="text-primary hover:underline">{phone}</a>
                </div>
              )}
              
              {address && (
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{address}</p>
                </div>
              )}
            </div>
            
            {/* Opening Hours */}
            {openingTimes && Object.keys(openingTimes).length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Opening Hours</h4>
                {openingTimesCustom?.active && openingTimesCustom.message ? (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-700">{openingTimesCustom.message}</p>
                  </div>
                ) : null}
                <div className="space-y-2">
                  {Object.entries(openingTimes).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium">{formatDay(day)}</span>
                      <span>
                        {hours.closed ? (
                          <span className="text-gray-500">Closed</span>
                        ) : (
                          formatTimeRange(hours.from, hours.to)
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Emergency Hours */}
            {emergencyOpeningTimes && Object.keys(emergencyOpeningTimes).length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Emergency Hours</h4>
                <div className="space-y-2">
                  {Object.entries(emergencyOpeningTimes).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium">{formatDay(day)}</span>
                      <span>
                        {hours.closed ? (
                          <span className="text-gray-500">Closed</span>
                        ) : (
                          formatTimeRange(hours.from, hours.to)
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {/* Display platform name if no icon is provided */}
                      {link.icon ? (
                        <span className="sr-only">{link.platform}</span>
                      ) : (
                        <span>{link.platform}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {mapUrl && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Our Location</h4>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src={mapUrl} 
                    title="Location Map" 
                    className="w-full h-64 border-0 rounded-lg" 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 