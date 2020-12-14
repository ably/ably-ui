import React from "react";
import T from "prop-types";

const WhyAblyPanel = ({ paths }) => (
  <div className="c-meganav-panel md:grid-cols-3">
    <div>
      <p className="c-meganav-overline">Why companies choose Ably</p>
      <ul>
        <li>
          <a href="/customers" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">Customer stories</p>
          </a>
        </li>

        <li>
          <a href="/compare" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">Compare our tech</p>
          </a>
        </li>

        <li>
          <a href="/migrate" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">Risk-free migration</p>
          </a>
        </li>

        <li>
          <a href="/enterprise" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">For enterprises</p>
          </a>
        </li>

        <li>
          <a href="/aws" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">Ably & AWS</p>
          </a>
        </li>

        <li>
          <a href="/resources/datasheets" className="group c-meganav-media py-12">
            <p className="c-meganav-media-heading">Resources</p>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <p className="c-meganav-overline">Four pillars of dependability</p>
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
            <p className="c-meganav-media-copy">Redundant at regional and global levels with 99.999% uptime SLAs.</p>
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

    <div>
      <p className="c-meganav-overline">Blog</p>
      <ul className="mb-8">
        <li>
          {/* Without thumb until we fetch them dynamically, use CSS class c-meganav-media-with-image */}
          <a href="/blog/ably-wins-two-2020-devportal-awards" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Ably wins two 2020 Devportal Awards</p>
            <p className="c-meganav-media-copy">Nov 26, 2020</p>
          </a>
        </li>
        <li>
          <a href="/blog/achieving-exactly-once-message-processing-with-ably" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Achieving exactly-once message processing with Ably</p>
            <p className="c-meganav-media-copy">Nov 17, 2020</p>
          </a>
        </li>

        <li>
          <a href="/blog/ablys-partnership-with-aws" className="c-meganav-media group">
            <p className="c-meganav-media-heading">Ably’s partnership and global GTM strategy with AWS</p>
            <p className="c-meganav-media-copy">Oct 15, 2020</p>
          </a>
        </li>
      </ul>
      <a href="/blog" className="c-meganav-link group">
        More from our Blog
        <svg className="w-12 h-12 transform -rotate-90 align-top icon-dark-grey group-hover:icon-gui-hover ml-4">
          <use href={`${paths.iconSprites}#sprite-disclosure-arrow`}></use>
        </svg>
      </a>
    </div>
  </div>
);

WhyAblyPanel.propTypes = {
  paths: T.shape({
    blogThumb1: T.string,
    blogThumb2: T.string,
    blogThumb3: T.string,
    iconSprites: T.string,
  }),
};

export default WhyAblyPanel;
