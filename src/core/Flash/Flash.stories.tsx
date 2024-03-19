import React from "react";
import Flash, { reducerFlashes } from "./component.tsx";

import {
  attachStoreToWindow,
  createRemoteDataStore,
} from "../remote-data-store.js";
import { reducerBlogPosts } from "../remote-blogs-posts.js";
import { reducerSessionData } from "../remote-session-data.js";

export default {
  title: "Components/Flash",
  component: Flash,
  args: {
    flashes: [
      ["success", "Congratulations! You've won the Oscar"],
      ["notice", "This is a notice"],
      ["error", "This is an error, very bad"],
      ["alert", "This is an alert"],
      ["info", "Some useful information, you are welcome"],
    ],
  },
};

export const Default = {
  render: (args) => {
    const store = createRemoteDataStore({
      ...reducerBlogPosts,
      ...reducerSessionData,
      ...reducerFlashes,
    });

    attachStoreToWindow(store);

    return <Flash {...args} />;
  },
};
