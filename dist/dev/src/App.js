import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { ServicesListSection, ServicesCardsSection } from '../../sections/services';
import { createSection } from '../../index';
import { Button } from '../../components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, } from '../../components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
// Mock service data with correct type
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
const App = () => {
    const [view, setView] = useState('cards');
    const viewOptions = [
        { value: 'cards', label: 'Services Cards' },
        { value: 'list', label: 'Services List' },
        { value: 'testimonials', label: 'Testimonials Simple' },
        { value: 'testimonials-carousel', label: 'Testimonials Carousel' },
        { value: 'testimonials-single', label: 'Testimonials Single' },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [_jsx("header", { className: "bg-card shadow-sm p-4 mb-6", children: _jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-card-foreground", children: "Section Templates Preview" }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "w-[200px] justify-between", children: [viewOptions.find(option => option.value === view)?.label, _jsx(ChevronDown, { className: "ml-2 h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "View Options" }), _jsx(DropdownMenuSeparator, {}), viewOptions.map((option) => (_jsx(DropdownMenuItem, { onSelect: () => setView(option.value), children: option.label }, option.value)))] })] })] }) }), _jsxs("main", { className: "mx-auto px-4", children: [view === 'cards' && (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-700", children: "Services Cards Section" }), _jsx(ServicesCardsSection, { services: mockServices, className: "bg-white rounded-lg shadow-md" })] })), view === 'list' && (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-700", children: "Services List Section" }), _jsx(ServicesListSection, { services: mockServices, className: "bg-white rounded-lg shadow-md" })] })), view === 'testimonials' && (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-700", children: "Testimonials Simple Section" }), createSection('testimonials', 'default', {
                                testimonials: mockTestimonials,
                                className: "bg-white rounded-lg shadow-md",
                                title: "What Our Customers Say",
                                subtitle: "Read about experiences from our satisfied customers"
                            })] })), view === 'testimonials-carousel' && (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-700", children: "Testimonials Carousel Section" }), createSection('testimonials', 'default', {
                                testimonials: mockTestimonials,
                                className: "bg-white rounded-lg shadow-md",
                                title: "What Our Customers Say",
                                subtitle: "Read about experiences from our satisfied customers"
                            })] })), view === 'testimonials-single' && (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-700", children: "Testimonials Single Section" }), createSection('testimonials', 'testimonial-single', {
                                testimonials: mockTestimonials,
                                title: "What Our Customers Say",
                                subtitle: "Read about experiences from our satisfied customers"
                            })] }))] })] }));
};
export default App;
