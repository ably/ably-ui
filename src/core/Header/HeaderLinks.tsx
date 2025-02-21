import React from "react";
import { HeaderProps } from "../Header";
import Icon from "../Icon";
import LinkButton from "../LinkButton";
import cn from "../utils/cn";
import DropdownMenu from "../DropdownMenu";

const testSessionState = {
  signedIn: false,
  isDropDownAccountLinks: false,
  account: {
    companyName: "Ably",
    links: {
      dashboard: {
        href: "/dashboard",
      },
      upgrade: {
        href: "/upgrade",
      },
    },
  },
};

export const HeaderLinks: React.FC<
  Pick<
    HeaderProps,
    "sessionState" | "headerLinks" | "searchButtonVisibility" | "searchButton"
  > & {
    className?: string;
  }
> = ({
  sessionState = testSessionState,
  headerLinks,
  searchButtonVisibility,
  searchButton,
  className,
}) => {
  const signedIn = sessionState.signedIn;
  const isDropDownAccountLinks = sessionState.isDropDownAccountLinks;

  const dropdownMenuItems = [
    { label: "Dashboard", link: sessionState.account.links?.dashboard.href },
    { label: "Upgrade", link: sessionState.account.links?.upgrade.href },
  ];

  const headerLinkClasses =
    "ui-text-menu2 md:ui-text-menu3 !font-bold py-16 text-neutral-1300 dark:text-neutral-000 md:text-neutral-1000 dark:md:text-neutral-300 hover:text-neutral-1300 dark:hover:text-neutral-000 active:text-neutral-1300 dark:active:text-neutral-000 transition-colors";

  const dropdownMenuLinkClasses =
    "ui-text-button3 font-semibold py-8 px-16 block text-neutral-1000 dark:text-neutral-300";
  return (
    <nav
      className={cn(
        "flex md:flex-1 md:items-center md:justify-end flex-col md:flex-row border-t-[1px] border-neutral-300 md:border-t-0 p-12 md:p-0 gap-12",
        className,
      )}
    >
      {headerLinks?.map(({ href, label, external }) => (
        <a
          key={href}
          className={cn(
            headerLinkClasses,
            "flex items-center gap-4 mt-8 md:mt-0",
          )}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer noopener" : undefined}
        >
          {label}
          {external && (
            <Icon name="icon-gui-arrow-top-right-on-square-outline" />
          )}
        </a>
      ))}
      {searchButtonVisibility !== "mobile" ? searchButton : null}
      {signedIn && sessionState.account ? (
        isDropDownAccountLinks ? (
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenu.Trigger>
                <span className="mr-4">{sessionState.account.companyName}</span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                anchorPosition="right"
                contentClassNames="min-w-[240px] top-[40px]"
              >
                <div className="px-8 pt-8">
                  {dropdownMenuItems.map(({ label, link }) => (
                    <a
                      href={link}
                      key={label}
                      className={cn(
                        "my-8 hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100",
                        dropdownMenuLinkClasses,
                      )}
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <div className="border-t border-neutral-400 dark:border-neutral-900">
                  <div className="flex justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100 m-8">
                    <a href="/logout" className={dropdownMenuLinkClasses}>
                      Logout
                    </a>
                    <Icon
                      name="icon-gui-arrow-right-on-rectangle-outline"
                      size="1.25rem"
                      additionalCSS="text-neutral-1000 dark:text-neutral-300 mr-8"
                    />
                  </div>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        ) : (
          <LinkButton
            href={sessionState.account.links?.dashboard.href}
            variant="secondary"
            className="md:ui-button-secondary-xs"
            aria-label="Access your dashboard"
          >
            Dashboard
          </LinkButton>
        )
      ) : (
        <div className="flex gap-12">
          <LinkButton
            href="/login"
            variant="secondary"
            className="flex-1 md:flex-none md:ui-button-secondary-xs"
          >
            Login
          </LinkButton>
          <LinkButton
            href="/sign-up"
            variant="primary"
            className="flex-1 md:flex-none md:ui-button-primary-xs"
          >
            Start free
          </LinkButton>
        </div>
      )}
    </nav>
  );
};
