import React, { useState, useEffect, useRef, ReactNode } from "react";
import Icon from "./Icon";
import cn from "./utils/cn";
import Logo from "./Logo";
import {
  componentMaxHeight,
  HEADER_BOTTOM_MARGIN,
  HEADER_HEIGHT,
} from "./utils/heights";
import { HeaderLinks } from "./Header/HeaderLinks";

export type HeaderProps = {
  searchBar?: ReactNode;
  searchButton?: ReactNode;
  logoHref?: string;
  headerLinks?: {
    href: string;
    label: string;
    external?: boolean;
  }[];
  nav?: ReactNode;
  mobileNav?: ReactNode;
  sessionState?: {
    signedIn: boolean;
    account: {
      links: {
        dashboard: {
          href: string;
        };
      };
    };
  };
};

const Header: React.FC<HeaderProps> = ({
  searchBar,
  searchButton,
  logoHref,
  headerLinks,
  nav,
  mobileNav,
  sessionState,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // a temporary thing to test out containerised layout
  const [withContainer, setWithContainer] = useState(false);
  useEffect(() => {
    setWithContainer(
      localStorage.getItem("ably-docs-with-container") === "true",
    );
  }, []);

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

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 w-full z-10 bg-neutral-000 dark:bg-neutral-1300 border-b border-neutral-300",
          { "px-24 md:px-64": !withContainer },
        )}
        style={{ height: HEADER_HEIGHT }}
      >
        <div
          className={cn("flex items-center h-full", {
            "ui-standard-container mx-auto": withContainer,
          })}
        >
          <Logo
            href={logoHref}
            additionalLinkAttrs={{
              className: "flex h-full focus-base rounded mr-32",
            }}
          />
          <div className="flex md:hidden flex-1 items-center justify-end gap-24 h-full">
            {searchButton}
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
                size="1.5rem"
              />
            </button>
          </div>
          <div className="hidden md:flex flex-1 items-center h-full">
            {nav}
            <div className="flex-1 flex justify-center px-16">{searchBar}</div>
            <HeaderLinks
              headerLinks={headerLinks}
              sessionState={sessionState}
            />
          </div>
        </div>
      </header>
      {showMenu ? (
        <>
          <div
            className="fixed inset-0 bg-neutral-1300 dark:bg-neutral-1300 animate-[fadeInTenPercent_150ms_ease-in-out_forwards]"
            onClick={() => setShowMenu(!showMenu)}
            onKeyDown={(e) => e.key === "Escape" && setShowMenu(false)}
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
            <HeaderLinks />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Header;
