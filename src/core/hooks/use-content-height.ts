import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Custom hook that tracks the content height of an element using ResizeObserver.
 * This eliminates forced reflows by using the browser's native resize observation API
 * instead of synchronous clientHeight/getBoundingClientRect queries.
 *
 * @param ref - React ref to the element to observe
 * @param initialHeight - Initial height value (default: 0)
 * @returns Current content height in pixels
 */
export function useContentHeight(
  ref: RefObject<HTMLElement>,
  initialHeight = 0,
): number {
  const [contentHeight, setContentHeight] = useState<number>(initialHeight);
  const observerRef = useRef<ResizeObserver | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

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
          setContentHeight(newHeight);
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

  return contentHeight;
}
