#!/bin/bash
echo "=== PHISHING AWARENESS WEB MODULE ==="
echo ""

echo "Checking required files:"
ls -la presentation.html
ls -la assets/css/style.css
ls -la assets/js/script.js

echo ""
echo "Starting the Python web server..."
echo "Open http://localhost:8000/presentation.html in your browser"
echo "Press Ctrl+C to stop"
echo ""

python3 -m http.server 8000
