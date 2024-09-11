import { ReactNode } from "react";
import { IconName } from "../Icon/types";
import { ColorClass } from "../styles/colors/types";

export type AccordionData = {
  name: string;
  icon?: IconName;
  content: ReactNode;
};

export type AccordionIcons = {
  closed: {
    name: IconName;
    css?: string;
  };
  open: {
    name: IconName;
    css?: string;
  };
};

export const accordionThemes = ["dark", "light", "transparent"] as const;

export type AccordionTheme = (typeof accordionThemes)[number];

export type AccordionThemeColors = {
  bg: ColorClass;
  hoverBg: ColorClass;
  text: ColorClass;
  toggleIconColor: ColorClass;
  selectableBg?: ColorClass;
  selectableText?: ColorClass;
};

export type AccordionOptions = {
  autoClose?: boolean;
  selectable?: boolean;
  sticky?: boolean;
  defaultOpenIndexes?: number[];
};
