import React from "react";
import { Meta } from "@storybook/react";
import Meganav from "../Meganav";

export default {
  title: "Components/Meganav",
  component: Meganav,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  render: () => {
    return (
      <Meganav
        sessionState={{
          signedIn: false,
          logOut: { token: "", href: "" },
          accountName: "",
        }}
      />
    );
  },
};
export const SignedIn = {
  render: () => {
    return (
      <Meganav
        sessionState={{
          signedIn: true,
          logOut: { token: "00", href: "users/sign_out" },
          accountName: "Ably Realtime",
        }}
      />
    );
  },
};

export const WithNotice = {
  render: () => {
    return (
      <>
        <Meganav
          sessionState={{
            signedIn: false,
            logOut: { token: "", href: "" },
            accountName: "",
          }}
          notice={{
            props: {
              title: "📣 Introducing server-side batching",
              bodyText:
                "Reduce the costs of high-scale, high-frequency messaging.",
              buttonLink: "/learn-more",
              buttonLabel: "Read the announcement",
              closeBtn: true,
            },
            config: {
              cookieId: "dummyCookieId",
              noticeId: "dummyNoticeId",
              options: {
                collapse: false,
              },
            },
          }}
        />
        <div className="h-[87.5rem] bg-neutral-200 -mt-4" id="main"></div>
        <div
          className="h-[93.75rem] bg-neutral-1300"
          id="main-theme-dark"
        ></div>
        <div className="h-[75rem] bg-neutral-100" id="main"></div>
      </>
    );
  },
};

export const LightThemeWithDarkMeganav = {
  render: () => {
    return (
      <>
        <Meganav
          sessionState={{
            signedIn: false,
            logOut: { token: "", href: "" },
            accountName: "",
          }}
          theme="dark"
        />
        <div
          className="h-[25rem] bg-neutral-1000 -mt-4"
          id="main-theme-dark"
        ></div>
        <div className="h-[93.75rem] bg-neutral-000" id="main"></div>
        <div className="h-[87.5rem] bg-neutral-1300" id="main-theme-dark"></div>
      </>
    );
  },
};
