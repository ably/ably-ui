import React, { useEffect, useState } from "react";

import { connectState } from "./remote-data-store";

export const ConnectStateWrapper = (Component, selectors) => {
  const [state, setState] = useState({});

  const setStateForKey = (key) => (storeState) =>
    setState(() => ({ [key]: storeState }));

  useEffect(() => {
    // Create a store subscription for each selector. Depending on your use case, this can be inefficient.
    // When optimising for renders, look for wins with selectors better for your use and using connectState directly.
    Object.keys(selectors).forEach((key) => {
      connectState(selectors[key], setStateForKey(key));
    });
  }, []);

  const WrappedComponent = (props) => <Component {...props} {...state} />;

  return WrappedComponent;
};
