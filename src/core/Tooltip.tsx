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
import cn from "./utils/cn";
import { IconSize } from "./Icon/types";

type TooltipProps = {
  triggerElement?: ReactNode;
  triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  tooltipProps?: HTMLAttributes<HTMLDivElement>;
  interactive?: boolean;
  iconSize?: IconSize;
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = ({
  children,
  triggerElement,
  triggerProps,
  tooltipProps,
  interactive = false,
  iconSize = "1rem",
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
    <div {...rest} className={cn("inline-flex ml-2", rest?.className)}>
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
        className={cn(
          "p-0 relative focus:outline-none h-[1rem]",
          triggerProps?.className,
        )}
      >
        {triggerElement ?? (
          <Icon
            name="icon-gui-information-circle-outline"
            color="text-ably-label"
            additionalCSS="hover:text-ably-secondary"
            size={iconSize}
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
              className={cn(
                "bg-ably-secondary-inverse text-neutral-1100 dark:text-neutral-200 ui-text-p3 font-medium p-4",
                { "pointer-events-none": !interactive },
                "rounded-lg absolute",
                tooltipProps?.className,
                { "animate-[tooltipExit_0.25s_ease-in-out]": fadeOut },
                { "animate-[tooltipEntry_0.25s_ease-in-out]": !fadeOut },
              )}
            >
              <div className="max-w-60 w-auto">{children}</div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
};

export default Tooltip;
