import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";

type ExpanderProps = {
  heightThreshold?: number;
  className?: string;
  fadeClassName?: string;
  controlsClassName?: string;
  controlsOpenedLabel?: string;
  controlsClosedLabel?: string;
};

const Expander = ({
  heightThreshold = 200,
  className,
  fadeClassName,
  controlsClassName,
  controlsOpenedLabel,
  controlsClosedLabel,
  children,
}: PropsWithChildren<ExpanderProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(heightThreshold);
  const [height, setHeight] = useState<number | "auto">(heightThreshold);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (innerRef.current) {
      setContentHeight(innerRef.current.clientHeight);
    }

    if (contentHeight < heightThreshold) {
      setHeight("auto");
    } else if (expanded) {
      setHeight(contentHeight);
    } else {
      setHeight(heightThreshold);
    }

    setShowControls(contentHeight >= heightThreshold);
  }, [contentHeight, heightThreshold, expanded]);

  useEffect(() => {
    const onResize = throttle(() => {
      if (innerRef.current) {
        setContentHeight(innerRef.current.clientHeight);
      }
    }, 250);

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div
        style={{ height }}
        data-testid="expander-container"
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
          data-testid="expander-controls"
          className={`mt-16 cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light ${controlsClassName ?? ""}`}
        >
          {expanded
            ? (controlsOpenedLabel ?? "View less -")
            : (controlsClosedLabel ?? "View all +")}
        </div>
      )}
    </>
  );
};

export default Expander;
