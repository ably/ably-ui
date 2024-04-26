import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type ExpanderProps = {
  height?: number;
  className?: string;
  fadeClassName?: string;
};

const Expander = ({
  height = 200,
  className,
  fadeClassName,
  children,
}: PropsWithChildren<ExpanderProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(height);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setContentHeight(innerRef.current?.clientHeight ?? height);
  }, [height, expanded]);

  const showControls = height > 0 && contentHeight > height;

  return (
    <>
      <div
        style={{ ...(height && { height: expanded ? contentHeight : height }) }}
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
