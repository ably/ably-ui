import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import LinkButton, { LinkButtonProps } from "../LinkButton";

export default {
  title: "Components/Link Button",
  component: LinkButton,
  parameters: {
    docs: {
      description: {
        component:
          "A variant of the `Button` component that renders an `a` element instead of a `button` element, with all the typing constraints and props one would expect from an anchor.",
      },
    },
  },
} as Meta;

const Template: StoryFn<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  variant: "primary",
  children: "Default Link Button",
};

export const External = Template.bind({});
External.args = {
  href: "https://www.ably.com",
  children: "External Link Button",
  target: "_blank",
  rel: "noopener noreferrer",
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: "#",
  children: "Disabled Link Button",
  disabled: true,
};
