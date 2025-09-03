import React, { MouseEvent, useRef } from "react";
import { HeaderProps } from "../Header";
import Icon from "../Icon";
import LinkButton from "../LinkButton";
import cn from "../utils/cn";
import DropdownMenu from "../DropdownMenu";

const testSessionState = {
  signedIn: false,
  logOut: {
    token: "0000",
    href: "accounts/sign_out",
  },
  accountName: "Ably",
};

export const HeaderLinks: React.FC<
  Pick<
    HeaderProps,
    | "sessionState"
    | "headerLinks"
    | "searchButtonVisibility"
    | "searchButton"
    | "className"
  >
> = ({
  sessionState = testSessionState,
  headerLinks,
  searchButtonVisibility,
  searchButton,
  className,
}) => {
  const { signedIn, logOut } = sessionState;
  const formRef = useRef<HTMLFormElement>(null);

  const headerLinkClasses =
    "ui-text-label2 md:ui-text-label3 !font-bold py-4 text-ably-primary md:text-ably-secondary hover:text-ably-primary active:text-ably-primary transition-colors";

  const dropdownMenuLinkClasses =
    "block p-2 ui-text-label3 font-semibold text-ably-secondary hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100 rounded-lg";

  const onClickLogout = (e: MouseEvent) => {
    e.preventDefault();
    formRef.current?.submit();
  };

  const DashboardLink = ({ className }: { className: string }) => (
    <a href="/dashboard" className={className}>
      Dashboard
    </a>
  );

  const LogoutForm = (
    <form ref={formRef} method="post" action={logOut.href} className="hidden">
      <input name="_method" value="delete" type="hidden" />
      <input name="authenticity_token" value={logOut.token} type="hidden" />
    </form>
  );

  return (
    <nav
      className={cn(
        "flex md:flex-1 md:items-center md:justify-end flex-col md:flex-row border-t-[1px] border-neutral-300 md:border-t-0 md:gap-4 pt-3 pb-4 md:py-0",
        className,
      )}
    >
      {signedIn && (
        <>
          {LogoutForm}
          <div className="block md:hidden">
            <div className="flex flex-col border-b-[1px] border-neutral-300 px-4 pb-3 mb-3">
              <span className="py-3 ui-text-sub-header text-[18px] text-ably-label font-bold">
                {sessionState.accountName}
              </span>
              {<DashboardLink className={headerLinkClasses} />}
            </div>
          </div>
        </>
      )}

      {headerLinks?.map(({ href, label, external }) => (
        <a
          key={href}
          className={cn(
            headerLinkClasses,
            "flex items-center gap-1.5 px-4 md:px-0 leading-none",
          )}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer noopener" : undefined}
        >
          {label}
          {external && (
            <Icon name="icon-gui-arrow-top-right-on-square-mini" size="20px" />
          )}
        </a>
      ))}

      {searchButtonVisibility !== "mobile" ? searchButton : null}
      {signedIn ? (
        <>
          <div className="hidden md:block relative">
            <DropdownMenu>
              <DropdownMenu.Trigger
                description={`Account menu for ${sessionState.accountName}`}
              >
                <span className="block text-ellipsis overflow-hidden whitespace-nowrap w-full max-w-[9.375rem] leading-normal">
                  {sessionState.accountName}
                </span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                anchorPosition="right"
                contentClassNames="w-60 mt-3"
              >
                <div className="p-2">
                  {<DashboardLink className={dropdownMenuLinkClasses} />}
                  <a
                    onClick={onClickLogout}
                    href="#"
                    className={dropdownMenuLinkClasses}
                  >
                    Logout
                  </a>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
          <div className="block md:hidden px-4 pt-4 pb-0">
            <LinkButton
              onClick={onClickLogout}
              variant="secondary"
              className="w-full md:ui-button-secondary-xs"
              aria-label="Logout"
              rightIcon="icon-gui-arrow-right-end-on-rectangle-outline"
            >
              Logout
            </LinkButton>
          </div>
        </>
      ) : (
        <div className="flex gap-3 pt-3 md:py-0 px-4 md:px-0">
          <LinkButton
            href="/login"
            variant="secondary"
            className="flex-1 md:flex-none md:ui-button-secondary-xs hover:text-ably-primary"
          >
            Login
          </LinkButton>
          <LinkButton
            href="/sign-up"
            variant="primary"
            className="flex-1 md:flex-none md:ui-button-primary-xs hover:text-ably-primary-inverse"
          >
            Start free
          </LinkButton>
        </div>
      )}
    </nav>
  );
};
