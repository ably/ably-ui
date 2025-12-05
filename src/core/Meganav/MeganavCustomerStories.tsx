import React from "react";
import { PanelTitle } from "./utils";

export type CustomerStoryHighlight = {
  companyLogo: string;
  companyName: string;
  companyDesc: string;
  companyLink: string;
};

const MeganavCustomerStories = ({
  customerStoriesHighlight,
  title,
  link,
}: {
  customerStoriesHighlight: CustomerStoryHighlight;
  title: string;
  link: string;
}) => {
  const { companyLogo, companyName, companyDesc, companyLink } =
    customerStoriesHighlight;
  return (
    <div className="mt-3">
      <PanelTitle title={title} link={link} />
      <a
        href={companyLink}
        className="flex flex-col gap-y-2.5 p-2.5 pointer-events-auto rounded-lg
        transition-colors group/customer-story-highlight 
      hover:bg-neutral-100 dark:hover:bg-neutral-1200 
      active:bg-neutral-200 dark:active:bg-neutral-1100"
      >
        <figure
          className="rounded bg-neutral-100 dark:bg-neutral-1200 
            group-hover/customer-story-highlight:bg-neutral-000 
            dark:group-hover/customer-story-highlight:bg-neutral-1300
          flex justify-center items-center gap-4 h-[180px]"
        >
          <img src={companyLogo} alt={companyName} className="w-[180px]" />
        </figure>
        <span className="flex flex-col gap-2">
          <span className="ui-text-body2 text-neutral-1000 dark:text-neutral-300">
            <span className="font-semibold">{companyName}</span> {companyDesc}
          </span>
        </span>
      </a>
    </div>
  );
};

export default MeganavCustomerStories;
