import React from "react";
import T from "prop-types";

import FeaturedLink from "../FeaturedLink/component.jsx";

const MeganavSearchSuggestions = ({ absUrl, displaySupportLink }) => {
  return (
    <>
      <p className="ui-text-overline2 text-cool-black py-12">Popular pages</p>

      <div className="flex justify-between items-center overflow-hidden">
        <ul className="flex transition-transform">
          <li className="py-12 pr-8 flex-shrink-0">
            <a href={absUrl("/docs/how-ably-works")} className="ui-text-p2">
              How does Ably work?
            </a>
          </li>
          <li className="py-12 px-8 flex-shrink-0">
            <a href={absUrl("/docs/quick-start-guide")} className="ui-text-p2">
              Quickstart guide
            </a>
          </li>
          <li className="py-12 px-8 flex-shrink-0">
            <a href={absUrl("/docs/core-features/pubsub")} className="ui-text-p2">
              Publish/Subscribe Messaging
            </a>
          </li>
          <li className="py-12 pl-8 flex-shrink-0">
            <a href={absUrl("/platform")} className="ui-text-p2">
              Platform
            </a>
          </li>
        </ul>
        {displaySupportLink ? (
          <FeaturedLink url={absUrl("/support")} textSize="text-p2">
            Support
          </FeaturedLink>
        ) : null}
      </div>
    </>
  );
};

MeganavSearchSuggestions.propTypes = {
  absUrl: T.func,
  displaySupportLink: T.bool,
};

export default MeganavSearchSuggestions;
