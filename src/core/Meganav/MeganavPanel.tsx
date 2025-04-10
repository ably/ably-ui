import React from "react";
import cn from "../utils/cn";
import Icon from "../Icon";
import { FlyoutPanelHighlight, FlyoutPanelList, productsForNav } from "./data";
import { ProductName, productNames } from "../ProductTile/data";
import MeganavProductTile from "./MeganavProductTile";

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
          "flex-[7] flex-shrink-0 group",
          { "grid-cols-1 xs:grid-cols-2": displayProductTile },
          panelLeftClassName,
        )}
      >
        {displayProductTile
          ? productNames.map((product) => (
              <MeganavProductTile
                name={product as ProductName}
                key={product}
                productLink={productsForNav[product].link ?? "#"}
                animateIcons={true}
              />
            ))
          : panelLeft && (
              <a
                className="grid grid-cols-1 xs:grid-cols-2 pointer-events-auto"
                href={panelLeft.url}
              >
                <span className="block w-full p-24">
                  <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
                    {panelLeft.heading}
                  </h4>
                  <span className="block ui-text-p3 text-neutral-800 dark:text-neutral-500 mt-8">
                    {panelLeft.content}
                  </span>
                  <span className="py-8 font-sans font-bold block group/featured-link text-neutral-1300 dark:text-neutral-000 mt-16 ui-text-p3 hover:text-neutral-1300 dark:hover:text-neutral-000">
                    {panelLeft.labelLink}
                    <Icon
                      name="icon-gui-arrow-long-right-outline"
                      size="18px"
                      color="text-orange-600"
                      additionalCSS={cn(
                        "align-middle ml-8 relative -top-1 -left-4 transition-[left]",
                        "group-hover/featured-link:left-0 group-hover/meganav-panel:left-0",
                      )}
                    />
                  </span>
                </span>
                <span className="flex justify-end">
                  <img
                    src={panelLeft.image}
                    alt={panelLeft.heading}
                    className="w-full z-10 rounded-lg"
                  />
                </span>
              </a>
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
                className="pointer-events-auto ui-text-label2 md:ui-text-label3 font-semibold text-neutral-1000 dark:text-neutral-300 group-hover:text-neutral-1300 dark:group-hover:text-neutral-000"
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
