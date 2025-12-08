# Agent Development Guide

This file is not necessarily for people, the intended audience is automated agents.

## Other references

Consider the content of `README.md` as well, it contains technical information
used by contributors to this project, as well as consumers of this project

## Consumers

This project is intended to primarily be consumed by the Ably website, voltaire
& docs projects. It is distributed via NPM as the `@ably/ui` package.

## Build & Test Commands

- `pnpm build` - Build the library (prebuild, icons, swc, tsc, cleanup)
- `pnpm test` - Run all tests with Vitest
- `pnpm test -- src/core/insights/index.test.ts` - Run a single test file
- `pnpm lint` - Run ESLint on all files
- `pnpm format:check` - Check formatting with Prettier
- `pnpm format:write` - Auto-format all files with Prettier
- `pnpm storybook` - Start Storybook dev server on port 6006
- `pnpm start` - Start Vite dev server on port 5000

## Code Style

- **Language**: TypeScript with strict mode enabled
- **React**: Use functional components with hooks; React 18.x
- **Imports**: Default export for main component, named exports for types/utils
- **Naming**: PascalCase for components/types, camelCase for functions/variables,
  kebab-case for files
- **Types**: Define prop types as `ComponentNameProps`, use `PropsWithChildren<T>`
  when needed
- **Styling**: Tailwind 3.4.
- **Utility**: Use `cn()` from `./src/core/utils/cn` for className merging (clsx
  & tailwind-merge)
- **Formatting**: Prettier defaults (no config = defaults), 2-space indent
- **Error Handling**: Wrap external service calls in try-catch, log with logger module
- **Comments**: JSDoc for props, inline comments for complex logic

Keep emojis in the code to a minimum, only introduce them if there is precedent
in the file you're working on.

Comments and commit messages should not include statements like "local tests pass",
this is a given for how we work.

## Development

- Run `pnpm lint` & `pnpm format:write` on files after making changes, we lint
  files in CI and don't want preventable failures. `pnpm lint:fix` should also
  apply our formatting rules while trying to fix most things for you
- Run tests with `pnpm test` after making file changes

## Styling Guide

### Color Palettes

The design system uses semantic color palettes defined in `src/core/styles/properties.css`
and configured for Tailwind in `tailwind.config.js`. Each palette has a different
number of color values:

- **Neutral**: 000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300 (14 values)
- **Orange**: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100 (11 values)
- **Yellow**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (9 values)
- **Green**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (9 values)
- **Blue**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (9 values)
- **Violet**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (9 values)
- **Pink**: 100, 200, 300, 400, 500, 600, 700, 800, 900 (9 values)

### Interactive Element Styling Patterns

When developing components with @ably/ui, **always** use Tailwind classes following
these established patterns to ensure consistent interactive behavior across light
and dark modes:

#### Dark Mode Mirroring

For any given color, add a dark mode class that mirrors it across the palette.
Lower values (lighter colors) in light mode should map to higher values (darker
colors) in dark mode, and vice versa.

**Examples:**

- `bg-neutral-100` pairs with `dark:bg-neutral-1200`
- `bg-neutral-200` pairs with `dark:bg-neutral-1100`
- `bg-neutral-1200` pairs with `dark:bg-neutral-100`
- `text-neutral-1300` pairs with `dark:text-neutral-000`
- `bg-orange-200` pairs with `dark:bg-orange-900` (orange has 11 values: 200 + 900 = 1100)
- `bg-blue-300` pairs with `dark:bg-blue-700` (blue has 9 values: 300 + 700 = 1000)

The sum of mirrored color numbers should equal the total palette range. Different
palettes have different ranges, so calculate mirrors accordingly:

- Neutral (000-1300): `light + dark = 1300`
- Orange (100-1100): `light + dark = 1200`
- Secondary colors (100-900): `light + dark = 1000`

#### Hover States

Use the **next color value** along the palette for hover states:

- `bg-neutral-100` → `hover:bg-neutral-200`
- `bg-neutral-200` → `hover:bg-neutral-300`
- `bg-orange-600` → `hover:bg-orange-700`

Apply this pattern to both light and dark mode classes:

```
bg-neutral-200 hover:bg-neutral-300
dark:bg-neutral-1100 dark:hover:bg-neutral-1000
```

#### Active States

Use **two color values** along the palette for active/pressed states:

- `bg-neutral-100` → `active:bg-neutral-300`
- `bg-neutral-200` → `active:bg-neutral-400`
- `bg-orange-600` → `active:bg-orange-800`

Apply to both modes:

```
bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400
dark:bg-neutral-1100 dark:hover:bg-neutral-1000 dark:active:bg-neutral-900
```

#### Focus Styles

Add the `focus-base` class to all interactive elements (buttons, links, inputs,
selects, etc.). This class is defined in `src/core/styles/utils.css` and provides
consistent focus styling with an accessible outline:

```css
.focus-base {
  @apply focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-0 focus-visible:outline-gui-focus;
}
```

#### Transitions

Add `transition-colors` to interactive elements unless a higher-specificity
`transition` class is already present (e.g., `transition-all`, `transition-transform`).
This ensures smooth visual feedback for state changes.

### Complete Example

Here's a complete button component demonstrating all patterns:

```tsx
<button
  className={cn(
    "px-4 py-2 rounded",
    "bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400",
    "dark:bg-neutral-1100 dark:hover:bg-neutral-1000 dark:active:bg-neutral-900",
    "text-neutral-1300 dark:text-neutral-000",
    "focus-base transition-colors",
  )}
>
  Click me
</button>
```

### Additional Examples

**Select dropdown:**

```tsx
<Select.Trigger
  className="bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400 dark:bg-neutral-1100 dark:hover:bg-neutral-1000 dark:active:bg-neutral-900 focus-base transition-colors border border-neutral-300 dark:border-neutral-1000"
>
```

**Badge with orange:**

```tsx
<span
  className="bg-orange-200 hover:bg-orange-300 active:bg-orange-400 dark:bg-orange-900 dark:hover:bg-orange-800 dark:active:bg-orange-700 focus-base transition-colors"
>
```

**Toggle/Switch:**

```tsx
<Switch
  className="bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800 data-[state=checked]:bg-orange-600 data-[state=checked]:hover:bg-orange-700 data-[state=checked]:active:bg-orange-800 focus-base transition-colors"
>
```

## Git workflow

- Always do work on a new branch, start the branch on the HEAD of `origin/main`
- Before pushing the branch run the tests and linters to ensure they are happy
- When updating a branch, rebase on `origin/main` and force-push (with lease)
- Use our PR template in the `.github` folder as a reference for the pull request
- Keep commit messages concise
