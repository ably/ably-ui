import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type ExpanderProps = {
  heightThreshold?: number;
  className?: string;
  fadeClassName?: string;
};

const Expander = ({
  heightThreshold = 200,
  className,
  fadeClassName,
  children,
}: PropsWithChildren<ExpanderProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(false);
  const [height, setHeight] = useState<number | "auto">(heightThreshold);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const contentHeight = innerRef.current?.clientHeight ?? heightThreshold;

    if (contentHeight < heightThreshold) {
      setHeight("auto");
    } else if (expanded) {
      setHeight(contentHeight);
    } else {
      setHeight(heightThreshold);
    }

    setShowControls(contentHeight >= heightThreshold);
  }, [heightThreshold, expanded]);

  return (
    <>
      <div
        style={{ height }}
        className={`overflow-hidden transition-all relative ${className ?? ""}`}
      >
        {showControls && !expanded && (
          <div
            className={`h-64 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0 ${
              fadeClassName ?? ""
            }`}
          ></div>
        )}
        <div ref={innerRef}>{children}</div>
      </div>
      {showControls && (
        <div
          onClick={() => setExpanded(!expanded)}
          onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
          tabIndex={0}
          className="mt-16 cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light active:text-gui-blue-active-light focus:text-gui-blue-focus"
        >
          {expanded ? "View less -" : "View all +"}
        </div>
      )}
    </>
  );
};

export default Expander;
