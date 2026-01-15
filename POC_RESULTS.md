# POC T008: Radix DropdownMenu Migration

## Verdict: VALIDATED

The Radix DropdownMenu migration is feasible with minimal API changes and significantly improved accessibility.

## Summary

Migrated the existing custom DropdownMenu component to use `@radix-ui/react-dropdown-menu` while:
1. Maintaining the exact same component API
2. Preserving visual appearance
3. Adding full accessibility features
4. Keeping bundle size impact minimal

## Evidence

### 1. Component API Preserved

The Radix implementation maintains 100% API compatibility:

```tsx
// Before (still works)
<DropdownMenu>
  <DropdownMenu.Trigger description="Account menu">
    Account Name
  </DropdownMenu.Trigger>
  <DropdownMenu.Content anchorPosition="right" contentClassNames="w-60">
    <DropdownMenu.Link url="/dashboard" title="Dashboard" />
  </DropdownMenu.Content>
</DropdownMenu>
```

**Props preserved:**
- `DropdownMenu`: `children`
- `DropdownMenu.Trigger`: `children`, `triggerClassNames`, `description`
- `DropdownMenu.Content`: `children`, `anchorPosition`, `contentClassNames`
- `DropdownMenu.Link`: `url`, `title`, `subtitle`, `iconName`, `children`

### 2. Accessibility Audit Results

| Feature | Original | Radix | Status |
|---------|----------|-------|--------|
| Click to open/close | Yes | Yes | Pass |
| Click outside to close | Yes | Yes | Pass |
| Escape key to close | No | Yes | **NEW** |
| Arrow key navigation | No | Yes | **NEW** |
| Tab navigation | Partial | Full | **Improved** |
| ARIA roles | None | `menu`, `menuitem` | **NEW** |
| Screen reader support | None | Full | **NEW** |
| Focus management | None | Proper focus trap | **NEW** |
| `aria-expanded` state | No | Yes | **NEW** |
| Keyboard activation (Enter/Space) | No | Yes | **NEW** |

### 3. Visual Appearance

The visual styling is identical to the original:
- Same rounded corners (`rounded-lg`)
- Same shadow (`ui-shadow-md-soft`)
- Same border styling (`border-neutral-400`)
- Same hover states on items
- Same dark mode support

### 4. Bundle Impact

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total `core/` size | 9.8M | 9.9M | +0.1M (1%) |
| DropdownMenu.js | 2,451 bytes | 2,854 bytes | +403 bytes (16%) |
| Source lines | 172 | 164 | -8 lines |

The minimal bundle increase is expected since `@radix-ui/react-dropdown-menu` is a new package. However, Radix uses shared internal packages (`@radix-ui/react-primitive`, `@radix-ui/react-dismissable-layer`, etc.) that are already used by other Radix components in the project (Accordion, Select, Tooltip, etc.), so the actual incremental size is smaller.

### 5. Test Results

All existing tests pass:
```
Test Files  1 passed (1)
Tests  3 passed (3)
```

Full test suite (189 tests) passes with no regressions.

## Learnings

### What Worked Well

1. **Radix primitives map cleanly** - The compound component pattern (`Root`, `Trigger`, `Content`, `Item`) maps directly to the existing API structure
2. **Styling is flexible** - Radix uses `data-[state=open]` and `data-[highlighted]` attributes that work well with Tailwind
3. **No breaking changes needed** - The existing API is preserved 100%
4. **Portal-based rendering** - Menu renders in a portal, avoiding z-index issues

### Minor Considerations

1. **Animation classes** - Added Tailwind animate-in/out classes for smooth transitions (optional, can be removed if not desired)
2. **Focus management** - Added `onCloseAutoFocus` handler to prevent unwanted focus changes
3. **Role attribute** - The custom `role="menu"` on Content is preserved for consistency, though Radix manages ARIA automatically

### What Would Need Attention in Production

1. **Plain HTML children** - The third story example uses a plain `<a>` tag inside Content. This works but doesn't get keyboard navigation highlighting. Consider wrapping in `DropdownMenu.Link` or documenting this limitation.

2. **HeaderLinks usage** - The component is used in `HeaderLinks.tsx` with custom buttons inside Content. These will work but would benefit from being wrapped in Radix's `Item` for full keyboard support.

## Recommendations

1. **Proceed with migration** - The Radix implementation is production-ready
2. **Update consumer code** - Where custom content is used inside `DropdownMenu.Content`, wrap interactive elements in `RadixDropdownMenu.Item` for full accessibility
3. **Consider adding MenuItem** - Export a `DropdownMenu.Item` component for non-link menu items (buttons, etc.)
4. **Documentation** - Update component docs to highlight new keyboard navigation features

## Time Taken

- **Estimated**: 4-6 hours
- **Actual**: ~2 hours

## Files Changed

- `src/core/DropdownMenu.tsx` - Rewritten to use Radix primitives
- `src/core/DropdownMenu/DropdownMenu.stories.tsx` - Added accessibility test stories
- `package.json` - Added `@radix-ui/react-dropdown-menu` dependency
- `src/core/DropdownMenu.original.tsx` - Backup of original implementation (can be deleted)
