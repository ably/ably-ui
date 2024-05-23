// Fetches current users session data
// Assumes an authenticated session, so will only work when used on ably.com/ably.io

import { isJsonResponse } from "./remote-data-util";

const NOT_FOUND_ERROR_CODE = "not-found";

const fetchSessionData = async (store, sessionUrl) => {
  const sessionLoaded = (payload = {}) =>
    store.dispatch({ type: "session/loaded", payload });

  try {
    if (!sessionUrl) {
      console.log(
        `Skipping fetching session, invalid sessionUrl: "${sessionUrl}"`,
      );
      sessionLoaded();
      return;
    }

    const res = await fetch(sessionUrl, { cache: "no-cache" });
    const jsonResponse = isJsonResponse(res.headers.get("content-type"));

    if (!jsonResponse) {
      throw new Error("Session endpoint is not serving json");
    }

    const payload = await res.json();

    if (payload.error === NOT_FOUND_ERROR_CODE) {
      sessionLoaded();
    } else {
      sessionLoaded(payload);
    }
  } catch (e) {
    sessionLoaded();
    console.warn("Could not fetch session data due to error:", e);
  }
};

const initialState = { data: null };

const REDUCER_KEY = "session";

const reducerSessionData = {
  [REDUCER_KEY]: (state = initialState, action) => {
    switch (action.type) {
      case "session/loaded":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  },
};

const selectSessionData = (store) => store.getState()[REDUCER_KEY]?.data;

export { fetchSessionData, reducerSessionData, selectSessionData };
