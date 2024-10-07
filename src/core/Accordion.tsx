import React, { useState, ReactNode, useRef, useEffect } from "react";
import Icon from "./Icon";
import type { IconName } from "./Icon/types";
import type { ColorClass } from "./styles/colors/types";
import type {
  AccordionData,
  AccordionIcons,
  AccordionOptions,
  AccordionTheme,
  AccordionThemeColors,
} from "./Accordion/types";

type AccordionRowProps = {
  children: ReactNode;
  name: string;
  onClick: () => void;
  open: boolean;
  rowIcon?: IconName;
  theme: AccordionTheme;
  toggleIcons: AccordionIcons;
  options?: AccordionOptions;
};

export type AccordionProps = {
  className?: string;
  data: AccordionData[];
  icons?: AccordionIcons;
  id?: string;
  theme?: AccordionTheme;
  options?: AccordionOptions;
};

const themeClasses: Record<AccordionTheme, AccordionThemeColors> = {
  dark: {
    bg: "bg-neutral-1200",
    hoverBg: "hover:bg-neutral-1100",
    text: "text-white",
    toggleIconColor: "text-orange-600",
    selectableBg: "bg-neutral-300",
    selectableText: "text-neutral-1300",
  },
  light: {
    bg: "bg-neutral-200",
    hoverBg: "hover:bg-neutral-300",
    text: "text-neutral-1300",
    toggleIconColor: "text-neutral-1000",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-white",
  },
  transparent: {
    bg: "bg-transparent",
    hoverBg: "hover:bg-transparent",
    text: "text-neutral-1000",
    toggleIconColor: "text-dark-grey",
    border: "border-neutral-500 border-b last:border-none",
  },
  darkTransparent: {
    bg: "bg-transparent",
    hoverBg: "hover:bg-transparent",
    text: "text-neutral-000",
    toggleIconColor: "text-orange-600",
    border: "border-neutral-900 border-b last:border-none",
  },
  static: {
    bg: "bg-neutral-200",
    hoverBg: "hover:bg-neutral-200",
    text: "text-neutral-1300",
    toggleIconColor: "text-neutral-200",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-white",
  },
  darkStatic: {
    bg: "bg-neutral-1200",
    hoverBg: "hover:bg-neutral-1200",
    text: "text-white",
    toggleIconColor: "text-neutral-1200",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-neutral-1300",
  },
};

const isNonTransparentTheme = (theme: AccordionTheme) =>
  !["transparent", "darkTransparent"].includes(theme);

const isStaticTheme = (theme: AccordionTheme) =>
  ["static", "darkStatic"].includes(theme);

const AccordionRow = ({
  name,
  children,
  onClick,
  open,
  rowIcon,
  options,
  toggleIcons,
  theme,
}: AccordionRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (rowRef.current) {
        setContentHeight(rowRef.current.scrollHeight + 16);
      }
    });

    if (rowRef.current) {
      resizeObserver.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        resizeObserver.unobserve(rowRef.current);
      }
    };
  }, []);

  const { selectable, sticky } = options || {};

  const {
    text,
    bg,
    hoverBg,
    toggleIconColor,
    selectableBg,
    selectableText,
    border,
  } = themeClasses[theme];

  const bgClasses: string =
    (selectable && open && selectableBg) || `${bg} ${hoverBg}`;

  const textClass: ColorClass = (selectable && open && selectableText) || text;

  return (
    <div className={`${border ?? ""}`}>
      <button
        type="button"
        {...(!isStaticTheme(theme) ? { onClick } : {})}
        className={`flex w-full ${sticky ? "sticky top-0" : ""} focus:outline-none py-16 rounded-lg ui-text-p1 font-bold text-left items-center gap-12 ${isNonTransparentTheme(theme) ? "px-16 mb-16" : ""} ${isStaticTheme(theme) ? "pointer-events-none" : ""} transition-colors ${bgClasses} ${textClass}`}
      >
        {rowIcon ? <Icon name={rowIcon} color={textClass} size="32" /> : null}
        <span>{name}</span>
        {!selectable ? (
          <span className="flex-1 justify-end flex items-center">
            <Icon
              name={open ? toggleIcons.open.name : toggleIcons.closed.name}
              color={toggleIconColor}
              size="16"
            />{" "}
          </span>
        ) : null}
      </button>
      <div
        className={`ui-text-p2 transition-[max-height] duration-500 overflow-y-hidden`}
        style={{ maxHeight: open ? contentHeight : 0 }}
        ref={rowRef}
      >
        <div className="pb-16">{children}</div>
      </div>
    </div>
  );
};

const Accordion = ({
  data,
  theme = "transparent",
  id = "id-accordion",
  className = "",
  icons = {
    closed: { name: "icon-gui-plus" },
    open: { name: "icon-gui-minus" },
  },
  options,
}: AccordionProps) => {
  const { defaultOpenIndexes, autoClose, fullyOpen } = options || {};
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndexes ?? [],
  );

  const handleSetIndex = (index: number) => {
    const currentIndexIsOpen = openIndexes.includes(index);

    if (autoClose) {
      setOpenIndexes(currentIndexIsOpen ? [] : [index]);
    } else {
      setOpenIndexes(
        currentIndexIsOpen
          ? openIndexes.filter((i) => i !== index)
          : [...openIndexes, index],
      );
    }
  };

  return (
    <div className={className} id={id}>
      {data.map((item, currentIndex) => {
        return (
          <AccordionRow
            key={item.name}
            name={item.name}
            rowIcon={item.icon}
            open={fullyOpen ?? openIndexes.includes(currentIndex)}
            onClick={() => handleSetIndex(currentIndex)}
            toggleIcons={icons}
            theme={theme}
            options={options}
          >
            {item.content}
          </AccordionRow>
        );
      })}
    </div>
  );
};

export default Accordion;
