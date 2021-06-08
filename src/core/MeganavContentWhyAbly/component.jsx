import React from "react";

import FeaturedLink from "../FeaturedLink/component.jsx";
import MeganavBlogPostsList from "../MeganavBlogPostsList/component.jsx";

import { selectRecentBlogPosts } from "../remote-blogs-posts";
import { ConnectStateWrapper } from "../../react/ConnectStateWrapper/component.jsx";

const MeganavContentWhyAbly = () => {
  const BlogPostsList = ConnectStateWrapper(MeganavBlogPostsList, { recentBlogPosts: selectRecentBlogPosts });

  return (
    <section className="ui-meganav-content ui-grid-gap md:grid-cols-3">
      <div>
        <h3 className="ui-meganav-overline" id="meganav-why-ably-panel-list-why-companies">
          Why companies choose Ably
        </h3>
        <ul aria-labelledby="meganav-why-ably-panel-list-why-companies">
          <li>
            <a href="/customers" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Customers</p>
            </a>
          </li>

          <li>
            <a href="/case-studies" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Case studies</p>
            </a>
          </li>

          <li>
            <a href="/compare" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Compare our tech</p>
            </a>
          </li>

          <li>
            <a href="/aws" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Ably & AWS</p>
            </a>
          </li>

          <li>
            <a href="/resources/datasheets" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Resources</p>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="ui-meganav-overline" id="meganav-why-ably-panel-list-four-pillars">
          Four pillars of dependability
        </h3>
        <ul className="mb-8" aria-labelledby="meganav-why-ably-panel-list-four-pillars">
          <li>
            <a href="/four-pillars-of-dependability#performance" className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Predictable performance</p>
              <p className="ui-meganav-media-copy">A low-latency global edge network across 200+ PoPs.</p>
            </a>
          </li>
          <li>
            <a href="/four-pillars-of-dependability#integrity" className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Guaranteed ordering & delivery</p>
              <p className="ui-meganav-media-copy">We guarantee in-order data delivery, even after disconnections.</p>
            </a>
          </li>
          <li>
            <a href="/four-pillars-of-dependability#reliability" className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Fault tolerant infrastructure</p>
              <p className="ui-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLAs.</p>
            </a>
          </li>
          <li>
            <a href="/four-pillars-of-dependability#availability" className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">High scalability & availability</p>
              <p className="ui-meganav-media-copy">Elastic, battle-tested global infrastructure for massive scale.</p>
            </a>
          </li>
        </ul>

        <FeaturedLink url="/four-pillars-of-dependability">Explore our Four Pillars of Dependability</FeaturedLink>
      </div>

      <BlogPostsList />
    </section>
  );
};

export default MeganavContentWhyAbly;
