import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const PlatformPanel = ({ paths }) => (
  <section className="ui-meganav-panel ui-grid-gap sm:grid-cols-2 md:grid-cols-3">
    <div className="sm:col-span-full md:col-span-1">
      <div className="flex items-center mb-20 lg:-mt-12">
        <img src={paths.ablyStack} alt="Ably homepage" />
        <h3 className="ui-meganav-overline ml-24">The Ably Platform</h3>
      </div>
      <p className="text-p2 font-medium text-cool-black">
        Easily power any realtime experience in your application. No complex infrastructure to manage or provision. Just a simple API that handles everything
        realtime, and lets you focus on your code.
      </p>

      <FeaturedLink url="/pub-sub-messaging" iconSpritesPath={paths.iconSprites}>
        Explore how it works
      </FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-our-features">
        Our features
      </h3>
      <ul aria-labelledby="meganav-platform-panel-list-our-features">
        <li>
          <a href="/pub-sub-messaging" className="group ui-meganav-media">
            <p className="ui-meganav-media-heading">Publish/subscribe messaging</p>
            <p className="ui-meganav-media-copy">Feature-rich pub/sub messaging to power any realtime requirement.</p>
          </a>
        </li>
        <li>
          <a href="/push-notifications" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Push notifications</p>
            <p className="ui-meganav-media-copy">Deliver native notifications at scale with our unified API.</p>
          </a>
        </li>
        <li>
          <a href="/integrations" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Third-party integrations</p>
            <p className="ui-meganav-media-copy">Integrate and extend Ably with cloud services like AWS Kinesis.</p>
          </a>
        </li>
        <li>
          <a href="/protocols" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Multi-protocol messaging</p>
            <p className="ui-meganav-media-copy">We support pub/sub over WebSockets, MQTT, SSE, and more.</p>
          </a>
        </li>
        <li>
          <a href="/hub" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Streaming data sources</p>
            <p className="ui-meganav-media-copy">Augment your apps with realtime updates like weather or transit.</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url="/platform" iconSpritesPath={paths.iconSprites}>
        Explore all platform features
      </FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline" id="meganav-platform-panel-list-our-technology">
        Our technology
      </h3>
      <ul className="mb-8" aria-labelledby="meganav-platform-panel-list-our-technology">
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
            <p className="ui-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLA</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#availability" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">High scalability & availability</p>
            <p className="ui-meganav-media-copy">Elastic, battle-tested global infrastructure for massive scale.</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url="/four-pillars-of-dependability" iconSpritesPath={paths.iconSprites}>
        Explore our Four Pillars of Dependability
      </FeaturedLink>
    </div>
  </section>
);

PlatformPanel.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    iconSprites: T.string,
  }),
};

export default PlatformPanel;
