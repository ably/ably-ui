import React from "react";
import clsx from "clsx";
import EncapsulatedIcon from "./Icon/EncapsulatedIcon";
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
      className={clsx(
        "rounded-lg p-12 flex flex-col gap-8 transition-colors",
        { "bg-neutral-1200 dark:bg-neutral-100": selected },
        {
          "bg-neutral-100 dark:bg-neutral-1200 hover:bg-neutral-200 dark:hover:bg-neutral-1100":
            !selected,
        },
        { [`${className}`]: className },
      )}
      onClick={onClick}
    >
      <div className="flex gap-12 items-center">
        {icon ? (
          <EncapsulatedIcon
            name={icon}
            className={
              selected
                ? "from-neutral-900 dark:from-neutral-400"
                : "from-neutral-400 dark:from-neutral-900"
            }
            innerClassName={
              selected
                ? "bg-neutral-1100 dark:bg-neutral-200"
                : "bg-neutral-200 dark:bg-neutral-1100"
            }
          />
        ) : null}
        <div
          className={clsx(
            "flex",
            { "flex-row items-center gap-4": unavailable },
            { "flex-col justify-center": !unavailable },
          )}
        >
          <p
            className={clsx(
              "font-medium",
              { "text-neutral-300 dark:text-neutral-1000": selected },
              { "text-neutral-1000 dark:text-neutral-300": !selected },
              { "ui-text-p2": unavailable },
              { "ui-text-p3": !unavailable },
            )}
          >
            Ably{" "}
          </p>
          <p
            className={clsx(
              "ui-text-p2 font-bold",
              { "text-neutral-000 dark:text-neutral-1300": selected },
              { "text-neutral-1300 dark:text-neutral-000": !selected },
              { "mt-[-3px]": !unavailable },
            )}
          >
            {label}
          </p>
        </div>
      </div>
      {unavailable ? (
        <div className="-mt-8">
          <div className="table-cell font-sans bg-neutral-300 dark:bg-neutral-1000 rounded-full px-6 py-2 text-gui-unavailable tracking-tighten-0.015 font-bold text-[8px] leading-snug">
            COMING SOON
          </div>
        </div>
      ) : null}
      <p
        className={clsx(
          "ui-text-p3 font-medium leading-snug",
          { "text-neutral-300 dark:text-neutral-1000": selected },
          { "text-neutral-800 dark:text-neutral-500": !selected },
        )}
      >
        {description}
      </p>
      {selected && link ? (
        <FeaturedLink
          additionalCSS="ui-btn-secondary bg-transparent hover:bg-transparent w-full hover:text-neutral-1300 mt-8 text-center inline-block text-neutral-000 dark:text-neutral-1300"
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
