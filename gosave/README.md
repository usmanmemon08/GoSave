# GoSave

Membership-based discount and deals platform for Hyderabad.

## Tech Stack
- Client: React (Vite), TailwindCSS, React Router
- Server: Node.js, Express, Supabase, JWT
- DB/Auth: Supabase

## Project Structure
See `gosave/` root. Client and Server are separate apps.

## Getting Started
1. Copy `.env.example` to `.env` and fill values.
2. Install deps:
   - Client: `cd client && npm install`
   - Server: `cd server && npm install`
3. Run dev servers:
   - API: `cd server && npm run dev`
   - Web: `cd client && npm run dev`

## Environment
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` for client
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `JWT_SECRET` for server

## API
- Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/profile`
- Deals: `/api/deals`, `/api/deals/:id`, `/api/deals/categories`
- Membership: `/api/membership/plans`, `/api/membership/purchase`, `/api/membership/status`
- Partners: `/api/partners`, `/api/partners/:id`, `/api/partners/locations`

## Deployment
- Client: Vercel/Netlify
- Server: Render/Railway/Fly.io