"use client";
import React from 'react';
import type { ContactSectionProps } from '../../types/index.js';
import { Mail, Phone, MapPin, Clock, AlertCircle, ExternalLink } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import FormComponent from '../../blocks/contact/form-component.js';
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export const ContactDefaultSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  excludeSection,
  form: contactForm,
  formId,
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
  customStyles,
  extraBlocks,
  contentClasses,
  visibility,
  type,
  id,
  title = 'Get in Touch',
  subtitle,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
  headingClasses
}) => {
  // Helper function to format day names
  const formatDay = (day: string): string => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  // Helper function to format time ranges
  const formatTimeRange = (from: string, to: string): string => {
    return `${from} - ${to}`;
  };

  // Define form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>();

  // Handle form submission with form action
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // When using form action, we would normally not need this function
    // as the form would be submitted directly to the server
    alert('Form submitted! In a real implementation, this would send data to your endpoint.');
  }

  return (
    <section id={id} className={`sectionpy-12 px-4 ${sectionClasses}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {!visibility?.hideSectionTitle && (
            <>{title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}</>
          )}
          {!visibility?.hideSectionSubtitle && (
            <>{subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}</>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {email && (
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
                </div>
              )}

              {phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <a href={`tel:${phone}`} className="text-primary hover:underline">{phone}</a>
                </div>
              )}

              {address && (
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1 text-primary" />
                  <p className="text-gray-700">{address}</p>
                </div>
              )}
            </div>

            {/* Opening Hours */}
            {openingTimes && Object.keys(openingTimes).length > 0 && includeOpeningTimes && (
              <OpeningTimesDisplay
                openingTimes={openingTimes}
                openingTimesCustom={openingTimesCustom}
                titleClassName="text-primary"
                messageClassName="bg-yellow-50 border-yellow-400 text-yellow-700"
              />
            )}

            {/* Emergency Hours */}
            {emergencyOpeningTimes && Object.keys(emergencyOpeningTimes).length > 0 && includeEmergencyOpeningTimes && (
              <OpeningTimesDisplay
                openingTimes={emergencyOpeningTimes}
                title="Emergency Hours"
                titleClassName="text-primary"
              />
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
                      aria-label={link.platform}
                    >
                      {/* Display platform name if no icon is provided */}
                      {link.icon ? (
                        <ExternalLink className="h-5 w-5" />
                      ) : (
                        <span>{link.platform}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {googlePlaceId && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Our Location
                </h4>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src={googlePlaceId}
                    title="Location Map"
                    className="w-full h-64 border-0 rounded-lg"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form using shadcn components */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {
              !visibility?.hideSectionTitle && (
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              )
            }
            {contactForm && includeForm && <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormComponent form={contactForm}></FormComponent>
              </form>
            </Form>
            }
          </div>
        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
};