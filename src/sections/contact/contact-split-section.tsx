"use client";
import React from 'react';
import type { ContactSectionProps } from '../../types/index.js';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  AlertCircle,
  Send,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Github
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const ContactSplitSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  excludeSection,
  formId,
  includeAddress,
  visibility,
  includeEmail,
  includeEmergencyOpeningTimes,
  includeOpeningTimes,
  includePhone,
  includeMap,
  design,
  includeForm,
  action,
  subtitleClasses,
  sectionTemplate,
  sectionClasses,
  googlePlaceId,
  extraBlocks,
  contentClasses,
  type,
  id,
  title = 'Get in Touch',
  subtitle,
  form,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
  headingClasses
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
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

  // Function to get the appropriate social icon
  const getSocialIcon = (platform: string): React.ReactNode => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'twitter':
      case 'x':
        return <Twitter className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return <span>{platform}</span>;
    }
  };

  return (
    <section id={id} className={`${sectionClasses}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
        {/* Left Column - Dark Background with Contact Info */}
        <div className="bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            {
              !visibility?.hideSectionTitle && (
                <>
                  <h2 className="text-3xl font-bold">{title}</h2>
                </>
              )
            }
            {
              !visibility?.hideSectionSubtitle && (
                <p className="mt-4 text-primary-foreground/80 max-w-md">{subtitle}</p>
              )
            }
            
            <div className="mt-12 space-y-8">
              {email && (
                <div className="flex items-center">
                  <div className="bg-primary-foreground/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Email</p>
                    <a href={`mailto:${email}`} className="text-primary-foreground hover:underline">
                      {email}
                    </a>
                  </div>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center">
                  <div className="bg-primary-foreground/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Phone</p>
                    <a href={`tel:${phone}`} className="text-primary-foreground hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              
              {address && (
                <div className="flex items-start">
                  <div className="bg-primary-foreground/10 p-3 rounded-full mr-4 mt-1">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70">Address</p>
                    <p className="text-primary-foreground">{address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Opening Hours */}
          {openingTimes && Object.keys(openingTimes).length > 0 && (
            <div className="mt-12 border-t border-primary-foreground/20 pt-8">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-medium">Opening Hours</h3>
              </div>
              
              {openingTimesCustom?.active && openingTimesCustom.message && (
                <div className="flex p-3 mb-4 bg-primary-foreground/10 border-l-4 border-primary-foreground/30 rounded">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-sm">{openingTimesCustom.message}</p>
                </div>
              )}
              
              <div className="space-y-2">
                {Object.entries(openingTimes).map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium">{formatDay(day)}</span>
                    <span className={hours.closed ? "text-primary-foreground/60" : "text-primary-foreground"}>
                      {hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                    aria-label={link.platform}
                  >
                    {link.icon ? (
                      <span className="sr-only">{link.platform}</span>
                    ) : (
                      getSocialIcon(link.platform)
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Column - Light Background with Form */}
        <div className={twMerge(design?.transparentFormCard ? "bg-transparent" : "bg-background", " p-8 md:p-12 lg:p-16 flex items-center")}>
          <div className="w-full max-w-md mx-auto">
            {
              design?.includeFormTitle && (
                <h3 className="text-2xl font-bold text-foreground mb-8">{title}</h3>
              )
            }
            {
              design?.includeFormSubtitle && (
                <p className="text-foreground/80 mb-8">{subtitle}</p>
              )
            }
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map (Full Width) */}
      {googlePlaceId && (
        <div className="w-full h-[400px]">
          <iframe 
            src={googlePlaceId} 
            title="Location Map" 
            className="w-full h-full border-0" 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      )}
    </section>
  );
}; 