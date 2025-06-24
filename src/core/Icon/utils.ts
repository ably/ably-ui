import { ColorClass } from "../styles/colors/types";
import { IconName } from "./types";

// Import entire heroicon category modules
import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as MiniIcons from "@heroicons/react/20/solid";
import * as MicroIcons from "@heroicons/react/16/solid";

type HeroiconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const defaultIconSecondaryColor = (name: IconName) => {
  const colorLookup = {
    "icon-gui-check-circled-fill": "text-white",
  } as Record<string, ColorClass>;

  return colorLookup[name];
};

// Helper function to convert kebab-case to PascalCase for heroicons
export const toPascalCase = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

// Helper function to get a heroicon component by name and variant
export const getHeroicon = (
  iconName: string,
  variant: string,
): HeroiconComponent | null => {
  const componentName = `${toPascalCase(iconName)}Icon`;

  try {
    let iconModule: Record<string, HeroiconComponent>;

    switch (variant) {
      case "outline":
        iconModule = OutlineIcons as Record<string, HeroiconComponent>;
        break;
      case "solid":
        iconModule = SolidIcons as Record<string, HeroiconComponent>;
        break;
      case "mini":
        iconModule = MiniIcons as Record<string, HeroiconComponent>;
        break;
      case "micro":
        iconModule = MicroIcons as Record<string, HeroiconComponent>;
        break;
      default:
        return null;
    }

    // Access the component from the module
    const component = iconModule[componentName];
    return component || null;
  } catch (error) {
    console.error("Error getting heroicon:", error, componentName);
    return null;
  }
};

export const setUniqueIds = (el: SVGSVGElement | null, uniqueId: string) => {
  if (el) {
    // Find all elements with IDs in defs and their URL references
    const defsElements = el.querySelectorAll("defs [id]");
    const elementsWithUrls = el.querySelectorAll(
      '[fill*="url("], [stroke*="url("], [filter*="url("], [clip-path*="url("], [mask*="url("]',
    );

    defsElements.forEach((def) => {
      const oldId = def.id;

      // Prevent re-aliasing of processed ids
      if (oldId.includes(uniqueId)) {
        return;
      }

      const newId = `${oldId}-${uniqueId}`;

      def.id = newId;

      // Update all URL references to this ID
      const regex = new RegExp(`url\\(#${oldId}\\)`, "g");
      elementsWithUrls.forEach((element) => {
        ["fill", "stroke", "filter", "clip-path", "mask"].forEach((attr) => {
          const value = element.getAttribute(attr);
          if (value && value.includes(`url(#${oldId})`)) {
            element.setAttribute(attr, value.replace(regex, `url(#${newId})`));
          }
        });
      });
    });
  }
};
