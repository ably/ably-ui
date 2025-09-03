import React from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/types";
import cn from "../utils/cn";

type ProductIconProps = {
  name?: IconName;
  hoverName?: IconName;
  selected?: boolean;
  size: number;
  unavailable: boolean;
};

const ProductIcon = ({
  name,
  hoverName,
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
    <span
      className={cn("block p-px bg-gradient-to-b", {
        "from-neutral-1000 to-neutral-1300 dark:from-neutral-000 dark:to-neutral-300":
          selected,
        "from-neutral-000 to-neutral-300 dark:from-neutral-1000 dark:to-neutral-1300":
          !selected,
      })}
      style={{ width: size, height: size, borderRadius: size / 4 }}
    >
      {/* Inner container, contains the foreground container element */}
      <span
        className={cn("flex items-center justify-center", {
          "bg-neutral-1200 dark:bg-neutral-100": selected,
          "bg-neutral-100 dark:bg-neutral-1200": !selected,
          "group-hover/product-tile:bg-ably-primary-inverse":
            selected === false && !unavailable,
        })}
        style={{ height: innerSize, borderRadius: size / 4 }}
      >
        {/* The product icons themselves */}
        {hoverName ? (
          <Icon
            name={hoverName}
            size={`${iconSize}px`}
            additionalCSS={cn({
              "hidden group-hover/product-tile:flex": !selected,
              flex: selected,
            })}
          />
        ) : null}
        <Icon
          name={name}
          size={`${iconSize}px`}
          additionalCSS={cn({
            "text-ably-primary-inverse": selected && !unavailable,
            "text-ably-primary": !selected && !unavailable,
            "text-ably-label": selected && unavailable,
            "text-ably-label-inverse": !selected && unavailable,
            "flex group-hover/product-tile:hidden": hoverName && !selected,
            hidden: hoverName && selected,
          })}
        />
      </span>
    </span>
  );
};

export default ProductIcon;
