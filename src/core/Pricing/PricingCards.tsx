import React, { Fragment } from "react";
import type { PricingDataFeature } from "./types";
import { determineThemeColor } from "../styles/colors/utils";
import { ColorClass, Theme } from "../styles/colors/types";
import Icon from "../Icon";
import FeaturedLink from "../FeaturedLink";
import { IconName } from "../Icon/types";

export type PricingCardsProps = {
  data: PricingDataFeature[];
  theme?: Theme;
  delimiter?: IconName;
};

const PricingCards = ({
  data,
  theme = "dark",
  delimiter,
}: PricingCardsProps) => {
  // work out a dynamic theme colouring, using dark theme colouring as the base
  const t = (color: ColorClass) => determineThemeColor("dark", theme, color);

  const delimiterColumn = (index: number) =>
    delimiter && index % 2 === 1 ? (
      <div className="flex items-center justify-center w-full m-8 @[920px]:w-20">
        <Icon
          name={delimiter}
          size="20"
          additionalCSS={t("text-neutral-500")}
        />
      </div>
    ) : null;

  const gridRules = {
    nonDelimited: "grid @[552px]:grid-cols-2 @[1104px]:grid-cols-4",
    delimited: "flex flex-col items-center @[920px]:flex-row",
  };

  return (
    <div className="@container flex justify-center">
      <div
        className={`${delimiter ? gridRules.delimited : gridRules.nonDelimited} gap-8`}
      >
        {data.map(({ title, description, price, cta, sections }, index) => (
          <Fragment key={title.content}>
            {delimiterColumn(index)}
            <div
              className={`flex flex-1 p-1 bg-gradient-to-b ${t("from-neutral-1100")} ${t("to-neutral-1100")} rounded-2xl min-w-[272px]`}
            >
              <div
                className={`flex-1 px-24 py-32 flex flex-col gap-24 rounded-2xl ${t("bg-neutral-1300")} bg-opacity-25 ${cta ? `${t("hover:bg-neutral-1200")} hover:bg-opacity-100` : ""} transition-colors group ${delimiter ? "@[520px]:flex-row @[920px]:flex-col" : ""}`}
              >
                <div
                  className={`flex flex-col gap-24 ${delimiter ? "@[520px]:flex-1 @[920px}:flex-none" : ""}`}
                >
                  <div>
                    <p
                      className={`mb-12 ${title.className ?? ""} ${t(title.color ?? "text-neutral-000")}`}
                    >
                      {title.content}
                    </p>
                    <p
                      className={`ui-text-p1 ${description.className ?? ""} ${t(description.color ?? "text-neutral-000")}`}
                    >
                      {description.content}
                    </p>
                  </div>
                  <div
                    className={`flex items-end gap-8 ${delimiter ? "@[520px]:flex-col @[520px]:items-start @[920px]:flex-row @[920px]:items-end" : ""}`}
                  >
                    <p
                      className={`ui-text-title font-medium tracking-tight leading-none ${t("text-neutral-000")}`}
                    >
                      {Number.isNaN(Number(price.amount)) ? "" : "$"}
                      {price.amount}
                    </p>
                    <div className={t("text-neutral-000")}>{price.content}</div>
                  </div>
                  {cta ? (
                    <div className="group">
                      <FeaturedLink
                        additionalCSS={`text-center ui-btn ${t("bg-neutral-000")} ${t("text-neutral-1300")} hover:text-neutral-000 px-24 !py-12 ${cta.className ?? ""}`}
                        url={cta.url}
                      >
                        {cta.text}
                      </FeaturedLink>
                    </div>
                  ) : null}
                </div>
                <div className="flex-1 flex flex-col gap-24">
                  {sections.map(({ title, items, listItemColors, cta }) => (
                    <div key={title} className="flex flex-col gap-12">
                      <p
                        className={`${t("text-neutral-500")} font-mono uppercase text-overline2 tracking-[0.16em]`}
                      >
                        {title}
                      </p>
                      <div className={delimiter ? "" : "flex flex-col gap-4"}>
                        {items.map((item, index) =>
                          Array.isArray(item) ? (
                            <div
                              key={item[0]}
                              className={`flex justify-between gap-16 px-8 -mx-8 ${index === 0 ? "py-8" : "py-4"} ${index > 0 && index % 2 === 0 ? `${t("bg-blue-900")} rounded-md` : ""}`}
                            >
                              {item.map((subItem, subIndex) => (
                                <span
                                  key={subItem}
                                  className={`ui-text-p3 ${index === 0 ? "font-bold" : "font-medium"} ${t("text-neutral-300")} ${subIndex % 2 === 1 ? "text-right" : ""}`}
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
                                  color={t(listItemColors.background)}
                                  secondaryColor={t(listItemColors.foreground)}
                                  size="16"
                                  additionalCSS="mt-2"
                                />
                              ) : null}
                              <div
                                className={`flex-1 ${listItemColors ? "ui-text-p3" : "ui-text-p2"} font-medium ${t("text-neutral-300")}`}
                              >
                                {item}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                      {cta ? (
                        <div className="flex items-center h-40">
                          <div
                            className={`hidden sm:group-hover:hidden leading-6 font-extralight text-p3 ${t("text-neutral-800")}`}
                          >
                            •••
                          </div>
                          <FeaturedLink
                            url={cta.url ?? "#"}
                            additionalCSS={`sm:hidden group-hover:block font-medium ui-text-p3 ${t("text-neutral-500")} hover:${t("text-neutral-000")} transition-colors`}
                          >
                            {cta.text}
                          </FeaturedLink>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {delimiterColumn(index)}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
