/**
 * Tests to verify that the package.json exports are correctly configured
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

describe('package.json configuration', () => {
  let packageJson;

  beforeAll(() => {
    // Read the package.json file
    const packageJsonPath = path.join(rootDir, 'package.json');
    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
    packageJson = JSON.parse(packageJsonContent);
  });

  it('should have the correct type field', () => {
    expect(packageJson.type).toBe('module');
  });

  it('should have the correct main and module fields', () => {
    expect(packageJson.main).toBe('dist/index.js');
    expect(packageJson.module).toBe('dist/index.js');
  });

  it('should have the correct exports configuration', () => {
    expect(packageJson.exports).toBeDefined();
    expect(packageJson.exports['.']).toBeDefined();
    expect(packageJson.exports['.'].import).toBe('./dist/index.js');
    expect(packageJson.exports['.'].require).toBe('./dist/index.js');
    expect(packageJson.exports['.'].types).toBe('./dist/index.d.ts');
  });

  it('should include necessary files in the files array', () => {
    expect(packageJson.files).toContain('dist');
    expect(packageJson.files).toContain('README.md');
  });

  it('should have the correct scripts', () => {
    expect(packageJson.scripts.clean).toBe('rm -rf dist');
    expect(packageJson.scripts.build).toContain('npm run clean && tsc');
    expect(packageJson.scripts.test).toContain('jest');
  });
}); 