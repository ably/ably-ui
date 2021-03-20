import React from "react";
import T from "prop-types";

import "./component.css";

export default function Footer({ paths }) {
  return (
    <footer className="bg-light-grey font-sans antialiased" data-id="footer">
      <div className="max-w-screen-xl mx-auto py-32 sm:py-40 lg:py-64 ui-grid-gap ui-grid-px grid grid-cols-6">
        <div className="col-span-full md:col-span-2">
          <div className="flex flex-row p-menu-row-snug">
            <img className="mr-24 -mt-16" src={paths.ablyStack} alt="Ably homepage" />
            <h2 className="text-overline2 col-span-full font-medium uppercase tracking-widen-0.1">The Ably Platform</h2>
          </div>

          <div className="grid grid-cols-4">
            <p className="text-p3 py-16 font-medium p-menu-row-snug col-span-3">
              Easily power any realtime experience in your application via a simple API that handles everything realtime.
            </p>
          </div>

          <ul className="grid gap-x-8 sm:gap-x-16 md:gap-x-24 xl:gap-x-32 sm:grid-cols-2 md:grid-cols-1">
            <li className="p-menu-row-snug">
              <a href="/pub-sub-messaging" className="ui-footer-menu-row-link">
                Pub/sub messaging
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/push-notifications" className="ui-footer-menu-row-link">
                Push notifications
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/integrations" className="ui-footer-menu-row-link">
                Third-party integrations
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/protocols" className="ui-footer-menu-row-link">
                Multiple protocol messaging
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/hub" className="ui-footer-menu-row-link">
                Streaming data sources
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Ably is for</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/solutions/edtech" className="ui-footer-menu-row-link">
                EdTech
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/automotive-logistics-and-mobility" className="ui-footer-menu-row-link">
                Automotive, Logistics, &amp; Mobility
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/b2b-platforms" className="ui-footer-menu-row-link">
                B2B Platforms
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/healthcare" className="ui-footer-menu-row-link">
                Healthcare
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/hub" className="ui-footer-menu-row-link">
                Streaming data sources
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/ecommerce-and-retail" className="ui-footer-menu-row-link">
                eCommerce &amp; Retail
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/sports-and-media" className="ui-footer-menu-row-link">
                Sports &amp; Media
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/gaming" className="ui-footer-menu-row-link">
                Gaming
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/solutions/iot-and-connected-devices" className="ui-footer-menu-row-link">
                IoT &amp; Connected Devices
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Developers</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/documentation/quick-start-guide" className="ui-footer-menu-row-link">
                Start in 5 minutes
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/documentation/" className="ui-footer-menu-row-link">
                Documentation
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/tutorials" className="ui-footer-menu-row-link">
                Tutorials
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="https://changelog.ably.com/" className="ui-footer-menu-row-link">
                Changelog
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/support" className="ui-footer-menu-row-link">
                Support &amp; FAQs
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/download" className="ui-footer-menu-row-link">
                SDKs
              </a>
            </li>
            <li className="p-menu-row-snug flex items-center">
              <a className="pr-8 ui-footer-menu-row-link" href="https://status.ably.com/">
                System status
              </a>
              <iframe className="w-24 h-24 mt-4" src="https://status.ably.io/embed/icon" allowtransparency="true" frameBorder="0" scrolling="no"></iframe>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">WHY ABLY</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/customers" className="ui-footer-menu-row-link">
                Customers
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/four-pillars-of-dependability" className="ui-footer-menu-row-link">
                Four Pillars of Dependability
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/compare" className="ui-footer-menu-row-link">
                Compare our tech
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/protocols" className="ui-footer-menu-row-link">
                Multi protocol support
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/integrations" className="ui-footer-menu-row-link">
                Third-party integrations
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">ABOUT</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href="/about" className="ui-footer-menu-row-link">
                About Ably
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/pricing" className="ui-footer-menu-row-link">
                Pricing
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/blog" className="ui-footer-menu-row-link">
                Blog
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/careers" className="ui-footer-menu-row-link">
                Careers
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/open-policy" className="ui-footer-menu-row-link">
                Open protocol policy
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="/contact" className="ui-footer-menu-row-link">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-xl ui-grid-px mx-auto">
        <hr className="border-t border-mid-grey" />
      </div>

      <div className="max-w-screen-xl mx-auto py-24 md:py-40 lg:py-32 grid ui-grid-gap ui-grid-px grid-cols-2">
        <div className="flex flex-col flex-auto pb-40 ml-8 col-span-full md:col-span-1">
          <div className="ui-footer-legals">
            <a href="/privacy" className="pr-24 ui-footer-link">
              Cookies
            </a>
            <a href="/legals" className="pr-24 ui-footer-link">
              Legals
            </a>
            <a href="/data-protection" className="ui-footer-link">
              Data Protection
            </a>
          </div>

          <div className="pt-32 flex items-center">
            <a className="h-24 pr-24 text-cool-black hover:text-icon-twitter" href="https://twitter.com/ablyrealtime">
              <svg className="w-24 h-24">
                <use xlinkHref="#sprite-twitter"></use>
              </svg>
            </a>
            <a className="h-24 pr-24 text-cool-black hover:text-icon-linkedin" href="https://www.linkedin.com/company/ably-realtime">
              <svg className="w-24 h-24">
                <use xlinkHref="#sprite-linkedin"></use>
              </svg>
            </a>
            <a className="h-24 pr-24 text-cool-black hover:text-icon-github" href="https://github.com/ably/">
              <svg className="w-24 h-24">
                <use xlinkHref="#sprite-github"></use>
              </svg>
            </a>
            <div className="border-l border-mid-grey h-40"></div>
            <a
              className="flex flex-row pl-24 text-cool-black hover:text-icon-glassdoor"
              href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm"
            >
              <svg className="w-24 h-24">
                <use xlinkHref="#sprite-glassdoor"></use>
              </svg>
            </a>
            <div className="pl-16 text-menu3 font-light">
              <strong className="block font-medium">We&apos;re hiring!</strong>
              <a href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm" className="ui-footer-link">
                Learn more
              </a>
              &nbsp;at Glass Door
            </div>
          </div>
        </div>

        <div className="md:text-right col-span-full md:col-span-1 ml-8">
          <img className="mr-24 w-96 h-96" src={paths.rocketList} alt="Rocket List 2021" />
          <img className="w-96 h-96" src={paths.flexibleCompanies} alt="Flexible Companies 2021" />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    rocketList: T.string,
    flexibleCompanies: T.string,
  }),
};
