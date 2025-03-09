import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { createSection, templateRegistry } from 'template-package';

// Example of a Next.js page that uses the template system
export default function SitePage({ siteData }) {
    return (
        <>
            <Head>
                <title>{siteData.site.seo.title}</title>
                <meta name="description" content={siteData.site.seo.description} />
                <meta property="og:title" content={siteData.site.seo.title} />
                <meta property="og:description" content={siteData.site.seo.description} />
                {siteData.site.seo.image && (
                    <meta property="og:image" content={siteData.site.seo.image.url} />
                )}
            </Head>

            <main>
                {siteData.sections.map(section => {
                    // Skip excluded sections
                    if (section.excludeSection) {
                        return null;
                    }

                    // Prepare props based on section type
                    const commonProps = {
                        key: section.id,
                        title: section.title,
                        subtitle: section.subtitle,
                        className: section.sectionClasses,
                        headerClassName: section.headingClasses,
                        contentClassName: section.contentClasses,
                    };

                    // Add type-specific props
                    let sectionProps = { ...commonProps };

                    if (section.type === 'services') {
                        sectionProps = {
                            ...sectionProps,
                            services: siteData.content.services.services,
                            cta: section.cta,
                        };
                    } else if (section.type === 'hero') {
                        sectionProps = {
                            ...sectionProps,
                            backgroundImage: section.backgroundImage,
                            image: section.image,
                            cta: section.cta,
                            secondaryCta: section.secondaryCta,
                        };
                    } else if (section.type === 'about') {
                        sectionProps = {
                            ...sectionProps,
                            content: section.content,
                            image: section.image,
                            cta: section.cta,
                        };
                    } else if (section.type === 'contact') {
                        sectionProps = {
                            ...sectionProps,
                            email: siteData.general.contactEmail,
                            phone: siteData.general.phoneNumber,
                            address: siteData.general.address,
                            formFields: siteData.content.forms[0]?.fields,
                        };
                    }

                    // Create the section using the factory function
                    return createSection(
                        section.type,
                        section.sectionTemplate,
                        sectionProps
                    );
                })}
            </main>
        </>
    );
}

// Example of getStaticPaths to generate all site pages
export const getStaticPaths: GetStaticPaths = async () => {
    // Fetch all site slugs from your data source (e.g., Firebase)
    const sites = await fetchAllSites();

    return {
        paths: sites.map(site => ({ params: { slug: site.slug } })),
        fallback: false,
    };
};

// Example of getStaticProps to fetch data for a specific site
export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Fetch site data for this slug from your data source
    const siteData = await fetchSiteData(params.slug);

    // Add default templates for sections that don't have one
    siteData.sections = siteData.sections.map(section => {
        if (!section.sectionTemplate) {
            // Set default template based on section type
            switch (section.type) {
                case 'services':
                    section.sectionTemplate = 'services-grid';
                    break;
                case 'hero':
                    section.sectionTemplate = 'hero-centered';
                    break;
                case 'about':
                    section.sectionTemplate = 'about-standard';
                    break;
                case 'contact':
                    section.sectionTemplate = 'contact-standard';
                    break;
                default:
                    // No default template
                    break;
            }
        }
        return section;
    });

    return {
        props: {
            siteData,
        },
        // Optional: revalidate the page after a certain time (for ISR)
        revalidate: 60 * 60, // 1 hour
    };
};

// Mock functions for fetching data
async function fetchAllSites() {
    // In a real app, this would fetch from your database
    return [
        { slug: 'example-site' },
        { slug: 'another-site' },
    ];
}

async function fetchSiteData(slug) {
    // In a real app, this would fetch from your database
    return {
        id: 'example-site',
        site: {
            seo: {
                title: 'Example Site',
                description: 'This is an example site using the template system',
                image: {
                    url: '/images/example-site.jpg',
                    alt: 'Example Site',
                },
            },
        },
        general: {
            contactEmail: 'contact@example.com',
            phoneNumber: '123-456-7890',
            address: '123 Example St, City, Country',
        },
        content: {
            services: {
                services: [
                    {
                        id: 'service-1',
                        name: 'Service 1',
                        description: 'Description of service 1',
                        icon: 'fa-solid fa-star',
                    },
                    {
                        id: 'service-2',
                        name: 'Service 2',
                        description: 'Description of service 2',
                        icon: 'fa-solid fa-gear',
                    },
                    {
                        id: 'service-3',
                        name: 'Service 3',
                        description: 'Description of service 3',
                        icon: 'fa-solid fa-heart',
                    },
                ],
            },
            forms: [
                {
                    id: 'contact-form',
                    fields: [
                        {
                            id: 'name',
                            name: 'name',
                            type: 'text',
                            label: 'Name',
                            placeholder: 'Your name',
                            required: true,
                        },
                        {
                            id: 'email',
                            name: 'email',
                            type: 'email',
                            label: 'Email',
                            placeholder: 'Your email',
                            required: true,
                        },
                        {
                            id: 'message',
                            name: 'message',
                            type: 'textarea',
                            label: 'Message',
                            placeholder: 'Your message',
                            required: true,
                        },
                    ],
                },
            ],
        },
        sections: [
            {
                id: 'hero-1',
                type: 'hero',
                title: 'Welcome to Example Site',
                subtitle: 'A site built with the template system',
                sectionTemplate: 'hero-centered',
                excludeSection: false,
                cta: {
                    text: 'Learn More',
                    url: '#services',
                },
                backgroundImage: {
                    url: '/images/hero-bg.jpg',
                    alt: 'Hero Background',
                },
            },
            {
                id: 'services-1',
                type: 'services',
                title: 'Our Services',
                subtitle: 'We offer a range of services to meet your needs',
                sectionTemplate: 'services-grid',
                excludeSection: false,
                cta: {
                    text: 'Contact Us',
                    url: '#contact',
                },
            },
            {
                id: 'contact-1',
                type: 'contact',
                title: 'Contact Us',
                subtitle: 'Get in touch with our team',
                sectionTemplate: 'contact-standard',
                excludeSection: false,
            },
        ],
    };
} 