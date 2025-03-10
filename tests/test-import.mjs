// Test script to check imports (ES modules version)
import templateSystem, { getAvailableTemplates } from './dist/index.js';

console.log('Full module:');
console.log(templateSystem);

console.log('\ngetAvailableTemplates from default export:');
console.log(templateSystem.getAvailableTemplates);

console.log('\nCalling getAvailableTemplates() from default export:');
try {
  const templates = templateSystem.getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
}

// Try named import
console.log('\nNamed import getAvailableTemplates:');
console.log(getAvailableTemplates);

console.log('\nCalling named import getAvailableTemplates():');
try {
  console.log(getAvailableTemplates());
} catch (error) {
  console.error('Error with named import:', error);
} 