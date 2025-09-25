import type React from "react";
import { useCallback, useMemo } from "react";
import Badge from "./Badge";
import FeaturedLink from "./FeaturedLink";
import Icon from "./Icon";
import type { IconName } from "./Icon/types";
import cn from "./utils/cn";

type ContentTileBadge =
  | string
  | {
      label: string;
      className?: string;
    };

type ContentTileProps = {
  title?: string;
  className?: string;
  description?: string;
  cta?: {
    text: string;
    url: string;
  };
  feature?: React.ReactNode | string;
  featureType?: "image" | "icon";
  featureIcons?: IconName[];
  centerFeature?: boolean;
  badges?: ContentTileBadge[];
  onClick?: (url?: string) => void;
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
              "group-hover/content-tile:h-[160px] group-hover/content-tile:border-neutral-500 dark:group-hover/content-tile:border-neutral-800",
          )}
        >
          <div
            className={cn(
              "flex justify-center max-h-[200px]",
              !centerFeature && "pt-6 [&_img]:min-w-max [&_img]:h-[200px]",
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
        <div
          className={cn(
            "h-9 overflow-hidden opacity-100",
            cta &&
              "sm:group-hover/content-tile:h-0 sm:group-hover/content-tile:opacity-0 transition-[height,opacity]",
          )}
        >
          {typeof feature === "string" ? (
            <Icon name={feature as IconName} size="36px" />
          ) : (
            feature
          )}
        </div>
      );
    }

    return null;
  }, [centerFeature, cta, feature, featureIcons, featureType]);

  return (
    <div
      className={cn("group/content-tile", cta && "cursor-pointer", className)}
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
              "content-tile__title mt-4 mb-2 ui-text-h4 text-neutral-1300 dark:text-neutral-000",
              cta &&
                featureType === "icon" &&
                "sm:group-hover/content-tile:mt-0 transition-[margin]",
            )}
          >
            {title}
          </h2>
        )}
        {description && (
          <div className="content-tile__description mb-2 ui-text-p2 text-neutral-800 dark:text-neutral-500">
            {description}
          </div>
        )}
        {badges && badges.length > 0 && (
          <div className="content-tile__badges mb-2 flex flex-wrap gap-2">
            {badges.map((badge, idx) =>
              typeof badge === "string" ? (
                <Badge key={badge + idx} className="uppercase text-[10px]">
                  {badge}
                </Badge>
              ) : (
                <Badge
                  key={badge.label + idx}
                  className={cn("uppercase text-[10px]", badge.className)}
                >
                  {badge.label}
                </Badge>
              ),
            )}
          </div>
        )}
        {cta && (
          <FeaturedLink
            url="#"
            additionalCSS={cn(
              "pt-0 pointer-events-none opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-[10px] sm:group-hover/content-tile:opacity-100 sm:group-hover/content-tile:translate-y-0 transition-[opacity,transform,padding] items-center text-neutral-1300 dark:text-neutral-000 hover:text-neutral-1300 dark:hover:text-neutral-000",
              feature && "sm:h-0 sm:group-hover/content-tile:pt-1",
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
