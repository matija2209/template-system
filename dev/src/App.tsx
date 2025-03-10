import React, { useState } from 'react'
import { ServicesListSection, ServicesCardsSection } from '../../sections/services'
import { createSection } from '../../index'
import { Button } from '../../components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../../components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

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
      blockType: 'cta' as 'cta',
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
      blockType: 'cta' as 'cta',
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
      blockType: 'cta' as 'cta',
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
      blockType: 'cta' as 'cta',
    },
  },
] as any;

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
] as any;

const App: React.FC = () => {
  const [view, setView] = useState<'cards' | 'list' | 'testimonials' | 'testimonials-carousel' | 'testimonials-single'>('cards');

  const viewOptions = [
    { value: 'cards', label: 'Services Cards' },
    { value: 'list', label: 'Services List' },
    { value: 'testimonials', label: 'Testimonials Simple' },
    { value: 'testimonials-carousel', label: 'Testimonials Carousel' },
    { value: 'testimonials-single', label: 'Testimonials Single' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-card shadow-sm p-4 mb-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-card-foreground">Section Templates Preview</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[200px] justify-between">
                {viewOptions.find(option => option.value === view)?.label}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>View Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {viewOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onSelect={() => setView(option.value as typeof view)}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="mx-auto px-4">
        {view === 'cards' && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Services Cards Section</h2>
            <ServicesCardsSection 
              services={mockServices} 
              className="bg-white rounded-lg shadow-md"
            />
          </div>
        )}
        
        {view === 'list' && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Services List Section</h2>
            <ServicesListSection 
              services={mockServices} 
              className="bg-white rounded-lg shadow-md"
            />
          </div>
        )}

        {view === 'testimonials' && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Testimonials Simple Section</h2>
            {createSection('testimonials', 'default', {
              testimonials: mockTestimonials,
              className: "bg-white rounded-lg shadow-md",
              title: "What Our Customers Say",
              subtitle: "Read about experiences from our satisfied customers"
            })}
          </div>
        )}

        {view === 'testimonials-carousel' && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Testimonials Carousel Section</h2>
            {createSection('testimonials', 'default', {
              testimonials: mockTestimonials,
              className: "bg-white rounded-lg shadow-md",
              title: "What Our Customers Say",
              subtitle: "Read about experiences from our satisfied customers"
            })}
          </div>
        )}

        {view === 'testimonials-single' && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Testimonials Single Section</h2>
            {createSection('testimonials', 'testimonial-single', {
              testimonials: mockTestimonials,
              title: "What Our Customers Say",
              subtitle: "Read about experiences from our satisfied customers"
            })}
          </div>
        )}
      
      </main>
    </div>
  )
}

export default App 