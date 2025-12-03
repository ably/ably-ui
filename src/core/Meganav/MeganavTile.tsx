import React from "react";
import cn from "../utils/cn";
import { products, ProductName } from "../ProductTile/data";
import ProductIcon from "../ProductTile/ProductIcon";
import ProductLabel from "../ProductTile/ProductLabel";
import ProductDescription from "../ProductTile/ProductDescription";
import { IconName } from "../Icon/types";

const CONTAINER_GAP_RATIO = 3;

export type MeganavTileProps = {
  link: string;
  productName?: ProductName;
  navLabel?: string;
  navIcon?: IconName;
  navDescription?: string;
  animateIcons?: boolean;
  showAblyText?: boolean;
};

const MeganavTile = ({
  productName,
  navLabel,
  navIcon,
  navDescription,
  link,
  animateIcons = false,
  showAblyText = true,
}: MeganavTileProps) => {
  const productData = productName ? products[productName] : null;

  const icon = productData?.icon ?? navIcon;
  const hoverIcon = productData?.hoverIcon;
  const label = productData?.label ?? navLabel ?? "";
  const description = productData?.description ?? navDescription ?? "";
  const unavailable = productData?.unavailable ?? false;

  const numericalSize = 40;

  return (
    <a
      href={link}
      className={cn(
        "transition-colors group/product-tile",
        "flex flex-col p-3 rounded-lg gap-2 pointer-events-auto focus-base",
        "bg-neutral-000 dark:bg-neutral-1300",
        "hover:bg-neutral-100 dark:hover:bg-neutral-1200",
        "active:bg-neutral-200 dark:active:bg-neutral-1100",
      )}
      aria-hidden={unavailable}
    >
      <span
        className="items-center flex"
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
          showLabel={true}
          showAblyText={showAblyText}
          selected={false}
        />
      </span>
      <ProductDescription
        description={description}
        unavailable={!!unavailable}
        showDescription={true}
        selected={false}
      />
    </a>
  );
};

export default MeganavTile;
