import "../styles/application.css";

import Meganav from "@ably/ui/core/Meganav";
import Footer from "@ably/ui/core/Footer";
import ContactFooter from "@ably/ui/core/ContactFooter";
import Code from "@ably/ui/core/Code";
import Uptime from "@ably/ui/core/Uptime";
import CookieMessage from "@ably/ui/core/CookieMessage";
import Flash, { reducerFlashes } from "@ably/ui/core/Flash";
import Icon from "@ably/ui/core/Icon";
import FeaturedLink from "@ably/ui/core/FeaturedLink";
import CustomerLogos from "@ably/ui/core/CustomerLogos";
import Loader from "@ably/ui/core/Loader";
import Logo from "@ably/ui/core/Logo";

import {
  reactRenderer,
  loadSprites,
  createRemoteDataStore,
  attachStoreToWindow,
  fetchBlogPosts,
  reducerBlogPosts,
  fetchSessionData,
  reducerSessionData,
} from "@ably/ui/core/scripts";

import sprites from "@ably/ui/core/sprites.svg";

document.addEventListener("DOMContentLoaded", () => {
  // Inserts a sprite map for <use> tags
  loadSprites(sprites);

  // Create store before we render, the store is also added
  // to the global namespace
  const store = createRemoteDataStore({
    ...reducerBlogPosts,
    ...reducerSessionData,
    ...reducerFlashes,
  });

  attachStoreToWindow(store);

  // Render components
  reactRenderer({
    Meganav,
    Footer,
    Code,
    Uptime,
    ContactFooter,
    Flash,
    CookieMessage,
    Icon,
    FeaturedLink,
    CustomerLogos,
    Loader,
    Logo
  });

  // Fetch additional data, trigger a re-render for components subscribed to store
  fetchSessionData(store, "/api/me");
  fetchBlogPosts(store, "/api/blog");
});
