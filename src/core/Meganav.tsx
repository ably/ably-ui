import React, { useEffect, useMemo } from "react";
import Header, { HeaderSessionState } from "./Header";
import Icon from "./Icon";
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
  searchDataId: string;
  notice?: MeganavNoticeBannerProps;
};

const Meganav = ({ sessionState, searchDataId, notice }: MeganavProps) => {
  const [noticeHeight, setNoticeHeight] = React.useState(0);
  const mobileNavItems = useMemo(
    () =>
      menuItemsForHeader
        .filter((item) => !item.isHiddenMobile)
        .map(({ name, link, content }) => ({ name, link, content })),
    [],
  );

  useEffect(() => {
    const noticeElement = document.querySelector('[data-id="ui-notice"]');
    if (noticeElement) {
      setNoticeHeight(noticeElement.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 w-full z-50"
        id="meganav"
        data-testid="meganav"
        style={{ height: HEADER_HEIGHT + noticeHeight }}
      >
        {notice && <Notice {...notice.props} config={notice.config} />}
        <Header
          className="max-w-screen-xl mx-auto px-0 sm:px-32 md:px-40 lg:px-64"
          nav={
            <Flyout
              menuItems={menuItemsForHeader}
              className="justify-left z-40"
              flyOutClassName="flex justify-left"
              viewPortClassName="ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl mt-8 bg-neutral-000 dark:bg-neutral-1300"
              hasAnimation={true}
            />
          }
          mobileNav={<MeganavMobile mobileNavItems={mobileNavItems} />}
          searchButton={
            <button
              type="button"
              data-control="search"
              data-id={searchDataId}
              className="cursor-pointer w-auto group focus:outline-none block mx-0 px-0 flex justify-center"
              aria-expanded="false"
              aria-controls="panel-search"
              aria-label="Ask AI"
            >
              <Icon
                name="icon-gui-magnifying-glass-outline"
                color="text-neutral-1300 dark:text-neutral-000"
                size="24px"
              />
            </button>
          }
          headerLinks={[{ href: "/contact", label: "Contact us" }]}
          sessionState={sessionState}
          themedScrollpoints={[
            {
              id: "meganav",
              className: "ui-theme-light !bg-transparent !border-none",
            },
            {
              id: "main",
              className: "ui-theme-light",
            },
            {
              id: "main-theme-light",
              className: "ui-theme-light",
            },
            {
              id: "main-theme-dark",
              className: "ui-theme-dark",
            },
            {
              id: "footer-theme-light",
              className: "ui-theme-light",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Meganav;
