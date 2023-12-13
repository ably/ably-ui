import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavContentProducts = ({ paths, absUrl }) => (
  <div className="flex max-w-screen-xl mx-auto">
    <div className="ui-meganav-content-spacer bg-extra-light-grey"></div>
    <section className="grid grid-cols-12 ui-grid-gap-x w-full">
      <div className="col-span-full md:col-span-4 py-24 lg:py-32 px-24 sm:px-32 md:pl-0 md:pr-24 bg-extra-light-grey">
        <div className="flex mb-20">
          <img src={paths.ablyStack} alt="Ably homepage" />
          <h3 className="ui-meganav-overline ml-24">The Ably Platform</h3>
        </div>
        <p className="ui-text-p2 font-bold mb-24" style={{ maxWidth: "330px" }}>
          Easily power any realtime experience in your application. No complex infrastructure to manage or provision. Just a simple API that handles everything
          realtime, and lets you focus on your code.
        </p>

        <FeaturedLink url={absUrl("/platform")} textSize="text-p2">
          Explore how it works
        </FeaturedLink>
      </div>

      <div className="col-span-full md:col-span-4 pt-24 pb-8 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <h3 className="ui-meganav-overline" id="meganav-products-panel-list-examples">
          Products
        </h3>
        <ul className="mb-16" aria-labelledby="meganav-products-panel-list-examples">
          <li>
            <a href={absUrl("/solutions/channels")} className="group ui-meganav-media">
              <p className="ui-meganav-media-heading">Pub/Sub Channels</p>
              <p className="ui-meganav-media-copy">Build infinitely scalable realtime applications.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/spaces")} className="group ui-meganav-media">
              <p className="ui-meganav-media-heading">Spaces (Beta)</p>
              <p className="ui-meganav-media-copy">Create multi-user collaborative environments.</p>
            </a>
          </li>
          <li>
            <a href={absUrl("/livesync")} className="group ui-meganav-media">
              <p className="ui-meganav-media-heading">LiveSync (Early access)</p>
              <p className="ui-meganav-media-copy">Keep clients in sync with any relational database.</p>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-4 pt-8 pb-24 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <h3 className="ui-meganav-overline" id="meganav-products-panel-list-our-technology">
          Technology
        </h3>
        <ul className="mb-16" aria-labelledby="meganav-products-panel-list-our-technology">
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

        <FeaturedLink url={absUrl("/four-pillars-of-dependability")} textSize="text-p3">
          Explore Four Pillars of Dependability
        </FeaturedLink>
      </div>
    </section>
    <div className="ui-meganav-content-spacer"></div>
  </div>
);

MeganavContentProducts.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    iconSprites: T.string,
  }),
  absUrl: T.func,
};

export default MeganavContentProducts;
