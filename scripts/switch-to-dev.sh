#!/bin/bash

# Switch to development mode by linking local packages
echo "Switching to development mode..."

# Remove the git dependencies
npm uninstall @schnellsite/types 

# Ensure the directory structure exists
mkdir -p node_modules/@schnellsite

# Link the local packages
npm link /Users/ziberna/Documents/Projects/schnellsite/types


# Verify the links were created properly
if [ ! -L "node_modules/@schnellsite/types" ]; then
  echo "WARNING: npm link may have failed. Creating manual symlinks..."
  
  # Create manual symlinks as a fallback
  ln -sf /Users/ziberna/Documents/Projects/schnellsite/types node_modules/@schnellsite/types
fi

# Verify the links exist
if [ -L "node_modules/@schnellsite/types" ]; then
  echo "Successfully switched to development mode. Local packages are now linked."
else
  echo "ERROR: Failed to create symlinks. Please check the paths and permissions."
  exit 1
fi 