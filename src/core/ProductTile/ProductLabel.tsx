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

  return (
    <div className="flex flex-col justify-center">
      {unavailable ? (
        <div>
          <div className="table-cell font-sans bg-neutral-300 dark:bg-neutral-1000 rounded-full px-6 py-2 text-gui-unavailable tracking-widen-0.04 font-bold text-[8px] leading-snug">
            COMING SOON
          </div>
        </div>
      ) : (
        <p
          className={cn(
            "font-bold uppercase ui-text-p2",
            { "text-neutral-500 dark:text-neutral-700": selected },
            { "text-neutral-700 dark:text-neutral-500": !selected },
          )}
          style={{
            fontSize: numericalSize / LABEL_FONT_SIZE_RATIO,
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
              selected !== false && !unavailable,
          },
          {
            "text-neutral-1000 dark:text-neutral-300":
              selected === false && !unavailable,
          },
          {
            "text-neutral-700 dark:text-neutral-600":
              selected === false && unavailable,
          },
          {
            "text-neutral-1300 dark:text-neutral-000": selected === undefined,
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
