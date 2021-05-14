import "../styles/application.css";

import Meganav from "@ably/ably-ui/core/Meganav";
import Footer from "@ably/ably-ui/core/Footer";
import ContactFooter from "@ably/ably-ui/core/ContactFooter";
import Code from "@ably/ably-ui/core/Code";
import Uptime from "@ably/ably-ui/core/Uptime";

import {
  reactRenderer,
  loadSprites,
  createRemoteDataStore,
  attachStoreToWindow,
  fetchBlogPosts,
  reducerBlogPosts,
  fetchSessionData,
  reducerSessionData,
} from "@ably/ably-ui/core/scripts";

import sprites from "@ably/ably-ui/core/sprites.svg";

document.addEventListener("DOMContentLoaded", () => {
  // Inserts a sprite map for <use> tags
  loadSprites(sprites);

  // Create store before we render, the store is also added
  // to the global namespace
  const store = createRemoteDataStore({
    ...reducerBlogPosts,
    ...reducerSessionData,
  });

  attachStoreToWindow(store);

  // Render components
  reactRenderer({ Meganav, Footer, Code, Uptime, ContactFooter });

  // Fetch additional data, trigger a re-render for components subscribed to store
  fetchSessionData(store, "/api/me");
  fetchBlogPosts(store, "/api/blog");
});
