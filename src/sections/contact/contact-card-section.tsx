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
  Github,
  ArrowRight
} from 'lucide-react';
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe.js';
import FormComponent from '../../blocks/contact/form-component.js';
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';
import { twMerge } from 'tailwind-merge';

export const ContactCardSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  excludeSection,
  formId,
  includeAddress,
  includeEmail,
  includeEmergencyOpeningTimes,
  includeOpeningTimes,
  includePhone,
  includeMap,
  includeForm,
  form: contactForm,
  action,
  visibility,
  subtitleClasses,
  customStyles,
  sectionTemplate,
  sectionClasses,
  googlePlaceId,
  extraBlocks,
  contentClasses,
  type,
  id,
  title = 'Get in Touch',
  subtitle,

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
    <section id={id} className={twMerge(`section py-16 bg-muted/30`, sectionClasses?.replaceAll(",", " "))}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {!visibility?.hideSectionTitle && (
            <h2 className={twMerge("text-3xl font-bold tracking-tight text-foreground mb-4", headingClasses?.replaceAll(",", " "))}>{title}</h2>
          )}
          {!visibility?.hideSectionSubtitle && (
            <p className={twMerge("text-lg text-muted-foreground", subtitleClasses?.replaceAll(",", " "))}>{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          {email && (
            <div className="bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond as soon as possible</p>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                {email}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          )}

          {/* Phone Card */}
          {phone && (
            <div className="bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri from 8am to 5pm</p>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                {phone}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          )}

          {/* Address Card */}
          {address && (
            <div className="bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Come say hello at our office</p>
              <p className="text-foreground">{address}</p>
            </div>
          )}
        </div>

        {/* Contact Form Card */}
        <div className="bg-card rounded-xl shadow p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and our team will get back to you as soon as possible.
              </p>

              {/* Opening Hours */}
              {openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (
                <OpeningTimesDisplay
                  openingTimes={openingTimes}
                  openingTimesCustom={openingTimesCustom}
                  className="mt-8 p-4 bg-muted rounded-lg"
                  titleClassName="text-primary"
                  messageClassName="bg-yellow-100 border-yellow-400 text-yellow-700 text-sm"
                  dayClassName="text-foreground"
                  timeClassName="text-foreground"
                />
              )}

              {/* Social Links */}
              {socialLinks && socialLinks.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Connect With Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        {contactForm && includeForm &&
          <FormComponent form={contactForm}></FormComponent>

        }
        {/* Map */}
        {includeMap && googlePlaceId && (
          <div className="mt-12 rounded-xl overflow-hidden shadow-sm">
            <GoogleMapsIframe googlePlaceId={googlePlaceId} />

          </div>
        )}
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
}; 