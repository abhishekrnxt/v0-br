# BR2

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/abhishek-fodikars-projects/v0-br-2)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/tOykD4kYxKl)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/abhishek-fodikars-projects/v0-br-2](https://vercel.com/abhishek-fodikars-projects/v0-br-2)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/tOykD4kYxKl](https://v0.app/chat/tOykD4kYxKl)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Environment Variables

To run this project, you need to set up the following environment variables:

### Mapbox Configuration

The Centers tab includes a map visualization powered by Mapbox. You need to:

1. Get your Mapbox access token from [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/)
2. Add the token to your Vercel environment variables:
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add: `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` with your token value

For local development, create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
```

The map uses a custom Mapbox style: `mapbox://styles/abhishekfx/cltyaz9ek00nx01p783ygdi9z`