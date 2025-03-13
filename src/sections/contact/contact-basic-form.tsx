import React from 'react';

import type { ContactSectionProps } from "../../types/sections";
import { twMerge } from 'tailwind-merge';
import SectionHeading from "../../blocks/common/section-heading";
import OpeningTimes from "../../blocks/contact/opening-times";
import ContactDetails from "../../blocks/contact/contact-details";
import FormComponent from "../../blocks/contact/form-component";

export const ContactBasicForm: React.FC<ContactSectionProps> = ({...props}) => {

    const {
        email,
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
        form,
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
        design,
        openingTimes,
        emergencyOpeningTimes,
        openingTimesCustom,
        headingClasses,
      } = props;
  if (excludeSection) return null;
  
  const contactForm = form
  
  if (includeForm && !contactForm) return null; // Prevent errors if form is required but not found

  return (
    <section
      id={id || "kontakt"}
      className={twMerge(sectionClasses?.replaceAll(", ", " "))}
    >
      <div className="relative 2xl:max-w-screen-2xl px-4 lg:px-10 xl:px-14 mx-auto">
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
                  <div className="mb-4">
                    <h6 className={twMerge("text-lg lg:text-xl font-semibold", "mb-2")}>
                      Öffnungszeiten
                    </h6>
                    <OpeningTimes openingHours={openingTimes} />
                  </div>
                )}
                {includeEmergencyOpeningTimes && emergencyOpeningTimes && (
                  <div className="">
                    <h6 className={twMerge("text-lg lg:text-xl font-semibold")}>
                      Notdienst
                    </h6>
                    <OpeningTimes openingHours={emergencyOpeningTimes} />
                  </div>
                )}
              </div>
              <ContactDetails {...props} />
            </div>
          </div>
          {includeForm && contactForm && (
            <div className="w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0">
              {/* Form Component */}
              <div className={twMerge("bg-white p-6 lg:p-10 shadow-sm rounded-sm w-full", contentClasses?.replaceAll(",", " "))}>
                <FormComponent 
                  headingClasses={headingClasses?.replaceAll(",", " ")} 
                  form={contactForm} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <BottomContactForm /> */}
    </section>
  );
};
