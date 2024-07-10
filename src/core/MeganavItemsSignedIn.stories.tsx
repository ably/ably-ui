import type { Meta, StoryObj } from "@storybook/react";

import MeganavItemsSignedIn from "./MeganavItemsSignedIn";

const meta = {
  component: MeganavItemsSignedIn,
} satisfies Meta<typeof MeganavItemsSignedIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sessionState: {
      signedIn: true,
      accountName: "Free account",
      preferredEmail: "free6218@ably.io",
      account: {
        links: {
          dashboard: {
            href: "https://ably.com/account",
          },
        },
      },
      logOut: {
        token: "",
        href: "",
        text: "",
      },
      mySettings: {
        text: "",
        href: "",
      },
      myAccessTokens: {
        text: "",
        href: "",
      },
    },

    theme: {},

    absUrl: () => "https://ably.com/search?",
  },
};
