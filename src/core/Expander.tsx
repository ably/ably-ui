import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

type ExpanderProps = {
  height?: number;
};

const Expander = ({
  height = 200,
  children,
}: PropsWithChildren<ExpanderProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(height);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setContentHeight(innerRef.current?.clientHeight ?? height);
  }, [height, expanded]);

  const showControls = contentHeight > height;

  return (
    <>
      <div
        style={{ height: expanded ? contentHeight : height }}
        className="overflow-hidden transition-all relative"
      >
        {showControls && !expanded && (
          <div className="h-64 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0"></div>
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
