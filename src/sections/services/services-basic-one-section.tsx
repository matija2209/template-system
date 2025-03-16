import React from 'react';
import type { ServicesSectionProps } from '../../types/index.js';
import { twMerge } from 'tailwind-merge';
import SectionHeading from '../../blocks/common/section-heading.js';

export const ServicesBasicOneSection: React.FC<ServicesSectionProps> = ({
    services,
    cta,
    excludeSection,
    includeServices,
    subtitle,
    title,
    type,
    design,
    visibility,
    customStyles,
    contentClasses,
    extraBlocks,
    headingClasses,
    sectionClasses,
    sectionTemplate,
    subtitleClasses,
    ImageComponent,
    id,
}) => {
    if (!services || services.length === 0) {
        return null;
    }

    return (
        <section id={id} className={twMerge(`py-12 px-4`, sectionClasses?.replaceAll(",", " "))}>
            <SectionHeading
                className={twMerge("max-w-7xl mx-auto", headingClasses?.replaceAll(",", " "))}
            >
                {title}
            </SectionHeading>
            <div className="max-w-7xl mx-auto">
                <div className="space-y-24">
                    <ul className="flex flex-col md:flex-row gap-2">
                        {services.map((service, index) => (
                            <li className="flex-grow space-y-4" key={service.id || index}>
                                {service.image && ImageComponent && (
                                    <div className="w-full h-48 relative">
                                        <ImageComponent
                                            src={service.image.url}
                                            alt={service.image.alt || service.name}
                                            layout="fill"
                                            objectFit="contain"
                                            className="max-w-full max-h-full"
                                        />
                                    </div>
                                )}
                                <div className="flex gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="text-primary w-8 h-8 md:w-8 md:h-8"
                                    >
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-xl">{service.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {cta && cta.text && (
                        <div className="text-center">
                            <a
                                href={cta.link || '#'}
                                className="inline-block px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 uppercase font-bold"
                            >
                                {cta.text}
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {customStyles && <style dangerouslySetInnerHTML={{ __html: customStyles }} />}
        </section>
    );
}; 