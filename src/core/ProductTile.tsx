import React from "react";
import EncapsulatedIcon from "./Icon/EncapsulatedIcon";
import FeaturedLink from "./FeaturedLink";
import { ProductName, products } from "./ProductTile/data";
import { ColorClass } from "./styles/colors/types";
import { determineThemeColor } from "./styles/colors/utils";

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

  const t = (color: ColorClass) =>
    determineThemeColor("dark", selected ? "light" : "dark", color);

  return (
    <div
      className={`rounded-lg p-12 flex flex-col gap-8 transition-colors ${t("bg-neutral-1200")} ${selected ? "" : "hover:bg-neutral-1100"} ${className ?? ""}`}
      onClick={onClick}
    >
      <div className="flex gap-12 items-center">
        {icon ? (
          <EncapsulatedIcon name={icon} theme={selected ? "light" : "dark"} />
        ) : null}
        <div
          className={`flex ${unavailable ? "flex-row items-center gap-4" : "flex-col justify-center"} `}
        >
          <p
            className={`${unavailable ? "ui-text-p2" : "ui-text-p3"} ${t("text-neutral-300")} font-medium`}
          >
            Ably{" "}
          </p>
          <p
            className={`ui-text-p2 ${t("text-neutral-000")} font-bold ${unavailable ? "" : "mt-[-3px]"}`}
          >
            {label}
          </p>
        </div>
      </div>
      {unavailable ? (
        <div className="-mt-8">
          <div className="table-cell font-sans bg-neutral-1000 rounded-full px-6 py-2 text-gui-unavailable tracking-tighten-0.015 font-bold text-[8px] leading-snug">
            COMING SOON
          </div>
        </div>
      ) : null}
      <p
        className={`ui-text-p3 ${selected ? "text-neutral-1000" : "text-neutral-500"} font-medium leading-snug`}
      >
        {description}
      </p>
      {selected && link ? (
        <FeaturedLink
          additionalCSS={`ui-btn-secondary bg-transparent hover:bg-transparent w-full hover:text-neutral-1300 mt-8 text-center inline-block ${t("text-neutral-000")}`}
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
