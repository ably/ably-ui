import React, { ReactNode, useEffect } from "react";

import { ColorClass, ColorThemeSet } from "./styles/colors/types";
import Icon from "./Icon";
import cn from "./utils/cn.js";
import NoticeScripts from "./Notice/component.js";

type ContentWrapperProps = {
  buttonLink: string;
  children: ReactNode;
  textColor?: ColorClass | ColorThemeSet;
};

// TODO(jamiehenson):
// This type is a bit messed up currently due to the NoticeScripts import being interpreted as NoticeProps.
// Plan is to TS-ify the JS assets too, so this can be rectified then. The NoticeScripts-oriented props are
// the ones after the line break.
export type NoticeProps = {
  buttonLink?: string;
  buttonLabel?: string;
  bodyText?: string;
  title?: string;
  closeBtn?: boolean;
  config?: {
    options: {
      collapse: boolean;
    };
    noticeId: string | number;
    cookieId: string;
  };
  bgColor?: string;
  textColor?: ColorClass | ColorThemeSet;

  bannerContainer?: Element | null;
  cookieId?: string;
  noticeId?: string;
  options?: { collapse: boolean };
};

const defaultTextColor = "text-neutral-1300";

const contentWrapperClasses = "w-full pr-8 ui-text-p4 self-center";

const ContentWrapper = ({
  buttonLink,
  textColor = defaultTextColor,
  children,
}: ContentWrapperProps) =>
  buttonLink ? (
    <a href={buttonLink} className={cn(contentWrapperClasses, textColor)}>
      {children}
    </a>
  ) : (
    <div className={cn(contentWrapperClasses, textColor)}>{children}</div>
  );

const Notice = ({
  buttonLink,
  buttonLabel,
  bodyText,
  title,
  config,
  closeBtn,
  bgColor = "bg-orange-100",
  textColor = defaultTextColor,
}: NoticeProps) => {
  useEffect(() => {
    NoticeScripts({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config?.cookieId,
      noticeId: config?.noticeId,
      options: {
        collapse: config?.options?.collapse || false,
      },
    });
  }, []);

  return (
    <div
      className={cn("ui-announcement", bgColor, textColor)}
      data-id="ui-notice"
      style={{ maxHeight: 0, overflow: "hidden" }}
    >
      <div className="ui-grid-px py-16 max-w-screen-xl mx-auto flex items-start">
        <ContentWrapper buttonLink={buttonLink ?? "#"}>
          <strong className="font-bold whitespace-nowrap pr-4">{title}</strong>
          <span className="pr-4">{bodyText}</span>
          {buttonLabel && (
            <span className="cursor-pointer whitespace-nowrap text-gui-blue-default-light">
              {buttonLabel}
            </span>
          )}
        </ContentWrapper>

        {closeBtn && (
          <button
            type="button"
            className="ml-auto h-20 w-20 border-none bg-none self-baseline"
          >
            <Icon
              name="icon-gui-x-mark-outline"
              size="1.25rem"
              color={textColor}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notice;
