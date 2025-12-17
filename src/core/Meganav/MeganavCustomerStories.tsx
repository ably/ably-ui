import React from "react";
import { PanelTitle } from "./PanelTitle";
import MeganavPanelItemLinks from "./MeganavPanelItemLinks";
import { IconName } from "../Icon/types";

export type CustomerStoryHighlight = {
  companyName: string;
  companyDesc: string;
  companyLink: string;
  companyLogo: string;
  companyLogoDark?: string;
};

const MeganavCustomerStories = ({
  customerStoriesHighlight,
  title,
  link,
  icon,
}: {
  customerStoriesHighlight: CustomerStoryHighlight;
  title: string;
  link: string;
  icon?: IconName;
}) => {
  const {
    companyName,
    companyDesc,
    companyLink,
    companyLogo,
    companyLogoDark,
  } = customerStoriesHighlight;
  return (
    <>
      <div className="mt-3 hidden md:block">
        <PanelTitle title={title} link={link} />
        <a
          href={companyLink}
          className="flex flex-col gap-y-2.5 p-3 pointer-events-auto rounded-lg
        transition-colors group/customer-story-highlight 
      hover:bg-neutral-100 dark:hover:bg-neutral-1200 focus-base
      active:bg-neutral-200 dark:active:bg-neutral-1100"
        >
          <figure
            className="rounded bg-neutral-100 dark:bg-neutral-1200 
            group-hover/customer-story-highlight:bg-neutral-000 
            dark:group-hover/customer-story-highlight:bg-neutral-1300
          flex justify-center items-center gap-4 h-[180px]"
          >
            <img
              src={companyLogo}
              alt={companyName}
              className="max-h-[120px] dark:hidden"
            />
            {companyLogoDark && (
              <img
                src={companyLogoDark}
                alt={companyName}
                className="max-h-[120px] hidden dark:block"
              />
            )}
          </figure>
          <span className="flex flex-col gap-2">
            <span className="ui-text-p4 text-neutral-1000 dark:text-neutral-300">
              <strong className="font-semibold text-neutral-1300 dark:text-neutral-000">
                {companyName}
              </strong>{" "}
              {companyDesc}
            </span>
          </span>
        </a>
      </div>
      <div className="block md:hidden">
        <MeganavPanelItemLinks
          listItems={[
            {
              label: title,
              link: link,
              icon: icon,
            },
          ]}
        />
      </div>
    </>
  );
};

export default MeganavCustomerStories;
