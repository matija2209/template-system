// Test script to verify imports directly from the built package
import { createSection, createTestimonialSection, getAvailableTemplates } from './dist/index.js';

console.log('Imported functions:');
console.log('createSection:', typeof createSection);
console.log('createTestimonialSection:', typeof createTestimonialSection);
console.log('getAvailableTemplates:', typeof getAvailableTemplates);

console.log('\ngetAvailableTemplates result:');
console.log(getAvailableTemplates()); 