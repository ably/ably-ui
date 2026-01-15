import React, { ReactNode } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import Icon from "./Icon";
import { IconName } from "./Icon/types";
import cn from "./utils/cn";

type DropdownMenuProps = {
  /**
   * The content to be displayed within the dropdown menu.
   */
  children: ReactNode;
};

type TriggerProps = {
  /**
   * The content to be displayed within the trigger element.
   */
  children: ReactNode;
  /**
   * Additional class names to apply to the trigger element.
   */
  triggerClassNames?: string;
  /**
   * A description for the trigger element, used for accessibility purposes.
   */
  description?: string;
};

type ContentProps = {
  /**
   * The content to be displayed within the dropdown menu.
   */
  children: ReactNode;
  /**
   * The position of the dropdown menu relative to the trigger element.
   * Defaults to "right".
   */
  anchorPosition?: string;
  /**
   * Additional class names to apply to the content container.
   */
  contentClassNames?: string;
};

type LinkProps = {
  url: string;
  title: string;
  subtitle?: string;
  iconName?: IconName;
  children?: ReactNode;
};

// Internal state to track open/closed for chevron icon
const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <RadixDropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
      <DropdownMenuContext.Provider value={{ isOpen }}>
        <div id="dropdown-menu" className="relative">
          {children}
        </div>
      </DropdownMenuContext.Provider>
    </RadixDropdownMenu.Root>
  );
};

// Context to share isOpen state for chevron icon
const DropdownMenuContext = React.createContext<{ isOpen: boolean }>({
  isOpen: false,
});

const Trigger = ({
  children,
  triggerClassNames = "",
  description,
}: TriggerProps) => {
  const { isOpen } = React.useContext(DropdownMenuContext);

  return (
    <RadixDropdownMenu.Trigger asChild>
      <button
        id="menu-trigger"
        aria-label={description}
        className={cn(
          "flex items-center ui-text-label3 font-bold text-neutral-1000 dark:text-neutral-300 focus:outline-none",
          triggerClassNames,
        )}
      >
        {children}
        <Icon
          name={
            isOpen ? "icon-gui-chevron-up-mini" : "icon-gui-chevron-down-mini"
          }
          size="1.25rem"
          additionalCSS="text-neutral-1300 dark:text-neutral-000"
        />
      </button>
    </RadixDropdownMenu.Trigger>
  );
};

const Content = ({
  children,
  anchorPosition = "right",
  contentClassNames,
}: ContentProps) => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        id="menu-content"
        role="menu"
        align={anchorPosition === "right" ? "end" : "start"}
        sideOffset={0}
        className={cn(
          "flex flex-col z-10 border border-neutral-400 dark:border-neutral-900 bg-neutral-000 dark:bg-neutral-1300 rounded-lg ui-shadow-md-soft",
          // Animation classes for smooth open/close
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
          contentClassNames,
        )}
        onCloseAutoFocus={(e) => {
          // Prevent focus stealing when closing the menu
          e.preventDefault();
        }}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
};

const Link = ({ url, title, subtitle, iconName, children }: LinkProps) => {
  return (
    <RadixDropdownMenu.Item asChild>
      <a
        href={url}
        className="menu-link group block p-2 rounded-lg
        hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100 text-neutral-1000 dark:text-neutral-300 hover:text-neutral-1300 hover:dark:text-neutral-000
        focus:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 data-[highlighted]:text-neutral-1300 dark:data-[highlighted]:text-neutral-000"
      >
        <p className="mb-1">
          {title}
          {iconName ? (
            <Icon
              name={iconName}
              size="1rem"
              additionalCSS="align-middle ml-2 relative -top-px -left-1 text-neutral-1300 dark:text-neutral-000"
            />
          ) : null}
        </p>
        {subtitle ? <p className="ui-text-p3 mb-4">{subtitle}</p> : null}
        {children}
      </a>
    </RadixDropdownMenu.Item>
  );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Link = Link;

export default DropdownMenu;
