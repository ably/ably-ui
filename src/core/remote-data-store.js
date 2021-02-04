import { createStore, combineReducers } from "redux";

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

export const createRemoteDataStore = (reducers) =>
  createStore(combineReducers(reducers));
