import React from "react";
import cn from "../utils/cn";
import { products } from "../ProductTile/data";
import ProductIcon from "../ProductTile/ProductIcon";
import ProductLabel from "../ProductTile/ProductLabel";
import ProductDescription from "../ProductTile/ProductDescription";
import { ProductTileProps } from "../ProductTile";

const CONTAINER_GAP_RATIO = 3;

const MeganavProductTile = ({
  name,
  productLink,
  showDescription = true,
  showLabel = true,
  size = "40px",
  animateIcons = false,
}: ProductTileProps & { productLink?: string }) => {
  const { icon, hoverIcon, label, unavailable, description } =
    products[name] ?? {};
  const numericalSize = parseInt(size, 10);

  return (
    <a
      href={productLink ? productLink : "#"}
      className={cn(
        "transition-colors group/product-tile",
        "flex flex-col p-3 rounded-lg gap-2",
        "bg-ably-primary-inverse",
        {
          "hover:bg-neutral-100 dark:hover:bg-neutral-1200": !unavailable,
        },
        { "pointer-events-auto": !unavailable },
        { "pointer-events-none": unavailable },
      )}
      aria-hidden={unavailable}
    >
      <span
        className={cn("items-center flex")}
        style={{
          gap: numericalSize / CONTAINER_GAP_RATIO,
        }}
      >
        <ProductIcon
          size={numericalSize}
          name={icon}
          hoverName={animateIcons ? hoverIcon : undefined}
          unavailable={!!unavailable}
          selected={false}
        />
        <ProductLabel
          label={label}
          unavailable={!!unavailable}
          numericalSize={numericalSize}
          showLabel={showLabel}
          selected={false}
        />
      </span>
      <ProductDescription
        description={description}
        unavailable={!!unavailable}
        showDescription={showDescription}
        selected={false}
      />
    </a>
  );
};

export default MeganavProductTile;
