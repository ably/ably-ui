import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavContentPlatform = ({ paths, absUrl }) => (
  <section className="ui-meganav-content ui-grid-gap sm:grid-cols-2 md:grid-cols-3">
    <div className="sm:col-span-full md:col-span-1">
      <div className="flex mb-20">
        <img src={paths.ablyStack} alt="Ably homepage" />
        <h3 className="ui-meganav-overline ml-24">The Ably Platform</h3>
      </div>
      <p className="text-p2 font-medium text-cool-black mb-8">
        Easily power any realtime experience in your application. No complex infrastructure to manage or provision. Just a simple API that handles everything
        realtime, and lets you focus on your code.
      </p>

      <FeaturedLink url={absUrl("/platform")}>Explore how it works</FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-examples">
        Examples
      </h3>
      <ul aria-labelledby="meganav-platform-panel-list-examples">
        <li>
          <a href={absUrl("/examples/avatar-stack")} className="group ui-meganav-media">
            <p className="ui-meganav-media-heading">Avatar Stack</p>
            <p className="ui-meganav-media-copy">See who is connected in a digital space.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/examples/emoji-reactions")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Emoji Reactions</p>
            <p className="ui-meganav-media-copy">React with an emoji to a message.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/examples/activity-feed")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Activity Feed</p>
            <p className="ui-meganav-media-copy">Display a list of user actions in realtime.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/examples/live-charts")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Live Charts</p>
            <p className="ui-meganav-media-copy">Visualise live metrics and data in a chart.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/examples/live-cursors")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Live Cursors</p>
            <p className="ui-meganav-media-copy">Track all cursors in realtime.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/examples/typing-indicator")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Typing Indicator</p>
            <p className="ui-meganav-media-copy">See when a user is typing a message.</p>
          </a>
        </li>
      </ul>
      <FeaturedLink url={absUrl("/examples")}>Explore all live examples</FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-our-technology">
        Our technology
      </h3>
      <ul className="mb-8" aria-labelledby="meganav-platform-panel-list-our-technology">
        <li>
          <a href={absUrl("/four-pillars-of-dependability#performance")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Predictable performance</p>
            <p className="ui-meganav-media-copy">
              We provide predictability so you can be confident your realtime application will always perform as expected.
            </p>
          </a>
        </li>
        <li>
          <a href={absUrl("/four-pillars-of-dependability#integrity")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Guaranteed ordering & delivery</p>
            <p className="ui-meganav-media-copy">We guarantee in-order data delivery, even after disconnections.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/four-pillars-of-dependability#reliability")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Fault tolerant infrastructure</p>
            <p className="ui-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLAs.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/four-pillars-of-dependability#availability")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">High scalability & availability</p>
            <p className="ui-meganav-media-copy">Elastic, battle-tested global infrastructure for massive scale.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/network")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Global edge network</p>
            <p className="ui-meganav-media-copy">An edge network of 15 core routing datacenters and 200+ PoPs.</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url={absUrl("/four-pillars-of-dependability")}>Explore our technology</FeaturedLink>
    </div>
  </section>
);

MeganavContentPlatform.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    iconSprites: T.string,
  }),
  absUrl: T.func,
};

export default MeganavContentPlatform;
