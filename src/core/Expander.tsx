import React, {
  PropsWithChildren,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import cn from "./utils/cn";
import { useContentHeight } from "./hooks/use-content-height";

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
  const [expanded, setExpanded] = useState(false);

  const contentHeight = useContentHeight(innerRef, heightThreshold);

  const showControls = useMemo(
    () => contentHeight >= heightThreshold,
    [contentHeight, heightThreshold],
  );

  const height = useMemo(
    () =>
      contentHeight < heightThreshold
        ? "auto"
        : expanded
          ? contentHeight
          : heightThreshold,
    [contentHeight, heightThreshold, expanded],
  );

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
              "cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light focus-base transition-colors",
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
