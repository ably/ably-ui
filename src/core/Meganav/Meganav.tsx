import React, { useRef } from "react";
import Header, { HeaderSessionState } from "../Header";
import Icon from "../Icon";
import Flyout from "../Flyout";
import { menuItemsForHeader } from "./data";
import { MeganavMobile } from "./MeganavMobile";
import Notice, { NoticeProps } from "../Notice";

export type MeganavProps = {
  sessionState: HeaderSessionState;
  searchDataId: string;
  notice: NoticeProps;
};

const Meganav = ({ sessionState, searchDataId, notice }: MeganavProps) => {
  const mobileNavItems = menuItemsForHeader
    .filter((item) => !item.isHiddenMobile)
    .map(({ name, link, content }) => ({ name, link, content }));
  const noticeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 w-full">
      {notice && <Notice {...notice} config={notice.config} ref={noticeRef} />}
      <Header
        notice={notice}
        noticeRef={noticeRef}
        nav={
          <Flyout
            menuItems={menuItemsForHeader}
            className="justify-left z-40"
            flyOutClassName="flex justify-left"
            viewPortClassName="ui-shadow-lg-medium border border-neutral-000 dark:border-neutral-1300 rounded-2xl mt-8 ml-64 bg-neutral-000 dark:bg-neutral-1300"
            hasAnimation={true}
          />
        }
        mobileNav={<MeganavMobile mobileNavItems={mobileNavItems} />}
        searchButton={
          <button
            type="button"
            data-control="search"
            data-id={searchDataId}
            className="cursor-pointer h-24 w-24 group focus:outline-none"
            aria-expanded="false"
            aria-controls="panel-search"
            aria-label="Ask AI"
          >
            <Icon
              name="icon-gui-magnifying-glass-outline"
              color="text-neutral-1300"
              size="24px"
            />
          </button>
        }
        headerLinks={[{ href: "/contact", label: "Help" }]}
        sessionState={sessionState}
      />
    </div>
  );
};

export default Meganav;
