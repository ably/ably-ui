import { displayIcons } from "./computed-icons/display-icons";
import { guiIcons } from "./computed-icons/gui-icons";
import { socialIcons } from "./computed-icons/social-icons";
import { techIcons } from "./computed-icons/tech-icons";
import { productIcons } from "./computed-icons/product-icons";

export const iconNames = {
  gui: guiIcons,
  display: displayIcons,
  social: socialIcons,
  tech: techIcons,
  product: productIcons,
};

// Type for heroicons following the pattern: icon-gui-{name}-{variant}
type HeroiconVariant = "outline" | "solid" | "mini" | "micro";
type HeroiconName = `icon-gui-${string}-${HeroiconVariant}`;

export type IconName =
  | (typeof iconNames.gui)[number]
  | (typeof iconNames.display)[number]
  | (typeof iconNames.social)[number]
  | (typeof iconNames.tech)[number]
  | (typeof iconNames.product)[number]
  | HeroiconName;

export type IconSize =
  | `${number}px`
  | `${number}em`
  | `${number}rem`
  | `calc(${string})`;
