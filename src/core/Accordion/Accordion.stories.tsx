import React from "react";
import Accordion, { AccordionProps } from "../Accordion";

export default {
  title: "JS Components/Accordion",
  component: Accordion,
  args: {
    data: [
      {
        name: "Item 1",
        content: "Content 1",
      },
      {
        name: "Item 2",
        content: "Content 2",
      },
      {
        name: "Item 3",
        content: "Content 3",
      },
      {
        name: "Item 4",
        content: "Content 4",
      },
    ],
    autoClose: false,
    topBorder: false,
    bottomBorder: false,
    arrowIcon: false,
  },
};

export const Default = {};

export const AutoClose = {
  render: (args: AccordionProps) => (
    <Accordion data={args.data} autoClose={true} />
  ),
};
