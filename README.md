# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Meridian Studio — SPA

A production-quality Single Page Application built with **React 18**, a
custom hash-based router, and the **Context API** for global state management.

---

## Architecture

### Routing (no dependencies)
Uses a custom `useRouter()` hook backed by the browser's `hashchange` event.
All navigation is hash-based (`#/home`, `#/about`, `#/work`, `#/contact`),
meaning it works on any static host without server-side redirect rules.

```
useRouter()
  ├── reads  window.location.hash
  ├── listens to hashchange
  └── navigate(to) → sets hash + scrolls to top
```

### State Management — React Context
`AppContext` holds global state and is consumed by any page:

| Field          | Type     | Description                         |
|----------------|----------|-------------------------------------|
| `lastVisited`  | string   | Last page the user was on           |
| `submissions`  | array    | Contact form submissions (in-session)|
| `theme`        | string   | Reserved for future dark-mode toggle|

Pages update context via `updateState(patch)` and `addSubmission(data)`.

### Pages
| Route      | Component      | Description                       |
|------------|----------------|-----------------------------------|
| `#/home`   | `HomePage`     | Hero, feature cards, stats, CTA   |
| `#/about`  | `AboutPage`    | Story, values grid, team cards    |
| `#/work`   | `WorkPage`     | Portfolio project grid            |
| `#/contact`| `ContactPage`  | Contact form with validation      |

### Page Transitions
Each `<Page>` component receives a unique `key={page}`, causing React to
unmount + remount on navigation. A CSS `@keyframes pageIn` animation
(fade + translateY) runs automatically on mount, producing a smooth slide-in.

### Progress Bar
A fixed 2px bar at the top tracks scroll depth on each page.

### Toast Notifications
Navigation events trigger a bottom toast, confirming the route change —
a subtle UX detail that makes navigation feel responsive.

---

## Running Locally

```bash
# No build step needed — just open index.html in a browser
open index.html

# Or serve with any static server
npx serve .
python3 -m http.server 8080
```

---

## Deploying to Netlify

1. Drag-and-drop the `spa-app/` folder to **app.netlify.com/drop**
2. Done — the `_redirects` file handles any direct URL hits

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel --prod
```
Add a `vercel.json` if needed:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Extending

### Add a new page
1. Create a new component, e.g. `function BlogPage() { ... }`
2. Add it to the `pages` map in `<App>`: `blog: BlogPage`
3. Add a `<a href="#/blog">` entry in `<Nav>`

### Switch to React Router (npm-based build)
Replace `useRouter()` with `react-router-dom`'s `useNavigate` + `<Routes>`:
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
```
The Context and all page components remain identical.

### Add Vuex / Zustand / Redux
The `AppContext` pattern maps 1-to-1 to any state library.
`updateState` → `dispatch`, `state` → `store.getState()`.
