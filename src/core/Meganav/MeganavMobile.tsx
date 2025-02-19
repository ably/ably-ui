import React from "react";
import Accordion from "../Accordion";
import { AccordionData } from "../Accordion/types";

export const MeganavMobile = ({
  mobileNavItems,
}: {
  mobileNavItems: AccordionData[];
}) => {
  return (
    <>
      <Accordion
        className="p-16"
        data={mobileNavItems}
        icons={{
          closed: { name: "icon-gui-chevron-down-solid" },
          open: { name: "icon-gui-chevron-up-solid" },
        }}
        options={{
          headerCSS: "border-none",
        }}
      />
      <div></div>
    </>
  );
};
