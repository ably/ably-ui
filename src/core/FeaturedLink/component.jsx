import React from "react";
import T from "prop-types";

const FeaturedLink = ({ url, children }) => (
  <a href={url} className="text-menu3 font-medium text-gui-default hover:text-gui-hover focus:text-gui-focus focus:outline-gui-focus py-8 block group">
    {children}
    <svg className="w-12 h-12 transform -rotate-90 align-top ui-icon-dark-grey group-hover:icon-gui-hover group-focus:icon-gui-focus ml-4">
      <use xlinkHref="#sprite-disclosure-arrow" />
    </svg>
  </a>
);

FeaturedLink.propTypes = {
  url: T.string,
  children: T.node,
};

export default FeaturedLink;
