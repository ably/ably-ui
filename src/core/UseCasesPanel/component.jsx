import React from "react";

const UseCasesPanel = () => (
  <div className="ui-meganav-panel md:grid-cols-2 gap-y-0 md:gap-y-32">
    <div>
      <p className="ui-meganav-overline">By industry use case</p>
      <ul>
        <li>
          <a href="/solutions/edtech" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">EdTech</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/solutions/automotive-logistics-and-mobility" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Automotive, Logistics, & Mobility</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/solutions/b2b-platforms" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">B2B Platforms</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/solutions/healthcare" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Healthcare</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <ul className="md:mt-40">
        <li>
          <a href="/solutions/iot-and-connected-devices" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">eCommerce & Retail</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/industry/sports-media-and-audience-engagement" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Sports & Media</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/industry/gaming" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">Gaming</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
        <li>
          <a href="/industry/ecommerce-and-retail" className="ui-meganav-media group">
            <p className="ui-meganav-media-heading">IoT & Connected Devices</p>
            <p className="ui-meganav-media-copy">Some copy will come here soon and it won’t be longer than 80 characters. 80 now.</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default UseCasesPanel;
