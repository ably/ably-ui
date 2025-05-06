import React, {
  ReactNode,
  useMemo,
  useState,
  forwardRef,
  useEffect,
} from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as RadixAccordion,
} from "@radix-ui/react-accordion";

import Icon from "./Icon";
import type { IconName } from "./Icon/types";
import type {
  AccordionData,
  AccordionIcons,
  AccordionOptions,
  AccordionTheme,
} from "./Accordion/types";
import {
  themeClasses,
  isNonTransparentTheme,
  isStaticTheme,
} from "./Accordion/utils";
import cn from "./utils/cn";

type AccordionRowProps = {
  children: ReactNode;
  name: string;
  rowIcon?: IconName;
  theme: AccordionTheme;
  toggleIcons: AccordionIcons;
  options?: AccordionOptions;
  index: number;
  onClick: () => void;
  openRowValues: string[];
  rowInteractive?: boolean;
};

export type AccordionProps = {
  /**
   * The data for the accordion items.
   */
  data: AccordionData[];

  /**
   * Icons for the accordion toggle.
   */
  icons?: AccordionIcons;

  /**
   * Theme for the accordion.
   */
  theme?: AccordionTheme;

  /**
   * Options for the accordion behavior.
   */
  options?: AccordionOptions;
} & React.HTMLAttributes<HTMLDivElement>;

const AccordionRow = ({
  name,
  children,
  rowIcon,
  options,
  toggleIcons,
  theme,
  index,
  onClick,
  openRowValues,
  rowInteractive = true,
}: AccordionRowProps) => {
  const { selectable, sticky } = options || {};
  const rowKey = `accordion-item-${index}`;
  const isOpen = openRowValues.includes(rowKey);

  const {
    text,
    bg,
    hoverBg,
    selectableBg,
    selectableText,
    border,
    toggleIconColor,
  } = themeClasses[theme];

  const textClass = (selectable && isOpen && selectableText) || text;

  return (
    <AccordionItem
      value={rowKey}
      className={cn({
        [`${border}`]: border && !options?.hideBorders,
      })}
    >
      <AccordionTrigger
        onClick={onClick}
        className={cn({
          "flex w-full group/accordion-trigger py-16 ui-text-p1 font-bold text-left items-center gap-12 transition-colors focus:outline-none":
            true,
          "px-16 mb-16 rounded-lg": isNonTransparentTheme(theme),
          "px-0 rounded-none": !isNonTransparentTheme(theme),
          "pointer-events-none focus-visible:outline-none":
            isStaticTheme(theme),
          "focus-base": !isStaticTheme(theme),
          "sticky top-0": sticky,
          [`${bg} ${hoverBg} ${text}`]: !(selectable && isOpen),
          [`${selectableBg} ${selectableText}`]: selectable && isOpen,
          [options?.headerCSS ?? ""]: options?.headerCSS,
          [options?.selectedHeaderCSS ?? ""]:
            options?.selectedHeaderCSS && isOpen,
        })}
      >
        {rowIcon ? (
          <Icon
            name={rowIcon}
            color={textClass}
            size={options?.rowIconSize ?? "32px"}
          />
        ) : null}
        <span>{name}</span>
        {!selectable && !isStaticTheme(theme) && rowInteractive ? (
          <span className="flex-1 justify-end flex items-center">
            <Icon
              name={isOpen ? toggleIcons.open.name : toggleIcons.closed.name}
              color={toggleIconColor}
              size={options?.iconSize ?? "16px"}
            />
          </span>
        ) : null}
      </AccordionTrigger>
      {rowInteractive && (
        <AccordionContent
          className={cn({
            "ui-text-p2 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down":
              true,
            [options?.contentCSS ?? ""]: options?.contentCSS,
          })}
        >
          <div className="pb-16">{children}</div>
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      data,
      theme = "transparent",
      icons = {
        closed: { name: "icon-gui-plus-outline" },
        open: { name: "icon-gui-minus-outline" },
      },
      options,
      ...props
    },
    ref,
  ) => {
    const openIndexes = useMemo(() => {
      const indexValues = data.map((_, i) => `accordion-item-${i}`);
      return options?.fullyOpen
        ? indexValues
        : indexValues.filter((_, index) =>
            options?.defaultOpenIndexes?.includes(index),
          );
    }, [options?.defaultOpenIndexes, options?.fullyOpen, data.length]);

    const [openRowValues, setOpenRowValues] = useState<string[]>(openIndexes);

    useEffect(() => {
      setOpenRowValues(openIndexes);
    }, [openIndexes]);

    const innerAccordion = data.map((item, index) => (
      <AccordionRow
        key={item.name}
        name={item.name}
        rowIcon={item.icon}
        toggleIcons={icons}
        theme={theme}
        options={options}
        index={index}
        onClick={() => {
          item.onClick?.(index);
        }}
        openRowValues={openRowValues}
        rowInteractive={item.interactive}
      >
        {item.content}
      </AccordionRow>
    ));

    return (
      <div ref={ref} {...props}>
        {options?.autoClose ? (
          <RadixAccordion
            type="single"
            collapsible
            value={openRowValues[0]}
            onValueChange={(values) => setOpenRowValues([values])}
          >
            {innerAccordion}
          </RadixAccordion>
        ) : (
          <RadixAccordion
            type="multiple"
            value={openRowValues}
            onValueChange={(values) => setOpenRowValues(values)}
          >
            {innerAccordion}
          </RadixAccordion>
        )}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export default Accordion;
