# 🚀 Installation & Setup Guide

This guide will help you set up and run the Adya expense automation application on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **pnpm** (recommended)
- **Git** (for cloning the repository)

### Check Your Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check pnpm version (if using pnpm)
pnpm --version
```

## 🛠️ Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/aadya-agro/pantheon.git
cd pantheon
```

### 2. Install Dependencies

Using **npm**:
```bash
npm install
```

Using **pnpm** (recommended for faster installation):
```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local  # If .env.example exists
# or
touch .env.local
```

Add the following environment variables to `.env.local`:
```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (when implemented)
DATABASE_URL=your_database_url_here

# API Keys (for future integrations)
OPENAI_API_KEY=your_openai_api_key_here
TWILIO_API_KEY=your_twilio_api_key_here
```

## 🏃 Running the Application

### Development Mode

Start the development server with hot reload:

Using **npm**:
```bash
npm run dev
```

Using **pnpm**:
```bash
pnpm dev
```

The application will be available at: **http://localhost:3000**

### Production Build

1. Build the application:
```bash
npm run build
# or
pnpm build
```

2. Start the production server:
```bash
npm start
# or
pnpm start
```

## 🧪 Development Commands

### Linting
```bash
npm run lint
# or
pnpm lint
```

### Type Checking
```bash
npx tsc --noEmit
# or
pnpm exec tsc --noEmit
```

## 📁 Project Structure

```
adya/
├── src/
│   ├── app/                 # Next.js 13+ App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── dashboard/       # Dashboard pages
│   ├── components/          # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   └── landing/         # Landing page components
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## 🎨 UI Components

This project uses **shadcn/ui** components with **Tailwind CSS**. The components are located in `src/components/ui/`.

### Available Components
- Button
- Card
- Badge
- Input
- Custom landing page components

## 🔧 Troubleshooting

### Common Issues

#### 1. Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
# or
pnpm dev -- -p 3001
```

#### 2. Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
# or
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 3. TypeScript Errors
Ensure TypeScript version compatibility:
```bash
npm install typescript@latest @types/node@latest @types/react@latest @types/react-dom@latest
```

#### 4. Tailwind CSS Not Working
Restart the development server:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Performance Optimization

For better development experience:
- Use **pnpm** instead of npm for faster installations
- Enable **Turbopack** (already configured in package.json)
- Use **VS Code** with TypeScript and Tailwind CSS extensions

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Development

The application is responsive and works on:
- iOS Safari
- Android Chrome
- Mobile browsers with modern JavaScript support

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment
1. Build the application: `npm run build`
2. Copy the `.next` folder and `public` folder to your server
3. Run `npm start` on your server

## 📞 Support

If you encounter any issues:

1. Check the [troubleshooting section](#🔧-troubleshooting)
2. Review the Next.js documentation
3. Check the shadcn/ui documentation
4. Create an issue in the repository

## 🔄 Updates

To update the application:
```bash
git pull origin main
npm install  # or pnpm install
npm run build  # or pnpm build
```

---

**Happy coding! 🎉**

For more information, visit the main [README.md](./README.md) file.
