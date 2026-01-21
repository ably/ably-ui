import React from "react";
import { PanelTitle } from "./PanelTitle";
import Badge from "../Badge";

import { ColorClassColorGroups } from "../styles/colors/types";
import MeganavPanelItemLinks from "./MeganavPanelItemLinks";
import { IconName } from "../Icon/types";

export type BlogPost = {
  title: string;
  link: string;
  categories: string[];
  pubDate: string;
};

export type MeganavBlogProps = {
  title: string;
  link: string;
  icon?: IconName;
  posts: BlogPost[];
};

const getCategoryColor = (category: string): ColorClassColorGroups => {
  const upperCategory = category.toUpperCase();
  if (
    [
      "NEW RELEASE",
      "ABLY ENGINEERING",
      "ABLY NEWS",
      "NEW FEATURE",
      "REALTIME EXPERIENCES",
    ].includes(upperCategory)
  )
    return "orange";
  if (["CHAT", "SPACES"].includes(upperCategory)) return "blue";
  if (["LIVEOBJECTS", "LIVESYNC"].includes(upperCategory)) return "green";
  if (upperCategory === "PUBSUB") return "pink";
  if (upperCategory === "AI TRANSPORT") return "violet";
  return "neutral";
};

const MeganavBlog = ({ title, link, icon, posts }: MeganavBlogProps) => {
  return (
    <>
      <div className="mt-3 hidden md:block">
        <PanelTitle title={title} link={link} />
        {posts.map((post) => (
          <a
            href={post.link}
            className="flex flex-col gap-1 p-3  
          transition-colors group/blog-post rounded-lg
      hover:bg-neutral-100 dark:hover:bg-neutral-1200 
      active:bg-neutral-200 dark:active:bg-neutral-1100 focus-base"
            key={post.link}
          >
            <span className="flex flex-wrap gap-2">
              {post.categories.map((category: string) => (
                <Badge
                  color={getCategoryColor(category)}
                  key={category}
                  size="xs"
                  className="group-hover/blog-post:bg-neutral-000 dark:group-hover/blog-post:bg-neutral-1300"
                >
                  {category.toUpperCase()}
                </Badge>
              ))}
            </span>
            <span
              className="ui-text-label3 font-semibold text-neutral-1000 dark:text-neutral-300
          group-hover/blog-post:text-neutral-1300 dark:group-hover/blog-post:text-neutral-000"
            >
              {post.title}
            </span>

            <span className="text-[11px] font-medium leading-[1.4] text-neutral-700 dark:text-neutral-600">
              {post.pubDate}
            </span>
          </a>
        ))}
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

export default MeganavBlog;
