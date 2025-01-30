import React from "react";
import cn from "../utils/cn";

type ProductDescriptionProps = {
  description: string;
  selected?: boolean;
  unavailable: boolean;
  showDescription?: boolean;
};

const ProductDescription = ({
  description,
  selected,
  unavailable,
  showDescription = true,
}: ProductDescriptionProps) => {
  if (!description || !showDescription) {
    return null;
  }

  return (
    <p
      className={cn(
        "ui-text-p3 font-medium leading-snug",
        {
          "text-neutral-300 dark:text-neutral-1000": selected && !unavailable,
        },
        { "text-neutral-700 dark:text-neutral-600": !selected },
      )}
    >
      {description}
    </p>
  );
};

export default ProductDescription;
