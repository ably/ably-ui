import React, { useEffect } from "react";
import { delay, http, HttpResponse } from "msw";

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
import LegacyMeganav from "./LegacyMeganav";

const statusUrl = "https://ntqy1wz94gjv.statuspage.io/api/v2/status.json";

export default {
  title: "Components/LegacyMeganav",
  component: LegacyMeganav,
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
    const store = getRemoteDataStore();

    fetchSessionData(store, "");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <LegacyMeganav
      paths={{
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
    const store = getRemoteDataStore();
    fetchSessionData(store, "/api/me");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <LegacyMeganav
      paths={{
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
    const store = getRemoteDataStore();
    fetchSessionData(store, "/api/me");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  return (
    <LegacyMeganav
      paths={{
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

const PageWithNotice = () => {
  useEffect(() => {
    const store = getRemoteDataStore();
    fetchSessionData(store, "");
    fetchBlogPosts(store, "/api/blog");
  }, []);

  // This is lifted from an API response and just tweaked to fit the props
  const response = {
    props: {
      id: 206,
      title: "📣 Introducing server-side batching:",
      bodyText: "Reduce the costs of high-scale, high-frequency messaging.",
      buttonLabel: "Read the announcement",
      buttonLink: "https://hubs.ly/Q0358S5G0",
      newTag: false,
      imageUrl:
        "https://ik.imagekit.io/ably/s3/banners/images/000/000/206/original/ably-logo-col-vert-rgb.png?1738658965",
      styleModifier: "lighter",
      closeBtn: true,
      collapse: true,
    },
    config: {
      cookieId: "bnr.x",
      noticeId: 206,
      options: {
        collapse: true,
      },
    },
  };

  return (
    <LegacyMeganav
      paths={{
        ablyStack: "#",
        iconSprites: "#",
        blogThumb1: "#",
        blogThumb2: "#",
        blogThumb3: "#",
      }}
      statusUrl={statusUrl}
      themeName="white"
      addSearchApiKey="#"
      notice={response}
    />
  );
};

export const WithNotice = {
  render: () => <PageWithNotice />,
};
