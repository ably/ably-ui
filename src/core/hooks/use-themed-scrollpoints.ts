import { useState, useEffect, useRef } from "react";
import { ThemedScrollpoint } from "../Header/types";

const HEADER_HEIGHT = 64;

export function useThemedScrollpoints(
  scrollpoints: ThemedScrollpoint[],
): string {
  const [activeClassName, setActiveClassName] = useState<string>(
    scrollpoints.length > 0 ? scrollpoints[0].className : "",
  );

  const previousClassNameRef = useRef<string>(activeClassName);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (scrollpoints.length === 0) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const scrollpoint = scrollpoints.find(
                (sp) => sp.id === entry.target.id,
              );

              if (
                scrollpoint &&
                scrollpoint.className !== previousClassNameRef.current
              ) {
                previousClassNameRef.current = scrollpoint.className;
                setActiveClassName(scrollpoint.className);
                return;
              }
            }
          }
        });
      },
      {
        rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`,
        threshold: 0,
      },
    );

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

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [scrollpoints]);

  return activeClassName;
}
