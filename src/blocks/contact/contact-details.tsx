import type { ContactSectionProps } from "@/types/sections";
import { twMerge } from "tailwind-merge";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react";

const ContactDetails: React.FC<ContactSectionProps> = ({
  email,
  phone,
  address,
  socialLinks,
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
  visibility,
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
          <MapPin
            className="contact-address-icon text-white rounded-full p-2 bg-black text-4xl"
          />
          {address}
        </div>
      ) : null}

      {includeEmail && email ? (
        <div className="flex items-center gap-2">
          <Mail
            className="contact-email-icon text-white rounded-full p-2 bg-black text-4xl"
          />{" "}
          <a
            href={`mailto:${email}`}
            className="contact-email-link"
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
                <Phone
                  className="contact-phone-icon rounded-full  text-white p-2 bg-black text-4xl"
                />{" "}
                <a
                  href={`tel:${phoneNumber.trim()}`}
                  className="contact-phone-link"
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
          {socialLinks.map((link, index) => {
            // Dynamically import the icon based on the platform
            // This is a simplified approach - you may need to handle specific icons differently
            const SocialIcon = () => {
              // You can add more mappings as needed
              switch (link.platform.toLowerCase()) {
                case 'facebook':
                  return <Facebook className="text-white rounded-full p-2 bg-black text-4xl" />;
                case 'twitter':
                case 'x':
                  return <Twitter className="text-white rounded-full p-2 bg-black text-4xl" />;
                case 'instagram':
                  return <Instagram className="text-white rounded-full p-2 bg-black text-4xl" />;
                case 'linkedin':
                  return <Linkedin className="text-white rounded-full p-2 bg-black text-4xl" />;
                case 'youtube':
                  return <Youtube className="text-white rounded-full p-2 bg-black text-4xl" />;
                default:
                  return <Globe className="text-white rounded-full p-2 bg-black text-4xl" />;
              }
            };

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContactDetails;