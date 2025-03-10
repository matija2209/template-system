#!/bin/bash

# This script creates a proper symbolic link to the template-system in the client project
# It links to the dist directory instead of the root directory

# Build the project first
echo "Building the template-system..."
npm run build

# Path to the client project
CLIENT_PROJECT="../../Projects/schnellsite-generator"

# Check if the client project exists
if [ ! -d "$CLIENT_PROJECT" ]; then
  echo "Error: Client project not found at $CLIENT_PROJECT"
  exit 1
fi

# Create the directory structure if it doesn't exist
mkdir -p "$CLIENT_PROJECT/node_modules/@schnellsite"

# Remove the existing symbolic link if it exists
if [ -L "$CLIENT_PROJECT/node_modules/@schnellsite/template-system" ]; then
  echo "Removing existing symbolic link..."
  rm "$CLIENT_PROJECT/node_modules/@schnellsite/template-system"
fi

# Create a new symbolic link to the dist directory
echo "Creating symbolic link to the dist directory..."
ln -sf "$(pwd)/dist" "$CLIENT_PROJECT/node_modules/@schnellsite/template-system"

# Verify the link was created
if [ -L "$CLIENT_PROJECT/node_modules/@schnellsite/template-system" ]; then
  TARGET=$(readlink "$CLIENT_PROJECT/node_modules/@schnellsite/template-system")
  echo "✅ Successfully linked template-system to: $TARGET"
else
  echo "❌ Failed to create symbolic link"
  exit 1
fi

echo "Done! The client project is now linked to the compiled output of the template-system." 