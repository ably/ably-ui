import React, { ReactNode } from "react";
import Slider from "./component.tsx";

export default {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

const Slide = ({ children }: { children: ReactNode }) => (
  <div className="h-full p-24 bg-white rounded">
    <p className="ui-text-p2 text-center">{children}</p>
  </div>
);

const slides = [
  <Slide key="1">
    Powers live chat, updates, analytics, and composition for millions of users.
  </Slide>,
  <Slide key="2">
    Powers virtual venues for millions of event attendees around the world.
  </Slide>,
  <Slide key="3">
    Provides 5 million daily users with live financial commentary and stock
    tickers.
  </Slide>,
  <Slide key="4">Monitors live car performance data across the USA.</Slide>,
];

export const SliderOnAllBreakpoints = {
  args: {
    slides,
  },
};

export const SliderOnSmallBreakpointOnly = {
  args: {
    slides,
    classes: `sm:grid-cols-${slides.length / 2} md:grid-cols-${slides.length}`,
    mqEnableThreshold: () => !window.matchMedia("(min-width: 48rem)").matches,
  },
};
