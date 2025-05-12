import React, { memo, useMemo } from "react";
import Tooltip from "../Tooltip";
import SegmentedControl from "../SegmentedControl";
import cn from "../utils/cn";
import { IconName } from "../Icon/types";

interface TooltipButtonProps {
  tooltip: string;
  active?: boolean;
  onClick: () => void;
  icon?: IconName;
  className?: string;
  children?: React.ReactNode;
  variant?: "segmented" | "icon-button";
  size?: "sm" | "md";
  alwaysShowLabel?: boolean;
}

/**
 * A unified tooltip button component that can render either a segmented control or an icon button
 */
const TooltipButton = memo(
  ({
    tooltip,
    active = false,
    onClick,
    icon,
    className,
    children,
    variant = "segmented",
    size = "sm",
    alwaysShowLabel = false,
  }: TooltipButtonProps) => {
    // Only show tooltip for inactive segmented controls or all icon buttons
    const showTooltip =
      (variant === "segmented" && !active) || variant === "icon-button";

    // Determine whether to show children based on active state and alwaysShowLabel
    const showChildren = active || alwaysShowLabel;

    // Create the button element based on variant
    const buttonElement = useMemo(() => {
      if (variant === "segmented") {
        return (
          <SegmentedControl
            size={size}
            active={active}
            onClick={onClick}
            leftIcon={icon}
            className={cn(
              "focus-base",
              active
                ? "bg-neutral-000 dark:bg-neutral-1300"
                : "bg-neutral-100 dark:bg-neutral-1200",
              className,
            )}
          >
            {showChildren ? children : null}
          </SegmentedControl>
        );
      }

      return (
        <div
          role="button"
          className={cn(
            "w-32 h-32 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 transition-colors focus-base",
            className,
          )}
          onClick={onClick}
          aria-label={tooltip}
        >
          {children}
        </div>
      );
    }, [
      variant,
      size,
      active,
      onClick,
      icon,
      className,
      showChildren,
      children,
      tooltip,
    ]);

    // Render with tooltip if needed
    if (showTooltip) {
      return (
        <Tooltip triggerElement={buttonElement} className="ml-0">
          {tooltip}
        </Tooltip>
      );
    }

    return buttonElement;
  },
);

// Add displayName for better debugging
TooltipButton.displayName = "TooltipButton";

export default TooltipButton;
