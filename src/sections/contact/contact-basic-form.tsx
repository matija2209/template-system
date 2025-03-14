import React from 'react';

import type { ContactSectionProps } from "../../types/sections";
import { twMerge } from 'tailwind-merge';
import SectionHeading from "../../blocks/common/section-heading";
import OpeningTimesDisplay from "../../blocks/contact/opening-times-display";
import ContactDetails from "../../blocks/contact/contact-details";
import FormComponent from "../../blocks/contact/form-component";

export const ContactBasicForm: React.FC<ContactSectionProps> = ({ ...props }) => {
  const {
    email,
    customStyles,
    phone,
    address,
    socialLinks,
    excludeSection,
    formId,
    includeAddress,
    includeEmail,
    includeEmergencyOpeningTimes,
    visibility,
    includeOpeningTimes,
    includePhone,
    includeMap,
    form: contactForm,
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
    openingTimes,
    emergencyOpeningTimes,
    openingTimesCustom,
    headingClasses,
  } = props;

  if (excludeSection) return null;


  if (includeForm && !contactForm) return null; // Prevent errors if form is required but not found

  return (
    <section
      id={id || "kontakt"}
      className={twMerge(sectionClasses?.replaceAll(", ", " "))}
    >
      <div className="section relative 2xl:max-w-screen-2xl px-4 lg:px-10 xl:px-14 mx-auto">
        <div className="flex flex-col lg:flex-row py-12 lg:py-24 gap-12">
          <div className="w-full lg:w-1/2 z-10">
            {/* Contact Information (Generic) */}
            <div className="text-left">
              {!visibility?.hideSectionTitle && (
                <header className="space-y-4">
                  <SectionHeading className={twMerge("mb-4", headingClasses?.replaceAll(",", " "))}>
                    {title}
                  </SectionHeading>
                </header>
              )}
              <div className="mb-8">
                {openingTimesCustom?.active && (
                  <p className={twMerge("text-xl", "text-white")}>{openingTimesCustom.message}</p>
                )}
                {includeOpeningTimes && openingTimes && (
                  <OpeningTimesDisplay
                    openingTimes={openingTimes}
                    openingTimesCustom={openingTimesCustom}
                    className="mb-4"
                    titleClassName="text-lg lg:text-xl font-semibold mb-2"
                    dayClassName="text-white"
                    timeClassName="text-white"
                  />
                )}
                {includeEmergencyOpeningTimes && emergencyOpeningTimes && (
                  <OpeningTimesDisplay
                    openingTimes={emergencyOpeningTimes}
                    title="Notdienst"
                    titleClassName="text-lg lg:text-xl font-semibold"
                    dayClassName="text-white"
                    timeClassName="text-white"
                  />
                )}
              </div>
              <ContactDetails {...props} />
            </div>
          </div>
          {includeForm && contactForm && (
            <div className="w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0">
              {/* Form Component */}
              <div className={twMerge("bg-white p-6 lg:p-10 shadow-sm rounded-sm w-full", contentClasses?.replaceAll(",", " "))}>
                {contactForm && includeForm &&
                  <FormComponent form={contactForm}></FormComponent>
                }
              </div>
            </div>
          )}
        </div>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
};
