import { create } from "zustand";

export type FlashType = "error" | "success" | "notice" | "info" | "alert";

export type FlashItem = {
  id: string;
  type: FlashType;
  content: string;
};

type FlashState = {
  items: FlashItem[];
  push: (flash: Omit<FlashItem, "id"> | Omit<FlashItem, "id">[]) => void;
  remove: (id: string) => void;
  clear: () => void;
};

/**
 * Zustand store for Flash messages.
 *
 * This replaces the Redux-based remote-data-store pattern.
 * It's lighter weight (Zustand is ~2KB vs Redux ~27KB) and simpler.
 *
 * Usage:
 * ```tsx
 * import { useFlashStore, pushFlash } from "@ably/ui/core/flash-store";
 *
 * // Subscribe to flash state in a component
 * const items = useFlashStore((state) => state.items);
 *
 * // Push a flash from anywhere
 * pushFlash({ type: "success", content: "It worked!" });
 * ```
 */
export const useFlashStore = create<FlashState>((set) => ({
  items: [],

  push: (flash) => {
    const flashes = Array.isArray(flash) ? flash : [flash];
    const newItems = flashes.map((f) => ({
      ...f,
      id: Math.random().toString(36).slice(2),
    }));

    set((state) => ({
      items: [...state.items, ...newItems],
    }));
  },

  remove: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  clear: () => {
    set({ items: [] });
  },
}));

// Convenience functions for use outside of React components
export const pushFlash = (flash: Omit<FlashItem, "id"> | Omit<FlashItem, "id">[]) => {
  useFlashStore.getState().push(flash);
};

export const removeFlash = (id: string) => {
  useFlashStore.getState().remove(id);
};

export const clearFlashes = () => {
  useFlashStore.getState().clear();
};

/**
 * Attach flash store to window for backward compatibility with existing
 * code that expects window.AblyUi.RemoteDataStore pattern.
 *
 * @deprecated Use useFlashStore hook or pushFlash function directly
 */
export const attachFlashStoreToWindow = () => {
  if (typeof window === "undefined") return;

  window.AblyUi = window.AblyUi || {};

  // Create a Redux-like interface for backward compatibility
  window.AblyUi.FlashStore = {
    dispatch: (action: { type: string; payload: unknown }) => {
      if (action.type === "flash/push") {
        const payload = action.payload as Omit<FlashItem, "id"> | Omit<FlashItem, "id">[];
        pushFlash(payload);
      }
    },
    getState: () => ({
      flashes: { items: useFlashStore.getState().items },
    }),
    subscribe: (callback: () => void) => {
      return useFlashStore.subscribe(callback);
    },
  };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    AblyUi?: {
      RemoteDataStore?: unknown;
      FlashStore?: {
        dispatch: (action: { type: string; payload: unknown }) => void;
        getState: () => { flashes: { items: FlashItem[] } };
        subscribe: (callback: () => void) => () => void;
      };
    };
  }
}
