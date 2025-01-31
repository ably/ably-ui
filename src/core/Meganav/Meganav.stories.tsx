import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Meganav from "./Meganav";


export default {
  title: "Components/Meganav",
  component: Meganav,
  tags: ["!autodocs"],
} as Meta;

const Template: StoryFn = (args) => <Meganav {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any default args if needed
};