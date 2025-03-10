/**
 * Tests to verify that all main functions are properly exported from the package
 */

import * as indexExports from '../dist/index.js';

describe('All package exports', () => {
  // Test that all required functions are exported
  it('should export all required functions', () => {
    const requiredExports = [
      'createSection',
      'createServicesSection',
      'createTestimonialSection',
      'getAvailableTemplates'
    ];

    requiredExports.forEach(exportName => {
      expect(indexExports).toHaveProperty(exportName);
      expect(typeof indexExports[exportName]).toBe('function');
    });
  });

  // Test that each function can be imported individually
  it('should allow each function to be imported individually', async () => {
    // Test each import separately
    const { createSection } = await import('../dist/index.js');
    expect(typeof createSection).toBe('function');

    const { createServicesSection } = await import('../dist/index.js');
    expect(typeof createServicesSection).toBe('function');

    const { createTestimonialSection } = await import('../dist/index.js');
    expect(typeof createTestimonialSection).toBe('function');

    const { getAvailableTemplates } = await import('../dist/index.js');
    expect(typeof getAvailableTemplates).toBe('function');
  });

  // Test that the default export includes all functions
  it('should include all functions in the default export', async () => {
    const defaultExport = (await import('../dist/index.js')).default;
    
    expect(defaultExport).toBeDefined();
    
    const requiredExports = [
      'createSection',
      'createServicesSection',
      'createTestimonialSection',
      'getAvailableTemplates'
    ];

    requiredExports.forEach(exportName => {
      expect(defaultExport).toHaveProperty(exportName);
      expect(typeof defaultExport[exportName]).toBe('function');
    });
  });
}); 