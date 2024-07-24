import React, { useEffect } from "react";
import { delay, http, HttpResponse } from "msw";
import Meganav from "../Meganav";
import loadIcons from "../icons.js";
import logo from "../images/ably-logo.png";
import ablyStack from "../images/ably-stack.svg";
import awsLogo from "../images/icon-tech-aws.svg";

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
        logo,
        ablyStack,
        awsLogo,
      }}
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
        logo,
        ablyStack,
        awsLogo,
      }}
      statusUrl={statusUrl}
    />
  );
};

export const SignedIn = {
  render: () => <PageSignedIn />,
};
