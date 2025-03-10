// Test script for getAvailableTemplates
import { getAvailableTemplates } from './dist/templates-data.js';

console.log('getAvailableTemplates function:');
console.log(getAvailableTemplates);

console.log('\nCalling getAvailableTemplates():');
try {
  const templates = getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
} 