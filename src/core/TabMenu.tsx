import React, { ReactNode, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import throttle from "lodash.throttle";
import cn from "./utils/cn";

/**
 * Props for the TabMenu component.
 */
export type TabMenuProps = {
  /**
   * An array of tabs, which can be either a string or an object with a label and an optional disabled state.
   */
  tabs: (string | { label: string; disabled?: boolean })[];

  /**
   * An optional array of React nodes representing the content for each tab.
   */
  contents?: ReactNode[];

  /**
   * An optional callback function that is called when a tab is clicked, receiving the index of the clicked tab.
   */
  tabOnClick?: (index: number) => void;

  /**
   * An optional class name to apply to each tab.
   */
  tabClassName?: string;

  /**
   * Optional configuration options for the TabMenu.
   */
  options?: {
    /**
     * The index of the tab that should be selected by default.
     */
    defaultTabIndex?: number;

    /**
     * Whether to show an underline below the selected tab.
     */
    underline?: boolean;

    /**
     * Whether to animate the transition between tabs.
     */
    animated?: boolean;

    /**
     * Whether the tab width should be flexible.
     */
    flexibleTabWidth?: boolean;

    /**
     * Whether the tab height should be flexible.
     */
    flexibleTabHeight?: boolean;
  };
};

const TabMenu: React.FC<TabMenuProps> = ({
  tabs = [],
  contents = [],
  tabOnClick,
  tabClassName,
  options,
}) => {
  const {
    defaultTabIndex = 0,
    underline = true,
    animated = true,
    flexibleTabWidth = false,
    flexibleTabHeight = false,
  } = options ?? {};

  const listRef = React.useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = React.useState({ offset: 0, width: 0 });

  useEffect(() => {
    const handleResize = throttle(() => {
      const activeTabElement =
        listRef.current?.querySelector<HTMLButtonElement>(
          `[data-state="active"]`,
        );

      if (activeTabElement) {
        updateHighlightDimensions(activeTabElement);
      }
    }, 100);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateHighlightDimensions = (element: HTMLButtonElement) => {
    const { left: parentLeft } = listRef.current?.getBoundingClientRect() ?? {};
    const { left, width } = element.getBoundingClientRect() ?? {};

    setHighlight({
      offset: (left ?? 0) - (parentLeft ?? 0),
      width: width ?? 0,
    });
  };

  const handleTabClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    tabOnClick?.(index);
    updateHighlightDimensions(event.currentTarget as HTMLButtonElement);
  };

  return (
    <Tabs.Root
      defaultValue={`tab-${defaultTabIndex}`}
      className={cn({ "h-full": flexibleTabHeight })}
    >
      <Tabs.List
        ref={listRef}
        className={cn(
          "relative",
          {
            "flex border-b border-neutral-300 dark:border-neutral-1000":
              underline,
          },
          { "h-full": flexibleTabHeight },
        )}
      >
        {tabs.map((tab, index) => (
          <Tabs.Trigger
            key={`tab-${index}`}
            className={cn(
              "lg:px-24 md:px-20 px-16 py-16 ui-text-menu1 font-bold data-[state=active]:text-neutral-1300 text-neutral-1000 dark:data-[state=active]:text-neutral-000 dark:text-neutral-300 focus:outline-gui-focus transition-colors hover:text-neutral-1300 dark:hover:text-neutral-000 active:text-neutral-900 dark:active:text-neutral-400 disabled:text-gui-unavailable dark:disabled:text-gui-unavailable-dark disabled:cursor-not-allowed",
              { "flex-1": flexibleTabWidth },
              { "h-full": flexibleTabHeight },
              tabClassName,
            )}
            value={`tab-${index}`}
            onClick={(event) => handleTabClick(event, index)}
            disabled={typeof tab === "object" ? tab.disabled : false}
          >
            {typeof tab === "object" ? tab.label : tab}
          </Tabs.Trigger>
        ))}
        <div
          className={cn(
            "absolute bottom-0 bg-neutral-1300 dark:bg-neutral-000 h-[3px] w-24",
            { "transition-[transform,width]": animated },
          )}
          style={{
            transform: `translateX(${highlight.offset}px)`,
            width: `${highlight.width}px`,
          }}
        ></div>
      </Tabs.List>
      {contents.map((content, index) => (
        <Tabs.Content key={`tab-${index}`} value={`tab-${index}`}>
          {content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabMenu;
