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
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe.js';
import FormComponent from '../../blocks/contact/form-component.js';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export const ContactSplitSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  customStyles,
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
  title,
  subtitle,
  form,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
  headingClasses
}) => {
  // Initialize the form


  
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
    <section id={id} className={sectionClasses}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
        {/* Left Column - Dark Background with Contact Info */}
        <div className=" text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-between">
          {/* ... Existing left column content remains unchanged ... */}
          <div>
            {!visibility?.hideSectionTitle && (
              <h2 className="text-3xl font-bold">{title}</h2>
            )}
            {!visibility?.hideSectionSubtitle && (
              <p className="mt-4 text-primary-foreground/80 max-w-md">{subtitle}</p>
            )}
            
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
        <div className={twMerge(visibility?.transparentFormCard ? "" : "", " p-8 md:p-12 lg:p-16 flex items-center")}>
          <div className="w-full max-w-md mx-auto">
            {!visibility?.hideFormTitle && (
              <h3 className="text-2xl font-bold text-  mb-8">{title}</h3>
            )}
            {!visibility?.hideFormSubtitle && (
              <p className="text-foreground/80 mb-8">{subtitle}</p>
            )}
            
            {form && includeForm && 
                <FormComponent form={form}></FormComponent>

            }
          </div>
        </div>
      </div>
      
      {/* Map (Full Width) */}
      {includeMap &&googlePlaceId && (
                                <GoogleMapsIframe googlePlaceId={googlePlaceId} />

      )}
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
};