import React, { useEffect, useMemo } from "react";
import Header, { HeaderSessionState, ThemedScrollpoint } from "./Header";
import Flyout from "./Flyout";
import { menuItemsForHeader } from "./Meganav/data";
import { MeganavMobile } from "./Meganav/MeganavMobile";
import Notice from "./Notice";
import { HEADER_HEIGHT } from "./utils/heights";

export type MeganavNoticeBannerProps = {
  props: {
    title: string;
    bodyText: string;
    buttonLink: string;
    buttonLabel: string;
    closeBtn: boolean;
  };
  config: {
    cookieId: string;
    noticeId: string | number;
    options: {
      collapse: boolean;
    };
  };
};

export type MeganavProps = {
  sessionState: HeaderSessionState;
  notice?: MeganavNoticeBannerProps;
  theme?: string;
  themedScrollpoints?: ThemedScrollpoint[];
};

const Meganav = ({
  sessionState,
  notice,
  theme,
  themedScrollpoints,
}: MeganavProps) => {
  const [noticeHeight, setNoticeHeight] = React.useState(0);
  const mobileNavItems = useMemo(
    () =>
      menuItemsForHeader
        .filter((item) => !item.isHiddenMobile)
        .map(({ name, link, content }) => ({ name, link, content })),
    [],
  );

  const defaultThemedScrollpoints = [
    {
      id: "meganav",
      className: "ui-theme-light !bg-transparent !border-none",
    },
    {
      id: "meganav-theme-dark",
      className: "ui-theme-dark !bg-transparent !border-none",
    },
    {
      id: "main",
      className: "ui-theme-light bg-neutral-000 dark:bg-neutral-1300 border-b",
    },
    {
      id: "main-theme-dark",
      className: "ui-theme-dark bg-neutral-000 dark:bg-neutral-1300 border-b",
    },
  ];

  useEffect(() => {
    const observeNoticeResize = () => {
      const noticeElement = document.querySelector('[data-id="ui-notice"]');
      if (noticeElement) {
        setNoticeHeight(noticeElement.getBoundingClientRect().height);
      }
    };
    observeNoticeResize();
    window.addEventListener("resize", observeNoticeResize);
    return () => window.removeEventListener("resize", observeNoticeResize);
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 w-full z-50"
        id={theme === "dark" ? "meganav-theme-dark" : "meganav"}
        data-testid="meganav"
        style={{ height: HEADER_HEIGHT + noticeHeight }}
      >
        {notice && <Notice {...notice.props} config={notice.config} />}
        <Header
          className="max-w-screen-xl mx-auto px-0 sm:px-32 md:px-40 lg:px-64"
          isNoticeVisible={!!notice}
          nav={
            <Flyout
              menuItems={menuItemsForHeader}
              className="justify-left z-40"
              flyOutClassName="flex justify-left"
              viewPortClassName="ui-shadow-lg-medium border border-neutral-200 dark:border-neutral-1100 rounded-2xl -mt-4 bg-neutral-000 dark:bg-neutral-1300"
            />
          }
          mobileNav={<MeganavMobile navItems={mobileNavItems} />}
          headerLinks={[{ href: "/contact", label: "Contact us" }]}
          headerLinksClassName="md:gap-x-24 "
          sessionState={sessionState}
          themedScrollpoints={themedScrollpoints ?? defaultThemedScrollpoints}
        />
      </div>
    </>
  );
};

export default Meganav;
