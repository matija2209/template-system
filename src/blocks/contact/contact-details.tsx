import type { ContactSectionProps } from "@/types/sections";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

const ContactDetails: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
  mapUrl,
  excludeSection,
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
  extraBlocks,
  contentClasses,
  type,
  id,
  title = 'Get in Touch',
  redirectUrl,
  openingTimes,
  emergencyOpeningTimes,
  openingTimesCustom,
  headingClasses
}) => {
  // Format phone number if provided
  const formattedPhone = phone?.replace(
    /(\+\d{2})(\d{3})(\d{3})(\d{4})/,
    "$1 $2 $3 $4"
  );

  return (
    <div className="space-y-2">
      {includeAddress && address ? (
        <div className="flex items-center gap-2">
          <Icon
            className="text-white rounded-full p-2 bg-black text-4xl"
            icon="mdi:location"
          />
          <a
            href={mapUrl || `http://maps.google.com/maps?q=${address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            {address}
          </a>
        </div>
      ) : null}

      {includeEmail && email ? (
        <div className="flex items-center gap-2">
          <Icon
            className="text-white rounded-full p-2 bg-black text-4xl"
            icon="mdi:email"
          />{" "}
          <a
            href={`mailto:${email}`}
            className="text-white"
          >
            {email}
          </a>
        </div>
      ) : null}

      {includePhone && phone ? (
        <div className="flex items-center gap-2">
          {phone.split(",").map((phoneNumber: string, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex flex-column gap-2 items-center"
              >
                <Icon
                  className="text-white rounded-full p-2 bg-black text-4xl"
                  icon="mdi:phone"
                />{" "}
                <a
                  href={`tel:${phoneNumber.trim()}`}
                  className="text-white"
                >
                  {" "}
                  {formattedPhone || phoneNumber.trim()}
                </a>
              </div>
            );
          })}
        </div>
      ) : null}
      
      {socialLinks && socialLinks.length > 0 && (
        <div className="flex items-center gap-4 mt-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Icon
                className="text-white rounded-full p-2 bg-black text-4xl"
                icon={link.icon || `mdi:${link.platform.toLowerCase()}`}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactDetails;