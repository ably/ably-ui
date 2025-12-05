import React from "react";
import { PanelTitle } from "./utils";

export type MeganavBlogProps = {
  title: string;
  link: string;
};

const MeganavBlog = ({ title, link }: MeganavBlogProps) => {
  return (
    <div className="mt-3">
      <PanelTitle title={title} link={link} />
      <a href="/blog" className="flex flex-col gap-2.5 p-2.5">
        <span className="ui-text-label2 font-semibold text-neutral-1000 dark:text-neutral-300">
          New Moderation Providers for Ably Chat
        </span>
      </a>
    </div>
  );
};

export default MeganavBlog;
