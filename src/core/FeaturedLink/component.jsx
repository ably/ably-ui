import React from "react";
import T from "prop-types";

const FeaturedLink = ({ url, textColor = "text-gui-default", textSize = "text-menu3", textWeight = "font-medium", children }) => (
  <a
    href={url}
    className={`${textSize} ${textColor} ${textWeight} flex items-center hover:text-gui-hover focus:text-gui-focus focus:outline-gui-focus py-8 block group`}
  >
    {children}
    <svg className="w-12 h-12 transform -rotate-90 align-top ui-icon-dark-grey group-hover:icon-gui-hover group-focus:icon-gui-focus ml-4">
      <use xlinkHref="#sprite-disclosure-arrow" />
    </svg>
  </a>
);

FeaturedLink.propTypes = {
  url: T.string,
  children: T.node,
  textSize: T.string,
  textColor: T.string,
  textWeight: T.string,
};

export default FeaturedLink;
