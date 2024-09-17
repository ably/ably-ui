import React from "react";
import PricingCards from "./PricingCards";
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

export const PlansDarkMode = {
  render: () => (
    <div className="bg-neutral-1300 p-32">
      <PricingCards data={planData} />
    </div>
  ),
};

export const PlansLightMode = {
  render: () => (
    <div className="p-32">
      <PricingCards data={planData} theme="light" />
    </div>
  ),
};

export const ConsumptionDarkMode = {
  render: () => (
    <div className="bg-neutral-1300 p-32">
      <PricingCards data={consumptionData} delimiter="icon-gui-plus" />
    </div>
  ),
};

export const ConsumptionLightMode = {
  render: () => (
    <div className="p-32">
      <PricingCards
        data={consumptionData}
        theme="light"
        delimiter="icon-gui-plus"
      />
    </div>
  ),
};
