import React from "react";
import T from "prop-types";

import "./component.css";

export default function Footer({ paths }) {
  return (
    <section className="ui-footer font-light pt-32" data-id="footer">
      <div className="ui-footer-content ui-grid-gap sm:grid-cols-2 md:grid-cols-6">
        <div className="sm:col-span-full md:col-span-2">
          <div className="flex flex-row p-menu-row-snug">
            <img className="mr-24 -mt-16" src={paths.ablyStack} alt="Ably homepage" />
            <h5 className="text-overline2 col-span-full font-bold uppercase">The Ably Platform</h5>
          </div>

          <div className="p-3 py-16 font-medium p-menu-row-snug">
            Easily power any realtime experience in your application via a simple API that handles everything realtime.
          </div>

          <ul className="grid grid-cols-2 lg:grid-cols-1">
            <li className="p-menu-row-snug">
              <a href="/pub-sub-messaging">Pub/sub messaging</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/push-notifications">Push notifications</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/integrations">Third-party integrations</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/protocols">Multiple protocol messaging</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/hub">Streaming data sources</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-overline2  p-menu-row-snug font-bold uppercase">Ably is for</h5>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/solutions/edtech">EdTech</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/automotive-logistics-and-mobility">Automotive, Logistics, &amp; Mobility</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/b2b-platforms">B2B Platforms</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/healthcare">Healthcare</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/hub">Streaming data sources</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/ecommerce-and-retail">eCommerce &amp; Retail</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/sports-and-media">Sports &amp; Media</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/gaming">Gaming</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/iot-and-connected-devices">IoT &amp; Connected Devices</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-overline2 p-menu-row-snug font-bold uppercase">Developers</h5>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/documentation/quick-start-guide">Start in 5 minutes</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/documentation/">Documentation</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/tutorials">Tutorials</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="https://changelog.ably.com/">Changelog</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/support">Support &amp; FAQs</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/download">SDKs</a>
            </li>
            <li className="p-menu-row-snug flex">
              <a className="flex-none pr-8" href="https://status.ably.com/">
                System status
              </a>
              <iframe className="h-24 mt-4" src="https://status.ably.io/embed/icon" allowtransparency="true" frameBorder="0" scrolling="no"></iframe>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-overline2 p-menu-row-snug font-bold uppercase">WHY ABLY</h5>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/customers">Customer Stories</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/four-pillars-of-dependability">Four Pillars of Dependability</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/compare">Compare our tech</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/protocols">Multi protocol support</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/integrations">Third-party integrations</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-overline2 p-menu-row-snug font-bold uppercase">ABOUT</h5>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/about">About Ably</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/pricing">Pricing</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/blog">Blog</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/enterprise">Enterprise</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/careers">Careers</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/open-policy">Open protocol policy</a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2 mx-24" />

      <div className="ui-footer-content ui-grid-gap sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col flex-auto pb-32">
          <div className="ui-footer-legals text-gui-default">
            <a href="/privacy" className="pr-24">
              Cookies
            </a>
            <a href="/legals" className="pr-24">
              Legals
            </a>
            <a href="/data-protection">Data Protection</a>
          </div>

          <div className="pt-32 flex align-middle">
            <a className="pr-24 text-cool-black hover:text-icon-twitter" href="https://twitter.com/ablyrealtime">
              <svg className="w-24 h-24" id="ui-footer-icon-twitter">
                <use xlinkHref="#sprite-twitter"></use>
              </svg>
            </a>
            <a className="pr-24 text-cool-black hover:text-icon-linkedin" href="https://www.linkedin.com/company/ably-realtime">
              <svg className="w-24 h-24" id="ui-footer-icon-linkedin">
                <use xlinkHref="#sprite-linkedin"></use>
              </svg>
            </a>
            <a className="pr-24 text-cool-black hover:text-icon-github" href="https://github.com/ably/">
              <svg className="w-24 h-24" id="ui-footer-icon-github">
                <use xlinkHref="#sprite-github"></use>
              </svg>
            </a>
            <a
              className="flex flex-row border-l-2 pl-24 text-cool-black hover:text-icon-glassdoor"
              href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm"
            >
              <svg className="w-24 h-24" id="ui-footer-icon-glassdoor">
                <use xlinkHref="#sprite-glassdoor"></use>
              </svg>
            </a>
            <div className="text-menu3 pl-16 leading-5 -mt-8">
              <strong className="block">Were hiring! </strong>
              <a href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm" className="text-gui-default">
                learn
              </a>
              &nbsp;more at Glass Door
            </div>
          </div>
        </div>

        <div className="md:text-right sm:col-span-full md:col-span-1">
          <img className="mr-24 w-96 h-96" src={paths.rocketList} alt="Rocket List 2021" />
          <img className="mr-24 w-96 h-96" src={paths.flexibleCompanies} alt="Flexible Companies 2021" />
        </div>
      </div>
    </section>
  );
}

Footer.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    rocketList: T.string,
    flexibleCompanies: T.string,
  }),
};
