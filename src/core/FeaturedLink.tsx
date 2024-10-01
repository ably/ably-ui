import React, { CSSProperties, ReactNode } from "react";

import Icon from "./Icon";
import { ColorClass } from "./styles/colors/types";

type FeaturedLinkProps = {
  url: string;
  children: ReactNode;
  textSize?: string;
  iconColor?: ColorClass;
  flush?: boolean;
  reverse?: boolean;
  additionalCSS?: string;
  newWindow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

type TargetProps = { target?: string; rel?: string };

// When generating links with target=_blank, we only add `noreferrer` to
// links that don't start with `/`, so we can continue tracking referrers
// across our own domains
const buildTargetAndRel = (url: string, newWindow: boolean) => {
  const props: TargetProps = {};

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
  iconColor,
  flush = false,
  reverse = false,
  additionalCSS = "",
  newWindow = false,
  onClick = undefined,
  children,
  disabled = false,
}: FeaturedLinkProps) => {
  const targetAndRel = buildTargetAndRel(url, newWindow);

  return (
    <a
      {...(onClick ? {} : { href: url })}
      className={`font-sans font-bold block ${disabled ? "text-gui-unavailable pointer-events-none" : "text-gui-default hover:text-gui-hover focus:text-gui-focus focus:outline-gui-focus"} group/featured-link ui-${textSize} ${
        flush ? "" : "py-8"
      } ${additionalCSS}`}
      style={
        {
          "--featured-link-icon-size": `var(${textSize.replace(
            "text",
            "--fs",
          )})`,
        } as CSSProperties
      }
      {...targetAndRel}
      onClick={onClick}
    >
      {reverse ? (
        <>
          <Icon
            name="icon-gui-link-arrow"
            size={`calc(var(--featured-link-icon-size) * 1.25)`}
            color={iconColor}
            additionalCSS={`align-middle mr-8 relative -top-1 -right-4 transition-[right] ${disabled ? "" : "group-hover/featured-link:right-0"} transform rotate-180`}
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
            additionalCSS={`align-middle ml-8 relative -top-1 -left-4 transition-[left] ${disabled ? "" : "group-hover/featured-link:left-0"}`}
          />
        </>
      )}
    </a>
  );
};

export default FeaturedLink;
