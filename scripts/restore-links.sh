#!/bin/bash

# Restore symbolic links after npm install
echo "Restoring symbolic links after npm install..."

# Ensure the directory structure exists
mkdir -p node_modules/@schnellsite

# Remove any existing non-symlink directories
if [ -d "node_modules/@schnellsite/types" ] && [ ! -L "node_modules/@schnellsite/types" ]; then
  echo "Removing non-symlink directory for @schnellsite/types..."
  rm -rf node_modules/@schnellsite/types
fi

# Create the symlinks
echo "Creating symlink for @schnellsite/types..."
ln -sf /Users/ziberna/Documents/Projects/schnellsite/types node_modules/@schnellsite/types

# Verify the links exist
if [ -L "node_modules/@schnellsite/types" ]; then
  TARGET=$(readlink "node_modules/@schnellsite/types")
  echo "✅ @schnellsite/types is linked to: $TARGET"
else
  echo "❌ ERROR: Failed to create symlink for @schnellsite/types"
  exit 1
fi

echo "Symbolic links have been restored successfully!" 