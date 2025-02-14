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
  <div className="flex flex-row gap-x-24 bg-neutral-000">
    <div
      className={cn(
        "flex-[7] flex-shrink-0 grid grid-cols-2",
        panelLeftClassName,
      )}
    >
      {panelLeft}
    </div>
    <div className="flex-[3] flex-shrink-0 pt-12">
      {panelRightHeading && (
        <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 pb-6">
          platform
        </p>
      )}
      {panelRightItems.map((item) => (
        <li className="list-none py-12 flex gap-x-[10px] my-0" key={item.label}>
          <Icon name={item.icon} size="1.25rem" />
          <a
            className="ui-text-menu3 font-semibold text-neutral-1000 dark:text-neutral-300"
            href={item.link}
          >
            {item.label}
          </a>
        </li>
      ))}
      {panelRightBottom && <div>panelRightBottom</div>}
      <div className="absolute -bottom-[100px] -right-[100px] z-0">
        <div className="w-[200px] h-[200px] opacity-50 bg-[#ff5416] rounded-full blur-[200px] overflow-hidden"></div>
      </div>
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
    <div className="flex justify-end">
      <img
        src={content.image}
        loading="lazy"
        alt={content.heading}
        className="w-full"
      />
    </div>
  </>
);
