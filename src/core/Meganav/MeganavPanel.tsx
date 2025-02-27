import React from "react";
import cn from "../utils/cn";
import Icon from "../Icon";
import { FlyoutPanelHighlight, FlyoutPanelList } from "./data";
import FeaturedLink from "../FeaturedLink";
import { ProductName, products } from "../ProductTile/data";
import ProductTile from "../ProductTile";

export const MeganavPanel = ({
  displayProductTile,
  panelLeft,
  panelLeftClassName,
  panelRightHeading,
  panelRightItems,
  panelRightBottom,
}: {
  displayProductTile?: boolean;
  panelLeft?: FlyoutPanelHighlight;
  panelLeftClassName?: string;
  panelRightHeading?: string;
  panelRightItems: FlyoutPanelList[];
  panelRightBottom?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-x-24 bg-neutral-000 dark:bg-neutral-1300">
      <div
        className={cn(
          "flex-[7] flex-shrink-0 grid-cols-1 xs:grid-cols-2",
          panelLeftClassName,
        )}
      >
        {displayProductTile
          ? Object.keys(products).map((product) => (
              <ProductTile
                name={product as ProductName}
                key={product}
                selected={false}
                onClick={() =>
                  (window.location.href = products[product as ProductName]
                    ?.link as string)
                }
                animateIcons={true}
              />
            ))
          : panelLeft && (
              <>
                <div className="w-full p-24">
                  <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
                    {panelLeft.heading}
                  </h4>
                  <p className="ui-text-p3 text-neutral-800 dark:text-neutral-500 mt-8">
                    {panelLeft.content}
                  </p>
                  <FeaturedLink
                    url={panelLeft.url}
                    additionalCSS="text-neutral-1300 dark:text-neutral-000 mt-16 ui-text-p3"
                    iconColor="text-orange-600"
                  >
                    {panelLeft.labelLink}
                  </FeaturedLink>
                </div>
                <div className="flex justify-end">
                  <img
                    src={panelLeft.image}
                    alt={panelLeft.heading}
                    className="w-full z-10"
                  />
                </div>
              </>
            )}
      </div>
      <div className="mt-12 md:mt-0 flex-[3] flex-shrink-0 flex flex-col justify-between">
        <ul>
          {panelRightHeading && (
            <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 my-12">
              platform
            </p>
          )}

          {panelRightItems &&
            panelRightItems.map((item) => (
              <li
                className={cn(
                  "list-none py-12 my-0 flex gap-x-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100",
                  item.isMobile ? "md:hidden" : "md:flex",
                )}
                key={item.label}
              >
                <Icon
                  name={item.icon}
                  size="1.25rem"
                  additionalCSS="text-neutral-1000 dark:text-neutral-300"
                />
                <a
                  className="ui-text-menu2 md:ui-text-menu3 font-semibold text-neutral-1000 dark:text-neutral-300"
                  href={item.link}
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
        {panelRightBottom && (
          <div className="items-end mt-16 md:mt-0">{panelRightBottom}</div>
        )}
      </div>
    </div>
  );
};
