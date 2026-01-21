// Custom Store class to replace Redux
class Store {
  constructor(reducers, initialState = {}) {
    this.state = initialState;
    this.reducers = reducers;
    this.listeners = [];
    this.isDispatching = false;
  }

  getState() {
    if (this.isDispatching) {
      throw new Error(
        "You may not call store.getState() while the reducer is executing.",
      );
    }
    return this.state;
  }

  dispatch(action) {
    if (this.isDispatching) {
      throw new Error("Reducers may not dispatch actions.");
    }

    if (typeof action !== "object" || action === null) {
      throw new Error(
        "Actions must be plain objects. Use custom middleware for async actions.",
      );
    }

    if (typeof action.type === "undefined") {
      throw new Error(
        'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.',
      );
    }

    try {
      this.isDispatching = true;
      const nextState = {};

      // Apply each reducer to its corresponding state slice
      Object.keys(this.reducers).forEach((key) => {
        const reducer = this.reducers[key];
        const previousStateForKey = this.state[key];
        const nextStateForKey = reducer(previousStateForKey, action);
        nextState[key] = nextStateForKey;
      });

      this.state = nextState;
    } finally {
      this.isDispatching = false;
    }

    // Notify all listeners
    const listeners = this.listeners.slice();
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }

    return action;
  }

  subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error("Expected the listener to be a function.");
    }

    if (this.isDispatching) {
      throw new Error(
        "You may not call store.subscribe() while the reducer is executing.",
      );
    }

    let isSubscribed = true;

    this.listeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (this.isDispatching) {
        throw new Error(
          "You may not unsubscribe from a store listener while the reducer is executing.",
        );
      }

      isSubscribed = false;
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }.bind(this);
  }
}

export const attachStoreToWindow = (store) => {
  window.AblyUi = window.AblyUi || {};
  window.AblyUi.RemoteDataStore = store;
};

export const getRemoteDataStore = () => {
  if (!window.AblyUi.RemoteDataStore) {
    throw new Error("Remote store was called before one was created");
  }

  return window.AblyUi.RemoteDataStore;
};

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

export const createRemoteDataStore = (reducers) => {
  // Initialize state by calling each reducer with undefined state
  const initialState = {};
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    initialState[key] = reducer(undefined, { type: "@@INIT" });
  });

  return new Store(reducers, initialState);
};
