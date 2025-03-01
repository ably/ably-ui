import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
  MouseEvent,
  RefObject,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

type TooltipProps = {
  triggerElement?: ReactNode;
  triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  tooltipProps?: HTMLAttributes<HTMLDivElement>;
  interactive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = ({
  children,
  triggerElement,
  triggerProps,
  tooltipProps,
  interactive = false,
  ...rest
}: PropsWithChildren<TooltipProps>) => {
  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, orientation: "top" });
  const offset = 8;
  const reference = useRef<HTMLButtonElement>(null);
  const floating = useRef<HTMLDivElement>(null);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      const floatingRect = floating.current?.getBoundingClientRect();
      const referenceRect = reference.current?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let orientation = "top";

      if (floatingRect && referenceRect) {
        let x =
          referenceRect.left +
          referenceRect.width / 2 -
          floatingRect.width / 2 +
          window.scrollX;
        let y =
          referenceRect.top - floatingRect.height - offset + window.scrollY;

        // Adjust if tooltip goes off the right edge
        if (x + floatingRect.width > viewportWidth + window.scrollX) {
          x = viewportWidth + window.scrollX - floatingRect.width - offset;
          orientation = "left";
        }

        // Adjust if tooltip goes off the left edge
        if (x < window.scrollX) {
          x = window.scrollX + offset;
          orientation = "right";
        }

        // Adjust if tooltip goes off the top edge
        if (y < window.scrollY) {
          y = referenceRect.bottom + offset + window.scrollY;
          orientation = "bottom";
        }

        // Adjust if tooltip goes off the bottom edge
        if (y + floatingRect.height > viewportHeight + window.scrollY) {
          y = referenceRect.top - floatingRect.height - offset + window.scrollY;
        }

        setPosition({ x, y, orientation });
      }
    } else {
      setPosition({ x: 0, y: 0, orientation: "top" });
    }

    return () => {
      if (fadeOutTimeoutRef.current !== null) {
        clearTimeout(fadeOutTimeoutRef.current);
      }
    };
  }, [open]);

  const initiateFadeOut = () => {
    setFadeOut(true);
    fadeOutTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setFadeOut(false);
    }, 250);
  };

  const cursorTowardsTooltip = (
    event: MouseEvent,
    ref: RefObject<HTMLButtonElement>,
  ) => {
    if (!ref.current) {
      return false;
    }

    const { clientX, clientY } = event;
    const { x, y, width, height } = ref.current.getBoundingClientRect();
    const { orientation } = position;

    switch (orientation) {
      case "top":
        return clientX >= x && clientX <= x + width && clientY < y;
      case "left":
        return clientY >= y && clientY <= y + height && clientX < x;
      case "right":
        return clientY >= y && clientY <= y + height && clientX > x + width;
      case "bottom":
        return clientX >= x && clientX <= x + width && clientY > y + height;
      default:
        return false;
    }
  };

  const fadeOutIfNotWithinTrigger = (event: MouseEvent) => {
    if (!reference.current) return;

    const { clientX, clientY } = event;
    const { x, y, width, height } = reference.current.getBoundingClientRect();
    const withinBounds =
      clientX >= x &&
      clientX <= x + width &&
      clientY >= y &&
      clientY <= y + height;

    if (!withinBounds) {
      initiateFadeOut();
    }
  };

  return (
    <div {...rest} className={`inline-flex ml-8 ${rest?.className ?? ""}`}>
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={(event) => {
          if (!interactive || !cursorTowardsTooltip(event, reference)) {
            initiateFadeOut();
          }
        }}
        type="button"
        ref={reference}
        aria-describedby="tooltip"
        {...triggerProps}
        className={`p-0 relative focus:outline-none h-[1rem] ${
          triggerProps?.className ?? ""
        }`}
      >
        {triggerElement ?? (
          <Icon
            name="icon-gui-information-circle-micro"
            color="text-neutral-800 dark:text-neutral-500"
            size="1rem"
          />
        )}
      </button>

      {open
        ? createPortal(
            <div
              role="tooltip"
              ref={floating}
              onMouseLeave={(event) =>
                setTimeout(() => fadeOutIfNotWithinTrigger(event), 250)
              }
              style={{
                top: position.y,
                left: position.x,
                zIndex: 1000,
                boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              {...tooltipProps}
              className={`bg-neutral-1000 dark:bg-neutral-300 text-neutral-200 dark:text-neutral-1000 ui-text-p3 font-medium p-16 ${interactive ? "" : "pointer-events-none"} rounded-lg absolute ${
                tooltipProps?.className ?? ""
              } ${fadeOut ? "animate-[tooltipExit_0.25s_ease-in-out]" : "animate-[tooltipEntry_0.25s_ease-in-out]"}`}
            >
              <div className="max-w-[240px] w-auto">{children}</div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};

export default Tooltip;
