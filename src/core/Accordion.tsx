import React, { useState, ReactNode, useRef, useEffect } from "react";
import Icon from "./Icon";
import throttle from "lodash.throttle";
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
    hoverBg: "bg-neutral-1100",
    text: "text-white",
    toggleIconColor: "text-orange-600",
    selectableBg: "bg-neutral-300",
    selectableText: "text-neutral-1300",
  },
  light: {
    bg: "bg-neutral-200",
    hoverBg: "bg-neutral-300",
    text: "text-neutral-1300",
    toggleIconColor: "text-neutral-1000",
    selectableBg: "bg-neutral-1200",
    selectableText: "text-white",
  },
  transparent: {
    bg: "bg-white",
    hoverBg: "bg-white",
    text: "text-neutral-1000",
    toggleIconColor: "text-dark-grey",
  },
};

const isNonTransparentTheme = (theme: AccordionTheme) =>
  theme !== "transparent";

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
    const handleHeight = throttle(() => {
      if (rowRef.current) {
        setContentHeight(rowRef.current.scrollHeight + 16);
      }
    }, 250);

    handleHeight();

    window.addEventListener("resize", handleHeight);
    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  const { selectable, sticky } = options || {};

  const { text, bg, hoverBg, toggleIconColor, selectableBg, selectableText } =
    themeClasses[theme];

  const bgClasses: string =
    (selectable && open && selectableBg) || `${bg} hover:${hoverBg}`;

  const textClass: ColorClass = (selectable && open && selectableText) || text;

  return (
    <div
      className={`border-mid-grey border-b last:border-none ${isNonTransparentTheme(theme) ? "border-none" : ""}`}
    >
      <button
        type="button"
        onClick={onClick}
        className={`flex w-full ${sticky ? "sticky top-0" : ""} focus:outline-none py-16 rounded-lg ui-text-p1 font-bold text-left items-center gap-12 ${isNonTransparentTheme(theme) ? "px-16" : ""} transition-colors ${bgClasses} ${textClass}`}
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
        className={`ui-text-p2 transition-[max-height] duration-500 overflow-hidden ${isNonTransparentTheme(theme) ? "pt-16 px-16" : "px-0"}`}
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
  const { defaultOpenIndexes, autoClose } = options || {};
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
            open={openIndexes.includes(currentIndex)}
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
