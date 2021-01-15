import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavContentWhyAbly = ({ paths }) => (
  <section className="ui-meganav-content ui-grid-gap md:grid-cols-3">
    <div>
      <h3 className="ui-meganav-overline" id="meganav-why-ably-panel-list-why-companies">
        Why companies choose Ably
      </h3>
      <ul aria-labelledby="meganav-why-ably-panel-list-why-companies">
        <li>
          <a href="/customers" className="group ui-meganav-media py-12">
            <p className="ui-meganav-media-heading">Customer stories</p>
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

      <FeaturedLink url="/four-pillars-of-dependability" iconSpritesPath={paths.iconSprites}>
        Explore our Four Pillars of Dependability
      </FeaturedLink>
    </div>

    <div>
      <h3 className="ui-meganav-overline" id="meganav-why-ably-panel-list-blog">
        Blog
      </h3>
      <ul className="mb-8" aria-labelledby="meganav-why-ably-panel-list-blog">
        {/* Without thumb until we fetch them dynamically, use CSS class ui-meganav-media-with-image */}
        <li>
          <a href="/blog/6-realtime-engineering-challenges-for-edtech-applications" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">6 realtime engineering challenges for EdTech applications</p>
            <p className="ui-meganav-media-copy">Jan 05, 2021</p>
          </a>
        </li>
        <li>
          <a href="/blog/iot-wearable-azure-cognitive-services-ably" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Making a wearable live caption display using Azure Cognitive Services and Ably</p>
            <p className="ui-meganav-media-copy">Dec 21, 2020</p>
          </a>
        </li>
        <li>
          <a href="/blog/airtable-database-realtime-messages" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Using Airtable as a database to store realtime messages</p>
            <p className="ui-meganav-media-copy">Dec 15, 2020</p>
          </a>
        </li>
      </ul>

      <FeaturedLink url="/blog" iconSpritesPath={paths.iconSprites}>
        More from our Blog
      </FeaturedLink>
    </div>
  </section>
);

MeganavContentWhyAbly.propTypes = {
  paths: T.shape({
    blogThumb1: T.string,
    blogThumb2: T.string,
    blogThumb3: T.string,
    iconSprites: T.string,
  }),
};

export default MeganavContentWhyAbly;
