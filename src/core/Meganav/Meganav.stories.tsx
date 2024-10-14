import React, { useEffect } from "react";
import { delay, http, HttpResponse } from "msw";
import Meganav from "../Meganav";
import loadIcons from "../icons.js";

import {
  attachStoreToWindow,
  createRemoteDataStore,
  getRemoteDataStore,
} from "../remote-data-store.js";
import { reducerBlogPosts, fetchBlogPosts } from "../remote-blogs-posts.js";
import {
  reducerSessionData,
  fetchSessionData,
} from "../remote-session-data.js";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "JS Components/Meganav",
  component: Meganav,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get("/api/me", () => {
          return HttpResponse.json({
            accountName: "Account Name",
            signedIn: true,
            account: {
              links: {
                dashboard: {
                  text: "Dashboard",
                  href: "/accounts/1",
                },
              },
            },
          });
        }),
        http.get("/api/blog", () => {
          return HttpResponse.json([
            {
              title: "Achieving exactly-once delivery with Ably",
              link: "https://ably.com/blog/achieving-exactly-once-message-processing-with-ably",
              pubDate: "Nov 17, 2020",
            },
            {
              title:
                "Why Ably integrates with functions instead of delivering them",
              link: "https://ably.com/blog/why-we-dont-offer-functions",
              pubDate: "Jul 28, 2020",
            },
            {
              title: "Adventures in BEAM optimization with our MQTT adapter",
              link: "https://ably.com/blog/beam-optimization-mqtt",
              pubDate: "Jul 17, 2020",
            },
          ]);
        }),
        http.get(statusUrl, async () => {
          await delay();

          return HttpResponse.json({
            status: {
              indicator: "none",
            },
          });
        }),
      ],
    },
  },
};

attachStoreToWindow(
  createRemoteDataStore({
    ...reducerBlogPosts,
    ...reducerSessionData,
  }),
);

const Page = () => {
  useEffect(() => {
    loadIcons();

    const store = getRemoteDataStore();

    fetchSessionData(store, "");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <Meganav
      paths={{
        logo: "#",
        ablyStack: "#",
        iconSprites: "#",
        blogThumb1: "#",
        blogThumb2: "#",
        blogThumb3: "#",
      }}
      themeName="white"
      addSearchApiKey="#"
      statusUrl={statusUrl}
    />
  );
};

export const Default = {
  render: () => <Page />,
};

const PageSignedIn = () => {
  useEffect(() => {
    loadIcons();
    const store = getRemoteDataStore();
    fetchSessionData(store, "/api/me");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <Meganav
      paths={{
        logo: "#",
        ablyStack: "#",
        iconSprites: "#",
        blogThumb1: "#",
        blogThumb2: "#",
        blogThumb3: "#",
      }}
      statusUrl={statusUrl}
      themeName="white"
      addSearchApiKey="#"
    />
  );
};

export const SignedIn = {
  render: () => <PageSignedIn />,
};

const SignedInWithDataSearchId = () => {
  useEffect(() => {
    loadIcons();
    const store = getRemoteDataStore();
    fetchSessionData(store, "/api/me");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <Meganav
      paths={{
        logo: "#",
        ablyStack: "#",
        iconSprites: "#",
        blogThumb1: "#",
        blogThumb2: "#",
        blogThumb3: "#",
      }}
      statusUrl={statusUrl}
      themeName="white"
      addSearchApiKey="#"
      searchDataId="inkeep-search"
    />
  );
};

export const DataSearchId = {
  render: () => <SignedInWithDataSearchId />,
};
