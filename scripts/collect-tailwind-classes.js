#!/usr/bin/env node

/**
 * Script to collect Tailwind classes from the template-system package
 * This script is meant to be run in the template-system package during build
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Directories to scan for classes
  scanDirs: ['./src'],
  // File extensions to scan
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  // Output file path
  outputFile: './dist/tailwind-classes.json',
  // Props that might contain Tailwind classes
  classProps: [
    'className',
    'sectionClasses',
    'headingClasses',
    'subtitleClasses',
    'contentClasses',
    'containerClasses',
    'wrapperClasses',
    'tailwindClasses',
    'customClasses',
  ],
};

/**
 * Collects all files with specified extensions from a directory
 * @param {string} dir - Directory to scan
 * @returns {Array} Array of file paths
 */
function collectFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return [];
  }

  try {
    const pattern = `${dir}/**/*{${CONFIG.extensions.join(',')}}`;
    return globSync(pattern);
  } catch (error) {
    console.error(`Error collecting files from ${dir}:`, error);
    return [];
  }
}

/**
 * Extracts potential Tailwind classes from a file
 * @param {string} filePath - Path to the file
 * @returns {Set} Set of extracted class names
 */
function extractClassesFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const uniqueClasses = new Set();

    // Pattern 1: className="..." or className={`...`} or className={"..."}
    const classNameRegex = /className=(?:{`|{"|")([\w\s-:/[\]\.]+)(?:`}|"}|")/g;

    // Pattern 2: className={...} with string concatenation
    const concatRegex = /className=(?:{)(?:[\w\s.()]+)\s*\+\s*(?:")([\w\s-:/[\]\.]+)(?:")/g;

    // Pattern 3: Any class merging function with string arguments
    const classMergingRegex = /(?:twMerge|classNames|clsx|cn|mergeClasses|foriance|classnames)?\((?:")([\w\s-:/[\]\.]+)(?:")/g;

    // Pattern 4: Any merging function with multiple string arguments
    const multiArgMergingRegex = /(?:twMerge|classNames|clsx|cn|mergeClasses|foriance|classnames)?\((?:[^)]*?")([\w\s-:/[\]\.]+)(?:")/g;

    // Apply all regex patterns
    [
      classNameRegex,
      concatRegex,
      classMergingRegex,
      multiArgMergingRegex,
    ].forEach((regex) => {
      let match;
      while ((match = regex.exec(content)) !== null) {
        const classString = match[1];
        if (classString) {
          // Split by whitespace to get individual classes
          const classes = classString.split(/\s+/);

          // Add each class to our set of unique classes
          classes.forEach((cls) => {
            if (cls && !cls.includes('${') && cls.trim().length > 0) {
              uniqueClasses.add(cls.trim());
            }
          });
        }
      }
    });

    // Special patterns for common Tailwind classes
    const patterns = [
      // Layout
      /\bcontainer\b/g,
      /\bflex\b/g,
      /\bgrid\b/g,
      /\bhidden\b/g,
      /\bblock\b/g,
      /\binline\b/g,
      /\binline-block\b/g,
      /\binline-flex\b/g,

      // Spacing
      /\b(m|p|gap)(t|r|b|l|x|y)?-[\w-]+\b/g,

      // Sizing
      /\b(w|h|min-w|min-h|max-w|max-h)-[\w-]+\b/g,

      // Typography
      /\btext-[\w-]+\b/g,
      /\bfont-[\w-]+\b/g,

      // Backgrounds
      /\bbg-[\w-]+\b/g,

      // Borders
      /\bborder(?:-[\w-]+)?\b/g,
      /\brounded(?:-[\w-]+)?\b/g,

      // Effects
      /\bshadow(?:-[\w-]+)?\b/g,
      /\bopacity-[\w-]+\b/g,

      // Transitions
      /\btransition(?:-[\w-]+)?\b/g,

      // Transforms
      /\b(scale|rotate|translate|skew)-[\w-]+\b/g,

      // Responsive prefixes
      /\b(sm|md|lg|xl|2xl):[a-zA-Z0-9:_-]+\b/g,

      // Flexbox & Grid
      /\b(justify|items|content|self|place)-[\w-]+\b/g,
      /\b(col|row)-[\w-]+\b/g,
      /\bgap-[\w-]+\b/g,

      // Position
      /\b(static|fixed|absolute|relative|sticky)\b/g,
      /\b(top|right|bottom|left)-[\w-]+\b/g,
      /\bz-[\w-]+\b/g,
    ];

    patterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        uniqueClasses.add(match[0]);
      }
    });

    return uniqueClasses;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return new Set();
  }
}

/**
 * Checks if a string is likely to be a Tailwind class
 * @param {string} cls - The class to check
 * @returns {boolean} Whether the class is likely a Tailwind class
 */
function isTailwindClass(cls) {
  // Common Tailwind prefixes
  const tailwindPrefixes = [
    'bg-', 'text-', 'font-', 'p-', 'm-', 'px-', 'py-', 'mx-', 'my-', 'mt-', 'mr-', 'mb-', 'ml-',
    'pt-', 'pr-', 'pb-', 'pl-', 'w-', 'h-', 'min-w-', 'min-h-', 'max-w-', 'max-h-', 'border-',
    'rounded-', 'shadow-', 'opacity-', 'z-', 'gap-', 'grid-', 'flex-', 'justify-', 'items-',
    'content-', 'self-', 'col-', 'row-', 'space-', 'translate-', 'rotate-', 'scale-', 'skew-',
    'origin-', 'object-', 'overflow-', 'transition-', 'duration-', 'ease-', 'delay-', 'animate-',
    'cursor-', 'outline-', 'ring-', 'fill-', 'stroke-', 'sr-', 'backdrop-', 'aspect-'
  ];

  // Common standalone Tailwind classes
  const standaloneClasses = [
    'container', 'flex', 'grid', 'block', 'inline', 'inline-block', 'inline-flex', 'table',
    'hidden', 'visible', 'invisible', 'static', 'fixed', 'absolute', 'relative', 'sticky',
    'underline', 'line-through', 'no-underline', 'uppercase', 'lowercase', 'capitalize', 'normal-case',
    'truncate', 'overflow-ellipsis', 'overflow-clip', 'break-normal', 'break-words', 'break-all',
    'antialiased', 'subpixel-antialiased'
  ];

  // Common responsive prefixes
  const responsivePrefixes = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];

  // Common state variants
  const stateVariants = ['hover:', 'focus:', 'active:', 'disabled:', 'visited:', 'first:', 'last:', 'odd:', 'even:'];

  // Check if the class starts with a responsive prefix
  for (const prefix of responsivePrefixes) {
    if (cls.startsWith(prefix)) {
      // Remove the responsive prefix and check the rest
      return isTailwindClass(cls.substring(prefix.length));
    }
  }

  // Check if the class starts with a state variant
  for (const variant of stateVariants) {
    if (cls.startsWith(variant)) {
      // Remove the state variant and check the rest
      return isTailwindClass(cls.substring(variant.length));
    }
  }

  // Check if the class is a standalone Tailwind class
  if (standaloneClasses.includes(cls)) {
    return true;
  }

  // Check if the class starts with a Tailwind prefix
  for (const prefix of tailwindPrefixes) {
    if (cls.startsWith(prefix)) {
      return true;
    }
  }

  // Check for numeric utility classes like 'top-0', 'left-1/2', etc.
  if (/^(top|right|bottom|left|inset|z|order|col|row)-[0-9\/]+$/.test(cls)) {
    return true;
  }

  // Check for arbitrary value classes with square brackets
  if (cls.includes('[') && cls.includes(']')) {
    return true;
  }

  // If none of the above, it's probably not a Tailwind class
  return false;
}

/**
 * Main function to collect all Tailwind classes
 */
function collectTailwindClasses() {
  console.log('Starting Tailwind class collection...');

  const allClasses = new Set();

  // Collect files from all scan directories
  CONFIG.scanDirs.forEach((dir) => {
    console.log(`Scanning directory: ${dir}`);
    const files = collectFiles(dir);
    console.log(`Found ${files.length} files to process`);

    // Process each file
    files.forEach((file) => {
      const fileClasses = extractClassesFromFile(file);
      fileClasses.forEach((cls) => {
        // Only add if it's likely a Tailwind class
        if (isTailwindClass(cls)) {
          allClasses.add(cls);
        }
      });
    });
  });

  // Convert set to sorted array
  const classesArray = Array.from(allClasses).sort();
  console.log(`Found ${classesArray.length} unique Tailwind classes`);

  // Create output directory if it doesn't exist
  const outputDir = path.dirname(CONFIG.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write classes to output file
  fs.writeFileSync(
    CONFIG.outputFile,
    JSON.stringify(classesArray, null, 2),
    'utf-8'
  );
  console.log(`Saved Tailwind classes to ${CONFIG.outputFile}`);
}

// Run the collection process
collectTailwindClasses(); 