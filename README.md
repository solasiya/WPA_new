# Web Pros Africa - Enterprise Platform

This is the enterprise-grade web platform for **Web Pros Africa**, a South African digital agency specializing in full-stack development, cloud infrastructure, mobile apps, custom web solutions, and high-performance PC building.

## Tech Stack

- **Frontend:** React + Vite + TypeScript + Tailwind CSS + Framer Motion
- **Hosting Ready:** Static site generation or simple web hosting compatible.

## Prerequisites

Before you can run this project locally, you must have the following installed on your machine:
1. **Node.js** (v18 or higher) & **npm**
   - *Ubuntu/Debian:* `sudo apt install nodejs npm`
   - *Windows/Mac:* Download from [nodejs.org](https://nodejs.org)

## Project Structure

- `/frontend` - The React Vite application (UI, PC Builder, Portfolio)

## Setup Instructions

Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```

Visit `http://localhost:5173` (or the port specified in terminal) in your browser to view the application.

## Deployment

This project is fully configured for seamless deployment on **[Render](https://render.com/)** using Infrastructure as Code (Blueprint).

### Deploying to Render
1. Push this entire repository to GitHub.
2. Log in to your Render dashboard.
3. Click **New** -> **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically detect the `render.yaml` file and configure the build commands, publish directory, and URL rewrite rules (essential for React Router).
6. Click **Apply** to deploy your site live!

## Features

- **Premium Design System:** Dark mode first, glassmorphism, responsive Tailwind styling.
- **Interactive PC Builder:** Real-time pricing and component selection with seamless quote requesting.
- **Interactive Portfolio:** Filterable showcase of past works and enterprise implementations.
