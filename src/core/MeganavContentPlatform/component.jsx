import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavContentPlatform = ({ paths, absUrl }) => (
  <div className="flex max-w-screen-xl mx-auto">
    <div className="ui-meganav-content-spacer bg-extra-light-grey"></div>
    <section className="grid grid-cols-12 ui-grid-gap-x w-full">
      <div className="col-span-full md:col-span-4 py-24 lg:py-32 px-24 sm:px-32 md:pl-0 md:pr-24 bg-extra-light-grey">
        <div className="flex mb-20">
          <img src={paths.ablyStack} alt="Ably homepage" />
          <h3 className="ui-meganav-overline ml-24">The Ably Platform</h3>
        </div>
        <p className="text-p2 font-medium text-cool-black mb-8" style={{ maxWidth: "330px" }}>
          Easily power any realtime experience in your application. No complex infrastructure to manage or provision. Just a simple API that handles everything
          realtime, and lets you focus on your code.
        </p>

        <FeaturedLink url={absUrl("/platform")}>Explore how it works</FeaturedLink>
      </div>

      <div className="col-span-full md:col-span-4 pt-24 pb-8 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-examples">
          Our Examples
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

      <div className="col-span-full md:col-span-4 pt-8 pb-24 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-our-technology">
          Our technology
        </h3>
        <ul className="mb-8" aria-labelledby="meganav-platform-panel-list-our-technology">
          <li>
            <a href={absUrl("/four-pillars-of-dependability#performance")} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Predictable performance</p>
              <p className="ui-meganav-media-copy">A low-latency and high-throughput global network.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/four-pillars-of-dependability#integrity")} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Guaranteed ordering & delivery</p>
              <p className="ui-meganav-media-copy">Data is delivered - in order - even after disconnections.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/four-pillars-of-dependability#reliability")} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Fault tolerant infrastructure</p>
              <p className="ui-meganav-media-copy">Redundancy is built in at global and regional levels.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/four-pillars-of-dependability#availability")} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">High scalability & availability</p>
              <p className="ui-meganav-media-copy">Built for scale with legitimate 99.999% uptime SLAs.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/network")} className="ui-meganav-media group">
              <p className="ui-meganav-media-heading">Global edge network</p>
              <p className="ui-meganav-media-copy">An edge network of 15 core routing datacenters and 205+ PoPs.</p>
            </a>
          </li>
        </ul>

        <FeaturedLink url={absUrl("/four-pillars-of-dependability")}>Explore Four Pillars of Dependability</FeaturedLink>
      </div>
    </section>
    <div className="ui-meganav-content-spacer"></div>
  </div>
);

MeganavContentPlatform.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    iconSprites: T.string,
  }),
  absUrl: T.func,
};

export default MeganavContentPlatform;
