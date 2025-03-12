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

export const ContactModernSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  mapUrl,
  id,
  className = '',
  title = 'Get in touch',
  subtitle = "We'd love to hear from you. Fill in the form and we'll get back to you shortly.",
  formEndpoint,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
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
    <section id={id} className={`py-16 bg-background ${className}`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary">{title}</h2>
              <p className="mt-4 text-muted-foreground max-w-md">{subtitle}</p>
              
              <div className="mt-8 space-y-6">
                {email && (
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <a href={`mailto:${email}`} className="text-foreground hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                )}
                
                {phone && (
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <a href={`tel:${phone}`} className="text-foreground hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </div>
                )}
                
                {address && (
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Opening Hours */}
            {openingTimes && Object.keys(openingTimes).length > 0 && (
              <div className="mt-10 p-6 bg-muted rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Opening Hours</h3>
                </div>
                
                {openingTimesCustom?.active && openingTimesCustom.message && (
                  <div className="flex p-3 mb-4 bg-yellow-100 border-l-4 border-yellow-400 rounded">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-yellow-700">{openingTimesCustom.message}</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  {Object.entries(openingTimes).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-medium">{formatDay(day)}</span>
                      <span className={hours.closed ? "text-muted-foreground" : "text-foreground"}>
                        {hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
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
          
          {/* Right Column - Contact Form */}
          <div className="bg-card rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
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
        
        {/* Map */}
        {mapUrl && (
          <div className="mt-12 rounded-xl overflow-hidden shadow-sm">
            <iframe 
              src={mapUrl} 
              title="Location Map" 
              className="w-full h-[400px] border-0" 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}; 