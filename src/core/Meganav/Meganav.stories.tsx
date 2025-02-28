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
        <Meganav signedIn={false} searchDataId="inkeep-search" />
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
    return <Meganav signedIn={true} searchDataId="inkeep-search" />;
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
