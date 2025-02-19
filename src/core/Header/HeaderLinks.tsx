import React from "react";
import { HeaderProps } from "../Header";
import Icon from "../Icon";
import LinkButton from "../LinkButton";
import cn from "../utils/cn";

const testSessionState = {
  signedIn: false,
  account: {
    links: {
      dashboard: {
        href: "/dashboard",
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
  const headerLinkClasses =
    "ui-text-menu2 md:ui-text-menu3 !font-bold py-16 text-neutral-1300 dark:text-neutral-000 md:text-neutral-1000 dark:md:text-neutral-300 hover:text-neutral-1300 dark:hover:text-neutral-000 active:text-neutral-1300 dark:active:text-neutral-000 transition-colors";

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
        <LinkButton
          href={sessionState.account.links?.dashboard.href}
          variant="secondary"
          className="md:ui-button-secondary-xs"
          aria-label="Access your dashboard"
        >
          Dashboard
        </LinkButton>
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
