import React from "react";
import T from "prop-types";

const PlatformPanel = ({ paths }) => (
  <div className="c-meganav-panel sm:grid-cols-2 md:grid-cols-3">
    <div className="sm:col-span-full md:col-span-1">
      <div className="flex items-center mb-20 lg:-mt-12">
        <img src={paths.ablyStack} alt="Ably homepage" />
        <p className="c-meganav-overline ml-24">The Ably Platform</p>
      </div>
      <p className="text-p1 text-cool-black mb-20">
        Easily power any realtime experience in your application.No complex infrastructure to manage or provision.Just a simple API that handles everything
        realtime, and lets you focus on your code.
      </p>
      <a href="/pub-sub-messaging" className="c-meganav-link group">
        Explore how it works
        <svg className="w-12 h-12 transform -rotate-90 align-top icon-dark-grey group-hover:icon-gui-hover ml-4">
          <use href={`${paths.iconSprites}#sprite-disclosure-arrow`}></use>
        </svg>
      </a>
    </div>

    <div>
      <p className="c-meganav-overline">Our features</p>
      <ul className="mb-8">
        <li>
          <a href="/pub-sub-messaging" className="group c-meganav-media">
            <p className="c-meganav-media-heading">Publish/subscribe messaging</p>
            <p className="c-meganav-media-copy">Feature-rich pub/sub messaging to power any realtime requirement.</p>
          </a>
        </li>
        <li>
          <a href="/push-notifications" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Push notifications</p>
            <p className="c-meganav-media-copy">Deliver native notifications at scale with our unified API.</p>
          </a>
        </li>
        <li>
          <a href="/integrations" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Third-party integrations</p>
            <p className="c-meganav-media-copy">Integrate and extend Ably with cloud services like AWS Kinesis.</p>
          </a>
        </li>
        <li>
          <a href="/protocols" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Multi-protocol messaging</p>
            <p className="c-meganav-media-copy">We support pub/sub over WebSockets, MQTT, SSE, and more.</p>
          </a>
        </li>
        <li>
          <a href="/hub" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Streaming data sources</p>
            <p className="c-meganav-media-copy">Augment your apps with realtime updates like weather or transit.</p>
          </a>
        </li>
      </ul>
      <a href="" className="c-meganav-link group">
        Explore all platform features
        <svg className="w-12 h-12 transform -rotate-90 align-top icon-dark-grey group-hover:icon-gui-hover ml-4">
          <use href={`${paths.iconSprites}#sprite-disclosure-arrow`}></use>
        </svg>
      </a>
    </div>

    <div>
      <p className="c-meganav-overline">Our technology</p>
      <ul className="mb-8">
        <li>
          <a href="/four-pillars-of-dependability#performance" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Predictable performance</p>
            <p className="c-meganav-media-copy">A low-latency global edge network across 200+ PoPs.</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#integrity" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Guaranteed ordering & delivery</p>
            <p className="c-meganav-media-copy">We guarantee in-order data delivery, even after disconnections.</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#reliability" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Fault tolerant infrastructure</p>
            <p className="c-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLA</p>
          </a>
        </li>
        <li>
          <a href="/four-pillars-of-dependability#availability" className="c-meganav-media group">
            <p className="c-meganav-media-heading">High scalability & availability</p>
            <p className="c-meganav-media-copy">Elastic, battle-tested global infrastructure for massive scale.</p>
          </a>
        </li>
      </ul>
      <a href="/four-pillars-of-dependability" className="c-meganav-link group">
        Explore our Four Pillars of Dependability
        <svg className="w-12 h-12 transform -rotate-90 align-top icon-dark-grey group-hover:icon-gui-hover ml-4">
          <use href={`${paths.iconSprites}#sprite-disclosure-arrow`}></use>
        </svg>
      </a>
    </div>
  </div>
);

PlatformPanel.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    iconSprites: T.string,
  }),
};

export default PlatformPanel;
