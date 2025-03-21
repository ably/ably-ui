import { ReactNode } from "react";
import { IconName, IconSize } from "../Icon/types";
import { ColorThemeSet } from "../styles/colors/types";

/**
 * Represents the data structure for an Accordion component.
 */
export type AccordionData = {
  /**
   * The name of the accordion item.
   */
  name: string;

  /**
   * The optional icon name to be displayed alongside the accordion item.
   */
  icon?: IconName;

  /**
   * The content to be displayed when the accordion item is expanded.
   */
  content: ReactNode;

  /**
   * Optional click handler function that is called when the accordion item is clicked.
   * @param index - The index of the clicked accordion item.
   */
  onClick?: (index: number) => void;

  /**
   * Indicates whether the accordion item is interactive.
   * When false, the item cannot be expanded or collapsed by user interaction.
   * @default true
   */
  interactive?: boolean;
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

export const accordionThemes = ["default", "transparent", "static"] as const;

export type AccordionTheme = (typeof accordionThemes)[number];

/**
 * Represents the theme colors for an accordion component.
 */
export type AccordionThemeColors = {
  /**
   * Background color class for the accordion.
   */
  bg: ColorThemeSet;

  /**
   * Background color when the accordion item is hovered.
   */
  hoverBg: ColorThemeSet;

  /**
   * Text color class for the accordion.
   */
  text: ColorThemeSet;

  /**
   * Color class for the toggle icon of the accordion.
   */
  toggleIconColor: ColorThemeSet;

  /**
   * Optional background color class for selectable accordion items.
   */
  selectableBg?: ColorThemeSet;

  /**
   * Optional text color class for selectable accordion items.
   */
  selectableText?: ColorThemeSet;

  /**
   * Optional border color for the accordion.
   */
  border?: string;
};

/**
 * Options for configuring the Accordion component.
 */
export type AccordionOptions = {
  /**
   * If true, only one accordion item can be open at a time.
   * @default false
   */
  autoClose?: boolean;

  /**
   * If true, accordion items can be selected.
   * @default false
   */
  selectable?: boolean;

  /**
   * If true, the accordion header will stick to the top when scrolling.
   * @default false
   */
  sticky?: boolean;

  /**
   * An array of indexes indicating which accordion items should be open by default.
   * @default []
   */
  defaultOpenIndexes?: number[];

  /**
   * If true, all accordion items will be fully open.
   * @default false
   */
  fullyOpen?: boolean;

  /**
   * Custom CSS class to apply to the accordion header.
   * @default ""
   */
  headerCSS?: string;

  /**
   * If true, borders between accordion items will be hidden.
   * @default false
   */
  hideBorders?: boolean;

  /**
   * Size of the row icon.
   * @default "32px"
   */
  rowIconSize?: IconSize;

  /**
   * Size of the accordion icon.
   * @default "16px"
   */
  iconSize?: IconSize;

  /**
   * Custom CSS classes to apply to the selected accordion header.
   * @default ""
   */
  selectedHeaderCSS?: string;

  /**
   * Custom CSS classes to apply to the accordion content.
   * @default ""
   */
  contentCSS?: string;
};
