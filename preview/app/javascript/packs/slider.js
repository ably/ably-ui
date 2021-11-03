import React from "react";

import Slider from "@ably/ui/core/Slider";

import { renderComponent } from "@ably/ui/core/scripts";

document.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line react/prop-types
  const Slide = ({ children }) => (
    <div className="h-full p-24 bg-white rounded">
      <p className="text-p2 text-center">{children}</p>
    </div>
  );

  const slides = [
    <Slide key="1">
      Powers live chat, updates, analytics, and composition for millions of
      users.
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

  const slider1 = {
    sliderId: "#slider1",
    slides,
    mqEnableThreshold: () => true,
  };

  const slider2 = {
    sliderId: "#slider2",
    slides,
    classes: `sm:grid-cols-${slides.length / 2} md:grid-cols-${slides.length}`,
    // match sm breakpoint
    mqEnableThreshold: () => !window.matchMedia("(min-width: 48rem)").matches,
  };

  [slider1, slider2].forEach((slider) => {
    const { sliderId, ...props } = slider;
    const node = document.querySelector(sliderId);
    renderComponent(Slider, props, node);
  });
});
