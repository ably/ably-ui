import React from "react";
import cn from "../utils/cn";

type ProductLabelProps = {
  label: string;
  unavailable: boolean;
  selected?: boolean;
  numericalSize: number;
  showLabel?: boolean;
  className?: string;
};

const LABEL_FONT_SIZE_RATIO = 4;
const DESCRIPTION_FONT_SIZE_RATIO = 2.6;

const ProductLabel = ({
  label,
  unavailable,
  selected,
  numericalSize,
  showLabel,
  className,
}: ProductLabelProps) => {
  if (!label || !showLabel) {
    return null;
  }

  const dynamicFontSize = numericalSize / LABEL_FONT_SIZE_RATIO;

  return (
    <span className="flex flex-col justify-center">
      {unavailable ? (
        <span className="block">
          <span
            className="table-cell font-sans bg-ably-secondary-inverse rounded-full text-gui-unavailable tracking-[0.04em] font-bold leading-snug"
            style={{
              fontSize: dynamicFontSize * 0.6,
              padding: `${dynamicFontSize * 0.25}px ${dynamicFontSize * 0.5}px`,
            }}
          >
            COMING SOON
          </span>
        </span>
      ) : (
        <span
          className={cn(
            "block font-bold uppercase ui-text-p2 leading-snug",
            { "text-neutral-500 dark:text-neutral-700": selected },
            { "text-neutral-700 dark:text-neutral-500": !selected },
          )}
          style={{
            fontSize: dynamicFontSize,
            letterSpacing: "0.06em",
          }}
        >
          Ably
        </span>
      )}
      <span
        className={cn(
          "block ui-text-p2 font-bold",
          {
            "text-ably-primary-inverse": selected === true && !unavailable,
          },
          {
            "text-ably-secondary group-hover/product-tile:text-ably-primary":
              selected === false && !unavailable,
          },
          {
            "text-ably-primary": selected === undefined && !unavailable,
          },
          {
            "text-ably-label": unavailable,
          },
          { "mt-[-3px]": !unavailable },
          className,
        )}
        style={{ fontSize: numericalSize / DESCRIPTION_FONT_SIZE_RATIO }}
      >
        {label}
      </span>
    </span>
  );
};

export default ProductLabel;
