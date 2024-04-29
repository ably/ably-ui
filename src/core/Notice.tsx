import React, { ReactNode, useEffect } from "react";

import NoticeScripts from "./Notice/component.js";
import Icon from "./Icon";
type ContentWrapperProps = {
  buttonLink: string;
  children: ReactNode;
};

// TODO(jamiehenson):
// This type is a bit messed up currently due to the NoticeScripts import being interpreted as NoticeProps.
// Plan is to TS-ify the JS assets too, so this can be rectified then. The NoticeScripts-oriented props are
// the ones after the line break.
type NoticeProps = {
  buttonLink?: string;
  buttonLabel?: string;
  bodyText?: string;
  title?: string;
  closeBtn?: boolean;
  config?: {
    collapse: boolean;
    noticeId: string;
    cookieId: string;
  };
  bgColor?: string;
  textColor?: string;

  bannerContainer?: Element | null;
  cookieId?: string;
  noticeId?: string;
  options?: { collapse: boolean };
};

const contentWrapperClasses = "w-full pr-8 ui-text-p3 self-center";

const ContentWrapper = ({ buttonLink, children }: ContentWrapperProps) =>
  buttonLink ? (
    <a href={buttonLink} className={contentWrapperClasses}>
      {children}
    </a>
  ) : (
    <div className={contentWrapperClasses}>{children}</div>
  );

const Notice = ({
  buttonLink,
  buttonLabel,
  bodyText,
  title,
  config,
  closeBtn,
  bgColor = "bg-gradient-active-orange",
  textColor = "text-white",
}: NoticeProps) => {
  useEffect(() => {
    NoticeScripts({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config?.cookieId,
      noticeId: config?.noticeId,
      options: {
        collapse: config?.collapse || false,
      },
    });
  }, []);

  const wrapperClasses = ["ui-announcement", bgColor, textColor].join(" ");

  return (
    <div
      className={wrapperClasses}
      data-id="ui-notice"
      style={{ maxHeight: 0, overflow: "hidden" }}
    >
      <div className="ui-grid-px py-16 max-w-screen-xl mx-auto flex items-start">
        <ContentWrapper buttonLink={buttonLink ?? "#"}>
          <strong className="font-bold whitespace-nowrap pr-4">{title}</strong>
          <span className="pr-4">{bodyText}</span>
          {buttonLabel && (
            <span className="underline cursor-pointer whitespace-nowrap">
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
              name="icon-gui-close"
              size="1.25rem"
              color="text-cool-black"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notice;
