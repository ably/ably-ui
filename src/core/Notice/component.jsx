import React, { useEffect } from "react";
import T from "prop-types";

const contentWrapperClasses = "font-light w-full pr-8 text-p3";

import NoticeScripts from "./component.js";

const ContentWrapper = ({ buttonLink, children }) =>
  buttonLink ? (
    <a href={buttonLink} className={contentWrapperClasses}>
      {children}
    </a>
  ) : (
    <div className={contentWrapperClasses}>{children}</div>
  );

ContentWrapper.propTypes = {
  buttonLink: T.string,
  children: T.node,
};

const Notice = ({ buttonLink, buttonLabel, bodyText, title, config, closeBtn }) => {
  useEffect(() => {
    NoticeScripts({
      bannerContainer: document.querySelector('[data-id="ui-notice"]'),
      cookieId: config.cookieId,
      noticeId: config.noticeId,
      options: {
        collapse: config.collapse,
      },
    });
  }, []);

  return (
    // Note the style attribute is used for entry animation
    <div className="ui-announcement" data-id="ui-notice" style={{ maxHeight: 0, overflow: "hidden" }}>
      <div className="ui-grid-px py-16 max-w-screen-xl mx-auto flex items-center">
        <ContentWrapper buttonLink={buttonLink}>
          <strong className="font-medium whitespace-nowrap pr-4">{title}</strong>
          <span className="pr-4">{bodyText}</span>
          {buttonLabel && <span className="underline cursor-pointer whitespace-nowrap">{buttonLabel}</span>}
        </ContentWrapper>

        {closeBtn && (
          <button type="button" className="mt-4 ml-auto border-none bg-none">
            <svg className="h-24 w-24 ui-icon-white">
              <use xlinkHref="#sprite-close"></use>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Notice.propTypes = {
  buttonLink: T.string,
  buttonLabel: T.string,
  bodyText: T.string,
  title: T.string,
  closeBtn: T.bool,
  config: T.shape({
    collapse: T.bool,
    noticeId: T.string,
    cookieId: T.string,
  }),
};

export default Notice;
