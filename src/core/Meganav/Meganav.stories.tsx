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
        <div className="mt-64 ui-standard-container flex justify-end text-neutral-1000 relative z-0">
          I am a header
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
