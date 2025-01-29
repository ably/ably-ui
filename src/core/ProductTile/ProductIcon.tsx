import React from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/types";
import cn from "../utils/cn";

type ProductIconProps = {
  name?: IconName;
  selected?: boolean;
  size: number;
  unavailable: boolean;
};

const ProductIcon = ({
  name,
  selected,
  size,
  unavailable,
}: ProductIconProps) => {
  if (!name) {
    return null;
  }

  // Inner container is 2px smaller to account for 1px padding on each side
  const innerSize = size - 2;

  // Padding around the icon is 1/4 the icon's size, so the icon is 4 of 6 parts
  const iconSize = (size / 6) * 4;

  return (
    // Outer container, contains the gradient stroke (since we can't natively have CSS gradient strokes)
    <div
      className={cn("p-1 bg-gradient-to-b", {
        "from-neutral-1000 to-neutral-1300 dark:from-neutral-000 dark:to-neutral-300":
          selected,
        "from-neutral-000 to-neutral-300 dark:from-neutral-1000 dark:to-neutral-1300":
          !selected,
      })}
      style={{ width: size, height: size, borderRadius: size / 4 }}
    >
      {/* Inner container, contains the foreground container element */}
      <div
        className={cn("flex items-center justify-center", {
          "bg-neutral-1200 dark:bg-neutral-100": selected,
          "bg-neutral-100 dark:bg-neutral-1200": !selected,
          "group-hover/product-tile:bg-neutral-000 dark:group-hover/product-tile:bg-neutral-1300":
            selected === false && !unavailable,
        })}
        style={{ height: innerSize, borderRadius: size / 4 }}
      >
        {/* The product icon itself */}
        <Icon
          name={name}
          size={`${iconSize}px`}
          additionalCSS={cn({
            "text-neutral-000 dark:text-neutral-1300": selected && !unavailable,
            "text-neutral-1300 dark:text-neutral-000":
              !selected && !unavailable,
            "text-neutral-700 dark:text-neutral-600": selected && unavailable,
            "text-neutral-600 dark:text-neutral-700": !selected && unavailable,
          })}
        />
      </div>
    </div>
  );
};

export default ProductIcon;
