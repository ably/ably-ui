import Header from "./Header";
import React from "react";
import Icon from "./Icon";
import Accordion from "./Accordion";
import { headerNav } from "./Meganav/data";
import Tooltip from "./Tooltip";

const Meganav = () => {
  return (
    <div className="h-[3000px] -m-16">
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
          <div className="flex">
            {headerNav.map(({ name, link, content }) =>
              link != "" ? (
                <a
                  href={link}
                  className="ui-text-menu3 text-neutral-1000 font-bold px-12 py-8 hover:bg-neutral-100 hover:text-neutral-1300"
                  key={link}
                >
                  {name}
                </a>
              ) : (
                <Tooltip
                  key={name}
                  interactive
                  className="ml-0!"
                  triggerProps={{
                    className:
                      "!h-auto px-12 py-8 hover:bg-neutral-100 hover:text-neutral-1300 ui-text-menu3 text-neutral-1000 font-bold",
                  }}
                  triggerElement={name}
                  tooltipProps={{
                    className: "mt-12 !bg-neutral-000",
                  }}
                >
                  {content}
                </Tooltip>
              ),
            )}
          </div>
        }
        mobileNav={<Accordion className="p-16" data={headerNav} />}
        searchBar={
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
      />
    </div>
  );
};

export default Meganav;
