// Test script for importing from simple-index.js
import { getAvailableTemplates } from './dist-simple/simple-index.js';

console.log('getAvailableTemplates function from simple-index:');
console.log(getAvailableTemplates);

console.log('\nCalling getAvailableTemplates() from simple-index:');
try {
  const templates = getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
} 