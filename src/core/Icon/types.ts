import { computedIcons } from "./computed-icons";

export const iconNames = {
  gui: computedIcons.gui,
  display: computedIcons.display,
  social: computedIcons.social,
  tech: computedIcons.tech,
  product: computedIcons.product,
};

export type IconName =
  | (typeof iconNames.gui)[number]
  | (typeof iconNames.display)[number]
  | (typeof iconNames.social)[number]
  | (typeof iconNames.tech)[number]
  | (typeof iconNames.product)[number];

export type IconSize =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `calc(${string})`;
