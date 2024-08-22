import React, { useState, ReactNode, JSX } from "react";
import Icon from "./Icon";

type AccordionData = {
  name: string;
  content: ReactNode;
};

type AccordionRowProps = {
  bottomBorder?: boolean;
  topBorder?: boolean;
  active: boolean;
  last: boolean;
  name: string;
  index: number;
  children: ReactNode;
  arrowIcon?: boolean;
  setActiveIndex: (index: number) => void;
};

export type AccordionProps = {
  data: AccordionData[];
  arrowIcon?: boolean;
  topBorder?: boolean;
  bottomBorder?: boolean;
  id?: string;
  autoClose?: boolean;
  className?: string;
};

const AccordionRow = ({
  name,
  children,
  index,
  setActiveIndex,
  active,
  topBorder,
  bottomBorder,
  last,
  arrowIcon,
}: AccordionRowProps) => {
  let iconActive: JSX.Element, iconInactive: JSX.Element;
  const handleSetIndex = () => {
    setActiveIndex(index);
  };

  if (arrowIcon) {
    iconActive = (
      <Icon
        name="icon-gui-disclosure-arrow"
        color="text-dark-grey"
        size="1.5rem"
        additionalCSS="-rotate-90"
      />
    );
    iconInactive = (
      <Icon
        name="icon-gui-disclosure-arrow"
        color="text-dark-grey"
        size="1.5rem"
        additionalCSS="rotate-90"
      />
    );
  } else {
    iconActive = (
      <Icon name="icon-gui-minus" color="text-dark-grey" size="1.5rem" />
    );
    iconInactive = (
      <Icon name="icon-gui-plus" color="text-dark-grey" size="1.5rem" />
    );
  }

  return (
    <div
      className={`border-mid-grey ${last && !bottomBorder ? "" : "border-b"} ${
        topBorder ? "border-t" : ""
      }`}
    >
      <button
        type="button"
        onClick={handleSetIndex}
        className={`flex w-full px-0 focus:outline-none py-20`}
      >
        <span className="ui-text-p1 font-bold text-left mr-8">{name}</span>
        <span className="ml-auto">{active ? iconActive : iconInactive}</span>
      </button>

      <section
        className="ui-text-p2 transition-all overflow-hidden"
        style={{
          maxHeight: active ? "500px" : "0",
          paddingBottom: active ? "1.5rem" : "0",
        }}
      >
        {children}
      </section>
    </div>
  );
};

const Accordion = ({
  data,
  id = "id-accordion",
  topBorder,
  bottomBorder,
  arrowIcon,
  autoClose,
  className,
}: AccordionProps) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleSetIndex = (index: number) => {
    const currentIndexIsActive = activeIndexes.includes(index);

    if (autoClose) {
      setActiveIndexes(currentIndexIsActive ? [] : [index]);
    } else {
      setActiveIndexes(
        currentIndexIsActive
          ? activeIndexes.filter((i) => i !== index)
          : [...activeIndexes, index],
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
            arrowIcon={arrowIcon}
            index={currentIndex}
            last={data.length === currentIndex + 1}
            topBorder={topBorder && currentIndex === 0}
            bottomBorder={bottomBorder && data.length === currentIndex + 1}
            active={activeIndexes.includes(currentIndex)}
            setActiveIndex={handleSetIndex}
          >
            {item.content}
          </AccordionRow>
        );
      })}
    </div>
  );
};

export default Accordion;
