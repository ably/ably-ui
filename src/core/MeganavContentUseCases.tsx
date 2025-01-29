import React from "react";

import Icon from "./Icon";
import { AbsUrl } from "./LegacyMeganav";

const MeganavContentUseCases = ({ absUrl }: { absUrl: AbsUrl }) => (
  <div className="flex max-w-screen-xl mx-auto">
    <div className="ui-meganav-content-spacer bg-extra-light-grey"></div>
    <section className="grid grid-cols-12 ui-grid-gap-x w-full">
      <div className="col-span-full md:col-span-4 py-24 lg:py-32 px-24 sm:px-32 md:pl-0 md:pr-24 bg-extra-light-grey">
        <h3
          className="ui-meganav-overline"
          id="meganav-use-cases-panel-use-cases"
        >
          Solutions
        </h3>
        <ul aria-labelledby="meganav-use-cases-panel-industry-use-cases">
          <li>
            <a
              href={absUrl("/chat")}
              className="ui-meganav-media-with-image group"
            >
              <Icon name="icon-display-chat-stack-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Live Chat</p>
                <p className="ui-meganav-media-copy">
                  Deliver highly reliable chat experiences at scale.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/multiplayer-collaboration")}
              className="ui-meganav-media-with-image group"
            >
              <Icon name="icon-display-multi-user-spaces-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">
                  Multiplayer Collaboration
                </p>
                <p className="ui-meganav-media-copy">
                  Bring collaborative multiplayer experiences to your users.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/data-broadcast")}
              className="ui-meganav-media-with-image group"
            >
              <Icon name="icon-display-data-broadcast-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Data Broadcast</p>
                <p className="ui-meganav-media-copy">
                  Broadcast realtime event data to millions of devices around
                  the globe.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/data-synchronization")}
              className="ui-meganav-media-with-image group"
            >
              <Icon
                name="icon-display-data-synchronization-col"
                size="2.5rem"
              />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Data Synchronization</p>
                <p className="ui-meganav-media-copy">
                  Keep your frontend and backend in realtime sync, at global
                  scale.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/push-notifications")}
              className="ui-meganav-media-with-image group"
            >
              <Icon name="icon-display-push-notifications-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Notifications</p>
                <p className="ui-meganav-media-copy">
                  Deliver cross-platform push notifications with a simple
                  unified API.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/asset-tracking")}
              className="ui-meganav-media-with-image group"
            >
              <Icon name="icon-display-asset-tracking-col" size="2.5rem" />
              <div className="flex flex-col justify-center">
                <p className="ui-meganav-media-heading">Asset Tracking</p>
                <p className="ui-meganav-media-copy">
                  Track assets in realtime with a solution optimised for last
                  mile logistics.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-4 pt-24 pb-0 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <h3
          className="ui-meganav-overline"
          id="meganav-use-cases-panel-industry"
        >
          Industry
        </h3>
        <ul aria-labelledby="meganav-use-cases-panel-industry">
          <li>
            <a
              href={absUrl("/solutions/sports-and-media")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">
                Sports, Media & Fan Engagement
              </p>
              <p className="ui-meganav-media-copy">
                Deliver engaging global realtime experiences.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/b2b-platforms")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">B2B Platforms</p>
              <p className="ui-meganav-media-copy">
                Empower your customers with realtime solutions.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/fintech")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">FinTech</p>
              <p className="ui-meganav-media-copy">
                Deliver personalised financial data in realtime.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/edtech")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">EdTech</p>
              <p className="ui-meganav-media-copy">
                Deliver interactive learning experiences.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/healthcare")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">Healthcare (HIPAA)</p>
              <p className="ui-meganav-media-copy">
                Provide trustworthy, HIPAA-compliant realtime apps.
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-4 pt-0 pb-24 md:py-24 lg:py-32 px-24 sm:px-32 md:px-0 bg-white">
        <ul
          aria-labelledby="meganav-use-cases-panel-solutions"
          className="mt-0 md:mt-40"
        >
          <li>
            <a
              href={absUrl("/solutions/gaming")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">Gaming</p>
              <p className="ui-meganav-media-copy">
                Power ultra fast and reliable gaming experiences.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/automotive-logistics-and-mobility")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">
                Automotive, Logistics, & Mobility
              </p>
              <p className="ui-meganav-media-copy">
                Power diagnostics, order tracking and more.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/ecommerce-and-retail")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">eCommerce & Retail</p>
              <p className="ui-meganav-media-copy">
                Enrich customer experiences with realtime updates.
              </p>
            </a>
          </li>
          <li>
            <a
              href={absUrl("/solutions/iot-and-connected-devices")}
              className="ui-meganav-media group"
            >
              <p className="ui-meganav-media-heading">
                IoT & Connected Devices
              </p>
              <p className="ui-meganav-media-copy">
                Monitor and control global IoT deployments in realtime.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div className="ui-meganav-content-spacer"></div>
  </div>
);

export default MeganavContentUseCases;
