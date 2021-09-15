import React, { useEffect } from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";
import _absUrl from "../url-base";

import toggleChatWidget from "./component.js";

export default function ContactFooter({ urlBase }) {
  useEffect(() => toggleChatWidget(), []);
  const absUrl = (path) => _absUrl(path, urlBase);

  return (
    <div className="ui-contact-footer font-sans antialiased" data-id="contact-footer">
      <div className="w-full bp-lg max-w-screen-xl mx-auto py-64 grid grid-cols-1 md:grid-cols-3 ui-grid-gap ui-grid-px">
        <div className="ui-contact-footer-box">
          <Icon name="icon-display-live-chat" size="3rem" additionalCSS="block mb-16" />
          <div>
            <div className="text-h3 mb-24">Live Chat</div>
            <p className="text-p1 font-light">Reach out team of experts over chat powered by Ably.</p>
          </div>
          <button
            type="button"
            className="ui-btn-secondary self-start mt-16"
            disabled
            data-id="open-chat-widget"
            data-enabled-label="Start live chat"
            data-disabled-label="Live chat unavailable"
          >
            Live chat unavailable
          </button>
        </div>

        <div className="ui-contact-footer-box">
          <Icon name="icon-display-call-mobile" size="3rem" additionalCSS="block mb-16" />
          <div className="flex-grow">
            <div className="text-h3 mb-24">Call us</div>
            <p className="text-p1 font-light">
              <span className="block">
                <strong className="text-p1 font-medium">+1 877 434 5287</strong> (USA, toll free)
              </span>
              <span className="block">
                <strong className="text-p1 font-medium">+44 20 3318 4689</strong> (UK)
              </span>
            </p>
          </div>
        </div>

        <div className="ui-contact-footer-box">
          <Icon name="icon-display-tech-account-comms" size="3rem" additionalCSS="block mb-16" />
          <div>
            <div className="text-h3 mb-24">Technical and account support</div>
            <p className="text-p1 font-light">We&apos;re standing by to help with any questions or code.</p>
          </div>
          <a className="ui-btn-secondary self-start p-btn mt-16" href={absUrl("/support")}>
            Get support now
          </a>
        </div>
      </div>
    </div>
  );
}

ContactFooter.propTypes = {
  urlBase: T.string,
};
