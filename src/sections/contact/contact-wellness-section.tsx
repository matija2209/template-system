// src/sections/contact_section/templates/ContactSectionWellness.tsx
import SectionHeading from '../../blocks/common/section-heading';
import ContactDetails from '../../blocks/contact/contact-details';
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe';
import OpeningTimes from '../../blocks/contact/opening-times';
import type { ContactSectionProps } from '../../types/sections';
import { twMerge } from 'tailwind-merge';

export  const ContactSectionWellness: React.FC<ContactSectionProps> = ({...props}) => {
    const {
        email,
        phone,
        address,
        socialLinks,
        excludeSection,
        design,
        form,
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
        title = 'Get in Touch',
        openingTimes,
        emergencyOpeningTimes,
        openingTimesCustom,
        headingClasses
      } = props;
    return (
        <section
            id="kontakt"
            className={twMerge("bg-primary text-white",sectionClasses?.replaceAll(", ", " "))}
        >
            <div className="relative 2xl:max-w-screen-2xl px-4 lg:px-10 xl:px-14 mx-auto">
                <div className="flex flex-col lg:flex-row py-12 lg:py-24 gap-12">
                    <div className="w-full lg:w-1/2 z-10">
                        {/*  Contact Information (Wellness-Specific) */}
                        <div className="text-left">
                            {
                                !visibility?.hideSectionTitle && (
<header className="space-y-4">
                                 <SectionHeading className={twMerge("mb-4", headingClasses?.replaceAll(",", " "))}>
                                        {title}
                                </SectionHeading>
                            </header>                                )
                            }
                            <div className="mb-8">
                                {openingTimesCustom?.active && (
                                    <p className={twMerge("text-xl", "text-white")}>{openingTimesCustom.message}</p>
                                )}
                                {openingTimes && (
                                    <div className="mb-4">
                                        <h6 className={twMerge("text-lg lg:text-xl font-semibold ", "mb-2")}>
                                            Öffnungszeiten
                                        </h6>
                                        <OpeningTimes openingHours={openingTimes} />
                                    </div>
                                )}
                                {emergencyOpeningTimes && emergencyOpeningTimes && (
                                    <div className="">
                                        <h6 className={twMerge("text-lg lg:text-xl font-semibold ")}>
                                            Notdienst
                                        </h6>
                                        <OpeningTimes openingHours={emergencyOpeningTimes} />
                                    </div>
                                )}
                            </div>
                            <ContactDetails {...props} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0">
                        {/*  Google Maps (Wellness likely uses a map) */}
                        <GoogleMapsIframe googlePlaceId={googlePlaceId} />
                    </div>
                </div>
            </div>
        </section>
    );
}

