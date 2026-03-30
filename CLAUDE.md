# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm serve          # dev server with HMR
pnpm build          # tsc type-check + vite build (must pass before committing)
pnpm lint           # ESLint
pnpm lint:fix       # ESLint with auto-fix
pnpm format         # Prettier (write)
pnpm format:check   # Prettier (CI check)
pnpm preview        # preview production build locally
```

## Architecture

**Stack:** React 19, TypeScript 5.8 (strict), Vite 7, styled-components 6, GSAP 3, pnpm.

**Component layout** — every file follows this exact order:
1. React imports
2. External library imports (gsap, styled-components)
3. Relative imports (types, sibling components)
4. TypeScript interfaces
5. Component function (`export default`)
6. Styled components — always last, after a `// ── Styled Components ──` separator banner

Styled components are never exported from their file. All transient props use the `$` prefix (styled-components v6 convention) to prevent DOM forwarding.

**Directory roles:**
- `src/components/layout/` — persistent UI (Navbar, Footer); Navbar reads `useScrollProgress` to drive a thin progress bar
- `src/components/sections/` — full-width page sections rendered once in order (Hero, About, Projects, Contact); all except Hero use `SectionWrapper` as their outermost element
- `src/components/ui/` — stateless primitives (SectionWrapper, ProjectCard)
- `src/hooks/` — `useIntersectionObserver` (scroll reveal, IO-based) and `useScrollProgress` (0–1 scroll fraction)
- `src/types/index.ts` — shared interfaces (NavLink, Project, SocialLink, ScrollRevealState)

**Data flow:** `App.tsx` owns all static data as module-level constants (outside the component function) and passes everything down as props. No global state, no Context.

**Scroll reveal pattern:** `SectionWrapper` internally calls `useIntersectionObserver({ triggerOnce: true })` and drives opacity + translateY via a `$isVisible` transient prop. Sections do not implement their own reveal logic.

**GSAP pattern** (Hero only): always use `gsap.context(() => { ... }, ref)` scoped to a container ref, and return `ctx.revert()` from the effect cleanup. This is required for React 19 StrictMode safety — without it the double-mount produces duplicate animations.

**useEffect rules:**
- Dep arrays use primitive values only, never object references
- Every effect that registers a listener or observer must return a cleanup
- `IntersectionObserver` cleanup: `observer.disconnect()`
- Event listener cleanup: `removeEventListener` with the exact same handler reference

**CSS tokens:** All design values (colors, spacing, typography, z-index, transitions, layout widths) are CSS custom properties defined in `src/index.css` under `:root`. Styled components consume these via `var(--token-name)` — never hardcode values.

**TypeScript strict flags active:** `verbatimModuleSyntax` (all type-only imports must use `import type`), `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` (no `const enum`, no runtime `namespace`).

**Import order** (enforced by Prettier + `@trivago/prettier-plugin-sort-imports`): `react` → `react-*` → `@/*` (unused, reserved) → relative. Third-party non-React packages (gsap, styled-components) sort before the React group due to a quirk in the current `importOrder` config — don't fight it.

**No path aliases** are configured. Use relative imports throughout.

**Barrel exports:** `src/components/index.ts` re-exports all components. `App.tsx` imports from `./components`, not from direct component paths.
