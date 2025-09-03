import { ReactNode } from "react";
import { ColorClass, ColorThemeSet } from "../styles/colors/types";

type PricingDataHeader = {
  content: string;
  className?: string;
  color?: ColorClass | ColorThemeSet;
  tooltip?: string | ReactNode;
};

type PricingDataFeatureCta = {
  text: string;
  url: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  iconColor?: ColorClass | ColorThemeSet;
  isPriority?: boolean;
};

export type PricingDataFeatureSection = {
  title: string;
  items: string[] | string[][];
  listItemColors?: {
    foreground: ColorClass | ColorThemeSet;
    background: ColorClass | ColorThemeSet;
  };
};

export type PricingDataFeatureBorder = {
  text: string;
  style: "border-solid" | "border-dashed" | "border-dotted";
  color: "neutral" | "blue" | "orange";
};

export type PricingDataFeature = {
  title: PricingDataHeader;
  description: PricingDataHeader;
  price: { amount: string; content?: ReactNode };
  cta?: PricingDataFeatureCta;
  sections: PricingDataFeatureSection[];
  border?: PricingDataFeatureBorder;
  subtext?: string;
  bottomCta?: PricingDataFeatureCta;
};
