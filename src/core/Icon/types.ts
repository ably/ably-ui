import { computedIcons } from "./computed-icons";

export type IconName =
  | (typeof computedIcons.gui)[number]
  | (typeof computedIcons.display)[number]
  | (typeof computedIcons.social)[number]
  | (typeof computedIcons.other)[number]
  | (typeof computedIcons.tech)[number]
  | (typeof computedIcons.product)[number];

export const iconNames = {
  gui: computedIcons.gui,
  display: computedIcons.display,
  social: computedIcons.social,
  other: computedIcons.other,
  tech: computedIcons.tech,
  product: computedIcons.product,
};
