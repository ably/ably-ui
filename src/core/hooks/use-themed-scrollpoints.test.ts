/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useThemedScrollpoints } from "./use-themed-scrollpoints";

describe("useThemedScrollpoints", () => {
  let observerCallback: IntersectionObserverCallback;
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;

  beforeEach(() => {
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
    document.body.innerHTML = "";
  });

  it("returns first scrollpoint className on mount", () => {
    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(result.current).toBe("theme-light");
  });

  it("returns empty string when no scrollpoints provided", () => {
    const { result } = renderHook(() => useThemedScrollpoints([]));
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

  it("updates className when intersection occurs", async () => {
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

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Initial state
    expect(result.current).toBe("theme-light");

    // Simulate intersection with zone2
    observerCallback(
      [
        {
          target: elem2,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    await waitFor(() => {
      expect(result.current).toBe("theme-dark");
    });
  });

  it("does not update className if same scrollpoint intersects again", async () => {
    const elem = document.createElement("div");
    elem.id = "zone1";
    document.body.appendChild(elem);

    const scrollpoints = [{ id: "zone1", className: "theme-light" }];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    expect(result.current).toBe("theme-light");

    // Simulate intersection with same element
    const renderCount = result.current;
    observerCallback(
      [
        {
          target: elem,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    // Should not trigger re-render (className unchanged)
    expect(result.current).toBe(renderCount);
  });

  it("ignores non-intersecting entries", async () => {
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

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

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

  it("uses first intersecting entry when multiple entries intersect", async () => {
    const elem1 = document.createElement("div");
    elem1.id = "zone1";
    const elem2 = document.createElement("div");
    elem2.id = "zone2";
    const elem3 = document.createElement("div");
    elem3.id = "zone3";
    document.body.appendChild(elem1);
    document.body.appendChild(elem2);
    document.body.appendChild(elem3);

    const scrollpoints = [
      { id: "zone1", className: "theme-light" },
      { id: "zone2", className: "theme-dark" },
      { id: "zone3", className: "theme-blue" },
    ];

    const { result } = renderHook(() => useThemedScrollpoints(scrollpoints));

    // Simulate multiple intersections (zone2 and zone3 both intersecting)
    observerCallback(
      [
        {
          target: elem2,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
        {
          target: elem3,
          isIntersecting: true,
        } as unknown as IntersectionObserverEntry,
      ],
      {} as IntersectionObserver,
    );

    await waitFor(() => {
      // Should use first intersecting entry (zone2)
      expect(result.current).toBe("theme-dark");
    });
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
