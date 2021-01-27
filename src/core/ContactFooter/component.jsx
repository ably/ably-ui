import React, { useEffect } from "react";

import "./component.css";
import toggleChatWidget from "./component.js";

export default function ContactFooter() {
  const listItemClasses = "p-24 bg-white flex flex-col justify-between";
  const svgicon = (id) => (
    <svg className="w-48 h-48 block mb-16">
      <use xlinkHref={"#" + id}></use>
    </svg>
  );

  useEffect(() => toggleChatWidget(), []);

  return (
    <div className="ui-contact-footer font-sans" data-id="contact-footer">
      <div className="w-full bp-lg max-w-screen-xl mx-auto py-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ui-grid-gap ui-grid-px">
        <div className={listItemClasses}>
          {svgicon("sprite-live-chat")}
          <div>
            <div className="text-h3 mb-24">Live Chat</div>
            <p className="text-p1 font-light">Reach out team of experts over chat powered by Ably.</p>
          </div>
          <button type="button" className="ui-btn-secondary self-start p-btn-small mt-16" data-id="open-chat-widget">
            Start a live chat
          </button>
        </div>

        <div className={listItemClasses}>
          {svgicon("sprite-call-mobile")}
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

        <div className={listItemClasses}>
          {svgicon("sprite-tech-account-comms")}
          <div>
            <div className="text-h3 mb-24">Technical and account support</div>
            <p className="text-p1 font-light">We're standing by to help with any questions or code.</p>
          </div>
          <a className="ui-btn-secondary self-start p-btn-small mt-16" href="https://google.com">
            Get support now
          </a>
        </div>
      </div>
    </div>
  );
}
