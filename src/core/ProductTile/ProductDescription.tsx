import React from "react";
import cn from "../utils/cn";

type ProductDescriptionProps = {
  description: string;
  selected?: boolean;
  unavailable: boolean;
  showDescription?: boolean;
  className?: string;
};

const ProductDescription = ({
  description,
  selected,
  unavailable,
  showDescription = true,
  className,
}: ProductDescriptionProps) => {
  if (!description || !showDescription) {
    return null;
  }

  return (
    <span
      className={cn(
        "block ui-text-p3 font-medium leading-snug",
        {
          "text-ably-secondary-inverse": selected && !unavailable,
        },
        {
          "text-ably-tertiary group-hover/product-tile:text-ably-secondary":
            !selected,
        },
        className,
      )}
    >
      {description}
    </span>
  );
};

export default ProductDescription;
