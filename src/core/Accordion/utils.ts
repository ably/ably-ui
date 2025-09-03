import { AccordionTheme, AccordionThemeColors } from "./types";

export const themeClasses: Record<AccordionTheme, AccordionThemeColors> = {
  default: {
    bg: "bg-neutral-200 dark:bg-neutral-1100",
    hoverBg: "hover:bg-neutral-300 dark:hover:bg-neutral-1100",
    text: "text-ably-primary",
    toggleIconColor: "text-neutral-1000 dark:text-orange-600",
    selectableBg: "bg-neutral-1200 dark:bg-neutral-300",
    selectableText: "text-ably-primary-inverse",
  },
  transparent: {
    bg: "bg-transparent dark:bg-transparent",
    hoverBg: "hover:bg-transparent dark:hover:bg-transparent",
    text: "text-neutral-1000 dark:text-neutral-000",
    toggleIconColor: "text-dark-grey dark:text-orange-600",
    border:
      "border-neutral-500 border-b last:border-none dark:border-neutral-1000",
  },
  static: {
    bg: "bg-neutral-200 dark:bg-neutral-1200",
    hoverBg: "hover:bg-neutral-200 dark:hover:bg-neutral-1200",
    text: "text-ably-primary",
    toggleIconColor: "text-neutral-200 dark:text-neutral-1200",
    selectableBg: "bg-neutral-1200 dark:bg-neutral-1200",
    selectableText: "text-ably-primary-inverse",
  },
};

export const isNonTransparentTheme = (theme: AccordionTheme) =>
  theme !== "transparent";

export const isStaticTheme = (theme: AccordionTheme) => theme === "static";
