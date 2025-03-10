import { getAvailableTemplates } from '../templates-data.js';

describe('getAvailableTemplates', () => {
  it('should be a function', () => {
    expect(typeof getAvailableTemplates).toBe('function');
  });

  it('should return an object with services and testimonials arrays', () => {
    const templates = getAvailableTemplates();
    expect(templates).toHaveProperty('services');
    expect(templates).toHaveProperty('testimonials');
    expect(Array.isArray(templates.services)).toBe(true);
    expect(Array.isArray(templates.testimonials)).toBe(true);
  });

  it('should have the correct structure for service templates', () => {
    const templates = getAvailableTemplates();
    const service = templates.services[0];
    
    expect(service).toHaveProperty('id');
    expect(service).toHaveProperty('value');
    expect(service).toHaveProperty('name');
    expect(service).toHaveProperty('description');
  });

  it('should have the correct structure for testimonial templates', () => {
    const templates = getAvailableTemplates();
    const testimonial = templates.testimonials[0];
    
    expect(testimonial).toHaveProperty('id');
    expect(testimonial).toHaveProperty('value');
    expect(testimonial).toHaveProperty('name');
    expect(testimonial).toHaveProperty('description');
  });

  it('should include the "testimonial-single" template', () => {
    const templates = getAvailableTemplates();
    const singleTemplate = templates.testimonials.find(t => t.id === 'testimonial-single');
    
    expect(singleTemplate).toBeDefined();
    expect(singleTemplate.name).toBe('Single Testimonial');
    expect(singleTemplate.description).toBe('Displays one testimonial at a time with navigation controls');
  });
}); 