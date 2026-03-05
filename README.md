# 📖 PokéDex — SE Intern Tech Challenge 2026

A PokéDex web application built with Next.js, TypeScript, and PokéAPI as part of the SE Internship Admission Tech Challenge 2026.

---

## Project Overview

This project is a fully functional PokéDex that allows users to browse, search, and filter Pokémon fetched from the PokéAPI. Users can click on any Pokémon to view a detailed page showing its stats, abilities, types, height, and weight.

---

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- Yarn installed globally

```bash
npm install -g yarn
```

### Installation

install node

```bash

# Install dependencies
npm install
yarn install

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Yarn Commands

| Command       | Description              |
|---------------|--------------------------|
| `yarn dev`    | Start development server |
| `yarn build`  | Build for production     |
| `yarn start`  | Start production server  |
| `yarn lint`   | Run ESLint               |

---

## Notable Decisions

- **App Router** was chosen over Pages Router for cleaner file-based routing and native server component support
- **CSS Modules** used for scoped styling per component to avoid class name conflicts
- **API calls abstracted** into `lib/api.ts` to separate data fetching from UI components
- **TypeScript interfaces** defined in `types/pokemon.ts` and shared across the app for strict type safety
- **Search and filter** are handled client side by filtering already-loaded Pokémon data with no extra API calls
- **Type list is dynamically generated** from loaded Pokémon data using `flatMap` and `Set` to eliminate duplicates
- **Detail page is a server component** so data fetching happens on the server before the page reaches the browser — no `useEffect` needed
- **ES6 arrow functions** used consistently throughout all components and utility files

---