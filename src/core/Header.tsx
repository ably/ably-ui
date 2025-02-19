import React, { useState, useEffect, useRef, ReactNode, useMemo } from "react";
import Icon from "./Icon";
import cn from "./utils/cn";
import Logo from "./Logo";
import {
  componentMaxHeight,
  HEADER_BOTTOM_MARGIN,
  HEADER_HEIGHT,
} from "./utils/heights";
import { HeaderLinks } from "./Header/HeaderLinks";
import throttle from "lodash.throttle";
import { Theme } from "./styles/colors/types";

export type ThemedScrollpoint = {
  id: string;
  className: string;
};

/**
 * Props for the Header component.
 */
export type HeaderProps = {
  /**
   * Optional search bar element.
   */
  searchBar?: ReactNode;

  /**
   * Optional search button element.
   */
  searchButton?: ReactNode;

  /**
   * URL for the logo link.
   */
  logoHref?: string;

  /**
   * Array of header links.
   */
  headerLinks?: {
    /**
     * URL for the link.
     */
    href: string;

    /**
     * Label for the link.
     */
    label: string;

    /**
     * Indicates if the link should open in a new tab.
     */
    external?: boolean;
  }[];

  /**
   * Optional desktop navigation element.
   */
  nav?: ReactNode;

  /**
   * Optional mobile navigation element.
   */
  mobileNav?: ReactNode;

  /**
   * State of the user session.
   */
  sessionState?: {
    /**
     * Indicates if the user is signed in.
     */
    signedIn: boolean;

    /**
     * Account information.
     */
    account: {
      /**
       * Links related to the account.
       */
      links: {
        /**
         * Dashboard link information.
         */
        dashboard: {
          /**
           * URL for the dashboard link.
           */
          href: string;
        };
      };
    };
  };

  /**
   * Array of themed scrollpoints. The header will change its appearance based on the scrollpoint in view.
   */
  themedScrollpoints?: ThemedScrollpoint[];

  /**
   * Visibility setting for the search button.
   * - "all": Visible on all devices.
   * - "desktop": Visible only on desktop devices.
   * - "mobile": Visible only on mobile devices.
   */
  searchButtonVisibility?: "all" | "desktop" | "mobile";
};

const FLEXIBLE_DESKTOP_CLASSES = "hidden md:flex flex-1 items-center h-full";

const Header: React.FC<HeaderProps> = ({
  searchBar,
  searchButton,
  logoHref,
  headerLinks,
  nav,
  mobileNav,
  sessionState,
  themedScrollpoints = [],
  searchButtonVisibility = "all",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [scrollpointClasses, setScrollpointClasses] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setFadingOut(true);

    setTimeout(() => {
      setShowMenu(false);
      setFadingOut(false);
    }, 150);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1040) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      for (const scrollpoint of themedScrollpoints) {
        const element = document.getElementById(scrollpoint.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= HEADER_HEIGHT && rect.bottom >= HEADER_HEIGHT) {
            setScrollpointClasses(scrollpoint.className);
            return;
          }
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 150);

    handleScroll();

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [themedScrollpoints]);

  const wrappedSearchButton = useMemo(
    () =>
      searchButton ? (
        <div className="text-neutral-1300 dark:text-neutral-000 flex items-center p-6">
          {searchButton}
        </div>
      ) : null,
    [searchButton],
  );

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 w-full z-10 bg-neutral-000 dark:bg-neutral-1300 border-b border-neutral-300 transition-colors px-24 md:px-64",
          scrollpointClasses,
        )}
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="flex items-center h-full">
          <nav className="flex flex-1 h-full items-center">
            {(["light", "dark"] as Theme[]).map((theme) => (
              <Logo
                key={theme}
                href={logoHref}
                theme={theme}
                additionalLinkAttrs={{
                  className: cn("h-full focus-base rounded mr-32 w-[108px]", {
                    "flex dark:hidden": theme === "light",
                    "hidden dark:flex": theme === "dark",
                  }),
                }}
              />
            ))}
            <div className={FLEXIBLE_DESKTOP_CLASSES}>{nav}</div>
          </nav>
          <div className="flex md:hidden flex-1 items-center justify-end gap-24 h-full">
            {searchButtonVisibility !== "desktop" ? wrappedSearchButton : null}
            <button
              className="cursor-pointer focus-base rounded flex items-center"
              onClick={() => setShowMenu(!showMenu)}
              aria-expanded={showMenu}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <Icon
                name={
                  showMenu
                    ? "icon-gui-x-mark-outline"
                    : "icon-gui-bars-3-outline"
                }
                additionalCSS="text-neutral-1300 dark:text-neutral-000"
                size="1.5rem"
              />
            </button>
          </div>
          {searchBar ? (
            <div className={cn(FLEXIBLE_DESKTOP_CLASSES, "justify-center")}>
              {searchBar}
            </div>
          ) : null}
          <HeaderLinks
            className={FLEXIBLE_DESKTOP_CLASSES}
            headerLinks={headerLinks}
            sessionState={sessionState}
            searchButton={wrappedSearchButton}
            searchButtonVisibility={searchButtonVisibility}
          />
        </div>
      </header>
      {showMenu ? (
        <>
          <div
            className={cn(
              "fixed inset-0 bg-neutral-1300 dark:bg-neutral-1300",
              {
                "animate-[fade-in-ten-percent_150ms_ease-in-out_forwards]":
                  !fadingOut,
                "animate-[fade-out-ten-percent_150ms_ease-in-out_forwards]":
                  fadingOut,
              },
            )}
            onClick={closeMenu}
            onKeyDown={(e) => e.key === "Escape" && closeMenu()}
            role="presentation"
          />
          <div
            id="mobile-menu"
            className="md:hidden fixed flex flex-col top-[76px] overflow-y-hidden left-0 right-0 mx-12 bg-neutral-000 dark:bg-neutral-1300 rounded-2xl ui-shadow-lg-medium z-20"
            style={{
              maxHeight: componentMaxHeight(
                HEADER_HEIGHT,
                HEADER_BOTTOM_MARGIN,
              ),
            }}
            ref={menuRef}
            role="navigation"
          >
            {mobileNav}
            <HeaderLinks
              headerLinks={headerLinks}
              sessionState={sessionState}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Header;
