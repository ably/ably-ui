import React, { Fragment, useEffect, useRef, useState } from "react";
import { throttle } from "es-toolkit/compat";
import type { PricingDataFeature } from "./types";
import Icon from "../Icon";
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
        className={cn("flex items-center justify-center w-full @[920px]:w-5", {
          "m-2": delimiter !== "blank",
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
        bg: "bg-neutral-600 dark:bg-neutral-700",
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
          "gap-2",
          delimiter ? gridRules.delimited : gridRules.nonDelimited,
        )}
      >
        {data.map(
          (
            { title, description, price, cta, sections, border, bottomCta },
            index,
          ) => (
            <Fragment key={title.content}>
              {delimiterColumn(index)}
              <div
                className={cn(
                  "relative border flex-1 px-6 pt-6 pb-4 flex flex-col gap-6 rounded-2xl group min-w-[17rem] backdrop-blur bg-neutral-100 dark:bg-neutral-1200",
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
                      "flex items-center absolute z-10 -top-3 self-center font-semibold uppercase text-neutral-000 font-sans h-6 text-[11px] px-2.5 py-0.5 rounded-2xl select-none tracking-widest",
                      borderClasses(border?.color)?.border,
                      borderClasses(border?.color)?.bg,
                    )}
                  >
                    {border.text}
                  </div>
                ) : null}
                <div
                  className={cn(`relative z-10 flex flex-col gap-4`, {
                    "@[520px]:flex-1 @[920px]:flex-none": delimiter,
                  })}
                >
                  <div>
                    <div className="flex items-center mb-1">
                      <p className={cn(title.className, title.color)}>
                        {title.content}
                      </p>
                      {title.tooltip ? (
                        <Tooltip
                          interactive={typeof title.tooltip !== "string"}
                          iconSize="1.25rem"
                        >
                          {title.tooltip}
                        </Tooltip>
                      ) : null}
                    </div>
                    <p
                      className={cn(
                        "ui-text-h1 text-h1-xl h-5 block",
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
                    className={cn("flex items-end gap-2", {
                      "@[520px]:flex-col @[520px]:items-start @[920px]:flex-row @[920px]:items-end":
                        delimiter,
                    })}
                  >
                    <p className="ui-text-h1 text-h1-xl font-medium tracking-tight leading-none text-neutral-1300 dark:text-neutral-000">
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
                        rightIcon="icon-gui-arrow-right-outline"
                        iconColor={cta.iconColor}
                      >
                        {cta.text}
                      </LinkButton>
                    </div>
                  ) : delimiter ? null : (
                    <div className="flex items-center justify-center h-12 w-full">
                      <hr className="border-neutral-500 dark:border-neutral-800 w-16" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4 relative z-10 flex-grow">
                  {sections.map(({ title, items, listItemColors }) => (
                    <div key={title} className="flex flex-col gap-3">
                      <p className="text-neutral-700 dark:text-neutral-600 font-mono uppercase text-overline2 font-medium tracking-[0.12em] h-4">
                        {title}
                      </p>
                      <div className={cn({ "flex flex-col": !delimiter })}>
                        {items.map((item, index) =>
                          Array.isArray(item) ? (
                            <div
                              key={item[0]}
                              className={cn(
                                "flex justify-between gap-4 px-2 -mx-2",
                                index === 0 ? "py-2" : "py-1",
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
                                    "text-neutral-1000 dark:text-neutral-300 leading-[1.4rem]",
                                    subIndex % 2 === 1 ? "text-right" : "",
                                  )}
                                >
                                  {subItem}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <div key={item} className="flex items-start gap-2">
                              {listItemColors ? (
                                <Icon
                                  name="icon-gui-check-circled-fill"
                                  color={listItemColors.background}
                                  secondaryColor={listItemColors.foreground}
                                  size="16px"
                                  additionalCSS="mt-1"
                                />
                              ) : null}
                              <div
                                className={cn(
                                  `flex-1 font-medium text-neutral-1000 dark:text-neutral-300 ui-text-p3`,
                                )}
                              >
                                {item}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {bottomCta && (
                  <div>
                    <div className="border-t border-neutral-200 dark:border-neutral-1100 -mx-6"></div>
                    <a
                      href={bottomCta.url}
                      className={cn(
                        "text-[13px] font-sans font-semibold group/bottom-cta cursor-pointer pt-4 flex items-center",
                        "text-neutral-700 dark:text-neutral-600 hover:text-neutral-1300 dark:hover:text-neutral-000 focus:outline-none focus-visible:outline-gui-focus",
                      )}
                    >
                      {bottomCta.text}
                      <Icon
                        name="icon-gui-arrow-down-outline"
                        size="12px"
                        color={bottomCta.iconColor}
                        additionalCSS={cn(
                          "align-middle ml-2 relative transition-[bottom] bottom-0 group-hover/bottom-cta:-bottom-0.5",
                        )}
                      />
                    </a>
                  </div>
                )}
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
