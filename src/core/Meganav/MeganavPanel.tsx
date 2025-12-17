import React from "react";
import { FlyoutPanelList, productsForNav } from "./data";
import { ProductName, productNames } from "../ProductTile/data";
import MeganavPanelItemLinks, {
  MeganavPanelItemLink,
} from "./MeganavPanelItemLinks";
import MeganavTile from "./MeganavTile";
import cn from "../utils/cn";

type MeganavPanelProps = {
  displayProductTile?: boolean;
  panelLeft?: React.ReactNode;
  panelMiddleItems?: React.ReactNode;
  panelRightItems?: MeganavPanelItemLink[];
  panelRightBottom?: React.ReactNode;
  panelRightBottomClassName?: string;
};

const basePanelClassName = "bg-neutral-000 dark:bg-neutral-1300 m-0 md:m-6";

const gridPanelClassName = cn(
  basePanelClassName,
  "grid grid-cols-1 md:grid-cols-3 gap-x-4",
);

export const MeganavPanel = ({
  displayProductTile,
  panelLeft,
  panelMiddleItems,
  panelRightItems,
  panelRightBottom,
  panelRightBottomClassName,
}: MeganavPanelProps) => {
  const renderProductsGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 sm:col-span-2">
      {productNames.map((product) => (
        <MeganavTile
          key={product}
          productName={product as ProductName}
          link={productsForNav[product].link ?? "#"}
          animateIcons
        />
      ))}
    </div>
  );

  return (
    <div className={cn(gridPanelClassName, "items-start")}>
      {displayProductTile ? (
        renderProductsGrid()
      ) : (
        <>
          {panelLeft}
          {panelMiddleItems}
        </>
      )}

      <div className="flex flex-col justify-between gap-y-6 mt-3 self-stretch">
        {panelRightItems?.map((rightItem) => (
          <MeganavPanelItemLinks
            key={rightItem.link?.label || rightItem.label}
            label={rightItem.label}
            listItems={rightItem.listItems}
            link={rightItem.link}
            displayTitleInMobile={rightItem.displayTitleInMobile ?? true}
          />
        ))}
        {panelRightBottom && (
          <div
            className={cn("items-end mt-4 md:mt-0", panelRightBottomClassName)}
          >
            {panelRightBottom}
          </div>
        )}
      </div>
    </div>
  );
};

export const MeganavPanelFullwidth = ({
  panelItems,
}: {
  panelItems: FlyoutPanelList[];
}) => (
  <>
    <div className={cn(gridPanelClassName, "hidden md:grid")}>
      {panelItems.map((item) => (
        <MeganavTile
          key={item.label}
          navLabel={item.label}
          navIcon={item.icon}
          navDescription={item.description}
          link={item.link}
          showAblyText={false}
        />
      ))}
    </div>
    <div className={cn(basePanelClassName, "block md:hidden")}>
      <MeganavPanelItemLinks listItems={panelItems} />
    </div>
  </>
);
