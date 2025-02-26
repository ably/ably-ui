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
    return <Meganav signedIn={false} />;
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
    return <Meganav signedIn={true} />;
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
