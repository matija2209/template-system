/**
 * Tests to verify that the templates-data.js file exports the getAvailableTemplates function correctly
 */

import * as templatesDataExports from '../../templates-data.js';
import { getAvailableTemplates } from '../../templates-data.js';
import defaultExport from '../../templates-data.js';

describe('templates-data.js exports', () => {
  // Test that the file exports the getAvailableTemplates function
  it('should export getAvailableTemplates as a named export', () => {
    expect(templatesDataExports).toHaveProperty('getAvailableTemplates');
    expect(typeof templatesDataExports.getAvailableTemplates).toBe('function');
  });

  // Test that named imports work
  it('should support named imports for getAvailableTemplates', () => {
    expect(getAvailableTemplates).toBeDefined();
    expect(typeof getAvailableTemplates).toBe('function');
  });

  // Test that default export works
  it('should provide a default export with getAvailableTemplates', () => {
    expect(defaultExport).toBeDefined();
    expect(defaultExport).toHaveProperty('getAvailableTemplates');
    expect(typeof defaultExport.getAvailableTemplates).toBe('function');
  });

  // Test that getAvailableTemplates returns the correct data
  it('should return the correct data from getAvailableTemplates', () => {
    const templates = getAvailableTemplates();
    
    // Check services templates
    expect(Array.isArray(templates.services)).toBe(true);
    expect(templates.services.length).toBeGreaterThan(0);
    expect(templates.services[0]).toHaveProperty('id');
    expect(templates.services[0]).toHaveProperty('value');
    expect(templates.services[0]).toHaveProperty('name');
    expect(templates.services[0]).toHaveProperty('description');
    
    // Check testimonials templates
    expect(Array.isArray(templates.testimonials)).toBe(true);
    expect(templates.testimonials.length).toBeGreaterThan(0);
    expect(templates.testimonials[0]).toHaveProperty('id');
    expect(templates.testimonials[0]).toHaveProperty('value');
    expect(templates.testimonials[0]).toHaveProperty('name');
    expect(templates.testimonials[0]).toHaveProperty('description');
    
    // Check for specific templates
    const singleTestimonial = templates.testimonials.find(t => t.id === 'testimonial-single');
    expect(singleTestimonial).toBeDefined();
    expect(singleTestimonial.name).toBe('Single Testimonial');
  });
}); 