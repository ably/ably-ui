import React from "react";
import PricingCards, { PricingCardsProps } from "./PricingCards";
import { consumptionData, planData } from "./data";
import { PricingDataFeatureBorder } from "./types";

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

const Template = ({ data, delimiter }: PricingCardsProps) => (
  <div className="dark:bg-gradient-to-r dark:from-blue-800 dark:to-pink-800 p-32">
    <PricingCards data={data} delimiter={delimiter} />
  </div>
);

export const Plans = {
  render: () => <Template data={planData} />,
};

export const Consumption = {
  render: () => (
    <Template data={consumptionData} delimiter="icon-gui-plus-outline" />
  ),
};

export const ConsumptionNoDelimiter = {
  render: () => <Template data={consumptionData} delimiter="blank" />,
};

const planBorders: (PricingDataFeatureBorder | undefined)[] = [
  {
    color: "neutral",
    style: "border-dashed",
    text: "Dashed border",
  },
  {
    color: "blue",
    style: "border-solid",
    text: "Solid border",
  },
  undefined,
  {
    color: "orange",
    style: "border-dotted",
    text: "Dotted border",
  },
];

const planDataWithBorder = planData.map((plan, index) => ({
  ...plan,
  border: planBorders[index],
}));

export const BorderedPlans = {
  render: () => <Template data={planDataWithBorder} />,
  parameters: {
    docs: {
      description: {
        story:
          "Supplying a `border` prop to the data object (typed as `PricingDataFeature`) will render a border around the card. The border can be solid, dashed, or dotted, and can be neutral, blue, or orange with the supplied text. Example (shown for the first data object below): `{color: 'neutral', style: 'border-dashed', text: 'Dashed border'}`",
      },
    },
  },
};

const planDataWithoutCta = planData.map((plan, index) => ({
  ...plan,
  cta: index === 1 ? undefined : plan.cta,
}));

export const PlansWithCtaPlaceholder = {
  render: () => <Template data={planDataWithoutCta} />,
  parameters: {
    docs: {
      description: {
        story:
          "Supplying a `cta` prop with a `null` value will render a disabled CTA.",
      },
    },
  },
};
