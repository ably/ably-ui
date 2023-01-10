import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";
import _absUrl from "../url-base";

export default function Footer({ paths, urlBase }) {
  const absUrl = (path) => _absUrl(path, urlBase);

  return (
    <footer className="bg-light-grey font-sans antialiased" data-id="footer">
      <div className="max-w-screen-xl mx-auto py-32 sm:py-40 md:py-64 ui-grid-gap ui-grid-px grid grid-cols-6">
        <div className="col-span-full md:col-span-2">
          <div className="flex flex-row p-menu-row-snug">
            <img className="mr-24 -mt-16" src={paths.ablyStack} alt="Ably homepage" />
            <h2 className="text-overline2 col-span-full font-medium uppercase tracking-widen-0.1">The Ably Platform</h2>
          </div>
          <div className="md:col-span-4 md:w-3/4 xs:w-3/5 w-full">
            <p className="text-p3 py-16 font-medium p-menu-row-snug">
              Easily power any realtime experience in your application via a simple API that handles everything realtime.
            </p>
          </div>

          <ul className="grid grid-cols-1">
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

        <div className="col-span-full xs:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Ably is for</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/asset-tracking")} className="ui-footer-menu-row-link">
                Ably Asset Tracking
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/solutions/extend-kafka-to-the-edge")} className="ui-footer-menu-row-link">
                Extend Kafka to the edge
              </a>
            </li>
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

        <div className="col-span-full xs:col-span-3 md:col-span-1">
          <h2 className="ui-footer-col-title">Developers</h2>
          <ul>
            <li className="p-menu-row-snug">
              <a href={absUrl("/docs/quick-start-guide")} className="ui-footer-menu-row-link">
                Start in 5 minutes
              </a>
            </li>
            <li className="p-menu-row-snug">
              <a href={absUrl("/docs/")} className="ui-footer-menu-row-link">
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
            <li className="p-menu-row-snug flex items-center -mt-4">
              <a className="pr-8 ui-footer-menu-row-link" href="https://status.ably.com/">
                System status
              </a>
              <iframe
                className="w-20 h-20 mb-2"
                src="https://status.ably.com/embed/icon"
                allowtransparency="true"
                frameBorder="0"
                scrolling="no"
                title="System Status"
              ></iframe>
            </li>
          </ul>
        </div>

        <div className="col-span-full xs:col-span-3 md:col-span-1">
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

        <div className="col-span-full xs:col-span-3 md:col-span-1">
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
              <a href={absUrl("/press-center")} className="ui-footer-menu-row-link">
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
        <hr className="border-t border-mid-grey my-0" />
      </div>
      {/* Twitter + Glassdoor SM & above + Glassdoor XS  + Badges*/}
      <div className="max-w-screen-xl mx-auto py-16 grid ui-grid-gap ui-grid-px sm:grid-cols-2">
        <div className="md:flex md:items-center">
          <div className="flex flex-col md:flex-row flex-auto ml-8 sm:col-span-1 md:col-span-2">
            <div className="">
              <div className="flex pb-24">
                <a className="h-24 pr-24 text-cool-black hover:text-icon-twitter" href="https://twitter.com/ablyrealtime" title="Ably on Twitter">
                  <Icon name="twitter" size="1.5rem" />
                </a>
                <a
                  className="h-24 pr-24 text-cool-black hover:text-icon-linkedin"
                  href="https://www.linkedin.com/company/ably-realtime"
                  title="Ably on LinkedIn"
                >
                  <Icon name="linkedin" size="1.5rem" />
                </a>
                <a className="h-24 pr-24 text-cool-black hover:text-icon-github" href="https://github.com/ably/" title="Ably on Github">
                  <Icon name="github" size="1.5rem" />
                </a>
                <a className="h-24 pr-24 text-cool-black hover:text-icon-discord" href="https://discord.gg/jwBPhEZ9g5" title="Ably on Discord">
                  <Icon name="discord" size="1.5rem" />
                </a>
              </div>
            </div>
            {/* GLASSDOOR on SM and Above */}
            <div className="xs:hidden sm:block ui-footer-glassdoor">
              <div className="flex sm:pt-24 md:pt-0 sm:border-t sm:border-l-0 md:border-t-0 md:border-l sm:border-mid-grey sm:w-3/4 md:w-full md:pl-24">
                <a
                  href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm"
                  className="h-24 text-cool-black hover:text-icon-glassdoor"
                  title="Ably reviews on glassdoor"
                >
                  <Icon name="glassdoor" size="1.5rem" />
                </a>
                <div className="pl-16 text-menu3 font-light">
                  <strong className="block font-medium">We&apos;re hiring!</strong>
                  <a href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm" className="ui-footer-link">
                    Learn more at Glassdoor
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* GlassDoor on XS ONLY */}
          <div className="xs:block sm:hidden">
            <div className="border-t border-mid-grey w-full"></div>
            <div className="flex py-24">
              <a
                className="h-24 pr-16 text-cool-black hover:text-icon-glassdoor"
                href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm"
                title="Ably reviews on glassdoor"
              >
                <Icon name="glassdoor" size="1.5rem" />
              </a>
              <div className="text-menu3 font-light">
                <strong className="block font-medium">We&apos;re hiring!</strong>
                <a href="https://www.glassdoor.co.uk/Overview/Working-at-Ably-EI_IE2184188.11,15.htm" className="ui-footer-link">
                  Learn more at Glassdoor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full sm:col-span-1 inline-flex sm:ml-auto sm:items-center">
          <img className="mr-24 h-80" src={paths.highestUserAdoption} alt="Highest User Adoption 2022" />
          <img className="mr-24 h-80" src={paths.usersLoveUs} alt="Users Love Us" />
          <img className="mr-24 h-80" src={paths.highestPerformer} alt="High Performer 2022" />
        </div>
      </div>

      <div className="max-w-screen-xl ui-grid-px mx-auto">
        <hr className="border-t border-mid-grey my-0" />
      </div>
      <div className="max-w-screen-xl mx-auto py-24 sm:py-40 md:py-32 md:grid md:grid-cols-2 ui-grid-gap ui-grid-px">
        <div className="flex ml-8 col-span-full sm:col-span-1 md:pb-16 items-center ui-footer-bottom-links">
          <div className="flex">
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
        </div>
        <div className="xs:grid xs:grid-cols-2 sm:grid-cols-4 xs:pl-16 sm:pl-8 md:justify-items-end">
          <div className="flex mr-24">
            <Icon name="icon-gui-tick" color="text-active-orange" size="1.5rem" additionalCSS="bg-white rounded-full mr-12 ui-footer-tick-icon" />
            <div>
              <p className="ui-footer-compliance-text font-medium whitespace-nowrap">SOC 2 Type 2</p>
              <p className="ui-footer-compliance-text font-light mb-24">Certified</p>
            </div>
          </div>
          <div className="flex mr-24 md:col-start-2">
            <Icon name="icon-gui-tick" color="text-active-orange" size="1.5rem" additionalCSS="bg-white rounded-full mr-12 ui-footer-tick-icon" />
            <div>
              <p className="ui-footer-compliance-text font-medium whitespace-nowrap">HIPAA</p>
              <p className="ui-footer-compliance-text font-light mb-24">Compliant</p>
            </div>
          </div>
          <div className="flex mr-24 md:col-start-3">
            <Icon name="icon-gui-tick" color="text-active-orange" size="1.5rem" additionalCSS="bg-white rounded-full mr-12  ui-footer-tick-icon" />
            <div>
              <p className="ui-footer-compliance-text font-medium whitespace-nowrap">EU GDPR</p>
              <p className="ui-footer-compliance-text font-light mb-24">Certified</p>
            </div>
          </div>
          <div className="flex mr-24 md:col-start-4">
            <Icon name="icon-gui-tick" color="text-active-orange" size="1.5rem" additionalCSS="bg-white rounded-full mr-12  ui-footer-tick-icon" />
            <div>
              <p className="ui-footer-compliance-text font-medium whitespace-nowrap">256-bit AES</p>
              <p className="ui-footer-compliance-text font-light mb-24">Encryption</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  paths: T.shape({
    ablyStack: T.string,
    highestPerformer: T.string,
    highestUserAdoption: T.string,
    usersLoveUs: T.string,
  }),
  urlBase: T.string,
};
