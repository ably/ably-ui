import React, { useEffect, useState } from "react";

import { connectState, getRemoteDataStore } from "./remote-data-store";

/*
  Connect a react component to a global store.
  This is similar to what react-redux does but uses our global store so
  can share state with other React mount points or anything that uses the
  store.
  - selectors is an object where keys are your prop names and values are your select
  functions that work on the store to retrieve the state you are interested in
  - initial state is set in useEffect so the wrapped component needs to handle it's props set to undefined initially
*/

export const ConnectStateWrapper = (Component, selectors) => {
  const [state, setState] = useState({});

  const setStateForKey = (key) => (storeState) =>
    setState(() => ({ [key]: storeState }));

  useEffect(() => {
    const store = getRemoteDataStore();
    const resolvedState = Object.keys(selectors).reduce(
      (acc, key) => ({ ...acc, [key]: selectors[key](store) }),
      {}
    );

    // Set initial state
    setState(resolvedState);

    // Create a store subscription for each selector. Depending on your use case, this can be inefficient.
    // When optimising for renders, look for wins with selectors better for your use and using connectState directly.
    Object.keys(selectors).forEach((key) => {
      connectState(selectors[key], setStateForKey(key));
    });
  }, []);

  const WrappedComponent = (props) => <Component {...props} {...state} />;

  return WrappedComponent;
};
