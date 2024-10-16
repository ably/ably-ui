import { computedIcons } from "./computed-icons";

export const iconNames = {
  gui: computedIcons.gui,
  display: computedIcons.display,
  social: computedIcons.social,
  other: computedIcons.other,
  tech: computedIcons.tech,
  product: computedIcons.product,
};

export type IconName =
  | (typeof iconNames.gui)[number]
  | (typeof iconNames.display)[number]
  | (typeof iconNames.social)[number]
  | (typeof iconNames.other)[number]
  | (typeof iconNames.tech)[number]
  | (typeof iconNames.product)[number];
