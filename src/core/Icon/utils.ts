import { ColorClass } from "../styles/colors/types";
import { IconName } from "./types";

export const defaultIconSecondaryColor = (name: IconName) => {
  const colorLookup = {
    "icon-gui-check-circled-fill": "text-white",
  } as Record<string, ColorClass>;

  return colorLookup[name];
};

// This is a mapping of older icon names to their newer HeroIcon counterparts.
export const guiIconAliases: Record<string, string> = {
  "icon-gui-arrow-bidirectional-horizontal":
    "icon-gui-arrows-right-left-outline",
  "icon-gui-arrow-bidirectional-vertical": "icon-gui-arrows-up-down-outline",
  "icon-gui-arrow-down": "icon-gui-arrow-long-down-outline",
  "icon-gui-arrow-left": "icon-gui-arrow-long-left-outline",
  "icon-gui-arrow-right": "icon-gui-arrow-long-right-outline",
  "icon-gui-arrow-up": "icon-gui-arrow-long-up-outline",
  "icon-gui-burger-menu": "icon-gui-bars-3-outline",
  "icon-gui-calendar": "icon-gui-calendar-days-outline",
  "icon-gui-check": "icon-gui-check-outline",
  "icon-gui-check-circled": "icon-gui-check-circle-outline",
  "icon-gui-clock": "icon-gui-clock-outline",
  "icon-gui-close": "icon-gui-x-mark-outline",
  "icon-gui-code-symbol": "icon-gui-code-bracket-outline",
  "icon-gui-copy": "icon-gui-square-2-stack-outline",
  "icon-gui-cross-circled-fill": "icon-gui-x-circle-solid",
  "icon-gui-cross-circled": "icon-gui-x-circle-outline",
  "icon-gui-dash-circled": "icon-gui-minus-circle-outline",
  "icon-gui-disclosure-arrow-down": "icon-gui-chevron-down-outline",
  "icon-gui-disclosure-arrow-left": "icon-gui-chevron-left-outline",
  "icon-gui-disclosure-arrow-right": "icon-gui-chevron-right-outline",
  "icon-gui-disclosure-arrow-up": "icon-gui-chevron-up-outline",
  "icon-gui-disclosure-arrow": "icon-gui-chevron-right-outline",
  "icon-gui-document-generic": "icon-gui-document-text-outline",
  "icon-gui-download": "icon-gui-arrow-down-tray-outline",
  "icon-gui-enlarge": "icon-gui-magnifying-glass-plus-outline",
  "icon-gui-external-link": "icon-gui-arrow-top-right-on-square-outline",
  "icon-gui-folder": "icon-gui-folder-outline",
  "icon-gui-globe": "icon-gui-globe-alt-outline",
  "icon-gui-heart": "icon-gui-heart-outline",
  "icon-gui-home": "icon-gui-home-outline",
  "icon-gui-info": "icon-gui-information-circle-outline",
  "icon-gui-link-arrow": "icon-gui-arrow-long-right-outline",
  "icon-gui-map-pin": "icon-gui-map-pin-outline",
  "icon-gui-minus": "icon-gui-minus-outline",
  "icon-gui-padlock": "icon-gui-lock-closed-outline",
  "icon-gui-plus": "icon-gui-plus-outline",
  "icon-gui-quote-marks-solid": "icon-gui-quote-marks-fill",
  "icon-gui-search": "icon-gui-magnifying-glass-outline",
  "icon-gui-sliders": "icon-gui-adjustments-horizontal-outline",
  "icon-gui-stack": "icon-gui-square-3-stack-3d-outline",
  "icon-gui-star": "icon-gui-star-outline",
  "icon-gui-system-status-circled-fill": "icon-gui-arrow-up-circle-solid",
  "icon-gui-tick": "icon-gui-check-outline",
  "icon-gui-warning-fill": "icon-gui-exclamation-triangle-solid",
  "icon-gui-warning": "icon-gui-exclamation-triangle-outline",
};
