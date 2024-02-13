import React from "react";
import T from "prop-types";

import Icon from "../Icon/component.jsx";

// When generating links with target=_blank, we only add `noreferrer` to
// links that don't start with `/`, so we can continue tracking referrers
// across our own domains
const buildTargetAndRel = (url, newWindow) => {
  const props = {};

  if (newWindow) {
    props.target = "_blank";

    if (url.startsWith("/") && !url.startsWith("//")) {
      props.rel = "noopener";
    } else {
      props.rel = "noopenner noreferrer";
    }
  }

  return props;
};

const FeaturedLink = ({
  url,
  textSize = "text-p2",
  iconColor = "text-cool-black",
  flush = false,
  reverse = false,
  additionalCSS = "",
  newWindow = false,
  onClick = undefined,
  children,
}) => {
  const targetAndRel = buildTargetAndRel(url, newWindow);

  return (
    <a
      href={url}
      className={`font-sans font-bold block text-gui-default hover:text-gui-hover focus:text-gui-focus focus:outline-gui-focus group ui-${textSize} ${
        flush ? "" : "py-8"
      } ${additionalCSS}`}
      style={{ "--featured-link-icon-size": `var(${textSize.replace("text", "--fs")})` }}
      {...targetAndRel}
      onClick={onClick}
    >
      {reverse ? (
        <>
          <Icon
            name="icon-gui-link-arrow"
            size={`calc(var(--featured-link-icon-size) * 1.25)`}
            color={iconColor}
            additionalCSS="align-middle mr-8 relative -top-1 -right-4 transition-all group-hover:right-0 transform rotate-180"
          />
          {children}
        </>
      ) : (
        <>
          {children}
          <Icon
            name="icon-gui-link-arrow"
            size={`calc(var(--featured-link-icon-size) * 1.25)`}
            color={iconColor}
            additionalCSS="align-middle ml-8 relative -top-1 -left-4 transition-all group-hover:left-0"
          />
        </>
      )}
    </a>
  );
};

FeaturedLink.propTypes = {
  url: T.string,
  children: T.node,
  textSize: T.string,
  iconColor: T.string,
  flush: T.bool,
  reverse: T.bool,
  additionalCSS: T.string,
  newWindow: T.bool,
  onClick: T.func,
};

export default FeaturedLink;
