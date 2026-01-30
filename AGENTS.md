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

### Custom Hooks

- **Naming**: `use` prefix with descriptive name (e.g., `useContentHeight`, `useThemedScrollpoints`)
- **JSDoc**: Always include for custom hooks, especially performance-related ones
- **Parameters**: Document with `@param` including types and defaults
- **Returns**: Document with `@returns` including type and semantic meaning
- **Performance rationale**: Include "why" in JSDoc when optimizing (e.g., "eliminates forced reflows")
- **Cleanup**: Always return cleanup function to prevent memory leaks
- **Shared constants**: Import from `src/core/utils/heights.ts` instead of duplicating

Example:

```typescript
/**
 * Tracks element height using ResizeObserver to avoid forced reflows.
 *
 * @param ref - React ref to the element to observe
 * @param initialHeight - Initial height value (default: 0)
 * @returns Current height in pixels
 */
export function useContentHeight(
  ref: RefObject<HTMLElement>,
  initialHeight = 0,
): number {
  // Implementation...
}
```

Keep emojis in the code to a minimum, only introduce them if there is precedent
in the file you're working on.

Comments and commit messages should not include statements like "local tests pass",
this is a given for how we work.

## Development

- Run `pnpm lint` & `pnpm format:write` on files after making changes, we lint
  files in CI and don't want preventable failures. `pnpm lint:fix` should also
  apply our formatting rules while trying to fix most things for you
- Run tests with `pnpm test` after making file changes
- When testing with Storybook, use Chrome DevTools Performance tab to verify no forced reflows
- For performance-related changes, compare before/after metrics and include in commit/PR
- Use Chrome MCP at `http://localhost:6006` (Storybook) or `http://localhost:4000` (Voltaire) for visual verification

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

## Performance Optimization Guidelines

### When to Optimize

Optimize when Chrome DevTools Performance profiling shows:

- Forced reflows/layouts in event handlers (scroll, resize, input)
- Long tasks blocking the main thread (>50ms)
- CPU throttling causing device overheating (especially iOS)

Common anti-patterns causing forced reflows:

- `getBoundingClientRect()` in scroll/resize handlers
- `clientHeight/scrollHeight/offsetHeight` reads during interactions
- Synchronous layout queries followed by style changes
- DOM queries inside throttled/debounced callbacks

### Observer API Patterns

#### IntersectionObserver (Scroll Position Detection)

Use for detecting when elements enter/exit viewport or cross specific boundaries.

**Example:** Header theme changes based on which section is visible

**Key patterns:**

```typescript
const observerRef = useRef<IntersectionObserver | null>(null);
const intersectingElementsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

useEffect(() => {
  const intersectingElements = intersectingElementsRef.current;

  observerRef.current = new IntersectionObserver(
    (entries) => {
      requestAnimationFrame(() => {
        // Update tracking map
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersectingElements.set(entry.target.id, entry);
          } else {
            intersectingElements.delete(entry.target.id);
          }
        }

        // Find best match from ALL intersecting elements
        // (observer only reports changes, not all intersecting)
        let bestMatch = null;
        for (const [id, entry] of intersectingElements) {
          const rect = entry.boundingClientRect ?? entry.target.getBoundingClientRect();
          // Calculate match quality...
          if (isBetterMatch) bestMatch = {...};
        }

        // Only update state if changed
        if (bestMatch && bestMatch.value !== previousValueRef.current) {
          previousValueRef.current = bestMatch.value;
          setState(bestMatch.value);
        }
      });
    },
    {
      rootMargin: "-64px 0px 0px 0px", // Adjust for fixed header
      threshold: 0,
    }
  );

  // Observe elements
  elements.forEach(el => observerRef.current?.observe(el));

  // CRITICAL: Manual initial state check
  // IntersectionObserver callbacks only fire on CHANGES, not initial observation
  const timeoutId = setTimeout(() => {
    // Check which elements currently intersect
    // Set initial state
  }, 0);

  return () => {
    clearTimeout(timeoutId);
    observerRef.current?.disconnect();
    observerRef.current = null;
    intersectingElements.clear();
  };
}, [deps]);
```

**Critical points:**

- Observer only reports state CHANGES, not all intersecting elements
- Use Map to track currently intersecting elements
- Manual initial check with `setTimeout(..., 0)` required
- Batch updates with `requestAnimationFrame()`
- Track previous value to skip redundant setState
- **Tiebreaker logic**: When multiple elements have equal distances, use array order (earlier in array wins)
- Clean up timeout, observer, and Map

**Tiebreaker pattern:**

```typescript
// When distances are equal, use scrollpoints array order
if (
  !bestMatch ||
  distance < bestMatch.distance ||
  (distance === bestMatch.distance && scrollpointIndex < bestMatch.index)
) {
  bestMatch = { scrollpoint, distance, index: scrollpointIndex };
}
```

**Why this matters:** In Voltaire, both `meganav` (transparent) and `main-theme-dark` (with border) start at position 0, giving identical distances. Without a tiebreaker, the header unpredictably showed the border. Array order ensures `meganav` (listed first) always wins.

#### ResizeObserver (Height/Size Tracking)

Use for tracking element dimensions without synchronous layout reads.

**Example:** Expander content height for expand/collapse animations

**Key patterns:**

```typescript
const rafIdRef = useRef<number | null>(null);
const observerRef = useRef<ResizeObserver | null>(null);

useEffect(() => {
  let isMounted = true;

  observerRef.current = new ResizeObserver((entries) => {
    // Cancel any pending RAF to avoid stale updates
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;

      // Guard against updates after unmount
      if (!isMounted) return;

      const entry = entries[0];
      if (entry && entry.contentRect) {
        const newHeight = Math.round(entry.contentRect.height);
        setState(newHeight);
      }
    });
  });

  observerRef.current.observe(element);

  return () => {
    isMounted = false;
    // Cancel pending RAF to prevent setState after unmount
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    observerRef.current?.disconnect();
    observerRef.current = null;
  };
}, [ref]);
```

**Critical points:**

- Always capture RAF ID and cancel on cleanup
- Use `isMounted` flag to guard setState calls
- Cancel pending RAF before scheduling new one
- ResizeObserver doesn't need initial check (fires immediately on observe)
- Round numeric values for consistency

### Testing Async Hooks

#### Setup Pattern

```typescript
describe("useMyHook", () => {
  let originalIntersectionObserver: typeof IntersectionObserver;
  let originalRequestAnimationFrame: typeof requestAnimationFrame;

  beforeEach(() => {
    vi.useFakeTimers();

    // CRITICAL: Save originals BEFORE mocking
    originalIntersectionObserver = global.IntersectionObserver;
    originalRequestAnimationFrame = global.requestAnimationFrame;

    // Mock global APIs
    global.IntersectionObserver = vi.fn((callback) => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
    })) as unknown as typeof IntersectionObserver;

    global.requestAnimationFrame = vi.fn((cb) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
    document.body.innerHTML = "";

    // CRITICAL: Restore originals to prevent test pollution
    global.IntersectionObserver = originalIntersectionObserver;
    global.requestAnimationFrame = originalRequestAnimationFrame;
  });
});
```

#### Testing Observer Callbacks

```typescript
it("updates state when observer fires", () => {
  const elem = document.createElement("div");
  elem.id = "test";
  elem.getBoundingClientRect = vi.fn().mockReturnValue({ top: 0, bottom: 200 });
  document.body.appendChild(elem);

  const { result } = renderHook(() => useMyHook());

  // Advance timers for initial check
  act(() => {
    vi.runAllTimers();
  });

  // Simulate observer callback
  act(() => {
    observerCallback(
      [
        {
          target: elem,
          isIntersecting: true,
          boundingClientRect: {
            top: 0,
            bottom: 200,
            left: 0,
            right: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 200,
          },
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );
  });

  expect(result.current).toBe("expected-value");
});
```

**Key points:**

- Mock `getBoundingClientRect` on test elements
- Provide `boundingClientRect` in IntersectionObserverEntry mocks
- Wrap timer advances and callback calls in `act()`
- Test both initial state and subsequent updates

### Common Pitfalls Checklist

When writing performance-optimized hooks:

- [ ] RAF cleanup: Store ID, cancel in cleanup
- [ ] isMounted guard: Prevent setState after unmount
- [ ] Initial state check: Manual check for IntersectionObserver
- [ ] Previous value tracking: Skip redundant setState
- [ ] Map/Set cleanup: Clear in cleanup function
- [ ] Test mock restoration: Save originals, restore in afterEach
- [ ] Console warnings: For missing DOM elements (not errors)
- [ ] Tiebreaker logic: When multiple candidates have equal scores

## Storybook Development

### Testing Interactive Components

- Use `http://localhost:6006` when developing/testing components
- Create stories that simulate production patterns (e.g., overlapping scrollpoints like Voltaire)
- Test edge cases in stories (empty arrays, missing DOM elements, rapid state changes)

### Performance Testing in Storybook

1. Open Chrome DevTools → Performance tab
2. Start recording while interacting with component
3. Search for forced reflow indicators:
   - `getBoundingClientRect`
   - `clientHeight`/`scrollHeight`/`offsetHeight`
   - "Forced reflow" warnings
4. Measure total time in layout/reflow (should be <5ms for interactions)

### Simulating Production Patterns

When creating stories for layout-dependent components, replicate real-world scenarios:

Example - Overlapping scrollpoints (like Voltaire):

```tsx
<div className="relative">
  <div id="hero" className="absolute top-0 h-32" />
  <div id="main" className="relative pt-32 h-screen" />
</div>
```

This allows testing tiebreaker logic and initial state detection. Storybook stories should replicate production layout patterns to catch bugs like the tiebreaker issue. The original simple sequential zones didn't expose the Voltaire bug where elements start at the same position.

## Git workflow

- Always do work on a new branch, start the branch on the HEAD of `origin/main`
- Before pushing the branch run the tests and linters to ensure they are happy
- When updating a branch, rebase on `origin/main` and force-push (with lease)
- Use our PR template in the `.github` folder as a reference for the pull request
- Keep commit messages concise
