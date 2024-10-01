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
import { ColorClass, Theme } from "./styles/colors/types";
import { determineThemeColor } from "./styles/colors/utils";

type TooltipProps = {
  triggerElement?: ReactNode;
  triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  tooltipProps?: HTMLAttributes<HTMLDivElement>;
  theme?: Theme;
  interactive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = ({
  children,
  triggerElement,
  triggerProps,
  tooltipProps,
  theme = "dark",
  interactive = false,
  ...rest
}: PropsWithChildren<TooltipProps>) => {
  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const offset = 8;
  const reference = useRef<HTMLButtonElement>(null);
  const floating = useRef<HTMLDivElement>(null);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const t = (color: ColorClass) => determineThemeColor("light", theme, color);

  useEffect(() => {
    if (open) {
      const floatingRect = floating.current?.getBoundingClientRect();
      const referenceRect = reference.current?.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

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
        }

        // Adjust if tooltip goes off the left edge
        if (x < window.scrollX) {
          x = window.scrollX + offset;
        }

        // Adjust if tooltip goes off the top edge
        if (y < window.scrollY) {
          y = referenceRect.bottom + offset + window.scrollY;
        }

        // Adjust if tooltip goes off the bottom edge
        if (y + floatingRect.height > viewportHeight + window.scrollY) {
          y = referenceRect.top - floatingRect.height - offset + window.scrollY;
        }

        setPosition({ x, y });
      }
    } else {
      setPosition({ x: 0, y: 0 });
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

  const cursorHeadsNorth = (
    event: MouseEvent,
    ref: RefObject<HTMLButtonElement>,
  ) => {
    if (ref.current) {
      const { clientX, clientY } = event;
      const { x, y, width } = ref.current.getBoundingClientRect();
      return clientX >= x && clientX <= x + width && clientY < y;
    }

    return false;
  };

  return (
    <div
      {...rest}
      className={`relative inline-block align-top h-16 ${
        rest?.className ?? ""
      }`}
    >
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={(event) => {
          if (!interactive || !cursorHeadsNorth(event, reference)) {
            initiateFadeOut();
          }
        }}
        type="button"
        ref={reference}
        aria-describedby="tooltip"
        {...triggerProps}
        className={`ml-8 p-0 relative top-1 focus:outline-none ${
          triggerProps?.className ?? ""
        }`}
      >
        {triggerElement ?? (
          <Icon
            name="icon-gui-info"
            color={`${t("text-neutral-800")}`}
            size="1rem"
          />
        )}
      </button>

      {open
        ? createPortal(
            <div
              role="tooltip"
              ref={floating}
              onMouseLeave={initiateFadeOut}
              style={{
                top: position.y,
                left: position.x,
                zIndex: 1000,
                boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              {...tooltipProps}
              className={`${t("bg-neutral-1000")} ${t("text-neutral-200")} ui-text-p3 font-medium p-16 ${interactive ? "" : "pointer-events-none"} rounded-lg absolute ${
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
