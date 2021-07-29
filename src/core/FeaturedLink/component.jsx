import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

const FeaturedLink = ({ url, textSize = "text-menu3", iconColor = "text-cool-black", flush = false, children }) => (
  <a
    href={url}
    className={`ui-featured-link ${textSize} ${flush ? "" : "py-8"} `}
    style={{ "--featured-link-icon-size": `var(${textSize.replace("text", "--fs")})` }}
  >
    {children}
    <Icon name="icon-gui-disclosure-arrow" size={`calc(var(--featured-link-icon-size) * 1.43)`} color={iconColor} additionalCSS="ui-featured-link-icon" />
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
