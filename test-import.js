// Test script to check imports
const templateSystem = require('./dist/index.js');

console.log('Full module:');
console.log(templateSystem);

console.log('\ngetAvailableTemplates:');
console.log(templateSystem.getAvailableTemplates);

console.log('\nCalling getAvailableTemplates():');
try {
  const templates = templateSystem.getAvailableTemplates();
  console.log(templates);
} catch (error) {
  console.error('Error calling getAvailableTemplates:', error);
}

// Try named import
try {
  const { getAvailableTemplates } = require('./dist/index.js');
  console.log('\nNamed import getAvailableTemplates:');
  console.log(getAvailableTemplates);
  
  console.log('\nCalling named import getAvailableTemplates():');
  console.log(getAvailableTemplates());
} catch (error) {
  console.error('Error with named import:', error);
} 