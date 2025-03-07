import React from "react";
import { Meta } from "@storybook/react";
import Meganav from "./Meganav";

export default {
  title: "Components/Meganav",
  component: Meganav,
  tags: ["autodocs"],
} as Meta;

export const Default = {
  render: () => {
    return (
      <div>
        <Meganav
          sessionState={{
            signedIn: false,
            logOut: { token: "", href: "" },
            accountName: "",
          }}
          searchDataId="inkeep-search"
        />
      </div>
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
        searchDataId="inkeep-search"
      />
    );
  },
};

export const WithNotice = {
  render: () => {
    return (
      <div>
        <Meganav
          sessionState={{
            signedIn: false,
            logOut: { token: "", href: "" },
            accountName: "",
          }}
          searchDataId="inkeep-search"
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
        <div className="h-[500px] bg-neutral-000"></div>
        <div className="h-[500px] bg-neutral-700"></div>
        <div className="h-[500px] bg-neutral-200"></div>
      </div>
    );
  },
};
