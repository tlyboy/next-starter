# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **Start production**: `pnpm start`

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 with `@tailwindcss/postcss`
- next-themes for dark mode
- pnpm as package manager (Node.js >= 22 required)

## Architecture

- **App Router**: Pages in `app/` directory using Next.js App Router conventions
- **Components**: Reusable components in `components/` directory
- **Path alias**: `@/*` maps to project root
- **Standalone output**: Configured for containerized deployment (Docker/Vercel/Netlify)

## Key Patterns

- **Theme system**: Uses `next-themes` with `ThemeProvider` wrapper. Dark mode toggle includes View Transitions API animation.
- **Icons**: Uses `@egoist/tailwindcss-icons` with Carbon icons (`i-carbon-*` classes)
- **CSS components**: Custom `.btn` and `.icon-btn` utility classes defined in `globals.css`
- **Dark mode**: Class-based dark mode via `@custom-variant dark` in Tailwind CSS v4
