import React from "react";
import { Meta, StoryFn } from "@storybook/react";
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
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
