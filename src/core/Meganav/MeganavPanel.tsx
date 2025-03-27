import React from "react";
import cn from "../utils/cn";
import Icon from "../Icon";
import { FlyoutPanelHighlight, FlyoutPanelList, productsForNav } from "./data";
import FeaturedLink from "../FeaturedLink";
import { ProductName, productNames } from "../ProductTile/data";
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
          "flex-[7] flex-shrink-0 grid-cols-1 xs:grid-cols-2 group",
          panelLeftClassName,
        )}
        onClick={
          panelLeft && !displayProductTile
            ? () => (window.location.href = panelLeft.url)
            : undefined
        }
      >
        {displayProductTile
          ? productNames.map((product) => (
              <ProductTile
                name={product as ProductName}
                key={product}
                selected={false}
                onClick={() => {
                  const productLink = productsForNav[product].link;
                  if (productLink) window.location.href = productLink;
                }}
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
                    additionalCSS="text-neutral-1300 dark:text-neutral-000 mt-16 ui-text-p3 hover:text-neutral-1300 dark:hover:text-neutral-000"
                    iconColor="text-orange-600"
                    iconClassName="group-hover/meganav-panel:left-0"
                  >
                    {panelLeft.labelLink}
                  </FeaturedLink>
                </div>
                <div className="flex justify-end">
                  <img
                    src={panelLeft.image}
                    alt={panelLeft.heading}
                    className="w-full z-10 rounded-lg"
                  />
                </div>
              </>
            )}
      </div>
      <div className="flex-[3] flex-shrink-0 flex flex-col justify-between">
        <ul>
          {panelRightHeading && (
            <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 my-12">
              {panelRightHeading}
            </p>
          )}

          {panelRightItems.map((item) => (
            <li
              className={cn(
                "list-none py-[10px] md:py-8  my-0 flex gap-x-[10px] group hover:cursor-pointer",
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
                className="ui-text-menu2 md:ui-text-menu3 font-semibold text-neutral-1000 dark:text-neutral-300 group-hover:text-neutral-1300 dark:group-hover:text-neutral-000"
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
