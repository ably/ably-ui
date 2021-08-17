import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavBlogPostsList = ({ recentBlogPosts, absUrl }) =>
  recentBlogPosts ? (
    <div>
      <h3 className="ui-meganav-overline" id="meganav-why-ably-panel-list-blog">
        Blog
      </h3>
      <ul className="mb-8" aria-labelledby="meganav-why-ably-panel-list-blog">
        {recentBlogPosts.map((post) => (
          <li key={post.link}>
            <a href={post.link} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">{post.title}</p>
              <p className="ui-meganav-media-copy">{post.pubDate}</p>
            </a>
          </li>
        ))}
      </ul>

      <FeaturedLink url={absUrl("/blog")}>More from our Blog</FeaturedLink>
    </div>
  ) : null;

MeganavBlogPostsList.propTypes = {
  recentBlogPosts: T.arrayOf(
    T.shape({
      link: T.string,
      title: T.string,
      pubDate: T.string,
    })
  ),
  absUrl: T.func,
};

export default MeganavBlogPostsList;
