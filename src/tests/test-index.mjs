// Test script for importing from index.js
import { getAvailableTemplates } from './dist/index.js';

console.log('getAvailableTemplates function from index:');
console.log(getAvailableTemplates);

console.log('\nCalling getAvailableTemplates() from index:');
try {
  const templates = getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
} 