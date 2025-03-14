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
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse").min(1, "E-Mail ist erforderlich"),
  subject: z.string().min(1, "Betreff ist erforderlich"),
  message: z.string().min(1, "Nachricht ist erforderlich"),
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
    // Translate day names to German
    const germanDays: Record<string, string> = {
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag"
    };

    return germanDays[day.toLowerCase()] || day.charAt(0).toUpperCase() + day.slice(1);
  };

  // Helper function to format time ranges
  const formatTimeRange = (from: string, to: string): string => {
    return `${from} - ${to}`;
  };

  // Helper function to format periods
  const formatPeriods = (periods: Array<{ open: string, close: string }>): string => {
    if (!periods || periods.length === 0) return "Geschlossen";

    return periods.map(period => {
      return `${period.open} - ${period.close}`;
    }).join(", ");
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
    <section id={id} className={twMerge("section", sectionClasses)}>
      <div className='max-w-7xl mx-auto'>
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
                {email && includeEmail && (
                  <div className="flex items-center">
                    <div className="bg-primary-foreground/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">E-Mail</p>
                      <a href={`mailto:${email}`} className="text-primary-foreground hover:underline">
                        {email}
                      </a>
                    </div>
                  </div>
                )}

                {phone && includePhone && (
                  <div className="flex items-center">
                    <div className="bg-primary-foreground/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">Telefon</p>
                      <a href={`tel:${phone}`} className="text-primary-foreground hover:underline">
                        {phone}
                      </a>
                    </div>
                  </div>
                )}

                {address && includeAddress && (
                  <div className="flex items-start">
                    <div className="bg-primary-foreground/10 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70">Adresse</p>
                      <p className="text-primary-foreground">{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (
              <div className="mt-12 border-t border-primary-foreground/20 pt-8">
                <OpeningTimesDisplay
                  openingTimes={openingTimes}
                  openingTimesCustom={openingTimesCustom}
                  className="mt-0"
                />
              </div>
            )}

            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Folgen Sie uns</h3>
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
        {includeMap && googlePlaceId && (
          <GoogleMapsIframe googlePlaceId={googlePlaceId} />

        )}
        {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
      </div>
    </section>
  );
};