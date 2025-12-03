import React from "react";
import Icon from "../Icon";
import cn from "../utils/cn";
import { MeganavPanelRightItem } from "./MeganavPanel";

const MeganavPanelRight = ({
  label,
  listItems,
  icon,
}: MeganavPanelRightItem) => {
  return (
    <ul>
      {label && (
        <div className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 my-3 flex items-center gap-x-1">
          {label}
          {icon && (
            <Icon
              name={icon}
              size="1rem"
              additionalCSS="text-neutral-700 dark:text-neutral-600"
            />
          )}
        </div>
      )}
      {listItems &&
        listItems.map((listItem) => (
          <li
            className={cn(
              "list-none py-2.5 md:py-2  my-0 flex gap-x-2.5 group hover:cursor-pointer",
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
              className="pointer-events-auto ui-text-label2 md:ui-text-label3 font-semibold text-neutral-1000 dark:text-neutral-300 group-hover:text-neutral-1300 dark:group-hover:text-neutral-000"
              href={listItem.link}
            >
              {listItem.label}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default MeganavPanelRight;
