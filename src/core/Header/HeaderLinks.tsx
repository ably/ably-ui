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
  Pick<HeaderProps, "sessionState" | "headerLinks">
> = ({ sessionState = testSessionState, headerLinks }) => {
  const signedIn = sessionState.signedIn;
  const headerLinkClasses =
    "ui-text-menu2 md:ui-text-menu3 !font-bold py-16 text-neutral-1300 dark:text-neutral-000 md:text-neutral-1000 dark:md:text-neutral-300 hover:text-neutral-1300 dark:hover:text-neutral-000 active:text-neutral-1300 dark:active:text-neutral-000 transition-colors";

  return (
    <div className="flex md:items-center flex-col md:flex-row border-t-[1px] border-neutral-300 md:border-t-0 p-12">
      {headerLinks?.map(({ href, label, external }) => (
        <a
          key={href}
          className={cn(
            headerLinkClasses,
            "flex items-center gap-4 md:mr-16 mt-8 md:mt-0",
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
        <div className="flex">
          <LinkButton
            href="/login"
            variant="secondary"
            className="mr-12 flex-1 md:flex-none md:ui-button-secondary-xs"
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
    </div>
  );
};
