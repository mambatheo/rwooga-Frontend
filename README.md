# Rwooga 3D Studio

A premium, futuristic web application for a 3D design and manufacturing studio. Rwooga specializes in hyper-realistic 3D visualizations, animated movies, custom 3D designs, and precision 3D printing.

## 🚀 Live Demo
[View Live Application](https://rwooga-project.vercel.app/)

## ✨ Key Features
- **User Authentication**: Secure registration and login flow with password reset functionality.
- **3D Visualization Showcase**: Interactive portfolio featuring high-end architectural and product renderings.
- **Service Portfolio**: Detailed descriptions of studio capabilities including Animation and Custom Design.
- **Admin Dashboard**: Specialized management interface for studio operations.
- **E-commerce Ready**: Shop section for 3D printed products.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop with smooth animations (Framer Motion).
- **Direct Support**: Integrated WhatsApp button for instant client communication.

## 🛠️ Tech Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (via CDN runtime), Vanilla CSS
- **Animations**: Framer Motion, Lucide React
- **Routing**: React Router 7 (HashRouter)
- **Deployment**: Vercel (Frontend) & Koyeb (Backend API)

## 🔧 Recent Updates & Fixes
- **Vercel Deployment**: Configured `vercel.json` to correctly proxy API requests (`/api`) to the Koyeb backend and handle SPA routing.
- **Branding Refresh**: Updated social icons in the footer, replacing the legacy Twitter icon with the modern **X** icon.
- **Auth Flow**: Refined registration and password reset handling to ensure compatibility with the production API.

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Environment Variables**: Create a `.env.local` for any necessary keys (e.g., `GEMINI_API_KEY`).

## 📡 API Configuration
The application proxies API requests from `/api` to:
`https://awful-carlina-solvitafrica-ac088785.koyeb.app`

This is managed via `vite.config.ts` for local development and `vercel.json` for production deployments.

---
© 2026 Rwooga. All Rights Reserved.
