import React, { useEffect, useMemo } from "react";
import Header, { HeaderSessionState, ThemedScrollpoint } from "./Header";
import Flyout from "./Flyout";
import { MeganavMobile } from "./Meganav/MeganavMobile";
import Notice from "./Notice";
import { HEADER_HEIGHT } from "./utils/heights";
import { BlogPost } from "./Meganav/MeganavBlog";
import { getMenuItemsForHeader } from "./Meganav/utils/getMenuItemsForHeader";

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
  blogPosts: BlogPost[];
  notice?: MeganavNoticeBannerProps;
  theme?: string;
  themedScrollpoints?: ThemedScrollpoint[];
  onNoticeClose?: () => void;
};

const Meganav = ({
  sessionState,
  notice,
  theme,
  themedScrollpoints,
  onNoticeClose,
  blogPosts,
}: MeganavProps) => {
  const [noticeHeight, setNoticeHeight] = React.useState(0);

  const finalNoticeHeight = notice ? noticeHeight : 0;

  const headerMenuItems = useMemo(
    () => getMenuItemsForHeader(blogPosts),
    [blogPosts],
  );

  const mobileNavItems = useMemo(
    () =>
      headerMenuItems
        .filter((item) => !item.isHiddenMobile)
        .map(({ name, link, content }) => ({ name, link, content })),
    [headerMenuItems],
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
    if (!notice) {
      if (noticeHeight !== 0) {
        setNoticeHeight(0);
      }
      return;
    }

    const noticeElement = document.querySelector('[data-id="ui-notice"]');
    if (!noticeElement) return;

    const updateNoticeHeight = () => {
      setNoticeHeight(noticeElement.getBoundingClientRect().height);
    };

    const observer = new ResizeObserver(updateNoticeHeight);
    observer.observe(noticeElement);

    const timeoutId = setTimeout(updateNoticeHeight, 0);
    window.addEventListener("resize", updateNoticeHeight);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("resize", updateNoticeHeight);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notice]);

  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 w-full z-50"
        id={theme === "dark" ? "meganav-theme-dark" : "meganav"}
        data-testid="meganav"
        style={{ height: HEADER_HEIGHT + finalNoticeHeight }}
      >
        {notice && (
          <Notice
            {...notice.props}
            config={notice.config}
            onClose={onNoticeClose}
          />
        )}
        <Header
          className="max-w-screen-xl mx-auto"
          isNoticeBannerEnabled={!!notice}
          noticeHeight={finalNoticeHeight}
          nav={
            <Flyout
              menuItems={headerMenuItems}
              className="justify-left z-40"
              flyOutClassName="flex justify-left"
              viewPortClassName="ui-shadow-lg-medium border border-neutral-200 dark:border-neutral-1100 rounded-2xl -mt-1 bg-neutral-000 dark:bg-neutral-1300"
            />
          }
          mobileNav={<MeganavMobile navItems={mobileNavItems} />}
          headerLinks={[{ href: "/contact", label: "Contact us" }]}
          headerLinksClassName="md:gap-x-6 "
          sessionState={sessionState}
          themedScrollpoints={themedScrollpoints ?? defaultThemedScrollpoints}
        />
      </div>
    </>
  );
};

export default Meganav;
