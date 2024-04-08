import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import Icon from "./Icon";

type TooltipProps = {
  triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  tooltipProps?: HTMLAttributes<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = ({
  children,
  triggerProps,
  tooltipProps,
  ...rest
}: PropsWithChildren<TooltipProps>) => {
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
    <div
      {...rest}
      className={`relative inline-block align-top h-16 ${
        rest?.className ?? ""
      }`}
    >
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        type="button"
        ref={reference}
        aria-describedby="tooltip"
        {...triggerProps}
        className={`ml-8 p-0 relative top-1 focus:outline-none ${
          triggerProps?.className ?? ""
        }`}
      >
        <Icon name="icon-gui-info" size="1rem" />
      </button>

      {open ? (
        <div
          role="tooltip"
          ref={floating}
          style={{
            top: -position.y,
            left: -position.x,
            boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
          }}
          {...tooltipProps}
          className={`bg-light-grey p-12 rounded pointer-events-none absolute z-20 ${
            tooltipProps?.className ?? ""
          }`}
        >
          <div className="w-256">{children}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Tooltip;
