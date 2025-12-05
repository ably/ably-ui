import React from "react";
import { FlyoutPanelList, productsForNav } from "./data";
import { ProductName, productNames } from "../ProductTile/data";
import MeganavPanelItemLinks, {
  MeganavPanelItemLink,
} from "./MeganavPanelItemLinks";
import MeganavTile from "./MeganavTile";

type MeganavPanelProps = {
  displayProductTile?: boolean;
  panelLeft?: React.ReactNode;
  panelMiddleItems?: React.ReactNode;
  panelRightItems?: MeganavPanelItemLink[];
  panelRightBottom?: React.ReactNode;
  panelFullWidthNavTiles?: FlyoutPanelList[];
};

export const MeganavPanel = ({
  displayProductTile,
  panelLeft,
  panelMiddleItems,
  panelRightItems,
  panelRightBottom,
  panelFullWidthNavTiles,
}: MeganavPanelProps) => {
  if (panelFullWidthNavTiles) {
    return (
      <div className="grid grid-cols-3 gap-x-4 bg-neutral-000 dark:bg-neutral-1300">
        {panelFullWidthNavTiles.map((item) => (
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
    );
  }

  // Standard 3-column layout
  const leftContent = displayProductTile ? (
    <div className="col-span-2 grid grid-cols-2 gap-x-4">
      {productNames.map((product) => (
        <MeganavTile
          key={product}
          productName={product as ProductName}
          link={productsForNav[product].link ?? "#"}
          animateIcons={true}
        />
      ))}
    </div>
  ) : (
    panelLeft
  );

  return (
    <div className="grid grid-cols-3 gap-x-4 bg-neutral-000 dark:bg-neutral-1300 items-start">
      {leftContent}

      {panelMiddleItems && <div>{panelMiddleItems}</div>}

      <div className="flex flex-col justify-between gap-y-6 mt-3">
        {panelRightItems?.map((rightItem) => (
          <MeganavPanelItemLinks
            key={rightItem.link?.label || rightItem.label}
            label={rightItem.label}
            listItems={rightItem.listItems}
            link={rightItem.link}
          />
        ))}
        {panelRightBottom && (
          <div className="items-end mt-4 md:mt-0">{panelRightBottom}</div>
        )}
      </div>
    </div>
  );
};
