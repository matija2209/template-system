#!/bin/bash

# Check if the package links are properly set up
echo "Checking package links..."

# Check if the directory exists
if [ ! -d "node_modules/@schnellsite" ]; then
  echo "ERROR: Directory node_modules/@schnellsite does not exist!"
  exit 1
fi

# Check types package
if [ -L "node_modules/@schnellsite/types" ]; then
  TARGET=$(readlink "node_modules/@schnellsite/types")
  echo "✅ @schnellsite/types is linked to: $TARGET"
else
  echo "❌ @schnellsite/types is NOT linked!"
  if [ -d "node_modules/@schnellsite/types" ]; then
    echo "   It exists as a regular directory (likely from npm install)"
  else
    echo "   It does not exist at all!"
  fi
fi

# Check template-system package
if [ -L "node_modules/@schnellsite/template-system" ]; then
  TARGET=$(readlink "node_modules/@schnellsite/template-system")
  echo "✅ @schnellsite/template-system is linked to: $TARGET"
else
  echo "❌ @schnellsite/template-system is NOT linked!"
  if [ -d "node_modules/@schnellsite/template-system" ]; then
    echo "   It exists as a regular directory (likely from npm install)"
  else
    echo "   It does not exist at all!"
  fi
fi

# Provide guidance
echo ""
echo "If links are missing, run: npm run switch:dev"
echo "If you want to use the git packages, run: npm run switch:prod" 