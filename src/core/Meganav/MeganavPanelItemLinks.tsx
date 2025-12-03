import React from "react";
import Icon from "../Icon";
import cn from "../utils/cn";
import Badge from "../Badge";
import { PanelTitle } from "./PanelTitle";
import { IconName } from "../Icon/types";
import { FlyoutPanelList } from "./data";

export type MeganavPanelItemLink = {
  label?: string;
  listItems: FlyoutPanelList[];
  icon?: IconName;
  link?: {
    label: string;
    link: string;
  };
  displayTitleInMobile?: boolean;
};

const MeganavPanelItemLinks = ({
  label,
  listItems,
  link,
  displayTitleInMobile = true,
}: MeganavPanelItemLink) => {
  return (
    <ul className={cn(!displayTitleInMobile && "-mt-3 md:mt-0")}>
      {(link?.label || label) && (
        <PanelTitle
          title={link?.label || label || ""}
          link={link?.link ?? ""}
          displayTitleInMobile={displayTitleInMobile}
        />
      )}

      {listItems &&
        listItems.map((listItem) => (
          <li
            className={cn(
              "list-none py-2.5 md:py-2 px-3 my-0 flex gap-x-2.5 rounded-lg group hover:cursor-pointer",
              "hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100",
              listItem.isMobile ? "md:hidden" : "md:flex",
            )}
            key={listItem.label}
          >
            {listItem.icon && (
              <Icon
                name={listItem.icon}
                size="1.25rem"
                additionalCSS="text-neutral-1000 dark:text-neutral-300"
              />
            )}
            <a
              className="pointer-events-auto font-sans text-label2 md:text-label3 font-semibold text-neutral-1000 dark:text-neutral-300 
              group-hover:text-neutral-1300 dark:group-hover:text-neutral-000 focus-base"
              href={listItem.link}
            >
              {listItem.label}
            </a>
            {listItem.badge && <Badge size="xs">{listItem.badge}</Badge>}
          </li>
        ))}
    </ul>
  );
};

export default MeganavPanelItemLinks;
