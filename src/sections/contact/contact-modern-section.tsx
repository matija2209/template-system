"use client";
import React from 'react';
import type { ContactSectionProps } from '../../types/index.js';
import type { Form, FormField, FormFieldType } from "@schnellsite/types";
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

// Import shadcn components
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

export const ContactModernSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  excludeSection,
  formId,
  form,
  includeAddress,
  includeEmail,
  includeEmergencyOpeningTimes,
  includeOpeningTimes,
  includePhone,
  includeMap,
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
  redirectUrl,
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
    <section id={id} className={`py-16 bg-background ${sectionClasses}`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className={`text-3xl font-bold tracking-tight text-primary ${headingClasses}`}>{title}</h2>
              <p className={`mt-4 text-muted-foreground max-w-md ${subtitleClasses}`}>{subtitle}</p>
              
              <div className="mt-8 space-y-6">
                {email && includeEmail && (
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <a href={`mailto:${email}`} className="text-foreground hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                )}
                
                {phone && includePhone && (
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <a href={`tel:${phone}`} className="text-foreground hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </div>
                )}
                
                {address && includeAddress && (
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Opening Hours */}
            {openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (
              <Card className="mt-10">
                <CardContent className="p-6">
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
                </CardContent>
              </Card>
            )}
            
            {/* Emergency Hours */}
            {emergencyOpeningTimes && includeEmergencyOpeningTimes && (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-medium">Emergency Hours</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {Object.entries(emergencyOpeningTimes).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="font-medium">{formatDay(day)}</span>
                        <span className={hours.closed ? "text-muted-foreground" : "text-foreground"}>
                          {hours.closed ? "Closed" : formatTimeRange(hours.from, hours.to)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
          {includeForm && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Map */}
        { googlePlaceId && includeMap && (
          <div className="mt-12 rounded-xl overflow-hidden shadow-sm">
            <iframe 
              src={ googlePlaceId} 
              title="Location Map" 
              className="w-full h-96 border-0" 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};