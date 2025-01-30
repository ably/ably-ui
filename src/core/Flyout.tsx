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

const NavigationMenuDemo = ({
  menuItems,
  navMenuStyling,
  flyOutStyling,
}: {
  menuItems: {
    label: string;
    content?: React.ReactNode;
    link?: string;
    panelStyling?: string;
  }[];
  navMenuStyling?: string;
  flyOutStyling?: string;
}) => {
  const menuLinkStyles =
    "ui-text-menu3 text-neutral-1000 font-bold px-12 py-8 hover:bg-neutral-100 hover:text-neutral-1300 cursor-pointer flex items-center";
  const viewPortStyling =
    "relative overflow-hidden w-full h-[var(--radix-navigation-menu-viewport-height)] origin-[top_center] transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]";
  const boxShadowViewport =
    "shadow-[0_201px_56px_0_rgba(20,25,36,0),0_129px_51px_0_rgba(20,25,36,0.02),0_72px_43px_0_rgba(20,25,36,0.06),0_32px_32px_0_rgba(20,25,36,0.10),0_8px_18px_0_rgba(20,25,36,0.12)]";

  return (
    <NavigationMenu className={cn(navMenuStyling, "flex w-full relative")}>
      <NavigationMenuList className="flex list-none center">
        {menuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.label}>
            {menuItem.content ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    menuLinkStyles,
                    "group outline-none focus:outline-none select-none flex items-center justify-between",
                  )}
                >
                  {menuItem.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    menuItem.panelStyling,
                    "absolute left-0 top-0 p-24 z-10",
                  )}
                >
                  {menuItem.content}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink>
                <a href={menuItem.link} className={menuLinkStyles}>
                  {menuItem.label}
                </a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div
        className={cn("absolute left-0 top-full flex w-full", flyOutStyling)}
      >
        <NavigationMenuViewport
          className={cn(
            viewPortStyling,
            boxShadowViewport,
            "border border-neutral-000 rounded-2xl mt-8",
          )}
        />
      </div>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
