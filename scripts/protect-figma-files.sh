#!/bin/bash

# Script to protect Figma files - makes them read-only (view only, not editable or deletable)

FIGMA_DIR="assets/figma"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FIGMA_PATH="$SCRIPT_DIR/$FIGMA_DIR"

echo "🔒 Protecting Figma files in: $FIGMA_PATH"

if [ -d "$FIGMA_PATH" ]; then
    # Make all .fig files read-only
    find "$FIGMA_PATH" -name "*.fig" -type f -exec chmod 444 {} \;
    
    echo "✅ Figma files are now protected (read-only)"
    echo "   Files cannot be edited or deleted without changing permissions first"
    echo ""
    echo "To temporarily allow editing (if needed):"
    echo "   chmod 644 \"$FIGMA_PATH/*.fig\""
    echo ""
    echo "To restore protection:"
    echo "   ./protect-figma-files.sh"
else
    echo "❌ Directory not found: $FIGMA_PATH"
    exit 1
fi

