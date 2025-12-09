# Prompt for @ably/ui Project - Header Performance Optimization

I need help optimizing the Header component's scroll performance. Our website (ably.com) is experiencing severe CPU issues on iOS devices due to forced reflows caused by the Header's scroll handler.

## Problem Analysis

Chrome DevTools Performance profiling shows the Header.js handleScroll function causes **71-193ms of forced reflows on EVERY scroll event** across multiple pages. This is the #1 performance bottleneck causing "phone gets hot" complaints from iOS users.

### Current Implementation Issues

The scroll handler in `src/core/Header.js` (around line 10:2018 based on the webpack trace) has these problems:

1. **getBoundingClientRect() in scroll handler** - Forces layout recalculation on every scroll
2. **DOM queries inside scroll handler** - Multiple `document.querySelector()` and `document.getElementById()` calls
3. **classList.contains() checks** - Forces style recalculation
4. **State updates during scroll** - Triggers re-renders while scrolling

Suspected current code pattern:
```javascript
const handleScroll = () => {
  const noticeElement = document.querySelector('[data-id="ui-notice"]');
  const isNoticeClosedToBeHidden = noticeElement?.classList.contains("ui-announcement-hidden");
  setNoticeBannerVisible(window.scrollY <= COLLAPSE_TRIGGER_DISTANCE && ...);

  for (const scrollpoint of themedScrollpoints) {
    const element = document.getElementById(scrollpoint.id);
    if (element) {
      const rect = element.getBoundingClientRect(); // FORCED REFLOW
      if (rect.top <= HEADER_HEIGHT && rect.bottom >= HEADER_HEIGHT) {
        setScrollpointClasses(scrollpoint.className);
        return;
      }
    }
  }
};

const throttledHandleScroll = throttle(handleScroll, 100);
```

### Performance Impact

| Page | Current Reflow Time | Target |
|------|---------------------|--------|
| Homepage | 193ms per scroll | <20ms |
| Chat page | 71ms per scroll | <20ms |
| PubSub page | 87ms per scroll | <20ms |

## Proposed Solution

Replace synchronous layout queries with IntersectionObserver API:

### Key Changes Needed:

1. **Replace getBoundingClientRect with IntersectionObserver**
   - Use one IntersectionObserver to watch all scrollpoint elements
   - Configure observer with `rootMargin: '-${HEADER_HEIGHT}px 0px 0px 0px'`
   - Batch DOM updates with `requestAnimationFrame()`

2. **Use passive scroll listeners**
   - Add `{ passive: true }` to all scroll event listeners
   - Critical for iOS performance

3. **Minimize state updates**
   - Only update state when scrollpoint actually changes
   - Debounce/throttle state updates separately from scroll events

### Pseudocode for New Implementation:

```typescript
// Use IntersectionObserver instead of getBoundingClientRect
const useScrollpointDetection = (scrollpoints) => {
  const [activeClass, setActiveClass] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const scrollpoint = scrollpoints.find(sp => sp.id === entry.target.id);
              if (scrollpoint) {
                setActiveClass(scrollpoint.className);
                break;
              }
            }
          }
        });
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
        threshold: 0
      }
    );

    scrollpoints.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observerRef.current.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, [scrollpoints]);

  return activeClass;
};
```

## Requirements

- Must maintain backward compatibility with existing Header API
- Should not break any existing themedScrollpoints functionality
- Must work with notice banner visibility logic
- Should respect existing prop interface
- Performance target: <20ms overhead (90% improvement)

## Testing Criteria

1. Verify no getBoundingClientRect calls during scroll (check Performance tab)
2. Verify themedScrollpoints still change classes correctly
3. Verify notice banner shows/hides appropriately
4. Test on iOS Safari (the primary problem platform)
5. Measure forced reflow time drops below 20ms

Can you help me implement this optimization in the Header component?
