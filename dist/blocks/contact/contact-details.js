import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
const ContactDetails = ({ email, phone, address, socialLinks, excludeSection, formId, includeAddress, includeEmail, includeEmergencyOpeningTimes, includeOpeningTimes, includePhone, includeMap, includeForm, action, subtitleClasses, sectionTemplate, sectionClasses, googlePlaceId, extraBlocks, contentClasses, type, id, title = 'Get in Touch', visibility, openingTimes, emergencyOpeningTimes, openingTimesCustom, headingClasses }) => {
    // Format phone number if provided
    const formattedPhone = phone?.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
    return (_jsxs("div", { className: "space-y-2", children: [includeAddress && address ? (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "contact-address-icon text-white rounded-full p-2 bg-black text-4xl" }), address] })) : null, includeEmail && email ? (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "contact-email-icon text-white rounded-full p-2 bg-black text-4xl" }), " ", _jsx("a", { href: `mailto:${email}`, className: "contact-email-link", children: email })] })) : null, includePhone && phone ? (_jsx("div", { className: "flex items-center gap-2", children: phone.split(",").map((phoneNumber, index) => {
                    return (_jsxs("div", { className: "w-full flex flex-column gap-2 items-center", children: [_jsx(Phone, { className: "contact-phone-icon rounded-full  text-white p-2 bg-black text-4xl" }), " ", _jsxs("a", { href: `tel:${phoneNumber.trim()}`, className: "contact-phone-link", children: [" ", formattedPhone || phoneNumber.trim()] })] }, index));
                }) })) : null, socialLinks && socialLinks.length > 0 && (_jsx("div", { className: "flex items-center gap-4 mt-4", children: socialLinks.map((link, index) => {
                    // Dynamically import the icon based on the platform
                    // This is a simplified approach - you may need to handle specific icons differently
                    const SocialIcon = () => {
                        // You can add more mappings as needed
                        switch (link.platform.toLowerCase()) {
                            case 'facebook':
                                return _jsx(Facebook, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                            case 'twitter':
                            case 'x':
                                return _jsx(Twitter, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                            case 'instagram':
                                return _jsx(Instagram, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                            case 'linkedin':
                                return _jsx(Linkedin, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                            case 'youtube':
                                return _jsx(Youtube, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                            default:
                                return _jsx(Globe, { className: "text-white rounded-full p-2 bg-black text-4xl" });
                        }
                    };
                    return (_jsx("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "contact-social-link", children: _jsx(SocialIcon, {}) }, index));
                }) }))] }));
};
export default ContactDetails;
