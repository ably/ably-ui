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
    return <Meganav />;
  },
  parameters: {
    docs: {
      description: {
        story: "",
      },
    },
  },
};
