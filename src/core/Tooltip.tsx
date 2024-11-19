import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";

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
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>
          <div
            {...rest}
            className={`inline-flex ml-8 ${rest?.className ?? ""}`}
          >
            <button {...triggerProps}>
              {triggerElement ?? (
                <Icon
                  name="icon-gui-info"
                  color="text-neutral-800 dark:text-neutral-500"
                  size="1rem"
                />
              )}
            </button>
          </div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side="top"
            className="data-[side=top]:animate-tooltip-entry"
            sideOffset={5}
          >
            <div
              className={clsx(
                "max-w-[240px] w-auto bg-neutral-1000 dark:bg-neutral-300 text-neutral-200 dark:text-neutral-1000 ui-text-p3 font-medium p-16 rounded-lg absolute",
                { "pointer-events-none": !interactive },
                tooltipProps?.className,
              )}
            >
              {children}
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
