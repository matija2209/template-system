/**
 * Tests to verify that all main functions are properly exported from the built index.js file
 * 
 * Note: These tests require the project to be built first (npm run build)
 */

import * as indexExports from '../dist/index.js';
import { getAvailableTemplates } from '../dist/index.js';
import defaultExport from '../dist/index.js';

describe('index.js exports', () => {
  // Test that the file exports the expected functions
  it('should export all required functions as named exports', () => {
    expect(indexExports).toHaveProperty('createSection');
    expect(indexExports).toHaveProperty('createServicesSection');
    expect(indexExports).toHaveProperty('createTestimonialSection');
    expect(indexExports).toHaveProperty('getAvailableTemplates');
    
    // Verify they are functions
    expect(typeof indexExports.createSection).toBe('function');
    expect(typeof indexExports.createServicesSection).toBe('function');
    expect(typeof indexExports.createTestimonialSection).toBe('function');
    expect(typeof indexExports.getAvailableTemplates).toBe('function');
  });

  // Test that named imports work
  it('should support named imports', () => {
    expect(getAvailableTemplates).toBeDefined();
    expect(typeof getAvailableTemplates).toBe('function');
    
    // Test that the function returns the expected data
    const templates = getAvailableTemplates();
    expect(templates).toHaveProperty('services');
    expect(templates).toHaveProperty('testimonials');
  });

  // Test that default export works
  it('should provide a default export with all functions', () => {
    expect(defaultExport).toBeDefined();
    expect(defaultExport).toHaveProperty('createSection');
    expect(defaultExport).toHaveProperty('createServicesSection');
    expect(defaultExport).toHaveProperty('createTestimonialSection');
    expect(defaultExport).toHaveProperty('getAvailableTemplates');
    
    // Verify they are functions
    expect(typeof defaultExport.createSection).toBe('function');
    expect(typeof defaultExport.createServicesSection).toBe('function');
    expect(typeof defaultExport.createTestimonialSection).toBe('function');
    expect(typeof defaultExport.getAvailableTemplates).toBe('function');
  });

  // Test that getAvailableTemplates returns the correct data
  it('should return the correct data from getAvailableTemplates', () => {
    const templates = indexExports.getAvailableTemplates();
    
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