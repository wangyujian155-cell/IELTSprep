# IELTSPrep Next.js (frontend + secure backend)

This repository is a minimal conversion of your original static site into a Next.js application with a secure server-side API proxy to the Generative Language (Gemini) API.

Key points
- The `GEMINI_API_KEY` must be set only on the server (e.g. in `.env.local`) and is never exposed to client-side code.
- The frontend calls `/api/ai` which runs server-side and forwards the prompt to the AI provider using the server-side key.

Quick start

1. Copy `.env.local.example` to `.env.local` and set your key:

```powershell
copy .env.local.example .env.local
# then edit .env.local and set GEMINI_API_KEY
```

2. Install and run locally:

```powershell
npm install
npm run dev
```

3. Open `http://localhost:3000` and try the prompt box.

Security notes
- Do not commit `.env.local` to version control. `.gitignore` already excludes it.
- Keep the key on the server only. All AI calls are performed server-side in `pages/api/ai.ts`.

If you want to use a different provider or an official SDK, update `pages/api/ai.ts` and keep the key in the server environment.
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Fu8-UNMaNSndART4KzG5xbtYKNzPZeA6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
