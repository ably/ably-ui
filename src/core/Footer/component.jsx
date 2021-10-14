import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";
import _absUrl from "../url-base";

export default function Footer({ paths, urlBase }) {
  const absUrl = (path) => _absUrl(path, urlBase);

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
              <a href={absUrl("/pub-sub-messaging")} className="ui-footer-menu-row-link">
                Pub/sub messaging
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/push-notifications")} className="ui-footer-menu-row-link">
                Push notifications
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/integrations")} className="ui-footer-menu-row-link">
                Third-party integrations
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/protocols")} className="ui-footer-menu-row-link">
                Multiple protocol messaging
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/hub")} className="ui-footer-menu-row-link">
                Streaming data sources
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Ably is for</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/edtech")} className="ui-footer-menu-row-link">
                EdTech
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/automotive-logistics-and-mobility")} className="ui-footer-menu-row-link">
                Automotive, Logistics, &amp; Mobility
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/b2b-platforms")} className="ui-footer-menu-row-link">
                B2B Platforms
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/healthcare")} className="ui-footer-menu-row-link">
                Healthcare
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/hub")} className="ui-footer-menu-row-link">
                Streaming data sources
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/ecommerce-and-retail")} className="ui-footer-menu-row-link">
                eCommerce &amp; Retail
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/sports-and-media")} className="ui-footer-menu-row-link">
                Sports &amp; Media
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/gaming")} className="ui-footer-menu-row-link">
                Gaming
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/iot-and-connected-devices")} className="ui-footer-menu-row-link">
                IoT &amp; Connected Devices
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Developers</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/documentation/quick-start-guide")} className="ui-footer-menu-row-link">
                Start in 5 minutes
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/documentation/")} className="ui-footer-menu-row-link">
                Documentation
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/tutorials")} className="ui-footer-menu-row-link">
                Tutorials
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href="https://changelog.ably.com/" className="ui-footer-menu-row-link">
                Changelog
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/support")} className="ui-footer-menu-row-link">
                Support &amp; FAQs
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/download")} className="ui-footer-menu-row-link">
                SDKs
              </a>
            </li>
            <li className="p-menu-row-snug flex items-center">
              <a className="pr-8 ui-footer-menu-row-link" href="https://status.ably.com/">
                System status
              </a>
              <iframe className="w-24 h-24 mt-4" src="https://status.ably.com/embed/icon" allowtransparency="true" frameBorder="0" scrolling="no"></iframe>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">WHY ABLY</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/customers")} className="ui-footer-menu-row-link">
                Customers
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/case-studies")} className="ui-footer-menu-row-link">
                Case Studies
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/four-pillars-of-dependability")} className="ui-footer-menu-row-link">
                Four Pillars of Dependability
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/compare")} className="ui-footer-menu-row-link">
                Compare our tech
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/protocols")} className="ui-footer-menu-row-link">
                Multi protocol support
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/integrations")} className="ui-footer-menu-row-link">
                Third-party integrations
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full sm:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">ABOUT</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/about")} className="ui-footer-menu-row-link">
                About Ably
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/pricing")} className="ui-footer-menu-row-link">
                Pricing
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/blog")} className="ui-footer-menu-row-link">
                Blog
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/careers")} className="ui-footer-menu-row-link">
                Careers
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/open-policy")} className="ui-footer-menu-row-link">
                Open protocol policy
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a
                href="https://www.notion.so/ably/Ably-Press-Center-551152f5be724d4495a7c2e29d9f51c7"
                rel="noopener noreferrer"
                target="_blank"
                className="ui-footer-menu-row-link"
              >
                Press & Media
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/contact")} className="ui-footer-menu-row-link">
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
          <div className="inline-flex">
            <a href={absUrl("/privacy")} className="pr-24 ui-footer-link">
              Cookies
            </a>
            <a href={absUrl("/legals")} className="pr-24 ui-footer-link">
              Legals
            </a>
            <a href={absUrl("/data-protection")} className="pr-24 ui-footer-link">
              Data Protection
            </a>
            <a href={absUrl("/privacy")} className="ui-footer-link">
              Privacy
            </a>
          </div>

          <div className="pt-32 flex items-center">
            <a className="h-24 pr-24 text-cool-black hover:text-icon-twitter" href="https://twitter.com/ablyrealtime">
              <Icon name="twitter" size="1.5rem" />
            </a>
            <a className="h-24 pr-24 text-cool-black hover:text-icon-linkedin" href="https://www.linkedin.com/company/ably-realtime">
              <Icon name="linkedin" size="1.5rem" />
            </a>
            <a className="h-24 pr-24 text-cool-black hover:text-icon-github" href="https://github.com/ably/">
              <Icon name="github" size="1.5rem" />
            </a>
            <div className="border-l border-mid-grey h-40"></div>
            <a
              className="flex flex-row pl-24 text-cool-black hover:text-icon-glassdoor"
              href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm"
            >
              <Icon name="glassdoor" size="1.5rem" />
            </a>
            <div className="pl-16 text-menu3 font-light">
              <strong className="block font-medium">We&apos;re hiring!</strong>
              <a href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm" className="ui-footer-link">
                Learn more
              </a>
              &nbsp;at Glassdoor
            </div>
          </div>
        </div>

        <div className="md:text-right col-span-full md:col-span-1 ml-8 inline-flex md:ml-auto">
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
  urlBase: T.string,
};
