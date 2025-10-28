import type React from "react";
import { useCallback, useMemo } from "react";
import Badge, { type BadgeProps } from "./Badge";
import FeaturedLink from "./FeaturedLink";
import Icon from "./Icon";
import type { IconName } from "./Icon/types";
import cn from "./utils/cn";

type ContentTileProps = {
  /** The title text to display */
  title?: string;
  /** Additional CSS classes for the root container */
  className?: string;
  /** The description text to display */
  description?: string;
  /**
   * Call-to-action configuration.
   * - text: The CTA button or link text.
   * - url: The destination URL for the CTA.
   * - implicit: If true, no explicit CTA button is shown.
   */
  cta?: {
    text: string;
    url: string;
    implicit?: boolean;
  };
  /** Content to display in the feature area (image or icon) */
  feature?: React.ReactNode | string;
  /** Type of feature to render - either 'image' or 'icon' */
  featureType?: "image" | "icon";
  /** Array of icon names to display as overlays on the feature */
  featureIcons?: IconName[];
  /** Whether to vertically center the feature content */
  centerFeature?: boolean;
  /** Array of badges to display */
  badges?: (BadgeProps & { label: string })[];
  /** Custom click handler, receives the CTA URL if present */
  onClick?: (url?: string) => void;
  /** Additional CSS classes for the feature element */
  featureClassName?: string;
  /** Additional CSS classes for the title element */
  titleClassName?: string;
  /** Additional CSS classes for the description element */
  descriptionClassName?: string;
  /** Additional CSS classes for the CTA element */
  ctaClassName?: string;
  /** Whether to add padding-top to the feature content (default: true) */
  featurePadding?: boolean;
  /** Whether to encapsulate the content tile in an outer container (default: true) */
  encapsulated?: boolean;
};

const ContentTile: React.FC<ContentTileProps> = ({
  title,
  className,
  description,
  cta,
  feature,
  featureType = "image",
  featureIcons,
  centerFeature,
  badges,
  onClick,
  featureClassName,
  titleClassName,
  descriptionClassName,
  ctaClassName,
  featurePadding = true,
  encapsulated = true,
}) => {
  const handleClick = useCallback(() => {
    if (!cta) return;

    if (onClick) {
      onClick(cta.url);
    } else {
      window.location.href = cta.url;
    }
  }, [onClick, cta]);

  const renderedFeature = useMemo(() => {
    if (!feature) return null;

    if (featureType === "image") {
      return (
        <div
          className={cn(
            "content-tile__feature relative p-3 h-[200px] pb-0 flex items-end justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 transition-[border-color,height]",
            centerFeature && "items-center pb-3",
            cta &&
              !encapsulated &&
              "group-hover/content-tile:border-neutral-500 dark:group-hover/content-tile:border-neutral-800 transition-colors",
            featureClassName,
          )}
        >
          <div
            className={cn(
              "flex justify-center max-h-[200px]",
              !centerFeature && "[&_img]:min-w-max [&_img]:h-[200px]",
              featurePadding && !centerFeature && "pt-6",
            )}
          >
            {feature}
          </div>
          {featureIcons && featureIcons?.length > 0 && (
            <div className="absolute bottom-3 right-3 flex gap-1.5 bg-neutral-000 dark:bg-neutral-1300 rounded border border-neutral-200 dark:border-neutral-1100 px-2 py-1.5">
              {featureIcons.map((icon, idx) => (
                <Icon key={icon + idx} name={icon} size="18px" />
              ))}
            </div>
          )}
        </div>
      );
    }

    if (featureType === "icon") {
      return (
        <div className={cn("h-9", featureClassName)}>
          {typeof feature === "string" ? (
            <Icon name={feature as IconName} size="36px" />
          ) : (
            feature
          )}
        </div>
      );
    }

    return null;
  }, [
    centerFeature,
    feature,
    featureClassName,
    featureIcons,
    encapsulated,
    featurePadding,
    featureType,
    cta,
  ]);

  return (
    <div
      className={cn(
        "group/content-tile",
        encapsulated &&
          "p-5 border border-neutral-300 dark:border-neutral-1000 rounded-lg",
        cta && "cursor-pointer",
        cta &&
          encapsulated &&
          "hover:border-neutral-500 dark:hover:border-neutral-800 transition-colors",
        className,
      )}
      {...(cta && {
        onClick: handleClick,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        },
        tabIndex: 0,
        role: "link",
        "aria-label": title,
      })}
    >
      {renderedFeature}
      <div className="content-tile__content pr-4">
        {title && (
          <h2
            className={cn(
              "content-tile__title mb-2 ui-text-h4 text-neutral-1300 dark:text-neutral-000",
              feature && "mt-4",
              titleClassName,
            )}
          >
            {title}
          </h2>
        )}
        {description && (
          <div
            className={cn(
              "content-tile__description ui-text-p2 text-neutral-1000 dark:text-neutral-300",
              cta &&
                "text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1000 dark:group-hover/content-tile:text-neutral-300 transition-colors",
              (badges || (cta && !cta.implicit)) && "mb-2",
              descriptionClassName,
            )}
          >
            {description}
          </div>
        )}
        {badges && badges.length > 0 && (
          <div className="content-tile__badges mb-2 flex flex-wrap gap-2">
            {badges.map(({ label, className, ...badgeProps }, idx) => (
              <Badge
                key={label + idx}
                className={cn("uppercase text-[10px]", className)}
                {...badgeProps}
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
        {cta && !cta.implicit && (
          <FeaturedLink
            url="#"
            additionalCSS={cn(
              "py-0 pointer-events-none font-medium items-center text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1300 dark:group-hover/content-tile:text-neutral-000 transition-colors [&_svg]:group-hover/content-tile:left-0",
              ctaClassName,
            )}
            iconColor="text-orange-600"
          >
            {cta.text}
          </FeaturedLink>
        )}
      </div>
    </div>
  );
};

export default ContentTile;
