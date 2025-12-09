import { useState, useEffect, useRef } from "react";
import { ThemedScrollpoint } from "../Header/types";

const HEADER_HEIGHT = 64;

export function useThemedScrollpoints(
  scrollpoints: ThemedScrollpoint[],
): string {
  const [activeClassName, setActiveClassName] = useState<string>("");

  const previousClassNameRef = useRef<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initialCheckDoneRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const intersectingElementsRef = useRef<
    Map<string, IntersectionObserverEntry>
  >(new Map());

  useEffect(() => {
    if (scrollpoints.length === 0) {
      // Clear active className when scrollpoints becomes empty
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveClassName("");
      previousClassNameRef.current = "";
      return;
    }

    let isMounted = true;
    const intersectingElements = intersectingElementsRef.current;

    // Function to find and update the best matching scrollpoint
    const updateBestMatch = (useEntryRects = false) => {
      // Find the best match from ALL currently intersecting elements
      // Strategy: Pick the element whose top edge is closest to the header position
      // Use scrollpoints array order as tiebreaker when distances are equal
      let bestMatch: {
        scrollpoint: ThemedScrollpoint;
        distance: number;
        index: number;
      } | null = null;

      for (const [id, entry] of intersectingElements) {
        const scrollpointIndex = scrollpoints.findIndex((sp) => sp.id === id);
        if (scrollpointIndex === -1) continue;

        const scrollpoint = scrollpoints[scrollpointIndex];

        // For observer callbacks, use entry.boundingClientRect (for test compatibility)
        // For scroll handler, get fresh position data
        const rect = useEntryRects
          ? (entry.boundingClientRect ?? entry.target.getBoundingClientRect())
          : entry.target.getBoundingClientRect();

        // Only consider elements at or past the header line
        // This prevents selecting elements that are marked as "intersecting" by rootMargin
        // but haven't actually reached the header position yet
        if (rect.top > HEADER_HEIGHT) continue;

        // Calculate distance from element's top edge to header position
        const distance = Math.abs(rect.top - HEADER_HEIGHT);

        // Pick element with smallest distance; if equal, pick earlier in scrollpoints array
        if (
          !bestMatch ||
          distance < bestMatch.distance ||
          (distance === bestMatch.distance &&
            scrollpointIndex < bestMatch.index)
        ) {
          bestMatch = { scrollpoint, distance, index: scrollpointIndex };
        }
      }

      if (
        bestMatch &&
        bestMatch.scrollpoint.className !== previousClassNameRef.current
      ) {
        previousClassNameRef.current = bestMatch.scrollpoint.className;
        setActiveClassName(bestMatch.scrollpoint.className);
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Update the map of currently intersecting elements
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            intersectingElements.set(id, entry);
          } else {
            intersectingElements.delete(id);
          }
        }

        // Schedule best match calculation using entry rects
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
          rafIdRef.current = null;
          if (!isMounted) return;
          updateBestMatch(true); // Use entry.boundingClientRect
        });
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    // Lightweight scroll handler to re-evaluate on scroll (gets fresh position data)
    const handleScroll = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        if (!isMounted) return;
        updateBestMatch(false); // Get fresh position data
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    scrollpoints.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      } else {
        console.warn(
          `useThemedScrollpoints: Element with id "${id}" not found in DOM`,
        );
      }
    });

    // Manually check initial intersection state since IntersectionObserver
    // callbacks only fire on changes, not on initial observation
    // Use a small timeout to ensure DOM is fully laid out
    const timeoutId = setTimeout(() => {
      if (initialCheckDoneRef.current) {
        return;
      }
      initialCheckDoneRef.current = true;

      // Manually populate the intersection map for initial check
      // (observer callbacks haven't fired yet)
      for (const scrollpoint of scrollpoints) {
        const element = document.getElementById(scrollpoint.id);
        if (element) {
          // Create a minimal entry with just the target
          intersectingElements.set(scrollpoint.id, {
            target: element,
          } as unknown as IntersectionObserverEntry);
        }
      }

      // Run initial best match calculation (gets fresh position data)
      updateBestMatch(false);
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      observerRef.current?.disconnect();
      observerRef.current = null;
      initialCheckDoneRef.current = false;
      intersectingElements.clear();
    };
  }, [scrollpoints]);

  return activeClassName;
}
