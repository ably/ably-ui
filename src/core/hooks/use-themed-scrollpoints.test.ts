/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useThemedScrollpoints } from "./use-themed-scrollpoints";

describe("useThemedScrollpoints", () => {
  let observerCallback: IntersectionObserverCallback;
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let originalIntersectionObserver: typeof IntersectionObserver;
  let originalRequestAnimationFrame: typeof requestAnimationFrame;

  beforeEach(() => {
    vi.useFakeTimers();

    // Save originals to prevent test pollution
    originalIntersectionObserver = global.IntersectionObserver;
    originalRequestAnimationFrame = global.requestAnimationFrame;

    // Mock IntersectionObserver
    mockObserve = vi.fn();
    mockUnobserve = vi.fn();
    mockDisconnect = vi.fn();

    global.IntersectionObserver = vi.fn((callback) => {
      observerCallback = callback;
      return {
        observe: mockObserve,
        unobserve: mockUnobserve,
        disconnect: mockDisconnect,
      };
    }) as unknown as typeof IntersectionObserver;

    // Mock requestAnimationFrame
    global.requestAnimationFrame = vi.fn((cb) => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
    document.body.innerHTML = "";
    // Restore originals to prevent test pollution
    global.IntersectionObserver = originalIntersectionObserver;
    global.requestAnimationFrame = originalRequestAnimationFrame;
  });

  it("returns first scrollpoint className on mount", () => {
    // Create DOM elements
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    elem1.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 200 });
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    elem2.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 200, bottom: 400 });
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Initial state is empty
    expect(result.current).toBe("");

    // Advance timer to trigger initial check
    act(() => {
      vi.runAllTimers();
    });

    // Should now have the first scrollpoint's className
    expect(result.current).toBe("theme-light");
  });

  it("returns empty string when no scrollpoints provided", () => {
    const { result } = renderHook(() => useThemedScrollpoints([]));
    expect(result.current).toBe("");
  });

  it("clears activeClassName when scrollpoints changes from non-empty to empty", () => {
    const elem = document.createElement("div");
    elem.id = "zone1";
    elem.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 200 });
    document.body.appendChild(elem);

    const { result, rerender } = renderHook(
      ({ scrollpoints }) => useThemedScrollpoints(scrollpoints),
      {
        initialProps: {
          scrollpoints: [{ id: "zone1", className: "theme-light" }],
        },
      },
    );

    // Wait for initial check
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current).toBe("theme-light");

    // Change to empty scrollpoints
    rerender({ scrollpoints: [] });

    // Should clear the className
    expect(result.current).toBe("");
  });

  it("does not create IntersectionObserver when no scrollpoints provided", () => {
    renderHook(() => useThemedScrollpoints([]));

    expect(IntersectionObserver).not.toHaveBeenCalled();
  });

  it("creates IntersectionObserver with correct config", () => {
    const scrollpoints = [{ id: "zone1", className: "theme-light" }];

    // Create DOM element
    const elem = document.createElement("div");
    elem.id = "zone1";
    document.body.appendChild(elem);

    renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0,
      }),
    );
  });

  it("observes all scrollpoint elements that exist in DOM", () => {
    // Create DOM elements
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(mockObserve).toHaveBeenCalledTimes(2);
    expect(mockObserve).toHaveBeenCalledWith(elem1);
    expect(mockObserve).toHaveBeenCalledWith(elem2);
  });

  it("logs warning for missing DOM elements", () => {
    const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {});

    const scrollpoints = [{ id: "non-existent", className: "theme" }];

    renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(consoleWarn).toHaveBeenCalledWith(
      expect.stringContaining('Element with id "non-existent" not found'),
    );

    consoleWarn.mockRestore();
  });

  it("observes existing elements and warns about missing ones", () => {
    const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {});

    // Create only one element
    const elem = document.createElement("div");
    elem.id = "zone1";
    document.body.appendChild(elem);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "missing", className: "theme-dark" },
    ];

    renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(mockObserve).toHaveBeenCalledTimes(1);
    expect(mockObserve).toHaveBeenCalledWith(elem);
    expect(consoleWarn).toHaveBeenCalledWith(
      expect.stringContaining('Element with id "missing" not found'),
    );

    consoleWarn.mockRestore();
  });

  it("updates className when intersection occurs", () => {
    // Create DOM elements
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    elem1.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 200 });
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    elem2.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 50, bottom: 250 });
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Wait for initial check
    // elem2 (top=50) is closer to header (64) than elem1 (top=0)
    // distance for elem1: |0 - 64| = 64
    // distance for elem2: |50 - 64| = 14
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current).toBe("theme-dark");

    // Simulate scrolling - elem1 moves closer to header position
    act(() => {
      observerCallback(
        [
          {
            target: elem1,
            isIntersecting: true,
            boundingClientRect: {
              top: 60,
              bottom: 260,
              left: 0,
              right: 0,
              x: 0,
              y: 60,
              width: 0,
              height: 200,
            },
          } as unknown as IntersectionObserverEntry,
          {
            target: elem2,
            isIntersecting: true,
            boundingClientRect: {
              top: 100,
              bottom: 300,
              left: 0,
              right: 0,
              x: 0,
              y: 100,
              width: 0,
              height: 200,
            },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    // elem1 is now closer to header (distance=4 vs elem2 distance=36)
    expect(result.current).toBe("theme-light");
  });

  it("does not update className if same scrollpoint intersects again", () => {
    const elem = document.createElement("div");
    elem.id = "zone1";
    elem.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 200 });
    document.body.appendChild(elem);

    const scrollpoints = [{ id: "zone1", className: "theme-light" }];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Wait for initial check
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current).toBe("theme-light");

    // Simulate intersection with same element
    const renderCount = result.current;
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

    // Should not trigger re-render (className unchanged)
    expect(result.current).toBe(renderCount);
  });

  it("ignores non-intersecting entries", () => {
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    elem1.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 200 });
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    elem2.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 200, bottom: 400 });
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Wait for initial check
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current).toBe("theme-light");

    // Simulate non-intersecting entry
    observerCallback(
      [
        {
          target: elem2,
          isIntersecting: false,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    // Should remain unchanged
    expect(result.current).toBe("theme-light");
  });

  it("uses closest element to header when multiple entries intersect", () => {
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    elem1.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 0, bottom: 50 });
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    // zone2 top is at 60, which is closer to HEADER_HEIGHT (64) than zone3
    elem2.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 60, bottom: 200 });
    const elem3 = document.createElement("div");
    elem3.id = "zone3";
    elem3.getBoundingClientRect = vi
      .fn()
      .mockReturnValue({ top: 10, bottom: 100 });
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);
    document.body.appendChild(elem3);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
      { id: "zone3", className: "theme-blue" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Wait for initial check
    // elem2 (top=60) is closest to header (64) with distance=4
    // elem3 (top=10) has distance=54
    // elem1 (top=0) doesn't contain header (bottom=50 < 64)
    act(() => {
      vi.runAllTimers();
    });
    expect(result.current).toBe("theme-dark");

    // Simulate scrolling where elem3 becomes closest to header
    act(() => {
      observerCallback(
        [
          {
            target: elem1,
            isIntersecting: false,
            boundingClientRect: {
              top: 0,
              bottom: 50,
              left: 0,
              right: 0,
              x: 0,
              y: 0,
              width: 0,
              height: 50,
            },
          } as unknown as IntersectionObserverEntry,
          {
            target: elem2,
            isIntersecting: true,
            boundingClientRect: {
              top: 100,
              bottom: 300,
              left: 0,
              right: 0,
              x: 0,
              y: 100,
              width: 0,
              height: 200,
            },
          } as unknown as IntersectionObserverEntry,
          {
            target: elem3,
            isIntersecting: true,
            boundingClientRect: {
              top: 62,
              bottom: 152,
              left: 0,
              right: 0,
              x: 0,
              y: 62,
              width: 0,
              height: 90,
            },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    // elem3 is now closest to HEADER_HEIGHT (64)
    // distance for elem2: |100 - 64| = 36
    // distance for elem3: |62 - 64| = 2
    expect(result.current).toBe("theme-blue");
  });

  it("disconnects observer on unmount", () => {
    const elem = document.createElement("div");
    elem.id = "zone1";
    document.body.appendChild(elem);

    const scrollpoints = [{ id: "zone1", className: "theme-light" }];

    const { unmount } = renderHook(() => useThemedScrollpoints(scrollpoints));

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("recreates observer when scrollpoints change", () => {
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);

    const { rerender } = renderHook(
      ({ scrollpoints }) => useThemedScrollpoints(scrollpoints),
      {
        initialProps: {
          scrollpoints: [{ id: "zone1", className: "theme-light" }],
        },
      },
    );

    expect(IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(mockObserve).toHaveBeenCalledTimes(1);

    // Change scrollpoints
    rerender({
      scrollpoints: [
        { id: "zone1", className: "theme-light" },
        { id: "zone2", className: "theme-dark" },
      ],
    });

    // Should disconnect old observer and create new one
    expect(mockDisconnect).toHaveBeenCalledTimes(1);
    expect(IntersectionObserver).toHaveBeenCalledTimes(2);
    expect(mockObserve).toHaveBeenCalledTimes(3); // 1 from first render + 2 from second
  });

  it("uses requestAnimationFrame for state updates", () => {
    const elem = document.createElement("div");
    elem.id = "zone1";
    document.body.appendChild(elem);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    renderHook(() => useThemedScrollpoints(scrollpoints));

    const rafSpy = vi.spyOn(global, "requestAnimationFrame");

    // Simulate intersection
    observerCallback(
      [
        {
          target: elem,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    expect(rafSpy).toHaveBeenCalled();

    rafSpy.mockRestore();
  });
});
