# POC T007: Redux Removal (Ably UI)

## Verdict: VALIDATED

Redux can be successfully replaced with Zustand for the Flash component use case.

## Executive Summary

The POC successfully migrated the Flash component from Redux to Zustand, removing
the `redux` dependency from Ably UI. The public API of the Flash component remains
the same, and all existing tests pass.

## Before/After Comparison

### Dependencies

| Metric | Before | After | Delta |
|--------|--------|-------|-------|
| Redux in dependencies | Yes (^4.0.5) | No | Removed |
| Zustand in dependencies | No | Yes (^5.0.10) | Added |

### Bundle Size Analysis

**Important clarification:** The task mentioned "42KB for Redux" but this was incorrect.

| Package | Size (minified) | Size (gzipped) |
|---------|-----------------|----------------|
| redux@4.2.1 | 4.3 KB | 1.6 KB |
| zustand@5.0.10 | 1.2 KB | 0.6 KB |
| **Net savings** | **3.1 KB** | **1.0 KB** |

**Why the original estimate was wrong:**
- The "42KB" figure appears to be either un-minified Redux or Redux + react-redux
- Ably UI only used `redux`, not `react-redux`
- Modern bundlers tree-shake effectively, further reducing actual impact

**Actual savings for consumers:**
1. **3.1 KB minified** from Redux -> Zustand swap
2. Zustand has no transitive dependencies (Redux has @babel/runtime)
3. Simpler code = easier tree-shaking
4. No need for ConnectStateWrapper pattern

**Note:** While the 35KB target was not met (and was based on incorrect data), the
migration still provides value: simpler code, modern API, and smaller dependency.

### Code Changes

| File | Change |
|------|--------|
| `src/core/flash-store.ts` | New Zustand store (created) |
| `src/core/Flash.tsx` | Updated to use Zustand (modified) |
| `src/core/Flash/Flash.stories.tsx` | Updated stories (modified) |
| `src/core/remote-data-store.js` | Deprecated, replaced Redux with simple store (modified) |
| `package.json` | Removed redux, added zustand (modified) |

## What Changed

### 1. New Zustand Store (`flash-store.ts`)

Created a dedicated Zustand store for Flash messages with a clean API:

```typescript
import { useFlashStore, pushFlash, clearFlashes } from "@ably/ui/core/flash-store";

// Subscribe to flash state in a component
const items = useFlashStore((state) => state.items);

// Push a flash from anywhere
pushFlash({ type: "success", content: "It worked!" });

// Clear all flashes
clearFlashes();
```

### 2. BackendFlashes Component

The `BackendFlashes` component (default export from Flash) now uses Zustand internally.
The public API is unchanged - it still accepts `flashes: string[][]` from Rails.

### 3. Backward Compatibility

The `remote-data-store.js` module is deprecated but still works:
- It now uses a simple Redux-like store implementation (no dependency)
- Consumers using `createRemoteDataStore` will see deprecation warnings
- Blog posts and session data reducers still work

## Breaking Changes

**None for Flash component users.** The `BackendFlashes` component API is unchanged.

**Deprecations:**
- `createRemoteDataStore` - use Zustand stores instead
- `attachStoreToWindow` - use Zustand stores instead
- `connectState` - use Zustand hooks instead
- `reducerFlashes` export - use `pushFlash` directly

## Migration Guide

For consumers still using the Redux pattern:

### Before (Redux)
```javascript
import Flash, { reducerFlashes } from "@ably/ui/core/Flash";
import { createRemoteDataStore, attachStoreToWindow } from "@ably/ui/core/remote-data-store";

const store = createRemoteDataStore({
  ...reducerFlashes,
  // other reducers
});
attachStoreToWindow(store);
```

### After (Zustand)
```javascript
import Flash from "@ably/ui/core/Flash";
// No store setup needed - Flash uses Zustand internally
```

### Programmatic Flash Creation
```javascript
// Before: dispatch to Redux store
store.dispatch({ type: "flash/push", payload: { type: "success", content: "Done!" } });

// After: use pushFlash helper
import { pushFlash } from "@ably/ui/core/flash-store";
pushFlash({ type: "success", content: "Done!" });
```

## Test Results

```
Test Files  37 passed (37)
     Tests  190 passed (190)
  Duration  8.28s
```

All existing tests pass, including the Flash component interaction tests.

## Considerations for Full Implementation

### 1. Blog Posts & Session Data

The `remote-blogs-posts.js` and `remote-session-data.js` modules still use the
Redux pattern. These should be migrated to:
- **SWR or React Query** for data fetching with caching
- **Zustand** if global state is truly needed

### 2. Consumer Migration

Website, Docs, and Voltaire may need updates if they:
- Import `createRemoteDataStore` or `attachStoreToWindow`
- Use `reducerFlashes`, `reducerBlogPosts`, or `reducerSessionData`
- Access `window.AblyUi.RemoteDataStore`

### 3. Storybook Demo

A new `ZustandStoreDemo` story was added to demonstrate the new API:
- Interactive buttons to add/remove flash messages
- Shows store state in real-time

## Evidence

### Build Output
```
Successfully compiled: 466 files, copied 460 files with swc
index.d.ts file has been generated with 466 exports
```

### Lint
```
No errors (clean)
```

### Package.json Dependencies
Redux removed, Zustand added:
```json
{
  "dependencies": {
    "zustand": "^5.0.10"
    // redux: removed
  }
}
```

## Time Taken

- Estimated: 4-6 hours
- Actual: ~1 hour

The migration was straightforward because:
1. Redux usage was indeed localized to Flash and related modules
2. Zustand's API is simple and familiar
3. The Flash component's internal state management was well-organized

## Recommendations

1. **Proceed with full implementation** - The migration is low-risk and provides
   clear benefits (smaller bundle, simpler code).

2. **Plan consumer migration** - Create issues for Website, Docs, and Voltaire
   to update their usage before removing deprecated APIs.

3. **Consider SWR for blog/session** - Rather than creating more Zustand stores,
   migrate blog posts and session data to SWR for proper cache/revalidation.

4. **Remove deprecated code in next major** - Keep backward compatibility for
   v17.x, remove in v18.0.
