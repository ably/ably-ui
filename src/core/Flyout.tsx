import * as React from "react";
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

const Flyout = ({
  menuItems,
  className,
  flyOutClassName,
  menuLinkClassName,
  viewPortClassName,
}: {
  menuItems: {
    label: string;
    content?: React.ReactNode;
    link?: string;
    panelStyling?: string;
  }[];
  className?: string;
  flyOutClassName?: string;
  menuLinkClassName?: string;
  viewPortClassName?: string;
}) => {
  const DEFAULT_MENU_LINK_STYLING =
    "ui-text-menu3 font-bold text-neutral-1000 dark:neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-1200 hover:text-neutral-1300 dark:hover:text-neutral-000 px-12 py-8 flex items-center justify-between";
  const DEFAULT_VIEWPORT_STYLING =
    "relative overflow-hidden w-full h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] transition-[width,_height] duration-300 data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in sm:w-[var(--radix-navigation-menu-viewport-width)]";

  return (
    <NavigationMenu className={cn(className, "flex w-full relative")}>
      <NavigationMenuList className="flex list-none center">
        {menuItems.map(({ label, content, link, panelStyling }) =>
          content ? (
            <NavigationMenuItem key={label}>
              <NavigationMenuTrigger
                className={cn(
                  "group outline-none focus:outline-none select-none cursor-pointer",
                  DEFAULT_MENU_LINK_STYLING,
                  menuLinkClassName,
                )}
              >
                {label}
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={cn(
                  "absolute inset-x-0 top-0 p-24 z-10",
                  panelStyling,
                )}
              >
                {content}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuLink key={label}>
              <a
                href={link}
                className={cn(DEFAULT_MENU_LINK_STYLING, menuLinkClassName)}
              >
                {label}
              </a>
            </NavigationMenuLink>
          ),
        )}
      </NavigationMenuList>

      <div
        className={cn("absolute left-0 top-full flex w-full", flyOutClassName)}
      >
        <NavigationMenuViewport
          className={cn(DEFAULT_VIEWPORT_STYLING, viewPortClassName)}
        />
      </div>
    </NavigationMenu>
  );
};

export default Flyout;
