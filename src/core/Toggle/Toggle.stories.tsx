import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import Toggle from "../Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultChecked: false,
  disabled: true,
};
