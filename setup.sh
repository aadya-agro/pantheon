#!/bin/bash

# Adya - Quick Setup Script
# This script helps you set up the Adya expense automation app quickly

set -e  # Exit on any error

echo "🚀 Adya Expense Automation - Quick Setup"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | sed 's/v//')
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then 
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if pnpm is installed, if not, use npm
if command -v pnpm &> /dev/null; then
    PACKAGE_MANAGER="pnpm"
    echo "✅ Using pnpm for package management"
else
    PACKAGE_MANAGER="npm"
    echo "✅ Using npm for package management"
    echo "💡 Tip: Install pnpm for faster installations: npm install -g pnpm"
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
$PACKAGE_MANAGER install

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo ""
    echo "⚙️ Creating environment file..."
    cat > .env.local << EOL
# Adya Environment Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (add your database URL when ready)
# DATABASE_URL=your_database_url_here

# API Keys (add when implementing integrations)
# OPENAI_API_KEY=your_openai_api_key_here
# TWILIO_API_KEY=your_twilio_api_key_here
EOL
    echo "✅ Created .env.local file"
else
    echo "✅ Environment file already exists"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Quick Commands:"
echo "  Start development:  $PACKAGE_MANAGER dev"
echo "  Build for production: $PACKAGE_MANAGER build"
echo "  Run linter:         $PACKAGE_MANAGER lint"
echo ""
echo "🌐 The app will run at: http://localhost:3000"
echo ""
echo "🚀 Ready to start development? Run: $PACKAGE_MANAGER dev"
