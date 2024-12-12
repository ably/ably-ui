import React, { Fragment, useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import type { PricingDataFeature } from "./types";
import Icon from "../Icon";
import FeaturedLink from "../FeaturedLink";
import LinkButton from "../LinkButton";
import { IconName } from "../Icon/types";
import Tooltip from "../Tooltip";
import cn from "../utils/cn";

export type PricingCardsProps = {
  data: PricingDataFeature[];
  delimiter?: IconName | "blank";
};

const PricingCards = ({ data, delimiter }: PricingCardsProps) => {
  const descriptionsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);

  const determineMaxDescriptionHeight = throttle(() => {
    if (descriptionsRef.current.length) {
      setDescriptionHeight(
        Math.max(
          ...descriptionsRef.current.map(
            (description) => description?.getBoundingClientRect().height ?? 0,
          ),
        ),
      );
    }
  }, 100);

  useEffect(() => {
    determineMaxDescriptionHeight();

    window.addEventListener("resize", determineMaxDescriptionHeight);

    return () => {
      window.removeEventListener("resize", determineMaxDescriptionHeight);
      determineMaxDescriptionHeight.cancel();
    };
  }, []);

  const delimiterColumn = (index: number) =>
    delimiter && index % 2 === 1 ? (
      <div
        className={cn("flex items-center justify-center w-full @[920px]:w-20", {
          "m-8": delimiter !== "blank",
        })}
      >
        {delimiter !== "blank" ? (
          <Icon
            name={delimiter}
            size="20px"
            additionalCSS={"text-neutral-800 dark:text-neutral-500"}
          />
        ) : null}
      </div>
    ) : null;

  const gridRules = {
    nonDelimited: "grid @[552px]:grid-cols-2 @[1104px]:grid-cols-4",
    delimited: "flex flex-col items-center @[920px]:flex-row",
  };

  const borderClasses = (color?: "neutral" | "blue" | "orange") => {
    const classes: Record<
      string,
      {
        border: string;
        bg: string;
      }
    > = {
      neutral: {
        border: "border-neutral-600 dark:border-neutral-700",
        bg: "border-neutral-600 dark:bg-neutral-700",
      },
      blue: {
        border: "border-blue-400 dark:border-blue-600",
        bg: "bg-blue-400 dark:bg-blue-600",
      },
      orange: {
        border: "border-orange-600 dark:border-orange-600",
        bg: "bg-orange-600 dark:bg-orange-600",
      },
    };

    if (color && classes[color]) {
      return classes[color];
    }
  };

  return (
    <div
      className="@container flex justify-center"
      data-testid={
        delimiter ? "delimited-pricing-card-group" : "pricing-card-group"
      }
    >
      <div
        className={cn(
          "gap-8",
          delimiter ? gridRules.delimited : gridRules.nonDelimited,
        )}
      >
        {data.map(
          ({ title, description, price, cta, sections, border }, index) => (
            <Fragment key={title.content}>
              {delimiterColumn(index)}
              <div
                className={cn(
                  "relative border flex-1 px-24 py-32 flex flex-col gap-24 rounded-2xl group min-w-[272px] backdrop-blur",
                  borderClasses(border?.color)?.border ??
                    "border-neutral-200 dark:border-neutral-1100",
                  border?.style,
                  { "@[520px]:flex-row @[920px]:flex-col": delimiter },
                )}
                data-testid={
                  delimiter ? "delimited-pricing-card" : "pricing-card"
                }
              >
                {border ? (
                  <div
                    className={cn(
                      "flex items-center absolute z-10 -top-12 self-center font-semibold uppercase text-neutral-000 font-sans h-24 text-[11px] px-[10px] py-2 rounded-2xl select-none tracking-widen-0.1",
                      borderClasses(border?.color)?.border,
                      borderClasses(border?.color)?.bg,
                    )}
                  >
                    {border.text}
                  </div>
                ) : null}
                <div
                  className={cn(
                    "absolute z-0 top-0 left-0 w-full h-full rounded-2xl bg-neutral-000 dark:bg-neutral-1300 transition-[colors,opacity] opacity-25",
                    {
                      "group-hover:bg-neutral-100 dark:group-hover:bg-neutral-1200 group-hover:opacity-100":
                        !delimiter,
                    },
                  )}
                ></div>
                <div
                  className={cn(`relative z-10 flex flex-col gap-24`, {
                    "@[520px]:flex-1 @[920px]:flex-none": delimiter,
                  })}
                >
                  <div>
                    <div className="flex items-center mb-12">
                      <p className={cn(title.className, title.color)}>
                        {title.content}
                      </p>
                      {title.tooltip ? (
                        <Tooltip
                          interactive={typeof title.tooltip !== "string"}
                        >
                          {title.tooltip}
                        </Tooltip>
                      ) : null}
                    </div>
                    <p
                      className={cn(
                        "ui-text-p1 min-h-[20px]",
                        description.className,
                        description.color,
                      )}
                      style={{ height: descriptionHeight }}
                    >
                      <span ref={(el) => (descriptionsRef.current[index] = el)}>
                        {description.content}
                      </span>
                    </p>
                  </div>
                  <div
                    className={cn("flex items-end gap-8", {
                      "@[520px]:flex-col @[520px]:items-start @[920px]:flex-row @[920px]:items-end":
                        delimiter,
                    })}
                  >
                    <p className="ui-text-title font-medium tracking-tight leading-none text-neutral-1300 dark:text-neutral-000">
                      {price.amount}
                    </p>
                    <div className="ui-text-p3 text-neutral-1300 dark:text-neutral-000">
                      {price.content}
                    </div>
                  </div>
                  {cta ? (
                    <div className="group">
                      <LinkButton
                        className={cn("w-full", cta.className)}
                        variant={
                          cta.url === "/contact" ? "priority" : "primary"
                        }
                        href={cta.url}
                        onClick={cta.onClick}
                        disabled={cta.disabled}
                      >
                        {cta.text}
                      </LinkButton>
                    </div>
                  ) : delimiter ? null : (
                    <div className="flex items-center justify-center h-48 w-full">
                      <hr className="border-neutral-500 dark:border-neutral-800 w-64" />
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-24 relative z-10">
                  {sections.map(({ title, items, listItemColors, cta }) => (
                    <div key={title} className="flex flex-col gap-12">
                      <p className="text-neutral-800 dark:text-neutral-500 font-mono uppercase text-overline2 tracking-[0.16em]">
                        {title}
                      </p>
                      <div
                        className={cn({ "flex flex-col gap-4": !delimiter })}
                      >
                        {items.map((item, index) =>
                          Array.isArray(item) ? (
                            <div
                              key={item[0]}
                              className={cn(
                                "flex justify-between gap-16 px-8 -mx-8",
                                index === 0 ? "py-8" : "py-4",
                                index > 0 && index % 2 === 0
                                  ? "bg-blue-100 dark:bg-blue-900 rounded-md"
                                  : "",
                              )}
                            >
                              {item.map((subItem, subIndex) => (
                                <span
                                  key={subItem}
                                  className={cn(
                                    "ui-text-p3",
                                    index === 0 ? "font-bold" : "font-medium",
                                    "text-neutral-1000 dark:text-neutral-300",
                                    subIndex % 2 === 1 ? "text-right" : "",
                                  )}
                                >
                                  {subItem}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <div key={item} className="flex gap-8 items-start">
                              {listItemColors ? (
                                <Icon
                                  name="icon-gui-check-circled-fill"
                                  color={listItemColors.background}
                                  secondaryColor={listItemColors.foreground}
                                  size="16px"
                                  additionalCSS="mt-2"
                                />
                              ) : null}
                              <div
                                className={cn(
                                  `flex-1 font-medium text-neutral-1000 dark:text-neutral-300`,
                                  listItemColors ? "ui-text-p3" : "ui-text-p2",
                                )}
                              >
                                {item}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                      {cta ? (
                        <div className="relative -mx-24 flex items-center h-40 overflow-x-hidden">
                          <FeaturedLink
                            url={cta.url}
                            additionalCSS="absolute translate-x-24 sm:-translate-x-[120px] sm:opacity-0 sm:group-hover:translate-x-24 duration-300 delay-0 sm:group-hover:delay-100 sm:group-hover:opacity-100 transition-[transform,opacity] font-medium ui-text-p3 dark:text-neutral-500 dark:hover:text-neutral-000 cursor-pointer"
                            onClick={cta.onClick}
                            iconColor={listItemColors?.foreground}
                          >
                            {cta.text}
                          </FeaturedLink>
                          <div className="absolute hidden sm:block sm:translate-x-24 sm:opacity-100 sm:group-hover:translate-x-[120px] sm:group-hover:opacity-0 duration-200 delay-100 sm:group-hover:delay-0 transition-[transform,opacity] leading-6 tracking-widen-0.15 font-light text-p3 text-neutral-500 dark:text-neutral-800">
                            •••
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              {delimiterColumn(index)}
            </Fragment>
          ),
        )}
      </div>
    </div>
  );
};

export default PricingCards;
