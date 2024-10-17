import React, { Fragment, useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";
import type { PricingDataFeature } from "./types";
import { ColorClass, Theme } from "../styles/colors/types";
import Icon from "../Icon";
import FeaturedLink from "../FeaturedLink";
import { IconName } from "../Icon/types";
import Tooltip from "../Tooltip";
import useTheming from "../hooks/useTheming";

/**
  Pricing hack to get all the themes loaded

  themeColor("text-orange-600")
  themeColor("text-orange-1000")
  themeColor("text-neutral-000")
  themeColor("text-neutral-500")
  themeColor("text-neutral-600")
  themeColor("text-neutral-700")
  themeColor("text-neutral-1000")
  themeColor("text-blue-400")
  themeColor("text-blue-800")
 */

export type PricingCardsProps = {
  data: PricingDataFeature[];
  theme?: Theme;
  delimiter?: IconName | "blank";
};

const PricingCards = ({
  data,
  theme = "dark",
  delimiter,
}: PricingCardsProps) => {
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

  const { themeColor } = useTheming({
    baseTheme: "dark",
    theme,
  });

  const delimiterColumn = (index: number) =>
    delimiter && index % 2 === 1 ? (
      <div
        className={`flex items-center justify-center w-full @[920px]:w-20 ${delimiter !== "blank" ? "m-8" : ""}`}
      >
        {delimiter !== "blank" ? (
          <Icon
            name={delimiter}
            size="20"
            additionalCSS={themeColor("text-neutral-500")}
          />
        ) : null}
      </div>
    ) : null;

  const gridRules = {
    nonDelimited: "grid @[552px]:grid-cols-2 @[1104px]:grid-cols-4",
    delimited: "flex flex-col items-center @[920px]:flex-row",
  };

  const borderClasses = (color?: "neutral" | "blue" | "orange") => {
    const classes: Record<string, { border: ColorClass; bg: ColorClass }> = {
      neutral: {
        border: themeColor("border-neutral-700"),
        bg: themeColor("bg-neutral-700"),
      },
      blue: {
        border: themeColor("border-blue-600"),
        bg: themeColor("bg-blue-600"),
      },
      orange: {
        border: themeColor("border-orange-600"),
        bg: themeColor("bg-orange-600"),
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
        className={`${delimiter ? gridRules.delimited : gridRules.nonDelimited} gap-8`}
      >
        {data.map(
          ({ title, description, price, cta, sections, border }, index) => (
            <Fragment key={title.content}>
              {delimiterColumn(index)}
              <div
                className={`relative border ${borderClasses(border?.color)?.border ?? themeColor("border-neutral-1100")} ${border?.style ?? ""} flex-1 px-24 py-32 flex flex-col gap-24 rounded-2xl group ${delimiter ? "@[520px]:flex-row @[920px]:flex-col" : ""} min-w-[272px] backdrop-blur`}
                data-testid={
                  delimiter ? "delimited-pricing-card" : "pricing-card"
                }
              >
                {border ? (
                  <div
                    className={`flex items-center absolute z-10 -top-12 self-center font-semibold uppercase font-sans text-white ${borderClasses(border?.color)?.border} ${borderClasses(border?.color)?.bg} h-24 text-[11px] px-[10px] py-2 rounded-2xl select-none tracking-widen-0.1`}
                  >
                    {border.text}
                  </div>
                ) : null}
                <div
                  className={`absolute z-0 top-0 left-0 w-full h-full rounded-2xl ${themeColor("bg-neutral-1300")} ${!delimiter ? `${themeColor("group-hover:bg-neutral-1200")} group-hover:opacity-100` : ""} transition-[colors,opacity] opacity-25`}
                ></div>
                <div
                  className={`relative z-10 flex flex-col gap-24 ${delimiter ? "@[520px]:flex-1 @[920px]:flex-none" : ""}`}
                >
                  <div>
                    <div className="flex items-center mb-12">
                      <p
                        className={`${title.className ?? ""} ${themeColor(title.color ?? "text-neutral-000")}`}
                      >
                        {title.content}
                      </p>
                      {title.tooltip ? (
                        <Tooltip
                          theme={theme}
                          interactive={typeof title.tooltip !== "string"}
                        >
                          {title.tooltip}
                        </Tooltip>
                      ) : null}
                    </div>
                    <p
                      className={`ui-text-p1 ${description.className ?? ""} ${themeColor(description.color ?? "text-neutral-000")} min-h-[20px]`}
                      style={{ height: descriptionHeight }}
                    >
                      <span ref={(el) => (descriptionsRef.current[index] = el)}>
                        {description.content}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`flex items-end gap-8 ${delimiter ? "@[520px]:flex-col @[520px]:items-start @[920px]:flex-row @[920px]:items-end" : ""}`}
                  >
                    <p
                      className={`ui-text-title font-medium tracking-tight leading-none ${themeColor("text-neutral-000")}`}
                    >
                      {price.amount}
                    </p>
                    <div
                      className={`ui-text-p3 ${themeColor("text-neutral-000")}`}
                    >
                      {price.content}
                    </div>
                  </div>
                  {cta ? (
                    <div className="group">
                      <FeaturedLink
                        additionalCSS={`text-center ui-btn ${themeColor("bg-neutral-000")} ${themeColor("text-neutral-1300")} hover:text-neutral-000 px-24 !py-12 ${cta.className ?? ""} cursor-pointer`}
                        url={cta.url}
                        onClick={cta.onClick}
                        disabled={cta.disabled}
                      >
                        {cta.text}
                      </FeaturedLink>
                    </div>
                  ) : delimiter ? null : (
                    <div className="flex items-center justify-center h-48 w-full">
                      <hr
                        className={`${themeColor("border-neutral-800")} w-64`}
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-24 relative z-10">
                  {sections.map(({ title, items, listItemColors, cta }) => (
                    <div key={title} className="flex flex-col gap-12">
                      <p
                        className={`${themeColor("text-neutral-500")} font-mono uppercase text-overline2 tracking-[0.16em]`}
                      >
                        {title}
                      </p>
                      <div className={delimiter ? "" : "flex flex-col gap-4"}>
                        {items.map((item, index) =>
                          Array.isArray(item) ? (
                            <div
                              key={item[0]}
                              className={`flex justify-between gap-16 px-8 -mx-8 ${index === 0 ? "py-8" : "py-4"} ${index > 0 && index % 2 === 0 ? `${themeColor("bg-blue-900")} rounded-md` : ""}`}
                            >
                              {item.map((subItem, subIndex) => (
                                <span
                                  key={subItem}
                                  className={`ui-text-p3 ${index === 0 ? "font-bold" : "font-medium"} ${themeColor("text-neutral-300")} ${subIndex % 2 === 1 ? "text-right" : ""}`}
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
                                  color={themeColor(listItemColors.background)}
                                  secondaryColor={themeColor(
                                    listItemColors.foreground,
                                  )}
                                  size="16"
                                  additionalCSS="mt-2"
                                />
                              ) : null}
                              <div
                                className={`flex-1 ${listItemColors ? "ui-text-p3" : "ui-text-p2"} font-medium ${themeColor("text-neutral-300")}`}
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
                            additionalCSS={`absolute translate-x-24 sm:-translate-x-[120px] sm:opacity-0 sm:group-hover:translate-x-24 duration-300 delay-0 sm:group-hover:delay-100 sm:group-hover:opacity-100 transition-[transform,opacity] font-medium ui-text-p3 ${themeColor("text-neutral-500")} hover:${themeColor("text-neutral-000")} cursor-pointer`}
                            onClick={cta.onClick}
                            iconColor={themeColor(
                              listItemColors?.foreground ?? "text-neutral-000",
                            )}
                          >
                            {cta.text}
                          </FeaturedLink>
                          <div
                            className={`absolute hidden sm:block sm:translate-x-24 sm:opacity-100 sm:group-hover:translate-x-[120px] sm:group-hover:opacity-0 duration-200 delay-100 sm:group-hover:delay-0 transition-[transform,opacity] leading-6 tracking-widen-0.15 font-light text-p3 ${themeColor("text-neutral-800")}`}
                          >
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
