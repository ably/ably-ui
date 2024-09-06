import React from "react";
import Icon from "./Icon";
import FeaturedLink from "./FeaturedLink";
import { ProductName, products } from "./ProductTile/data";

type ProductTileProps = {
  name: ProductName;
  selected?: boolean;
  currentPage?: boolean;
  className?: string;
  onClick?: () => void;
};

const ProductTile = ({
  name,
  selected,
  currentPage,
  className,
  onClick,
}: ProductTileProps) => {
  const { icon, label, description, link, unavailable } = products[name] ?? {};

  return (
    <div
      className={`rounded-lg p-12 flex flex-col gap-8 transition-colors ${selected ? "bg-neutral-300" : "bg-neutral-1200 hover:bg-neutral-1100"} ${className ?? ""}`}
      onClick={onClick}
    >
      <div className="flex gap-12">
        {icon ? <Icon name={icon} size="48" /> : null}
        <div
          className={`flex ${unavailable ? "flex-row items-center gap-4" : "flex-col justify-center"} `}
        >
          <p
            className={`${unavailable ? "ui-text-p2" : "ui-text-p3"} ${selected ? "text-neutral-800" : "text-neutral-500"} font-medium`}
          >
            Ably{" "}
          </p>
          <p
            className={`ui-text-p2 ${selected ? "text-neutral-1300" : "text-neutral-300"} font-bold ${unavailable ? "" : "mt-[-3px]"}`}
          >
            {label}
          </p>
        </div>
      </div>
      {unavailable ? (
        <div className="-mt-8">
          <div className="table-cell bg-neutral-1000 rounded-full px-6 py-2 text-neutral-600 tracking-tighten-0.015 font-bold text-[8px] leading-snug">
            COMING SOON
          </div>
        </div>
      ) : null}
      <p
        className={`ui-text-p3 ${selected ? "text-neutral-1000" : "text-neutral-700"} font-medium leading-snug`}
      >
        {description}
      </p>
      {selected && link ? (
        <FeaturedLink
          additionalCSS={`ui-btn-secondary w-full hover:text-neutral-1300 mt-8 text-center inline-block ${
            selected ? "text-neutral-1300" : "text-white"
          }`}
          iconColor="text-orange-600"
          url={link}
        >
          {currentPage ? "View docs" : "Explore"}
        </FeaturedLink>
      ) : null}
    </div>
  );
};

export default ProductTile;
