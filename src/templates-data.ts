/**
 * Returns all available templates for each section type
 * @returns An object containing templates for each section type
 */
export const getAvailableTemplates = () => {
  return {
    services: [
      {
        id: "services-cards",
        value: "services-cards",
        name: "Services Cards",
        description: "Displays services in a grid of cards"
      },
      {
        id: "services-list",
        value: "services-list",
        name: "Services List",
        description: "Displays services in a vertical list"
      }
    ],
    testimonials: [
      {
        id: "default",
        value: "default",
        name: "XAXA Carousel",
        description: "Displays testimonials in a carousel format"
      },
      {
        id: "testimonial-single",
        value: "testimonial-single",
        name: "Single Testimonial",
        description: "Displays one testimonial at a time with navigation controls"
      }
    ],
    about :[
      {
        id: "default",
      }
    ],
    faq: [
      {
        id: "faq-accordion",
        value: "faq-accordion",
        name: "FAQ Accordion",
        description: "Displays FAQs in an accordion format using Shadcn UI"
      },
    ],
    contact: [
      {
        id: "wellness",
        value: "wellness",
        name: "Wellness Contact Form",
        description: "A wellness-focused contact form design"
      },
      {
        id: "default",
        value: "default",
        name: "Contact Form with Info",
        description: "Displays a contact form alongside contact information"
      },
      {
        id: "modern",
        value: "modern",
        name: "Modern Contact Form",
        description: "A modern, sleek contact form design"
      },
      {
        id: "split",
        value: "split",
        name: "Split Contact Layout",
        description: "Contact form with a split layout design"
      },
      {
        id: "card",
        value: "card",
        name: "Card Contact Form",
        description: "Contact form presented in a card format"
      }
    ]
  };
}; 