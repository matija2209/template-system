import React from 'react';
import type { FaqSectionProps } from '../../types/index.js';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../../components/ui/accordion.js';
import { twMerge } from 'tailwind-merge';

// Define the FaqItem interface locally if it's not available in the types
interface FaqItem {
  id: string;
  question: string;
  isActive: boolean;
  answer: string;
  order: number;
}

export const FaqAccordionSection: React.FC<FaqSectionProps> = ({
  faqs,
  id,
  customStyles,
  title,
  subtitle,
  sectionClasses,
}) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Flatten all FAQ items from all repositories
  const allFaqItems = faqs.sort((a: FaqItem, b: FaqItem) => a.order - b.order)

  return (
    <section id={id} className={twMerge(`py-12 px-4`, sectionClasses)}>
      <div className="container mx-auto max-w-4xl">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        <Accordion type="single" collapsible className="w-full">
          {allFaqItems.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
    </section>
  );
}; 