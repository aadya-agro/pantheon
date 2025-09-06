# Adya - Smart Expense Automation

🚀 **Redefining Effortless Expense Tracking**

Adya is an intelligent expense management application that automates expense entry and reduces manual effort for users. Say goodbye to tedious manual data entry and hello to smart, automated expense tracking.

## 💡 The Solution

We are building an **Expense Automation Engine** that automatically:

* **Extracts** expense data from multiple sources (SMS, emails, receipts, bank statements)
* **Categorizes** expenses intelligently using rule-based + AI models
* **Logs** expenses seamlessly without user intervention
* **Visualizes** data in a clean, intuitive dashboard

## ✨ Key Features

- **🤖 Smart Automation**: Automatically captures expenses from multiple sources
- **📱 Multi-Source Data Reading**: SMS, emails, notifications, digital receipts, bank statements
- **🎯 Intelligent Categorization**: Auto-tags expenses (Swiggy → Food, Uber → Travel)
- **🔒 Privacy First**: Secure handling of sensitive financial data
- **📊 Real-time Analytics**: Track spending patterns and budgets
- **🎨 Clean UI**: Minimal, intuitive interface built with Next.js and shadcn/ui

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Build Tool**: Turbopack for lightning-fast development
- **Code Quality**: ESLint for consistent code standards

---

## 🏆 Hackathon MVP

For the hackathon, we aim to build:

1. **Data source integration** → SMS & Email parsing
2. **Auto-expense logging** → Generate structured entries automatically
3. **Categorization** → Rule-based + lightweight ML categorizer
4. **Dashboard** → Display categorized expenses in a minimal UI

✅ Core requirements:

* No redundancy in captured data
* Privacy and security of user information
* Accuracy of automation and categorization

---

## 🧱 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable UI components
│   ├── landing/      # Landing page components
│   └── ui/           # shadcn/ui components
├── lib/              # Utility functions
├── types/            # TypeScript types
└── styles/           # Global styles
```

---

## 📦 Components

### Landing Page Components
- `Header` - Navigation and branding
- `Hero` - Main value proposition and CTAs
- `Features` - Key features with icons
- `HowItWorks` - Step-by-step process explanation
- `Security` - Privacy and security features
- `CTA` - Final call to action
- `Footer` - Additional links and information

### UI Components
- `Button` - Primary and secondary buttons
- `Card` - Content containers
- `Input` - Form inputs

---

## 🎨 Design Principles

1. **Clean & Minimal**: Focus on essential elements
2. **Consistent**: Unified design language across components
3. **Accessible**: WCAG compliant UI components
4. **Responsive**: Works on all device sizes
5. **Performance**: Optimized for fast loading

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/adya.git
cd adya
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will be available at http://localhost:300

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repo
2. Create a feature branch (`feature/new-feature`)
3. Commit changes and open a PR

---

## 🔒 Security

We prioritize user privacy. Sensitive data is **encrypted** and never stored without consent.

---

## 📜 License

MIT License – free to use and modify.

---

## 📞 Contact

For questions or feedback, please open an issue or contact the team.
