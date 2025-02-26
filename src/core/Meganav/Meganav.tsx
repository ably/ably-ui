import React from "react";
import Header from "../Header";
import Icon from "../Icon";
import Flyout from "../Flyout";
import { menuItemsForHeader } from "./data";
import { MeganavMobile } from "./MeganavMobile";

const Meganav = ({ signedIn }: { signedIn: boolean }) => {
  const mobileNavItems = menuItemsForHeader
    .filter((item) => !item.isHiddenMobile)
    .map(({ name, link, content }) => ({ name, link, content }));

  return (
    <Header
      themedScrollpoints={[
        {
          id: "header-zone",
          className: "ui-theme-light !bg-transparent !border-none",
        },
        {
          id: "light-zone",
          className: "ui-theme-light",
        },
        {
          id: "dark-zone",
          className: "ui-theme-dark",
        },
      ]}
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
          data-id="dataID"
          data-control="search"
          className="h-24 w-24 group focus:outline-none"
          aria-expanded="false"
          aria-controls="panel-search"
          aria-label={`Show Search Panel`}
        >
          <Icon
            name="icon-gui-magnifying-glass-outline"
            color="text-neutral-1300"
            size="24px"
          />
        </button>
      }
      headerLinks={[{ href: "/contact", label: "Help" }]}
      sessionState={{
        signedIn: signedIn,
        isDropDownAccountLinks: true,
        account: {
          companyName: "Acme Inc.",
          links: {
            dashboard: {
              href: "/dashboard",
            },
            upgrade: {
              href: "/upgrade",
            },
          },
        },
      }}
    />
  );
};

export default Meganav;
