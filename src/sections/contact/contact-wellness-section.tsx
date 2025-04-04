// src/sections/contact_section/templates/ContactSectionWellness.tsx
import FormComponent from '../../blocks/contact/form-component';
import SectionHeading from '../../blocks/common/section-heading';
import ContactDetails from '../../blocks/contact/contact-details';
import GoogleMapsIframe from '../../blocks/contact/google-maps-iframe';
import OpeningTimesDisplay from '../../blocks/contact/opening-times-display';
import type { ContactSectionProps } from '../../types/sections';
import { twMerge } from 'tailwind-merge';

export const ContactSectionWellness: React.FC<ContactSectionProps> = ({ ...props }) => {
    const {
        email,
        phone,
        address,
        socialLinks,
        excludeSection,
        form,
        customStyles,
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
            className={twMerge("section bg-primary text-white", sectionClasses?.replaceAll(", ", " "))}
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
                                    </header>)
                            }
                            <div className="mb-8">
                                {openingTimesCustom?.active && (
                                    <p className={twMerge("text-xl", "text-white")}>{openingTimesCustom.message}</p>
                                )}
                                {openingTimes && includeOpeningTimes && (
                                    <OpeningTimesDisplay
                                        openingTimes={openingTimes}
                                        openingTimesCustom={openingTimesCustom}
                                        className="mb-4"
                                        titleClassName="text-lg lg:text-xl font-semibold mb-2"
                                        dayClassName="text-white"
                                        timeClassName="text-white"
                                    />
                                )}
                                {emergencyOpeningTimes && includeEmergencyOpeningTimes && (
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

                    {includeMap && googlePlaceId && (
                        <div className="w-full lg:w-1/2 z-10 h-min mt-8 lg:mt-0">
                            {/*  Google Maps (Wellness likely uses a map) */}
                            <GoogleMapsIframe googlePlaceId={googlePlaceId} />
                        </div>
                    )
                    }
                </div>
                {form && includeForm &&
                    <div
                        className={twMerge(
                            "bg-secondary pt-12",
                            "pb-24 px-4 md:px-2 lg:px-0"
                        )}
                    >
                        <div className="container mx-auto flex justify-center">
                            <div
                                className={twMerge(
                                    "px-6 md:px-16 py-20 shadow-sm rounded-sm w-full md:w-[60vw] xl:w-[40vw]",
                                    "bg-white"
                                )}
                            >
                                {form && includeForm && (
                                    <>
                                        {form.title && <header className='text-center mb-12'>
                                            <h2 className='form-title text-4xl text-muted-foreground font-bold'>{form.title}</h2>
                                            <p className='form-subtitle text-gray-600'>{form.subtitle}</p>
                                        </header>}
                                        <FormComponent form={form}></FormComponent>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
            {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
        </section>
    );
}

