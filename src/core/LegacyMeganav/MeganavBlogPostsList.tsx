import React from "react";

import FeaturedLink from "../FeaturedLink";
import { AbsUrl } from "./LegacyMeganav";

type MeganavBlogPostsListProps = {
  recentBlogPosts: {
    link: string;
    title: string;
    pubDate: string;
  }[];
  absUrl: AbsUrl;
};

const MeganavBlogPostsList = ({
  recentBlogPosts,
  absUrl,
}: MeganavBlogPostsListProps) =>
  recentBlogPosts ? (
    <div className="col-span-full md:col-span-4 pt-8 pb-24 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0">
      <h3 className="ui-meganav-overline" id="meganav-company-panel-list-blog">
        Blog
      </h3>
      <ul className="mb-8" aria-labelledby="meganav-company-panel-list-blog">
        {recentBlogPosts.map((post) => (
          <li key={post.link}>
            <a href={post.link} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">{post.title}</p>
              <p className="ui-meganav-media-copy">{post.pubDate}</p>
            </a>
          </li>
        ))}
      </ul>

      <FeaturedLink url={absUrl("/blog")} textSize="text-p3">
        More from our Blog
      </FeaturedLink>
    </div>
  ) : null;

export default MeganavBlogPostsList;
