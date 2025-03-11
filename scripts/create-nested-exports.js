/**
 * This script creates the necessary directory structure and re-export files
 * to support both recommended import patterns and direct imports from nested paths.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to process based on our project structure
const directories = [
  'factory',
  'sections',
  'blocks',
  'types',
  'hooks',
  'utils',
  'components',
  'lib'
];

// Create the directory structure in the dist folder
directories.forEach(dir => {
  // Create the directory in the root of the package
  const rootDir = path.join(__dirname, '..', dir);
  if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir, { recursive: true });
  }

  // Create an index.js file that re-exports from dist
  const indexContent = `// Re-export from dist
export * from './dist/${dir}/index.js';
`;
  fs.writeFileSync(path.join(rootDir, 'index.js'), indexContent);

  // Create an index.d.ts file that re-exports types - without .js extension for TypeScript
  const dtsContent = `// Re-export types from dist
export * from './dist/${dir}/index';
`;
  fs.writeFileSync(path.join(rootDir, 'index.d.ts'), dtsContent);

  // Process individual files in each directory
  const distDir = path.join(__dirname, '..', 'dist', dir);
  if (fs.existsSync(distDir)) {
    const files = fs.readdirSync(distDir)
      .filter(file => file !== 'index.js' && file !== 'index.d.ts' && (file.endsWith('.js') || file.endsWith('.d.ts')));
    
    // Get unique base names (without extensions)
    const baseNames = [...new Set(files.map(file => path.basename(file, path.extname(file))))];
    
    // Create re-export files for each individual file
    baseNames.forEach(baseName => {
      // Skip index files
      if (baseName === 'index') return;
      
      const fileDir = path.join(rootDir, baseName);
      
      // Create directory for the file if it doesn't exist
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }
      
      // Create JS re-export with ES modules syntax
      const jsContent = `// Re-export from dist
export * from '../../dist/${dir}/${baseName}.js';
`;
      fs.writeFileSync(path.join(fileDir, 'index.js'), jsContent);
      
      // Create TS declaration re-export - without .js extension for TypeScript
      const dtsContent = `// Re-export types from dist
export * from '../../dist/${dir}/${baseName}';
`;
      fs.writeFileSync(path.join(fileDir, 'index.d.ts'), dtsContent);
    });
  }
});

console.log('Created nested exports for backward compatibility.'); 