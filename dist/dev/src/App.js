import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { ServicesListSection, ServicesCardsSection } from '../../sections/services';
import { createSection } from '../../index';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '../../components/ui/sheet';
import { Settings, ChevronLeft, ChevronRight, ArrowDown, Layers } from 'lucide-react';
// Mock service data
const mockServices = [
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
const mockTestimonials = [
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
const mockFaqs = [
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
const mockContactData = {
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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606519114!2d-122.41941548468204!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1648181241223!5m2!1sen!2sus',
    formEndpoint: 'https://formspree.io/f/example',
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
const sectionTemplates = {
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
            { id: 'card', label: 'Card' }
        ]
    }
};
const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('services');
    const [selectedVariant, setSelectedVariant] = useState(() => {
        // Initialize with the first variant of the selected category
        return sectionTemplates[selectedCategory].variants[0].id;
    });
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    // Update selected variant when category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedVariant(sectionTemplates[category].variants[0].id);
    };
    // Render the selected section template
    const renderSection = () => {
        switch (selectedCategory) {
            case 'services':
                if (selectedVariant === 'cards') {
                    return (_jsx(ServicesCardsSection, { services: mockServices, className: "bg-white rounded-lg shadow-md" }));
                }
                else if (selectedVariant === 'list') {
                    return (_jsx(ServicesListSection, { services: mockServices, className: "bg-white rounded-lg shadow-md" }));
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
                return _jsx("div", { children: "Select a template" });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [_jsx("header", { className: "bg-card shadow-sm p-4 mb-6 sticky top-0 z-10", children: _jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-card-foreground", children: "Section Templates Preview" }), _jsx("div", { className: "flex gap-2", children: _jsxs(Button, { variant: "outline", size: "sm", onClick: () => setIsSheetOpen(true), className: "flex items-center gap-2", children: [_jsx(Layers, { className: "h-4 w-4" }), _jsx("span", { children: "Change Template" })] }) })] }) }), _jsxs("main", { className: "mx-auto px-4 pb-20 max-w-7xl", children: [_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [_jsx("span", { className: "font-medium", children: sectionTemplates[selectedCategory].label }), _jsx(ChevronRight, { className: "h-4 w-4" }), _jsx("span", { children: sectionTemplates[selectedCategory].variants.find(v => v.id === selectedVariant)?.label })] }), _jsxs("h2", { className: "text-2xl font-semibold mb-6 mt-2", children: [sectionTemplates[selectedCategory].label, " - ", sectionTemplates[selectedCategory].variants.find(v => v.id === selectedVariant)?.label] })] }), _jsx("div", { className: "bg-white rounded-lg border shadow-sm overflow-hidden", children: renderSection() })] }), _jsx(Sheet, { open: isSheetOpen, onOpenChange: setIsSheetOpen, children: _jsxs(SheetContent, { className: "w-full sm:max-w-md", children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Select Template" }), _jsx(SheetDescription, { children: "Choose a section type and template variant to preview" })] }), _jsx("div", { className: "py-6", children: _jsxs(Tabs, { value: selectedCategory, onValueChange: (value) => handleCategoryChange(value), className: "w-full", children: [_jsx(TabsList, { className: "w-full grid grid-cols-4", children: Object.keys(sectionTemplates).map((category) => (_jsx(TabsTrigger, { value: category, className: "text-sm", children: sectionTemplates[category].label }, category))) }), Object.keys(sectionTemplates).map((category) => (_jsx(TabsContent, { value: category, className: "mt-6", children: _jsx("div", { className: "grid grid-cols-2 gap-3", children: sectionTemplates[category].variants.map((variant) => (_jsxs("div", { className: `
                          border rounded-lg p-4 cursor-pointer transition-all hover:border-primary
                          ${selectedVariant === variant.id && selectedCategory === category
                                                    ? 'bg-primary/10 border-primary'
                                                    : 'bg-card'}
                        `, onClick: () => {
                                                    setSelectedVariant(variant.id);
                                                }, children: [_jsx("div", { className: "h-20 rounded bg-muted mb-3 flex items-center justify-center", children: _jsxs("div", { className: "text-xs text-muted-foreground", children: [variant.label, " Preview"] }) }), _jsx("div", { className: "font-medium text-sm", children: variant.label })] }, variant.id))) }) }, category)))] }) }), _jsx(SheetFooter, { children: _jsx(Button, { onClick: () => setIsSheetOpen(false), className: "w-full sm:w-auto", children: "Apply Selection" }) })] }) })] }));
};
export default App;
