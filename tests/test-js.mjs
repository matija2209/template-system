// Test script for importing from JavaScript file
import { getAvailableTemplates } from './templates-data.js';

console.log('getAvailableTemplates function from JavaScript file:');
console.log(getAvailableTemplates);

console.log('\nCalling getAvailableTemplates() from JavaScript file:');
try {
  const templates = getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
} 