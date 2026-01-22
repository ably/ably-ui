import React, { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";

import { ColorClass, ColorThemeSet } from "./styles/colors/types";
import Icon from "./Icon";
import cn from "./utils/cn.js";
import NoticeScripts from "./Notice/component.js";
import useRailsUjsLinks from "./hooks/use-rails-ujs-hooks";

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
  onClose?: () => void;

  bannerContainer?: Element | null;
  cookieId?: string;
  noticeId?: string;
  options?: { collapse: boolean };
};

const defaultTextColor = "text-neutral-1300 dark:text-neutral-000";

const contentWrapperClasses = "w-full pr-2 ui-text-p4 self-center";

const Notice = ({
  buttonLink,
  buttonLabel,
  bodyText,
  title,
  config,
  closeBtn,
  bgColor = "bg-orange-100 dark:bg-orange-1100",
  textColor = defaultTextColor,
  onClose,
}: NoticeProps) => {
  const contentRef = useRef<HTMLSpanElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  useRailsUjsLinks(contentRef);

  useEffect(() => {
    const cleanup = NoticeScripts({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config?.cookieId,
      noticeId: config?.noticeId,
      options: {
        collapse: config?.options?.collapse || false,
      },
    });

    return cleanup;
  }, [config?.cookieId, config?.noticeId, config?.options?.collapse]);

  const safeContent = DOMPurify.sanitize(bodyText ?? "", {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href", "data-method"],
    ALLOWED_URI_REGEXP: /^\/[^/]/,
  });

  const isSafeButtonLink =
    typeof buttonLink === "string" &&
    (/^\/(?!\/)/.test(buttonLink) || /^https?:\/\//.test(buttonLink));

  // have to add the style classes here as src/core/Notice/component.css is not being properly imported or distributed when ably-ui is used as a package.
  return (
    <div
      className={cn(
        "ui-announcement relative z-[60]",
        isClosing
          ? "ui-announcement-hidden max-h-0 -translate-y-full opacity-0 overflow-hidden"
          : "ui-announcement-visible",
        bgColor,
        textColor,
      )}
      data-id="ui-notice"
    >
      <div className="ui-grid-px py-4 max-w-screen-xl mx-auto flex items-start">
        <div className={cn(contentWrapperClasses, textColor)}>
          <strong className="font-bold whitespace-nowrap pr-1">{title}</strong>
          <span
            ref={contentRef}
            className="pr-1"
            dangerouslySetInnerHTML={{
              __html: safeContent,
            }}
          ></span>
          {buttonLabel &&
            (isSafeButtonLink ? (
              <a
                href={buttonLink}
                className="focus-base transition-colors cursor-pointer whitespace-nowrap text-gui-blue-default-light dark:text-gui-blue-default-dark"
              >
                {buttonLabel}
              </a>
            ) : (
              <span className="focus-base transition-colors cursor-pointer whitespace-nowrap text-gui-blue-default-light dark:text-gui-blue-default-dark">
                {buttonLabel}
              </span>
            ))}
        </div>

        {closeBtn && (
          <button
            type="button"
            className="ml-auto h-5 w-5 border-none bg-none self-baseline outline-none focus:outline-none focus:ring-0 focus:border-transparent"
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => {
                document.dispatchEvent(new CustomEvent("notice-closed"));
                onClose?.();
              }, 300);
            }}
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
