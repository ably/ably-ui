/**
 * @deprecated This module is deprecated. Use Zustand stores instead.
 *
 * For Flash messages:
 * ```typescript
 * import { useFlashStore, pushFlash } from "@ably/ui/core/flash-store";
 *
 * // Subscribe to flash state
 * const items = useFlashStore((state) => state.items);
 *
 * // Push a flash
 * pushFlash({ type: "success", content: "It worked!" });
 * ```
 *
 * For blog posts and session data, these should be migrated to SWR
 * or React Query patterns rather than a global store.
 */

// Simple Redux-like store implementation without the Redux dependency
const createSimpleStore = (reducer, preloadedState) => {
  let state = preloadedState;
  const listeners = new Set();

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
    return action;
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // Initialize state
  dispatch({ type: "@@INIT" });

  return { getState, dispatch, subscribe };
};

const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);

  return (state = {}, action) => {
    let hasChanged = false;
    const nextState = {};

    for (const key of reducerKeys) {
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
};

/**
 * @deprecated Use Zustand stores instead
 */
export const attachStoreToWindow = (store) => {
  console.warn(
    "[@ably/ui] attachStoreToWindow is deprecated. Use Zustand stores instead. " +
    "See flash-store.ts for the Flash component migration."
  );
  window.AblyUi = window.AblyUi || {};
  window.AblyUi.RemoteDataStore = store;
};

/**
 * @deprecated Use Zustand stores instead
 */
export const getRemoteDataStore = () => {
  if (!window.AblyUi?.RemoteDataStore) {
    throw new Error("Remote store was called before one was created");
  }

  return window.AblyUi.RemoteDataStore;
};

/**
 * @deprecated Use Zustand stores instead
 */
export const connectState = (selector, setState) => {
  const store = getRemoteDataStore();
  let cachedOldState = selector(store);

  store.subscribe(() => {
    const newState = selector(store);

    // Do nothing, state is the same
    if (newState === cachedOldState) {
      return;
    }

    cachedOldState = newState;
    setState(newState);
  });
};

/**
 * @deprecated Use Zustand stores instead
 */
export const createRemoteDataStore = (reducers) => {
  console.warn(
    "[@ably/ui] createRemoteDataStore is deprecated. Use Zustand stores instead. " +
    "See flash-store.ts for the Flash component migration."
  );
  return createSimpleStore(combineReducers(reducers), undefined);
};
