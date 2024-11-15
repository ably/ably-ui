import { AccordionTheme, AccordionThemeColors } from "./types";

export const themeClasses: Record<AccordionTheme, AccordionThemeColors> = {
  dark: {
    bg: "bg-neutral-1200",
    hoverBg: "hover:bg-neutral-1100",
    text: "text-white",
    toggleIconColor: "text-orange-600",
    selectableBg: "bg-neutral-300",
    selectableText: "text-neutral-1300",
  },
  light: {
    bg: "bg-neutral-200",
    hoverBg: "hover:bg-neutral-300",
    text: "text-neutral-1300",
    toggleIconColor: "text-neutral-1000",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-white",
  },
  transparent: {
    bg: "bg-transparent",
    hoverBg: "hover:bg-transparent",
    text: "text-neutral-1000",
    toggleIconColor: "text-dark-grey",
    border: "border-neutral-500 border-b last:border-none",
  },
  darkTransparent: {
    bg: "bg-transparent",
    hoverBg: "hover:bg-transparent",
    text: "text-neutral-000",
    toggleIconColor: "text-orange-600",
    border: "border-neutral-900 border-b last:border-none",
  },
  static: {
    bg: "bg-neutral-200",
    hoverBg: "hover:bg-neutral-200",
    text: "text-neutral-1300",
    toggleIconColor: "text-neutral-200",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-white",
  },
  darkStatic: {
    bg: "bg-neutral-1200",
    hoverBg: "hover:bg-neutral-1200",
    text: "text-white",
    toggleIconColor: "text-neutral-1200",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-neutral-1300",
  },
};

export const isNonTransparentTheme = (theme: AccordionTheme) =>
  !["transparent", "darkTransparent"].includes(theme);

export const isStaticTheme = (theme: AccordionTheme) =>
  ["static", "darkStatic"].includes(theme);
