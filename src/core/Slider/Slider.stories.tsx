import React from "react";
import Slider from "../Slider.tsx";
import Icon from "../Icon.tsx";

const Slide = ({ name }: { name: string }) => (
  <div className="relative ">
    <div className="relative w-full sm:w-[560px] md:w-[784px] lg:w-[960px] bg-white overflow-hidden  flex gap-40 rounded-3xl shadow-container-subtle">
      <div className="w-full md:w-2/3 flex flex-col gap-24 pr-40 md:pr-0 pt-40 pl-40 pb-40 sm:pb-[120px] md:pb-40">
        <h2 className="ui-text-h2 font-medium text-neutral-1000">
          “Ably seamlessly absorbs sudden bursts in load during unexpected
          client events. The integration was easy and we were live in under a
          month.”
        </h2>
        <div className="flex flex-col sm:flex-row gap-32">
          <div className="flex gap-8">
            <div className="static self-center sm:absolute sm:-bottom-48 sm:-right-[56px] rounded-full bg-gradient-to-l from-neutral-200 to-50% to-neutral-500 w-[48px] h-[48px] sm:w-[201px] sm:h-[201px] md:w-[257px] md:h-[257px] lg:w-[280px] lg:h-[280px] overflow-hidden flex items-center justify-center sm:border-[16px] border-neutral-200">
              <img src="https://picsum.photos/id/64/200" alt="test-image" />
            </div>
            <div className="sm:py-16">
              <p className="ui-text-p1 text-neutral-1300">{name}</p>
              <p className="ui-text-p3 text-neutral-800">
                Co-Founder & Technical Leader
              </p>
            </div>
          </div>

          <div className="w-[80px] h-1 sm:w-1 sm:h-full bg-neutral-500"></div>
          <div className="flex items-center gap-4">
            <img src="https://picsum.photos/id/145/40" alt="test-image" />
            <p className="ui-text-h4 font-bold">Mentimeter</p>
          </div>
        </div>
        <a href="/case-study" className="ui-btn self-start">
          Read case study
          <Icon
            name="icon-gui-arrow-right"
            size="1.25rem"
            additionalCSS="ml-4"
          />
        </a>
      </div>
    </div>

    <div className="absolute h-256 -z-10 -bottom-48 -left-36 w-1/5 rounded-full blur-xl opacity-50 transform -rotate-45 bg-gradient-to-bl from-bg-glow-green to-bg-glow-teal"></div>
    <div className="absolute h-256 -z-10 -top-48 -right-48 w-3/5 rounded-full blur-xl opacity-50 transform rotate-12 bg-gradient-to-br from-bg-glow-green to-bg-glow-teal"></div>
  </div>
);

const slides = [
  <Slide key="1" name={"Johan Bengtsson"} />,
  <Slide key="2" name={"Mirko Bergman"} />,
  <Slide key="3" name={"Stefania Lombardo"} />,
  <Slide key="4" name={"Aleksandar Kostadinov"} />,
];

export default {
  title: "Components/Slider",
  component: Slider,
  args: {
    children: slides,
    options: {
      interval: 10000,
      intervalIndicator: true,
      controlPosition: "floating",
    },
  },
};

export const FloatingControlPosition = {
  args: {
    children: slides,
    options: {
      interval: 10000,
      intervalIndicator: true,
      controlPosition: "floating",
    },
  },
};

export const InlineControlPosition = {
  args: {
    options: {
      interval: 10000,
      intervalIndicator: true,
      controlPosition: "inline",
    },
  },
};

export const WithoutIntervalIndicator = {
  args: {
    options: {
      interval: 10000,
      intervalIndicator: false,
      controlPosition: "floating",
    },
  },
};
