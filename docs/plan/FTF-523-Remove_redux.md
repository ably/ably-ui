---
name: Remove Redux Store for Flash
overview: Replace the remote-data-store.js Redux-like pattern with React Context API for Flash component state management, maintaining the same external API while using React-idiomatic patterns.
todos:
  - id: create-context-provider
    content: Create FlashContext, FlashContextType, and FlashProvider component in Flash.tsx
    status: completed
  - id: create-hook
    content: Create and export useFlashContext hook with error handling
    status: completed
    dependencies:
      - create-context-provider
  - id: refactor-flashes
    content: Refactor Flashes component to use useFlashContext instead of props
    status: completed
    dependencies:
      - create-hook
  - id: refactor-backend-flashes
    content: Refactor BackendFlashes to use context instead of store, remove reducer/selectors
    status: completed
    dependencies:
      - create-hook
  - id: update-stories
    content: Update Flash.stories.tsx to use FlashProvider instead of store setup
    status: completed
    dependencies:
      - refactor-backend-flashes
  - id: update-scripts
    content: Remove remote-data-store export from scripts.js
    status: completed
  - id: delete-connect-wrapper
    content: Delete ConnectStateWrapper.tsx file
    status: completed
    dependencies:
      - refactor-backend-flashes
  - id: delete-store
    content: Delete remote-data-store.js file
    status: completed
    dependencies:
      - update-scripts
      - delete-connect-wrapper
      - refactor-backend-flashes
---

# Remove Redux Store and Use React Context for Flash

## Overview

Replace the `remote-data-store.js` Redux-like store pattern with React Context API for managing Flash component state. This provides a cleaner, more React-idiomatic solution while maintaining state management capabilities and the same external API.

## Current Architecture

- `BackendFlashes` component dispatches flash actions to `window.AblyUi.RemoteDataStore`
- `ConnectStateWrapper` subscribes to store changes and passes data to `Flashes`
- Store is created and attached to `window.AblyUi.RemoteDataStore`
- Individual `Flash` components receive props: `id`, `type`, `content`, `removed`, `removeFlash`

## New Architecture

- `FlashContext` provides flash state and methods to add/remove flashes
- `FlashProvider` wraps components and manages flash state
- `BackendFlashes` still receives `flashes` prop (same API) and uses context to add them
- `Flashes` consumes context to display flashes
- Individual `Flash` components receive props from context state (same interface)
- No global store needed - state managed within React component tree

## Prop Flow

### Current (with Store)
```text
BackendFlashes (receives flashes prop)
  → dispatches to store
  → ConnectStateWrapper subscribes to store
  → Flashes receives flashes from store via wrapper
  → Flash components receive props (id, type, content, removeFlash)
```

### New (with Context)
```text
BackendFlashes (receives flashes prop)
  → uses context.addFlashes()
  → FlashProvider manages state
  → Flashes consumes context
  → Flash components receive props (id, type, content, removeFlash) from context
```

**Key Points:**
- `BackendFlashes` still receives `flashes` prop: `string[][]` (e.g., `[["success", "message"], ["error", "error"]]`)
- Individual `Flash` components still receive props: `id`, `type`, `content`, `removed`, `removeFlash`
- Props flow through context instead of store, but the external API remains the same

## Implementation Steps

### 1. Create FlashContext and FlashProvider

**File:** `src/core/Flash.tsx`

- Create `FlashContextType` with `flashes`, `addFlashes`, and `removeFlash`
- Create `FlashContext` using `createContext`
- Implement `FlashProvider` component that:
  - Manages flash state with `useState`
  - Provides `addFlashes` callback that filters duplicates and adds IDs
  - Provides `removeFlash` callback
  - Wraps children with context provider

**Code Example:**
```typescript
type FlashContextType = {
  flashes: FlashProps[];
  addFlashes: (flashes: Pick<FlashProps, "type" | "content">[]) => void;
  removeFlash: (id: string) => void;
};

const FlashContext = createContext<FlashContextType | undefined>(undefined);

const FlashProvider = ({ children }: { children: ReactNode }) => {
  const [flashes, setFlashes] = useState<FlashProps[]>([]);

  const addFlashes = useCallback((newFlashes: Pick<FlashProps, "type" | "content">[]) => {
    setFlashes((prev) => {
      const withIds = newFlashes
        .filter(
          (flash) =>
            !prev.some(
              (existing) =>
                existing.content === flash.content &&
                existing.type === flash.type,
            ),
        )
        .map((flash) => ({
          ...flash,
          id: Math.random().toString(36).slice(2),
          removed: false,
        }));

      return [...prev, ...withIds];
    });
  }, []);

  const removeFlash = useCallback((flashId: string) => {
    setFlashes((prev) => prev.filter((item) => item.id !== flashId));
  }, []);

  const contextValue = useMemo(
    () => ({ flashes, addFlashes, removeFlash }),
    [flashes, addFlashes, removeFlash],
  );

  return (
    <FlashContext.Provider value={contextValue}>
      {children}
    </FlashContext.Provider>
  );
};
```

### 2. Create useFlashContext Hook

**File:** `src/core/Flash.tsx`

- Export `useFlashContext` hook that:
  - Uses `useContext(FlashContext)`
  - Throws error if used outside provider
  - Returns context value

**Code Example:**
```typescript
export const useFlashContext = () => {
  const context = useContext(FlashContext);
  if (context === undefined) {
    throw new Error("useFlashContext must be used within FlashProvider");
  }
  return context;
};
```

### 3. Refactor Flashes Component

**File:** `src/core/Flash.tsx`

- Remove `flashes` prop from `FlashesProps` type
- Use `useFlashContext()` to get flashes and removeFlash
- Remove local state management (moved to provider)
- Keep existing rendering logic

### 4. Refactor BackendFlashes Component

**File:** `src/core/Flash.tsx`

- Remove store imports and `ConnectStateWrapper` usage
- Remove `reducerFlashes` and `selectFlashes`
- Use `useFlashContext()` to get `addFlashes` and `removeFlash`
- Transform `flashes` prop in `useEffect` and call `context.addFlashes()`
- Render flashes directly from context instead of using `ConnectStateWrapper`
- Pass props to individual `Flash` components: `id`, `type`, `content`, `removed`, `removeFlash`

**New `BackendFlashes` implementation:**
```typescript
const BackendFlashes = ({ flashes }: BackendFlashesProps) => {
  const context = useContext(FlashContext);
  
  useEffect(() => {
    if (!context) {
      console.warn("BackendFlashes must be used within FlashProvider");
      return;
    }

    const transformedFlashes = flashes.map((flash) => {
      const [type, content] = flash;
      return { type, content };
    });

    if (transformedFlashes.length > 0) {
      context.addFlashes(transformedFlashes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flashes]);

  if (!context) return null;

  return (
    <div className="ui-flash" data-id={FLASH_DATA_ID}>
      {context.flashes
        .filter((item) => !item.removed)
        .map((flash) => (
          <Flash 
            key={flash.id} 
            id={flash.id}
            type={flash.type}
            content={flash.content}
            removed={flash.removed}
            removeFlash={context.removeFlash}
          />
        ))}
    </div>
  );
};
```

**Remove:**
- Import of `getRemoteDataStore` from `remote-data-store.js`
- Import of `ConnectStateWrapper`
- `reducerFlashes` constant (lines 32-50)
- `selectFlashes` function (lines 53-54)
- Store dispatch logic in `BackendFlashes` (lines 242-249)
- `ConnectStateWrapper` usage (lines 252-254)

### 5. Update Flash Stories

**File:** `src/core/Flash/Flash.stories.tsx`

- Remove imports: `attachStoreToWindow`, `createRemoteDataStore`, `reducerFlashes`
- Remove store creation and attachment code
- Wrap stories with `FlashProvider` instead
- Import `FlashProvider` from `../Flash`

**New story setup:**
```typescript
export const Default = {
  render: (args) => (
    <FlashProvider>
      <Flash {...args} />
    </FlashProvider>
  ),
};
```

### 6. Update Scripts Export

**File:** `src/core/scripts.js`

- Remove export of `remote-data-store` (line 6)

### 7. Delete ConnectStateWrapper

**File:** `src/core/ConnectStateWrapper.tsx`

- Delete entire file (only used by Flash, which now uses Context)

### 8. Delete Remote Data Store

**File:** `src/core/remote-data-store.js`

- Delete entire file (no longer needed for Flash)

## Files to Modify

1. **[src/core/Flash.tsx](src/core/Flash.tsx)** - Add Context/Provider, refactor components
2. **[src/core/Flash/Flash.stories.tsx](src/core/Flash/Flash.stories.tsx)** - Use FlashProvider instead of store
3. **[src/core/scripts.js](src/core/scripts.js)** - Remove store export
4. **[src/core/ConnectStateWrapper.tsx](src/core/ConnectStateWrapper.tsx)** - Delete
5. **[src/core/remote-data-store.js](src/core/remote-data-store.js)** - Delete

## Key Implementation Details

### FlashProvider State Management
- Use `useState<FlashProps[]>` to manage flash array
- `addFlashes` filters duplicates by content+type before adding
- Generates unique IDs using `Math.random().toString(36).slice(2)`
- Sets `removed: false` for new flashes

### Prop Flow
- `BackendFlashes` receives `flashes: string[][]` prop (unchanged API)
- Transforms to `{ type, content }[]` format
- Calls `context.addFlashes()` to add to state
- Individual `Flash` components receive props from context state

### Context API
- Export `FlashProvider` for consumers to wrap their app
- Export `useFlashContext` hook for programmatic access
- Both throw errors if used outside provider

## Usage Examples

### Basic Usage (Same as Before)

**Consumers pass props to `BackendFlashes` as before:**
```tsx
<FlashProvider>
  <BackendFlashes 
    flashes={[
      ["success", "Operation completed successfully"],
      ["error", "Something went wrong"]
    ]} 
  />
</FlashProvider>
```

### Programmatic Usage (New Capability)

**Consumers can also use the context directly to add flashes:**
```tsx
import { FlashProvider, useFlashContext } from "@ably/ui/core/Flash";

function MyComponent() {
  const { addFlashes } = useFlashContext();
  
  const handleClick = () => {
    addFlashes([
      { type: "success", content: "Item added!" }
    ]);
  };
  
  return <button onClick={handleClick}>Add Item</button>;
}

// Wrap with provider
<FlashProvider>
  <MyComponent />
</FlashProvider>
```

### Individual Flash Props

**Individual `Flash` components receive props from context:**
- `id: string` - Unique identifier
- `type: FlashPropsType` - "error" | "success" | "notice" | "info" | "alert"
- `content: string` - HTML content (sanitized)
- `removed: boolean` - Whether flash is marked for removal
- `removeFlash: (id: string) => void` - Function to remove the flash

These props are automatically provided by the context - consumers don't need to pass them directly.

## Testing Checklist

- [ ] Flash component displays correctly with context
- [ ] Flash addition works (via BackendFlashes prop)
- [ ] Flash removal works (close button and auto-hide)
- [ ] Duplicate flashes are filtered
- [ ] Auto-hide works for success/info/notice types
- [ ] Storybook stories work with FlashProvider
- [ ] useFlashContext hook works for programmatic access
- [ ] Error handling when context used outside provider
- [ ] Run `pnpm test` and `pnpm lint` after changes

## Impact Analysis

### Files That Will Break

The following files also reference the store but are outside the scope of this change:
- `src/core/remote-blogs-posts.js` - uses store for blog posts
- `src/core/remote-session-data.js` - uses store for session data

**Note:** These files will need to be updated separately if the store is removed entirely. For this task, we're only removing the store usage from Flash.

## Benefits of Using Context

1. **React-idiomatic:** Uses standard React patterns instead of custom Redux-like store
2. **No global state:** State is scoped to the component tree via Provider
3. **Type-safe:** TypeScript can properly type the context
4. **Simpler:** No need for store creation, window attachment, or ConnectStateWrapper
5. **Testable:** Easier to test with Provider wrapping

## Migration Notes

- External API for `BackendFlashes` remains unchanged - still receives `flashes` prop
- Individual `Flash` component props remain the same
- Consumers need to wrap with `FlashProvider` if using programmatically
- No breaking changes for existing `BackendFlashes` usage (if provider is added at app level)

## Implementation Notes

### Issue Encountered and Fixed

During implementation, an infinite loop issue was discovered in Storybook where the Flash stories would keep loading. This was caused by:

1. **Context value recreation**: The context value object `{ flashes, addFlashes, removeFlash }` was being recreated on every render, causing the context reference to change.

2. **useEffect dependency on context**: The `BackendFlashes` component's `useEffect` had `context` in its dependency array, causing it to re-run whenever the context object reference changed.

**Fix Applied:**
- Added `useMemo` to memoize the context value, ensuring it only changes when `flashes`, `addFlashes`, or `removeFlash` actually change
- Removed `context` from the `useEffect` dependency array in `BackendFlashes`, keeping only `flashes` as a dependency (with eslint-disable comment for the missing `context` dependency)

**Code changes:**
```typescript
// Added useMemo import
import { useMemo } from "react";

// In FlashProvider:
const contextValue = useMemo(
  () => ({ flashes, addFlashes, removeFlash }),
  [flashes, addFlashes, removeFlash],
);

// In BackendFlashes useEffect:
useEffect(() => {
  // ... flash addition logic
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [flashes]); // Only flashes, not context
```

This ensures the effect only runs when the `flashes` prop actually changes, preventing infinite loops.
