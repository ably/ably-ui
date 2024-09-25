import { ReactNode } from "react";
import { ColorClass } from "../styles/colors/types";

type PricingDataHeader = {
  content: string;
  className?: string;
  color?: ColorClass;
};
type PricingDataFeatureCta = {
  text: string;
  url: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export type PricingDataFeature = {
  title: PricingDataHeader;
  description: PricingDataHeader;
  price: { amount: number | string; content?: ReactNode };
  cta?: PricingDataFeatureCta;
  sections: {
    title: string;
    items: string[] | string[][];
    listItemColors?: { foreground: ColorClass; background: ColorClass };
    cta?: PricingDataFeatureCta;
  }[];
};
