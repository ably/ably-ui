import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.js";

const MeganavContentDevelopers = ({ paths }) => (
  <section className="ui-meganav-content ui-grid-gap md:grid-cols-3">
    <div>
      <h3 className="ui-meganav-overline md:mb-8">Documentation</h3>
      <div className="mb-16">
        <form className="relative" action="/search" method="get">
          <svg className="absolute top-8 left-8 w-24 h-24 pt-1 mt-1 ui-icon-cool-black">
            <use href={`${paths.iconSprites}#sprite-search`}></use>
          </svg>
          <input type="search" name="q" className="ui-input pl-48" placeholder="Search docs" />
        </form>
      </div>
      <p className="text-p1 font-medium text-cool-black mb-20">
        Docs, quick start guides, tutorials, and API reference to help you start building with Ably’s platform and APIs.
      </p>

      <FeaturedLink url="/documentation" iconSpritesPath={paths.iconSprites}>
        Visit Documentation
      </FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline uppercase" id="meganav-developers-panel-explore">
        EXPLORE
      </h3>
      <ul aria-labelledby="meganav-developers-panel-explore">
        <li>
          <a href="/integrations" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Third-party integrations & plugins</p>
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
    </div>

    <div>
      <h3 className="ui-meganav-overline uppercase" id="meganav-developers-panel-quick-links">
        Quick links
      </h3>
      <ul aria-labelledby="meganav-developers-panel-quick-links">
        <li>
          <a href="/download" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Download an SDK</p>
          </a>
        </li>
        <li>
          <a href="https://changelog.ably.com/" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Platform changelog</p>
          </a>
        </li>
        <li>
          <a href="/support" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Support & FAQs</p>
          </a>
        </li>
        <li>
          <a href="http://status.ably.io/" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Status</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

MeganavContentDevelopers.propTypes = {
  paths: T.shape({
    iconSprites: T.string,
  }),
};

export default MeganavContentDevelopers;
