import React, { useState } from 'react'
import { ServicesListSection, ServicesCardsSection } from '../../sections/services'
import { createSection } from '../../index'
import { Button } from '../../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from '../../components/ui/sheet'
import { Settings, ChevronLeft, ChevronRight, ArrowDown, Layers } from 'lucide-react'

// Type definitions
type ServiceImage = {
  url: string;
  alt: string;
}

type ServiceCta = {
  text: string;
  link: string;
  blockType: 'cta';
}

type Service = {
  id: string;
  name: string;
  description: string;
  image: ServiceImage;
  cta: ServiceCta;
}

type Testimonial = {
  id: string;
  name: string;
  text: string;
  date: string;
  rating: number;
}

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  isActive: boolean;
  order: number;
}

type Faq = {
  items: FaqItem[];
}

type SocialLink = {
  platform: string;
  url: string;
  icon: string;
}

type TimeSlot = {
  from: string;
  to: string;
  closed: boolean;
}

type OpeningTimes = {
  monday: TimeSlot;
  tuesday: TimeSlot;
  wednesday: TimeSlot;
  thursday: TimeSlot;
  friday: TimeSlot;
  saturday: TimeSlot;
  sunday: TimeSlot;
}

type OpeningTimesCustom = {
  active: boolean;
  message: string;
}

type ContactData = {
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLink[];
  openingTimes: OpeningTimes;
  emergencyOpeningTimes: OpeningTimes;
  openingTimesCustom: OpeningTimesCustom;
}

// Section template types
type SectionVariant = {
  id: string;
  label: string;
}

type SectionCategory = {
  label: string;
  variants: SectionVariant[];
}

type SectionTemplates = {
  [key: string]: SectionCategory;
}

// Mock service data
const mockServices: Service[] = [
  {
    id: '1',
    name: 'Rohr- und Kanalreinigung',
    description: 'Verstopftes Rohr oder Abfluss? Wir reinigen Rohre und Kanäle jeder Größe mit modernster Technik wie elektromechanischen Saugfräsen, Unterdruck und Überdruck.',
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/gmb-scaling.appspot.com/o/images%2Frrs-3d4c4a23%2Fservice_1.jpg?alt=media&token=c8109da3-e5fa-4d76-9b9c-c475cf94af11',
      alt: 'Rohrreinigung Icon',
    },
    cta: {
      text: 'Button',
      link: '#',
      blockType: 'cta',
    },
  },
  {
    id: '2',
    name: 'Leckortung',
    description: 'Vermuten Sie ein Leck in Ihren Abwasser- oder Poolleitungen? Wir finden undichte Stellen schnell und zuverlässig – mit minimalem Aufwand.',
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/gmb-scaling.appspot.com/o/images%2Frrs-3d4c4a23%2Fservice_2.jpg?alt=media&token=3ba957c2-4d72-465c-9f5c-acbc21412091',
      alt: 'Leckortung Icon',
    },
    cta: {
      text: 'Button',
      link: '#',
      blockType: 'cta',
    },
  },
  {
    id: '3',
    name: 'Leitung- und Kanalortung',
    description: 'Mit modernen Kanalkameras erstellen wir präzise Pläne, die den Weg der Leitungen zeigen. Wichtig für Bauvorhaben, Reparaturen und zur Vermeidung von Schäden.',
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/gmb-scaling.appspot.com/o/images%2Frrs-3d4c4a23%2Fservice_3.jpg?alt=media&token=f2adc8df-52f1-4f91-8b2a-18967185edee',
      alt: 'Kanalortung Icon',
    },
    cta: {
      text: 'Button',
      link: '#',
      blockType: 'cta',
    },
  },
  {
    id: '4',
    name: 'Inlinersanierungen',
    description: 'Bei beschädigten oder undichten Rohren: Wir reparieren Ihre Rohrleitungen von innen – kosteneffizient und ohne unnötige Grabungen.',
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/gmb-scaling.appspot.com/o/images%2Frrs-3d4c4a23%2Fservice_4.jpg?alt=media&token=4313b9c2-223a-419b-8cfb-c6ce219c605b',
      alt: 'Inlinersanierung Icon',
    },
    cta: {
      text: 'Button',
      link: '#',
      blockType: 'cta',
    },
  },
];

// Mock testimonial data
const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    text: 'Absolutely fantastic service! The team was professional, efficient, and solved our plumbing issues in no time. I particularly appreciated their clear communication throughout the process.',
    date: '2024-03-15',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Schmidt',
    text: 'I was impressed by their quick response and thorough work. They used modern equipment and explained everything they were doing. The price was fair for the quality of service provided.',
    date: '2024-03-10',
    rating: 5,
  },
  {
    id: '3',
    name: 'Anna Weber',
    text: 'Had a complicated pipe issue that other companies couldn\'t fix. This team came in, quickly identified the problem, and fixed it permanently. Their expertise is evident in their work.',
    date: '2024-03-05',
    rating: 5,
  },
  {
    id: '4',
    name: 'Thomas Müller',
    text: 'Very professional and reliable service. They arrived on time, worked cleanly, and the results were excellent. I would definitely recommend them to anyone needing plumbing services.',
    date: '2024-02-28',
    rating: 5,
  },
];

// Mock FAQ data
const mockFaqs: Faq[] = [
  {
    items: [
      {
        id: 'faq-1',
        question: 'How quickly can you respond to emergency calls?',
        answer: 'We offer 24/7 emergency service and typically arrive within 1-2 hours for urgent situations. For non-emergency cases, we schedule appointments within 24-48 hours.',
        isActive: true,
        order: 1
      },
      {
        id: 'faq-2',
        question: 'Do you provide free estimates?',
        answer: 'Yes, we provide free estimates for all standard services. For more complex jobs requiring specialized equipment or extensive inspection, there may be a diagnostic fee that gets applied to the cost of service if you proceed with us.',
        isActive: true,
        order: 2
      },
      {
        id: 'faq-3',
        question: 'What areas do you service?',
        answer: 'We currently service the entire metropolitan area and surrounding suburbs within a 30-mile radius of the city center. For locations outside this area, please contact us to check availability.',
        isActive: true,
        order: 3
      },
      {
        id: 'faq-4',
        question: 'Are your technicians licensed and insured?',
        answer: 'Absolutely. All our technicians are fully licensed, bonded, and insured. They also undergo regular training to stay updated with the latest techniques and safety protocols.',
        isActive: true,
        order: 4
      },
      {
        id: 'faq-5',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, cash, and checks. For larger projects, we also offer financing options with approved credit.',
        isActive: true,
        order: 5
      }
    ]
  }
];

// Mock contact data
const mockContactData: ContactData = {
  email: 'info@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main Street, Anytown, CA 12345',
  socialLinks: [
    {
      platform: 'Facebook',
      url: 'https://facebook.com',
      icon: 'facebook'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram'
    }
  ],
  openingTimes: {
    monday: { from: '8:00 AM', to: '5:00 PM', closed: false },
    tuesday: { from: '8:00 AM', to: '5:00 PM', closed: false },
    wednesday: { from: '8:00 AM', to: '5:00 PM', closed: false },
    thursday: { from: '8:00 AM', to: '5:00 PM', closed: false },
    friday: { from: '8:00 AM', to: '4:00 PM', closed: false },
    saturday: { from: '9:00 AM', to: '1:00 PM', closed: false },
    sunday: { from: '', to: '', closed: true }
  },
  emergencyOpeningTimes: {
    monday: { from: '5:00 PM', to: '10:00 PM', closed: false },
    tuesday: { from: '5:00 PM', to: '10:00 PM', closed: false },
    wednesday: { from: '5:00 PM', to: '10:00 PM', closed: false },
    thursday: { from: '5:00 PM', to: '10:00 PM', closed: false },
    friday: { from: '4:00 PM', to: '10:00 PM', closed: false },
    saturday: { from: '1:00 PM', to: '10:00 PM', closed: false },
    sunday: { from: '10:00 AM', to: '6:00 PM', closed: false }
  },
  openingTimesCustom: {
    active: true,
    message: 'Holiday hours may vary. We are closed on all major holidays.'
  }
};

// Define section categories and their variants
const sectionTemplates: SectionTemplates = {
  services: {
    label: 'Services',
    variants: [
      { id: 'cards', label: 'Cards' },
      { id: 'list', label: 'List' }
    ]
  },
  testimonials: {
    label: 'Testimonials',
    variants: [
      { id: 'default', label: 'Simple' },
      { id: 'carousel', label: 'Carousel' },
      { id: 'testimonial-single', label: 'Single' }
    ]
  },
  faq: {
    label: 'FAQ',
    variants: [
      { id: 'faq-accordion', label: 'Accordion' }
    ]
  },
  contact: {
    label: 'Contact',
    variants: [
      { id: 'default', label: 'Default' },
      { id: 'modern', label: 'Modern' },
      { id: 'split', label: 'Split' },
      { id: 'card', label: 'Card' },
      { id: 'wellness', label: 'Wellness' }
    ]
  }
};

// Type for keys in sectionTemplates
type SectionCategoryKey = keyof typeof sectionTemplates;

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SectionCategoryKey>('services');
  const [selectedVariant, setSelectedVariant] = useState<string>(() => {
    // Initialize with the first variant of the selected category
    return sectionTemplates[selectedCategory].variants[0].id;
  });
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // Update selected variant when category changes
  const handleCategoryChange = (category: SectionCategoryKey) => {
    setSelectedCategory(category);
    setSelectedVariant(sectionTemplates[category].variants[0].id);
  };

  // Render the selected section template
  const renderSection = () => {
    switch (selectedCategory) {
      case 'services':
        if (selectedVariant === 'cards') {
          return (
            <ServicesCardsSection 
              services={mockServices} 
              className="bg-white rounded-lg shadow-md"
            />
          );
        } else if (selectedVariant === 'list') {
          return (
            <ServicesListSection 
              services={mockServices} 
              className="bg-white rounded-lg shadow-md"
            />
          );
        }
        break;

      case 'testimonials':
        return createSection('testimonials', selectedVariant, {
          testimonials: mockTestimonials,
          className: "bg-white rounded-lg shadow-md",
          title: "What Our Customers Say",
          subtitle: "Read about experiences from our satisfied customers"
        });

      case 'faq':
        return createSection('faq', selectedVariant, {
          faqs: mockFaqs,
          className: "bg-white rounded-lg shadow-md",
          title: "Frequently Asked Questions",
          subtitle: "Find answers to common questions about our services"
        });

      case 'contact':
        return createSection('contact', selectedVariant, {
          ...mockContactData,
          className: "bg-white rounded-lg shadow-md",
          title: "Get in Touch",
          subtitle: "We'd love to hear from you. Send us a message or visit our office."
        });

      default:
        return <div>Select a template</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card shadow-sm p-4 mb-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-card-foreground">Section Templates Preview</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsSheetOpen(true)} className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Change Template</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto px-4 pb-20 max-w-7xl">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium">{sectionTemplates[selectedCategory].label}</span>
            <ChevronRight className="h-4 w-4" />
            <span>{sectionTemplates[selectedCategory].variants.find(v => v.id === selectedVariant)?.label}</span>
          </div>
          <h2 className="text-2xl font-semibold mb-6 mt-2">{sectionTemplates[selectedCategory].label} - {sectionTemplates[selectedCategory].variants.find(v => v.id === selectedVariant)?.label}</h2>
        </div>

        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          {renderSection()}
        </div>
      </main>
      
      {/* Template Selection Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Select Template</SheetTitle>
            <SheetDescription>
              Choose a section type and template variant to preview
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-6">
            <Tabs 
              value={selectedCategory as string} 
              onValueChange={(value: string) => handleCategoryChange(value as SectionCategoryKey)}
              className="w-full"
            >
              <TabsList className="w-full grid grid-cols-4">
                {Object.keys(sectionTemplates).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {sectionTemplates[category as SectionCategoryKey].label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.keys(sectionTemplates).map((category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-2 gap-3">
                    {sectionTemplates[category as SectionCategoryKey].variants.map((variant) => (
                      <div 
                        key={variant.id}
                        className={`
                          border rounded-lg p-4 cursor-pointer transition-all hover:border-primary
                          ${selectedVariant === variant.id && selectedCategory === category 
                            ? 'bg-primary/10 border-primary' 
                            : 'bg-card'}
                        `}
                        onClick={() => {
                          setSelectedVariant(variant.id);
                        }}
                      >
                        <div className="h-20 rounded bg-muted mb-3 flex items-center justify-center">
                          {/* Placeholder for template thumbnail */}
                          <div className="text-xs text-muted-foreground">
                            {variant.label} Preview
                          </div>
                        </div>
                        <div className="font-medium text-sm">{variant.label}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <SheetFooter>
            <Button 
              onClick={() => setIsSheetOpen(false)}
              className="w-full sm:w-auto"
            >
              Apply Selection
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default App