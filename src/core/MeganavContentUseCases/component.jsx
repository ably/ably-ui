import React from "react";
import T from "prop-types";

const MeganavContentUseCases = ({ absUrl }) => (
  <section className="ui-meganav-content ui-grid-gap md:grid-cols-2 gap-y-0 md:gap-y-32">
    <div>
      <h3 className="ui-meganav-overline" id="meganav-use-cases-panel-industry-use-cases">
        By industry use case
      </h3>
      <ul aria-labelledby="meganav-use-cases-panel-industry-use-cases">
        <li>
          <a href={absUrl("/solutions/edtech")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">EdTech</p>
            <p className="ui-meganav-media-copy">Deliver interactive learning experiences like multi-user classrooms with chat.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/automotive-logistics-and-mobility")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Automotive, Logistics, & Mobility</p>
            <p className="ui-meganav-media-copy">Power asset tracking, live transit updates, race-critical diagnostics, and more.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/b2b-platforms")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">B2B Platforms</p>
            <p className="ui-meganav-media-copy">Empower customers with realtime technology that gives them a competitive edge.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/healthcare")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Healthcare</p>
            <p className="ui-meganav-media-copy">Provide HIPAA-compliant realtime apps healthcare professionals can depend on.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/virtual-events")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Virtual Events</p>
            <p className="ui-meganav-media-copy">Power engaging virtual events with interactive realtime features.</p>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <ul className="md:mt-40">
        <li>
          <a href={absUrl("/solutions/iot-and-connected-devices")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">IoT & Connected Devices</p>
            <p className="ui-meganav-media-copy">Monitor and control global IoT deployments of any kind in realtime.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/sports-and-media")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Sports & Media</p>
            <p className="ui-meganav-media-copy">Deliver global realtime experiences to keep fans informed, engaged, entertained.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/gaming")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Gaming</p>
            <p className="ui-meganav-media-copy">Power interactive gaming experiences that are wicked fast and utterly reliable.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/solutions/ecommerce-and-retail")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">eCommerce & Retail</p>
            <p className="ui-meganav-media-copy">Enable realtime pricing, inventory, and transactions to enrich user experiences.</p>
          </a>
        </li>
        <li>
          <a href={absUrl("/asset-tracking")} className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Asset Tracking</p>
            <p className="ui-meganav-media-copy">
              Track assets in realtime with a solution optimized for last mile logistics, food delivery applications, and urban mobility services.
            </p>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

MeganavContentUseCases.propTypes = {
  absUrl: T.func,
};

export default MeganavContentUseCases;
