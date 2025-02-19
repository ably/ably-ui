import React from "react";
import cn from "../utils/cn";
import { FlyoutPanelHighlight, FlyoutPanelList } from "./data";
import Icon from "../Icon";
import FeaturedLink from "../FeaturedLink";
import "./Meganav.css";

export const MeganavPanel = ({
  panelLeft,
  panelLeftClassName,
  panelRightHeading,
  panelRightItems,
  panelRightBottom,
}: {
  panelLeft: React.ReactNode;
  panelLeftClassName?: string;
  panelRightHeading?: string;
  panelRightItems: FlyoutPanelList[];
  panelRightBottom?: React.ReactNode;
}) => (
  <div className="flex flex-row gap-x-24 bg-neutral-000 dark:bg-neutral-1300">
    <div
      className={cn(
        "flex-[7] flex-shrink-0 grid grid-cols-2",
        panelLeftClassName,
      )}
    >
      {panelLeft}
    </div>
    <div className="flex-[3] flex-shrink-0 flex flex-col justify-between">
      <ul>
        {panelRightHeading && (
          <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 my-12">
            platform
          </p>
        )}

        {panelRightItems.map((item) => (
          <li
            className="list-none py-12 my-0 flex gap-x-[10px] hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100"
            key={item.label}
          >
            <Icon
              name={item.icon}
              size="1.25rem"
              additionalCSS="text-neutral-1000 dark:text-neutral-300"
            />
            <a
              className="ui-text-menu3 font-semibold text-neutral-1000 dark:text-neutral-300"
              href={item.link}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {panelRightBottom && <div className="items-end">{panelRightBottom}</div>}
    </div>
  </div>
);

export const MeganavPanelHighlight = ({
  content,
}: {
  content: FlyoutPanelHighlight;
}) => (
  <>
    <div className="w-full p-24">
      <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
        {content.heading}
      </h4>
      <p className="ui-text-p3 text-neutral-800 dark:text-neutral-500 mt-8">
        {content.content}
      </p>
      <FeaturedLink
        url={content.url}
        additionalCSS="text-neutral-1300 dark:text-neutral-000 mt-16 ui-text-p3"
        iconColor="text-orange-600"
      >
        {content.labelLink}
      </FeaturedLink>
    </div>
    <div className="flex justify-end relative">
      <img
        src={content.image}
        loading="lazy"
        alt={content.heading}
        className="w-full z-10"
      />
    </div>
  </>
);
