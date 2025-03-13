#!/bin/bash

# Configuration
TYPES_PATH="/Users/ziberna/Documents/Projects/schnellsite/types"
TEMPLATE_SYSTEM_PATH="/Users/ziberna/Documents/Projects/template-system"
NODE_MODULES_PATH="$(pwd)/node_modules"
LOG_FILE="symlink_setup.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Clear log file
echo "" > "$LOG_FILE"

# Log start
echo "$(date '+%Y-%m-%d %H:%M:%S') - Starting symlink operation..." >> "$LOG_FILE"
echo -e "Starting symlink operation..."

# Define link paths
TYPES_LINK="${NODE_MODULES_PATH}/@schnellsite/types"
TEMPLATE_LINK="${NODE_MODULES_PATH}/@schnellsite/template-system"

# Track success/failure
success_count=0
failure_count=0

# Unlink @schnellsite/types
if [ -L "$TYPES_LINK" ] || [ -e "$TYPES_LINK" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Removing existing link: $TYPES_LINK" >> "$LOG_FILE"
    echo -e "Removing existing link: $TYPES_LINK"
    rm -rf "$TYPES_LINK"
    if [ $? -ne 0 ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Failed to remove @schnellsite/types" >> "$LOG_FILE"
        echo -e "${RED}❌ Failed to remove @schnellsite/types${NC}"
        ((failure_count++))
    fi
fi

# Unlink @schnellsite/template-system
if [ -L "$TEMPLATE_LINK" ] || [ -e "$TEMPLATE_LINK" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Removing existing link: $TEMPLATE_LINK" >> "$LOG_FILE"
    echo -e "Removing existing link: $TEMPLATE_LINK"
    rm -rf "$TEMPLATE_LINK"
    if [ $? -ne 0 ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Failed to remove @schnellsite/template-system" >> "$LOG_FILE"
        echo -e "${RED}❌ Failed to remove @schnellsite/template-system${NC}"
        ((failure_count++))
    fi
fi

# Link @schnellsite/types
if [ -d "$TYPES_PATH" ]; then
    mkdir -p "$NODE_MODULES_PATH"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Creating symbolic link: $TYPES_LINK -> $TYPES_PATH" >> "$LOG_FILE"
    echo -e "Creating symbolic link: $TYPES_LINK -> $TYPES_PATH"
    ln -s "$TYPES_PATH" "$TYPES_LINK"
    if [ -L "$TYPES_LINK" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Successfully linked @schnellsite/types" >> "$LOG_FILE"
        echo -e "${GREEN}✅ Successfully linked @schnellsite/types${NC}"
        ((success_count++))
    else
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Failed to link @schnellsite/types" >> "$LOG_FILE"
        echo -e "${RED}❌ Failed to link @schnellsite/types${NC}"
        ((failure_count++))
    fi
else
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Error: Target directory does not exist: $TYPES_PATH" >> "$LOG_FILE"
    echo -e "${RED}Error: Target directory does not exist: $TYPES_PATH${NC}"
    ((failure_count++))
fi

# Link @schnellsite/template-system
if [ -d "$TEMPLATE_SYSTEM_PATH" ]; then
    mkdir -p "$NODE_MODULES_PATH"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Creating symbolic link: $TEMPLATE_LINK -> $TEMPLATE_SYSTEM_PATH" >> "$LOG_FILE"
    echo -e "Creating symbolic link: $TEMPLATE_LINK -> $TEMPLATE_SYSTEM_PATH"
    ln -s "$TEMPLATE_SYSTEM_PATH" "$TEMPLATE_LINK"
    if [ -L "$TEMPLATE_LINK" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Successfully linked @schnellsite/template-system" >> "$LOG_FILE"
        echo -e "${GREEN}✅ Successfully linked @schnellsite/template-system${NC}"
        ((success_count++))
    else
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Failed to link @schnellsite/template-system" >> "$LOG_FILE"
        echo -e "${RED}❌ Failed to link @schnellsite/template-system${NC}"
        ((failure_count++))
    fi
else
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Error: Target directory does not exist: $TEMPLATE_SYSTEM_PATH" >> "$LOG_FILE"
    echo -e "${RED}Error: Target directory does not exist: $TEMPLATE_SYSTEM_PATH${NC}"
    ((failure_count++))
fi

# Summary
echo "$(date '+%Y-%m-%d %H:%M:%S') - Operation completed:" >> "$LOG_FILE"
echo -e "Operation completed:"
echo "$(date '+%Y-%m-%d %H:%M:%S') - Successful operations: $success_count" >> "$LOG_FILE"
echo -e "Successful operations: $success_count"
echo "$(date '+%Y-%m-%d %H:%M:%S') - Failed operations: $failure_count" >> "$LOG_FILE"
echo -e "Failed operations: $failure_count"

if [ $failure_count -eq 0 ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') - All operations completed successfully." >> "$LOG_FILE"
    echo -e "${GREEN}All operations completed successfully.${NC}"
    exit 0
else
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Some operations failed. Check the log for details." >> "$LOG_FILE"
    echo -e "${RED}Some operations failed. Check the log for details.${NC}"
    exit 1
fi