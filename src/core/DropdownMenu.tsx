import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  Dispatch,
} from "react";
import Icon from "./Icon";
import { IconName } from "./Icon/types";
import cn from "./utils/cn";

const DropdownMenuContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: () => {},
});

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

const DropdownMenu = ({ children }: DropdownMenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setOpen }}>
      <div id="dropdown-menu" className="relative" ref={ref}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

const Trigger = ({
  children,
  triggerClassNames = "",
  description,
}: TriggerProps) => {
  const { isOpen, setOpen } = useContext(DropdownMenuContext);

  return (
    <button
      id="menu-trigger"
      aria-label={description}
      role="button"
      onClick={() => setOpen(!isOpen)}
      className={cn(
        "flex items-center ui-text-label3 font-bold text-ably-secondary focus:outline-none",
        triggerClassNames,
      )}
    >
      {children}
      <Icon
        name={
          isOpen ? "icon-gui-chevron-up-mini" : "icon-gui-chevron-down-mini"
        }
        size="1.25rem"
        additionalCSS="text-ably-primary"
      />
    </button>
  );
};

const Content = ({
  children,
  anchorPosition = "right",
  contentClassNames,
}: ContentProps) => {
  const { isOpen } = useContext(DropdownMenuContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="menu-content"
      role="menu"
      className={cn(
        "flex flex-col absolute z-10 border border-neutral-400 dark:border-neutral-900 bg-ably-primary-inverse rounded-lg ui-shadow-md-soft",
        anchorPosition === "right" ? "right-0" : "left-0",
        contentClassNames,
      )}
    >
      {children}
    </div>
  );
};

const Link = ({ url, title, subtitle, iconName, children }: LinkProps) => {
  return (
    <a
      href={url}
      className="menu-link group block p-2 rounded-lg
      hover:bg-neutral-100 dark:hover:bg-neutral-1200 active:bg-neutral-200 dark:active:bg-neutral-1100 text-ably-secondary hover:text-ably-primary"
    >
      <p className="mb-1">
        {title}
        {iconName ? (
          <Icon
            name={iconName}
            size="1rem"
            additionalCSS="align-middle ml-2 relative -top-px -left-1 text-ably-primary"
          />
        ) : null}
      </p>
      {subtitle ? <p className="ui-text-p3 mb-4">{subtitle}</p> : null}
      {children}
    </a>
  );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Link = Link;

export default DropdownMenu;
