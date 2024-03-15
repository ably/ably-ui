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
  /**
   * Passed to the href in the anchor.
   */
  url: T.string,
  /**
   * Text size of the link.
   */
  children: T.node,
  /**
   * Passed to the href in the anchor.
   */
  textSize: T.string,
  /**
   * Color of the icon. Depends on icons being drawn with strokes and the currentColor
   * property being applied to all svgs. Use tailwind color classes (i.e.
   * text-white).
   */
  iconColor: T.string,
  /**
   * If true, removes the default vertical padding.
   */
  flush: T.bool,
  /**
   * If true, the arrow is positioned on the left side of the text.
   */
  reverse: T.bool,
  /**
   * Additional classes to be added to the link.
   */
  additionalCSS: T.string,
  newWindow: T.bool,
  onClick: T.func,
};

export default FeaturedLink;
