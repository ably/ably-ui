import React from "react";
import Accordion from "../Accordion";
import { AccordionData } from "../Accordion/types";
import { menuItemLinks } from "./data";
import cn from "../utils/cn";

export const MeganavMobile = ({
  mobileNavItems,
}: {
  mobileNavItems: AccordionData[];
}) => {
  const menuItemClassname =
    "text-[18px] py-12 font-bold text-neutral-1000 dark:text-neutral-000 pl-0";
  return (
    <div className="p-16">
      <Accordion
        theme={"transparent"}
        data={mobileNavItems}
        icons={{
          closed: { name: "icon-gui-chevron-down-solid" },
          open: { name: "icon-gui-chevron-up-solid" },
        }}
        options={{
          hideBorders: true,
          headerCSS: menuItemClassname,
          contentCSS: "px-0",
        }}
      />
      {menuItemLinks &&
        menuItemLinks.map((link) => (
          <a
            href={link.link}
            key={link.name}
            className={cn(
              "w-full block ui-text-p1 hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100",
              menuItemClassname,
            )}
          >
            {link.name}
          </a>
        ))}
    </div>
  );
};
