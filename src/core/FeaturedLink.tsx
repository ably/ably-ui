import React, { CSSProperties, ReactNode } from "react";

import Icon from "./Icon";
import { ColorClass, ColorThemeSet } from "./styles/colors/types";
import cn from "./utils/cn";

type FeaturedLinkProps = {
  url: string;
  children: ReactNode;
  textSize?: string;
  iconColor?: ColorClass | ColorThemeSet;
  flush?: boolean;
  reverse?: boolean;
  additionalCSS?: string;
  newWindow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  /**
   * Optional class name for group hover state.
   */
  groupHoverClassName?: string;
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
  groupHoverClassName = "",
}: FeaturedLinkProps) => {
  const targetAndRel = buildTargetAndRel(url, newWindow);

  return (
    <a
      {...(onClick ? {} : { href: url })}
      className={cn(
        "font-sans font-bold block group/featured-link",
        { "text-gui-unavailable pointer-events-none": disabled },
        {
          "text-gui-default hover:text-gui-hover focus:text-gui-focus focus:outline-none focus-visible:outline-gui-focus":
            !disabled,
        },
        { "py-8": !flush },
        `ui-${textSize}`,
        additionalCSS,
      )}
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
            name="icon-gui-arrow-long-right-outline"
            size={`calc(var(--featured-link-icon-size) * 1.25)`}
            color={iconColor}
            additionalCSS={cn(
              "align-middle mr-8 relative -top-1 -right-4 transition-[right] transform rotate-180",
              { "group-hover/featured-link:right-0": !disabled },
              groupHoverClassName,
            )}
          />
          {children}
        </>
      ) : (
        <>
          {children}
          <Icon
            name="icon-gui-arrow-long-right-outline"
            size={`calc(var(--featured-link-icon-size) * 1.25)`}
            color={iconColor}
            additionalCSS={cn(
              "align-middle ml-8 relative -top-1 -left-4 transition-[left]",
              {
                "group-hover/featured-link:left-0": !disabled,
              },
              groupHoverClassName,
            )}
          />
        </>
      )}
    </a>
  );
};

export default FeaturedLink;
