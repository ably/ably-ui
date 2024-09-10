import { ColorClass } from "../styles/colors/types";
import { IconName } from "./types";

export const defaultIconSecondaryColor = (name: IconName) => {
  const colorLookup = {
    "icon-gui-check-circled-fill": "text-white",
  } as Record<IconName, ColorClass>;

  return colorLookup[name];
};
