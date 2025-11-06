# BR2 - Business Intelligence Platform

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/abhishek-fodikars-projects/v0-br-2)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/tOykD4kYxKl)

## Overview

A comprehensive Business Intelligence Dashboard that provides intelligence-driven insights for business accounts, centers, and services. Features advanced filtering, data visualization, and secure authentication.

### Key Features

- **Secure Authentication**: Powered by Clerk for user management and authentication
- **Database Integration**: Connected to Neon PostgreSQL for real-time data
- **Advanced Filtering**: Multi-select filters with saved configurations
- **Data Visualization**: Interactive pie charts and analytics
- **Excel Export**: Export filtered data to Excel spreadsheets
- **Responsive Design**: Built with Next.js 14, React 19, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Neon database account
- A Clerk account for authentication

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Neon Database
DATABASE_URL=postgresql://username:password@host/database?sslmode=require

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk URLs (optional - defaults shown below)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Setting Up Clerk Authentication

1. **Create a Clerk Account**
   - Go to [clerk.com](https://clerk.com) and sign up
   - Create a new application

2. **Get Your API Keys**
   - In your Clerk dashboard, go to **API Keys**
   - Copy the **Publishable Key** (starts with `pk_`)
   - Copy the **Secret Key** (starts with `sk_`)

3. **Configure Environment Variables**
   - Add your Clerk keys to `.env.local` (for local development)
   - For Vercel deployment, add them in **Project Settings → Environment Variables**

4. **Configure Clerk Settings** (Optional)
   - In Clerk dashboard, go to **User & Authentication → Email, Phone, Username**
   - Configure your preferred authentication methods
   - Customize appearance in **Customization** section

### Setting Up Neon Database

1. **Create a Neon Account**
   - Go to [neon.tech](https://neon.tech) and sign up
   - Create a new project

2. **Get Connection String**
   - In your Neon dashboard, click **Connection Details**
   - Copy the connection string
   - Add it to your `.env.local` as `DATABASE_URL`

3. **For Vercel Deployment**
   - Go to your Vercel project → **Settings → Environment Variables**
   - Add `DATABASE_URL` with your Neon connection string

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

Your project is live at:

**[https://vercel.com/abhishek-fodikars-projects/v0-br-2](https://vercel.com/abhishek-fodikars-projects/v0-br-2)**

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in **Project Settings → Environment Variables**
4. Deploy!

## Build your app

Continue building your app on:

**[https://v0.app/chat/tOykD4kYxKl](https://v0.app/chat/tOykD4kYxKl)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 19
- **Styling**: Tailwind CSS + Radix UI
- **Authentication**: Clerk
- **Database**: Neon PostgreSQL
- **Charts**: Recharts
- **Data Export**: SheetJS (xlsx)

## Features

### Authentication
- Secure sign-in/sign-up pages
- Protected routes with middleware
- User profile management
- Session handling

### Dashboard
- Real-time data filtering
- Multi-dimensional filters (countries, regions, industries, etc.)
- Revenue range slider
- Search functionality with debouncing
- Save and load filter configurations

### Data Visualization
- Pie charts for account distribution
- Region and industry analytics
- Revenue and employee range visualizations
- Interactive tooltips

### Data Management
- Paginated tables (50 items per page)
- Export to Excel (individual tables or all data)
- Database connection status monitoring
- Cache management

## License

This project is created with v0.app