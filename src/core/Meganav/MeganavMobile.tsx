import React from "react";
import Accordion from "../Accordion";
import { AccordionData } from "../Accordion/types";
import { menuItemLinks } from "./data";
import cn from "../utils/cn";

export const MeganavMobile = ({ navItems }: { navItems: AccordionData[] }) => {
  const menuItemClassname =
    "text-[18px] py-12 font-bold text-neutral-1000 dark:text-neutral-000";
  return (
    <div className="overflow-y-auto">
      <Accordion
        theme="transparent"
        className="px-16 pt-16"
        data={navItems}
        icons={{
          closed: { name: "icon-gui-chevron-down-outline" },
          open: { name: "icon-gui-chevron-up-outline" },
        }}
        options={{
          autoClose: true,
          hideBorders: true,
          headerCSS: `px-0 ${menuItemClassname}`,
          contentCSS: "px-0",
          selectedHeaderCSS: "text-neutral-1300 dark:text-neutral-000",
          rowIconSize: "24px",
        }}
      />
      {menuItemLinks && (
        <div className="mb-12">
          {menuItemLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className={cn("px-16 w-full block ui-text-p1", menuItemClassname)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
