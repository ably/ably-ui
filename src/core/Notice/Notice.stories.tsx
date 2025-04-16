import React from "react";
import Notice from "../Notice";

export default {
  title: "Components/Notice",
  component: Notice,
  args: {
    buttonLink: "/",
    title: "Flashy title",
    bodyText: "This is a notice",
    textColor: "text-neutral-1300 dark:text-neutral-000",
    closeBtn: true,
  },
};

export const Default = {
  render: (args) => <Notice {...args} />,
};

export const RailsUjs = {
  args: {
    title: "With Rails UJS",
    bodyText:
      "<a href='/logout' data-method='delete'>Logout</a> but with script tags <script>alert('hello')</script>",
  },
};
