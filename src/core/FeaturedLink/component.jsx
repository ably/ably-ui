import React from "react";
import T from "prop-types";

const FeaturedLink = ({ url, textSize = "text-menu3", iconColor = "ui-icon-cool-black", flush = false, children }) => (
  <a
    href={url}
    className={`${textSize} text-gui-default font-medium flex items-baseline hover:text-gui-hover focus:text-gui-focus focus:outline-gui-focus ${
      flush ? "" : "py-8"
    } block group`}
  >
    {children}
    <svg className={`w-12 h-12 transform -rotate-90 align-top ${iconColor} group-hover:icon-gui-hover group-focus:icon-gui-focus ml-4`}>
      <use xlinkHref="#sprite-disclosure-arrow" />
    </svg>
  </a>
);

FeaturedLink.propTypes = {
  url: T.string,
  children: T.node,
  textSize: T.string,
  iconColor: T.string,
  flush: T.bool,
};

export default FeaturedLink;
