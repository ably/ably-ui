import React from "react";
import FeaturedLink from "../FeaturedLink";

export const PanelTitle = ({
  title,
  link,
}: {
  title?: string;
  link?: string;
}) => {
  return (
    <div className="mb-3 px-3">
      {link ? (
        <FeaturedLink
          url={link}
          textSize="text-overline2"
          additionalCSS="ui-text-overline2 mb-0 py-0 font-medium font-mono
          text-neutral-700 dark:text-neutral-600 hover:text-neutral-1300 dark:hover:text-neutral-000
          active:text-neutral-1100 dark:active:text-neutral-200"
        >
          {title}
        </FeaturedLink>
      ) : (
        <p className="ui-text-overline2 text-neutral-700 dark:text-neutral-600 font-medium font-mono">
          {title}
        </p>
      )}
    </div>
  );
};
