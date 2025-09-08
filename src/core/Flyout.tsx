import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import cn from "./utils/cn";
import { componentMaxHeight, HEADER_HEIGHT } from "./utils/heights";

/**
 * Props for the Flyout component.
 */
type FlyoutProps = {
  /**
   * Array of menu items to be displayed in the flyout.
   */
  menuItems: {
    /**
     * Name for the menu item.
     */
    name: string;
    /**
     * Optional content to be displayed in the flyout panel.
     */
    content?: React.ReactNode;
    /**
     * Optional link for the menu item.
     */
    link?: string;
    /**
     * Optional styling for the flyout panel.
     */
    panelClassName?: string;
  }[];
  /**
   * Optional class name for the flyout container.
   */
  className?: string;
  /**
   * Optional class name for the flyout element.
   */
  flyOutClassName?: string;
  /**
   * Optional class name for the menu link.
   */
  menuLinkClassName?: string;
  /**
   * Optional class name for the viewport.
   */
  viewPortClassName?: string;
};

const DEFAULT_MENU_LINK_STYLING =
  "ui-text-label3 font-bold text-ably-secondary hover:text-ably-primary px-3 py-2 flex items-center justify-between";
const DEFAULT_VIEWPORT_STYLING =
  "relative overflow-hidden w-full h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] transition-[width,_height] duration-300 data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in sm:w-[var(--radix-navigation-menu-viewport-width)]";
const PANEL_ANIMATION =
  "data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left";

const FlyOverlay = ({
  className,
  fadingOut,
}: {
  className: string;
  fadingOut: boolean;
}) => (
  <div
    className={cn(
      "absolute left-0 right-0 h-screen w-full opacity-0",
      {
        "animate-[fade-in-ten-percent_150ms_ease-in-out_forwards]": !fadingOut,
        "animate-[fade-out-ten-percent_150ms_ease-in-out_forwards]": fadingOut,
      },
      className,
    )}
    style={{ height: componentMaxHeight(HEADER_HEIGHT), top: HEADER_HEIGHT }}
  ></div>
);

const Flyout = ({
  menuItems,
  className,
  flyOutClassName,
  menuLinkClassName,
  viewPortClassName,
}: FlyoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const closeMenu = () => {
    setFadingOut(true);

    setTimeout(() => {
      setIsOpen(false);
      setFadingOut(false);
    }, 150);
  };

  return (
    <>
      <NavigationMenu
        className={cn(className, "flex w-full")}
        onValueChange={(val) => (val ? setIsOpen(true) : closeMenu())}
        delayDuration={0}
      >
        <NavigationMenuList className="flex list-none center">
          {menuItems.map(({ name, content, link, panelClassName }) =>
            content ? (
              <NavigationMenuItem key={name}>
                <NavigationMenuTrigger
                  onClick={(event) => event.preventDefault()}
                  className={cn(
                    "group outline-none focus:outline-none select-none cursor-pointer relative",
                    "rounded-md hover:bg-ably-primary-inverse-accent",
                    "[&[data-state=open]]:bg-ably-primary-inverse-accent",
                    "[&[data-state=open]]:text-ably-primary",
                    DEFAULT_MENU_LINK_STYLING,
                    menuLinkClassName,
                  )}
                >
                  {name}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    "absolute right-0 top-0 p-6 z-10",
                    PANEL_ANIMATION,
                    panelClassName,
                  )}
                >
                  {content}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuLink
                key={name}
                href={link}
                className={cn(DEFAULT_MENU_LINK_STYLING, menuLinkClassName)}
              >
                {name}
              </NavigationMenuLink>
            ),
          )}
        </NavigationMenuList>

        <div className={cn("absolute top-full", flyOutClassName)}>
          <NavigationMenuViewport
            className={cn(DEFAULT_VIEWPORT_STYLING, viewPortClassName)}
          />
        </div>
      </NavigationMenu>
      {isOpen ? (
        <FlyOverlay
          className="bg-neutral-1300 opacity-10 z-20 h-screen mix-blend-multiply"
          fadingOut={fadingOut}
        />
      ) : null}
    </>
  );
};

export default Flyout;
