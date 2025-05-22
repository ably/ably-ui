import React from "react";
import Slider from "../Slider";
import Icon from "../Icon";

const Slide = ({ name }: { name: string }) => (
  <div className="relative ">
    <div className="relative w-full sm:w-[35rem] md:w-[49rem] lg:w-[60rem] bg-white overflow-hidden  flex gap-10 rounded-3xl shadow-container-subtle">
      <div className="w-full md:w-2/3 flex flex-col gap-6 pr-10 md:pr-0 pt-10 pl-10 pb-10 sm:pb-[7.5rem] md:pb-10">
        <h2 className="ui-text-h2 font-medium text-neutral-1000">
          “Ably seamlessly absorbs sudden bursts in load during unexpected
          client events. The integration was easy and we were live in under a
          month.”
        </h2>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex gap-2">
            <div className="static self-center sm:absolute sm:-bottom-12 sm:-right-14 rounded-full bg-gradient-to-l from-neutral-200 to-50% to-neutral-500 w-12 h-12 sm:w-[12.5625rem] sm:h-[12.5625rem] md:w-[16.0625rem] md:h-[16.0625rem] lg:w-[17.5rem] lg:h-[17.5rem] overflow-hidden flex items-center justify-center sm:border-[16px] border-neutral-200">
              <img src="https://picsum.photos/id/64/200" alt="test-image" />
            </div>
            <div className="sm:py-4">
              <p className="ui-text-p1 text-neutral-1300">{name}</p>
              <p className="ui-text-p3 text-neutral-800">
                Co-Founder & Technical Leader
              </p>
            </div>
          </div>

          <div className="w-20 h-px sm:w-px sm:h-full bg-neutral-500"></div>
          <div className="flex items-center gap-1">
            <img src="https://picsum.photos/id/145/40" alt="test-image" />
            <p className="ui-text-h4 font-bold">Mentimeter</p>
          </div>
        </div>
        <a href="/case-study" className="ui-btn self-start">
          Read case study
          <Icon
            name="icon-gui-arrow-long-right-outline"
            size="1.25rem"
            additionalCSS="ml-1"
          />
        </a>
      </div>
    </div>

    <div className="absolute h-64 -z-10 -bottom-12 -left-9 w-1/5 rounded-full blur-xl opacity-50 transform -rotate-45 bg-gradient-to-bl from-bg-glow-green to-bg-glow-teal"></div>
    <div className="absolute h-64 -z-10 -top-12 -right-12 w-3/5 rounded-full blur-xl opacity-50 transform rotate-12 bg-gradient-to-br from-bg-glow-green to-bg-glow-teal"></div>
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
