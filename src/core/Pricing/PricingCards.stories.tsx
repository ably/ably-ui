import React from "react";
import PricingCards, { PricingCardsProps } from "./PricingCards";
import { consumptionData, planData } from "./data";

export default {
  title: "Features/Pricing Cards",
  component: PricingCards,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A reusable component that forms the basis of two sections of the pricing page. It is used to display pricing plans and consumption pricing. The presence of a `delimiter` prop changes the UX to focus around intermediate icon columns.",
      },
    },
  },
};

const Template = ({ data, theme = "dark", delimiter }: PricingCardsProps) => (
  <div className={`${theme === "dark" ? "bg-neutral-1300" : ""} p-32`}>
    <PricingCards data={data} theme={theme} delimiter={delimiter} />
  </div>
);

export const PlansDarkMode = {
  render: () => <Template data={planData} />,
};

export const PlansLightMode = {
  render: () => <Template data={planData} theme="light" />,
};

export const ConsumptionDarkMode = {
  render: () => <Template data={consumptionData} delimiter="icon-gui-plus" />,
};

export const ConsumptionLightMode = {
  render: () => (
    <Template data={consumptionData} theme="light" delimiter="icon-gui-plus" />
  ),
};
