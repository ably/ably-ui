import { Meta, StoryFn } from "@storybook/react-vite";
import React from "react";
import Footer from "../Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
