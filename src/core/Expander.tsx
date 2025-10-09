import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { throttle } from "es-toolkit/compat";
import cn from "./utils/cn";

type ExpanderProps = {
  heightThreshold?: number;
  className?: string;
  fadeClassName?: string;
  controlsClassName?: string;
  controlsOpenedLabel?: string | ReactNode;
  controlsClosedLabel?: string | ReactNode;
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
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (innerRef.current) {
      setContentHeight(innerRef.current.clientHeight);
    }

    setShowControls(contentHeight >= heightThreshold);
  }, [contentHeight, heightThreshold]);

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

  const height =
    contentHeight < heightThreshold
      ? "auto"
      : expanded
        ? contentHeight
        : heightThreshold;

  return (
    <RadixCollapsible.Root open={expanded} onOpenChange={setExpanded}>
      <div
        style={{ height }}
        data-testid="expander-container"
        className={cn("overflow-hidden transition-all relative", className)}
      >
        {showControls && !expanded && (
          <div
            className={cn(
              "h-16 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0",
              fadeClassName,
            )}
          ></div>
        )}
        <div ref={innerRef}>{children}</div>
      </div>
      {showControls && (
        <RadixCollapsible.Trigger asChild>
          <button
            data-testid="expander-controls"
            className={cn(
              heightThreshold === 0 && !expanded ? "" : "mt-4",
              "cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light",
              controlsClassName,
            )}
          >
            {expanded
              ? (controlsOpenedLabel ?? "View less -")
              : (controlsClosedLabel ?? "View all +")}
          </button>
        </RadixCollapsible.Trigger>
      )}
    </RadixCollapsible.Root>
  );
};

export default Expander;
