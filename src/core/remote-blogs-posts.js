import { isJsonResponse } from "./remote-data-util";

const fetchBlogPosts = async (store, blogUrl) => {
  try {
    if (!blogUrl) {
      console.log(
        `Skipping fetching blog posts, invalid blogUrl: "${blogUrl}"`
      );
      return;
    }

    const res = await fetch(blogUrl);

    if (isJsonResponse(res.headers.get("content-type"))) {
      const payload = await res.json();
      store.dispatch({ type: "blog/loaded", payload });
    } else {
      throw new Error("Blog posts url is not serving json");
    }
  } catch (e) {
    console.warn("Could not fetch blog posts due to error:", e);
  }
};

const initialState = { recent: null };

const REDUCER_KEY = "blogPosts";

const reducerBlogPosts = {
  [REDUCER_KEY]: (state = initialState, action) => {
    switch (action.type) {
      case "blog/loaded":
        return { ...state, recent: action.payload };
      default:
        return state;
    }
  },
};

const selectRecentBlogPosts = (store) => store.getState()[REDUCER_KEY]?.recent;

export { fetchBlogPosts, reducerBlogPosts, selectRecentBlogPosts };
