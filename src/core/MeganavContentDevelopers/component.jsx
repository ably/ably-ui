import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const MeganavContentDevelopers = ({ absUrl }) => (
  <div className="flex max-w-screen-xl mx-auto">
    <div className="ui-meganav-content-spacer"></div>
    <section className="grid grid-cols-12 ui-grid-gap-x w-full">
      <div className="col-span-full md:col-span-4 pt-24 md:py-24 lg:py-32 px-24 sm:px-32 md:pl-0 md:pr-24">
        <h3 className="ui-meganav-overline uppercase" id="meganav-developers-panel-explore">
          Explore
        </h3>
        <ul aria-labelledby="meganav-developers-panel-explore">
          <li>
            <a href={absUrl("/docs")} className="ui-meganav-media-with-image group">
              <Icon name="icon-display-docs-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Documentation</p>
                <p className="ui-meganav-media-copy">Technical guides to help you build with Ably.</p>
              </div>
            </a>
          </li>
          <li>
            <a href={absUrl("/docs/key-concepts")} className="ui-meganav-media-with-image group">
              <Icon name="icon-display-lightbulb-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Concepts</p>
                <p className="ui-meganav-media-copy">Read about core Ably platform concepts.</p>
              </div>
            </a>
          </li>
          <li>
            <a href={absUrl("/docs/quick-start-guide")} className="ui-meganav-media-with-image group">
              <Icon name="icon-display-quickstart-guides-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Quickstart guides</p>
                <p className="ui-meganav-media-copy">Documentation to help you get started quickly.</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-4 pb-8 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0">
        <ul className="md:mt-40" aria-labelledby="meganav-developers-panel-explore">
          <li>
            <a href={absUrl("/download")} className="ui-meganav-media-with-image group">
              <Icon name="icon-display-sdks-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">SDKs</p>
                <p className="ui-meganav-media-copy">Download an SDK to help you build realtime apps faster.</p>
              </div>
            </a>
          </li>
          <li>
            <a href={absUrl("/tutorials")} className="ui-meganav-media-with-image group">
              <Icon name="icon-display-tutorials-demos-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Tutorials & Demos</p>
                <p className="ui-meganav-media-copy">Get stuck in with our hands-on resources. </p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-4 pt-8 pb-24 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0">
        <h3 className="ui-meganav-overline uppercase" id="meganav-developers-panel-quick-links">
          Quick links
        </h3>
        <ul aria-labelledby="meganav-developers-panel-quick-links">
          <li>
            <a href="https://discord.gg/jwBPhEZ9g5" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Discord</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/ably" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Github</p>
            </a>
          </li>
          <li>
            <a href="https://changelog.ably.com/" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Changelog</p>
            </a>
          </li>
          <li>
            <a href="https://status.ably.com/" className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">
                Status
                <iframe
                  src="https://status.ably.com/embed/icon"
                  allowtransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  className="w-24 h-24 ml-4 border-none pointer-events-none align-middle"
                ></iframe>
              </p>
            </a>
          </li>
          <li>
            <a href={absUrl("/support")} className="group ui-meganav-media py-12">
              <p className="ui-meganav-media-heading">Support & FAQs</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div className="ui-meganav-content-spacer"></div>
  </div>
);

MeganavContentDevelopers.propTypes = {
  absUrl: T.func,
};

export default MeganavContentDevelopers;
