import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const Tooltip = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const offset = 8;
  const reference = useRef<HTMLButtonElement>(null);
  const floating = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const floatingRect = floating.current?.getBoundingClientRect();
      const referenceRect = reference.current?.getBoundingClientRect();

      if (floatingRect && referenceRect) {
        setPosition({
          x:
            Math.min(floatingRect.width / 2, floatingRect.left) -
            referenceRect.width / 2,
          y: Math.min(floatingRect.height, floatingRect.top) + offset,
        });
      }
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [open]);

  return (
    <div className="relative inline-block align-top h-16">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="ml-8 p-0 relative top-1 focus:outline-none"
        type="button"
        ref={reference}
        aria-describedby="tooltip"
      >
        <Icon name="icon-gui-info" size="1rem" />
      </button>

      {open ? (
        <div
          className="bg-light-grey p-12 rounded pointer-events-none absolute z-20"
          role="tooltip"
          ref={floating}
          style={{
            top: -position.y,
            left: -position.x,
            boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="w-256">{children}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Tooltip;
