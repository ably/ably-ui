# Prompt for @ably/ui Project - Expander Component Performance Optimization

I need help optimizing the Expander component's performance. Following the successful Header.js optimization, Chrome DevTools Performance profiling has revealed that the Expander component is now the **#1 performance bottleneck** on our website (ably.com), causing severe CPU issues on iOS devices.

## Problem Analysis

With the Header.js fix deployed (v17.11.0-dev.4c4b6b55), Chrome DevTools now shows that **Expander.js causes 67-92ms of forced reflows** on the Chat and PubSub pages. This component has replaced Header as the primary cause of "phone gets hot" complaints from iOS users.

### Current Implementation Issues

The Expander component in `src/core/Expander.js` (around line 6:585 based on the webpack trace) is causing forced synchronous layout recalculations, likely during:
- Component mount/render
- User interactions (expand/collapse)
- Scroll events (if height calculations are triggered)
- Window resize events

Suspected problematic patterns:
- **getBoundingClientRect()** or similar layout queries
- **offsetHeight/scrollHeight** checks during render
- Height calculations in event handlers
- State updates that trigger immediate layout reads

### Performance Impact

| Page | Expander.js Reflow Time | % of Total Reflows |
|------|------------------------|-------------------|
| Chat page | 67ms | 52% |
| PubSub page | 92ms | 96% |

**Comparison to Previous Bottleneck:**
- Old Header issue: 71-193ms (now fixed ✅)
- New Expander issue: 67-92ms (current blocker ⚠️)

The Expander is nearly as bad as the old Header issue!

## Suspected Code Pattern

The Expander likely has code similar to this:

```javascript
const Expander = ({ children, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    if (contentRef.current) {
      // FORCED REFLOW - reading layout properties
      const height = contentRef.current.scrollHeight; // or getBoundingClientRect()

      // Then applying styles based on the measurement
      contentRef.current.style.height = isExpanded ? '0' : `${height}px`;
    }
    setIsExpanded(!isExpanded);
  };

  // Or possibly measuring on every render
  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.offsetHeight; // FORCED REFLOW
      // ... do something with height
    }
  });

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <div ref={contentRef} style={{ height: isExpanded ? 'auto' : 0 }}>
        {children}
      </div>
    </div>
  );
};
```

## Proposed Solution

### Option 1: CSS-Only Solution (Recommended - No JS Required)

Replace JavaScript height calculations with pure CSS transitions:

```typescript
const Expander = ({ children, isExpanded, ...props }) => {
  return (
    <div className="expander">
      <div
        className={cn("expander-content", {
          "expander-content--expanded": isExpanded
        })}
        style={{
          // Use max-height with a large value instead of measuring
          maxHeight: isExpanded ? '2000px' : '0',
          transition: 'max-height 0.3s ease-in-out',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

**Pros:**
- Zero forced reflows
- GPU-accelerated with CSS transitions
- Much simpler code
- Better performance on all devices

**Cons:**
- Need to estimate max-height (can be generous, e.g., 2000px)
- Transition timing may vary based on content height

### Option 2: ResizeObserver with RequestAnimationFrame (If Exact Heights Needed)

If you need exact heights for some reason, use ResizeObserver instead of direct measurements:

```typescript
const Expander = ({ children, isExpanded, ...props }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    // Use ResizeObserver to track height changes
    const observer = new ResizeObserver((entries) => {
      // Batch updates with requestAnimationFrame
      requestAnimationFrame(() => {
        const entry = entries[0];
        if (entry) {
          setContentHeight(entry.contentRect.height);
        }
      });
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="expander">
      <div
        ref={contentRef}
        style={{
          height: isExpanded ? `${contentHeight}px` : '0',
          transition: 'height 0.3s ease-in-out',
          overflow: 'hidden',
          willChange: isExpanded ? 'height' : 'auto', // Hint to browser
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

**Pros:**
- Exact height measurements
- No forced reflows in render/event handlers
- Handles dynamic content changes

**Cons:**
- More complex than CSS-only solution
- Still has small overhead from ResizeObserver

### Option 3: CSS Grid with fr Units (Modern Approach)

Use CSS Grid's `grid-template-rows` for smooth transitions:

```typescript
const Expander = ({ children, isExpanded, ...props }) => {
  return (
    <div
      className="expander"
      style={{
        display: 'grid',
        gridTemplateRows: isExpanded ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.3s ease-in-out',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};
```

**Pros:**
- No JavaScript measurements needed
- Smooth transitions regardless of content height
- Modern and elegant solution
- Best performance

**Cons:**
- Requires CSS Grid support (widely supported now)
- Slightly different visual behavior

## Requirements

- Must maintain backward compatibility with existing Expander API
- Should work with dynamic content that changes size
- Must not cause forced reflows during expand/collapse
- Performance target: <5ms overhead (95% improvement from current 67-92ms)
- Should respect `prefers-reduced-motion` for accessibility

## Testing Criteria

1. Verify no getBoundingClientRect/offsetHeight calls during expand/collapse (check Performance tab)
2. Verify smooth expand/collapse animations
3. Verify works with dynamically changing content
4. Test on iOS Safari (the primary problem platform)
5. Measure forced reflow time drops below 5ms (currently 67-92ms)
6. Test with nested expanders if that's a use case

## Additional Context

This issue was discovered immediately after fixing the Header.js scroll performance issue. The Header fix eliminated 71-193ms of forced reflows, but now Expander has become the bottleneck.

**Pages affected:**
- `/chat` - Uses Expander in FeatureGrid component (67ms reflows)
- `/pubsub` - Uses Expander in multiple locations (92ms reflows)

The Expander optimization is now the highest priority performance fix for the iOS thermal issues.

Can you help me implement one of these solutions (or a better one) in the Expander component?
