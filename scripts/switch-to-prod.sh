#!/bin/bash

# Switch to production mode by installing from git
echo "Switching to production mode..."

# Load environment variables from .env file if it exists
if [ -f ".env" ]; then
  echo "Loading environment variables from .env file..."
  export $(grep -v '^#' .env | xargs)
fi

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
  echo "ERROR: GITHUB_TOKEN environment variable is not set."
  echo "Please set it with: export GITHUB_TOKEN=your_github_token"
  echo "Or create a .env file in the project root with: GITHUB_TOKEN=your_github_token"
  exit 1
fi

# Remove any existing symlinks
if [ -L "node_modules/@schnellsite/types" ]; then
  rm node_modules/@schnellsite/types
fi

if [ -L "node_modules/@schnellsite/template-system" ]; then
  rm node_modules/@schnellsite/template-system
fi

# Unlink the local packages
npm unlink @schnellsite/types @schnellsite/template-system 2>/dev/null || true

# Update package.json to include the git dependencies
# This ensures they're properly listed in package.json
node -e '
const fs = require("fs");
const token = process.env.GITHUB_TOKEN;
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.dependencies = packageJson.dependencies || {};
packageJson.dependencies["@schnellsite/types"] = `git+https://matija2209:${token}@github.com/matija2209/schnellsite_types.git`;
packageJson.dependencies["@schnellsite/template-system"] = `git+https://matija2209:${token}@github.com/matija2209/template-system.git`;
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
console.log("Updated package.json with git dependencies");
'

# Install the git dependencies
npm install --save git+https://matija2209:${GITHUB_TOKEN}@github.com/matija2209/schnellsite_types.git
npm install --save git+https://matija2209:${GITHUB_TOKEN}@github.com/matija2209/template-system.git

# Debug: Check if the packages were installed correctly
echo "Debugging package installation:"
echo "Checking node_modules/@schnellsite/template-system:"
ls -la node_modules/@schnellsite/template-system || echo "Directory not found"
echo "Checking for sections/services directory:"
ls -la node_modules/@schnellsite/template-system/sections/services 2>/dev/null || echo "sections/services directory not found"
echo "Checking package.json of template-system:"
cat node_modules/@schnellsite/template-system/package.json 2>/dev/null || echo "package.json not found"

echo "Successfully switched to production mode. Packages are now installed from git." 