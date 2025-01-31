import React from "react";
import cn from "../utils/cn";

type ProductLabelProps = {
  label: string;
  unavailable: boolean;
  selected?: boolean;
  numericalSize: number;
  showLabel?: boolean;
};

const LABEL_FONT_SIZE_RATIO = 4;
const DESCRIPTION_FONT_SIZE_RATIO = 2.6;

const ProductLabel = ({
  label,
  unavailable,
  selected,
  numericalSize,
  showLabel,
}: ProductLabelProps) => {
  if (!label || !showLabel) {
    return null;
  }

  const dynamicFontSize = numericalSize / LABEL_FONT_SIZE_RATIO;

  return (
    <div className="flex flex-col justify-center">
      {unavailable ? (
        <div>
          <div
            className="table-cell font-sans bg-neutral-300 dark:bg-neutral-1000 rounded-full text-gui-unavailable tracking-widen-0.04 font-bold leading-snug"
            style={{
              fontSize: dynamicFontSize * 0.6,
              padding: `${dynamicFontSize * 0.25}px ${dynamicFontSize * 0.5}px`,
            }}
          >
            COMING SOON
          </div>
        </div>
      ) : (
        <p
          className={cn(
            "font-bold uppercase ui-text-p2 leading-snug",
            { "text-neutral-500 dark:text-neutral-700": selected },
            { "text-neutral-700 dark:text-neutral-500": !selected },
          )}
          style={{
            fontSize: dynamicFontSize,
            letterSpacing: "0.06em",
          }}
        >
          Ably
        </p>
      )}
      <p
        className={cn(
          "ui-text-p2 font-bold",
          {
            "text-neutral-000 dark:text-neutral-1300":
              selected === true && !unavailable,
          },
          {
            "text-neutral-1000 dark:text-neutral-300":
              selected === false && !unavailable,
          },
          {
            "text-neutral-1300 dark:text-neutral-000":
              selected === undefined && !unavailable,
          },
          {
            "text-neutral-700 dark:text-neutral-600": unavailable,
          },
          { "mt-[-3px]": !unavailable },
        )}
        style={{ fontSize: numericalSize / DESCRIPTION_FONT_SIZE_RATIO }}
      >
        {label}
      </p>
    </div>
  );
};

export default ProductLabel;
