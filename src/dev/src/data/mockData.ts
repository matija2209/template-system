// Mock data for template previews

// Mock Service interface
export interface MockService {
  id: string;
  name: string;
  description?: string;
  image?: {
    url: string;
    alt?: string;
  };
  cta?: {
    text?: string;
    link: string;
    blockType?: string;
  };
}

// Mock services data
export const mockServices: MockService[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    image: {
      url: 'https://via.placeholder.com/300',
      alt: 'Web Development Icon',
    },
    cta: {
      text: 'Learn more about web development',
      link: '/services/web-development',
      blockType: 'button',
    },
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    image: {
      url: 'https://via.placeholder.com/300',
      alt: 'Mobile App Development Icon',
    },
    cta: {
      text: 'Explore mobile solutions',
      link: '/services/mobile-development',
      blockType: 'button',
    },
  },
  {
    id: '3',
    name: 'UI/UX Design',
    description: 'User-centered design that enhances usability and creates delightful experiences.',
    image: {
      url: 'https://via.placeholder.com/300',
      alt: 'UI/UX Design Icon',
    },
    cta: {
      text: 'See our design process',
      link: '/services/design',
      blockType: 'button',
    },
  },
  {
    id: '4',
    name: 'Digital Marketing',
    description: 'Strategic marketing campaigns to grow your online presence and drive conversions.',
    image: {
      url: 'https://via.placeholder.com/300',
      alt: 'Digital Marketing Icon',
    },
    cta: {
      text: 'Boost your online presence',
      link: '/services/marketing',
      blockType: 'button',
    },
  },
];

// Component types available for preview
export const templateTypes = [
  { id: 'basic-service-card', name: 'Basic Service Card' },
  { id: 'simple-list-service-card', name: 'Simple List Service Card' },
]; 