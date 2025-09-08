import React, { PropsWithChildren } from "react";
import cn from "./utils/cn";
import Icon from "./Icon";
import type { IconName, IconSize } from "./Icon/types";
import { ColorClass } from "./styles/colors/types";

export type SegmentedControlSize = "md" | "sm" | "xs";

export type SegmentedControlProps = {
  className?: string;
  rounded?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  active?: boolean;
  variant?: "default" | "subtle" | "strong";
  size?: SegmentedControlSize;
  onClick?: () => void;
  disabled?: boolean;
};

const SegmentedControl: React.FC<PropsWithChildren<SegmentedControlProps>> = ({
  className,
  rounded = false,
  leftIcon,
  rightIcon,
  active = false,
  variant = "default",
  size = "md",
  children,
  onClick,
  disabled,
}) => {
  const colorStyles = {
    default: {
      active: "bg-ably-primary-inverse-active",
      inactive:
        "bg-ably-primary-inverse hover:bg-ably-primary-inverse-accent active:bg-ably-primary-inverse-accent",
    },
    subtle: {
      active: "bg-ably-primary-inverse",
      inactive:
        "bg-ably-primary-inverse-accent hover:bg-ably-primary-inverse-active active:bg-ably-primary-inverse-active",
    },
    strong: {
      active: "bg-ably-secondary",
      inactive:
        "bg-ably-primary-inverse-accent hover:bg-ably-primary-inverse-active active:bg-ably-primary-inverse-active",
    },
  };

  const contentColorStyles = {
    default: {
      active: "text-ably-primary",
      inactive: "text-ably-secondary hover:text-ably-primary",
    },
    subtle: {
      active: "text-ably-primary",
      inactive: "text-ably-secondary hover:text-ably-primary",
    },
    strong: {
      active: "text-ably-primary-inverse",
      inactive: "text-ably-secondary hover:text-ably-primary",
    },
  };

  const sizeStyles = {
    md: cn("h-12 p-3 gap-2.5", rounded && "px-[1.125rem]"),
    sm: cn("h-10 p-[0.5625rem] gap-[0.5625rem]", rounded && "px-3.5"),
    xs: cn("h-9 p-2 gap-2", rounded && "px-3"),
  };

  const textStyles = {
    md: "ui-text-label2",
    sm: "ui-text-label3",
    xs: "ui-text-label4",
  };

  const iconSizes: Record<SegmentedControlSize, IconSize> = {
    md: "23px",
    sm: "22px",
    xs: "20px",
  };

  const activeKey = active ? "active" : "inactive";

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !disabled && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "focus-base flex items-center justify-center cursor-pointer select-none transition-colors",
        colorStyles[variant][activeKey],
        contentColorStyles[variant][activeKey],
        sizeStyles[size],
        textStyles[size],
        disabled &&
          "cursor-not-allowed hover:bg-inherit dark:hover:bg-inherit active:bg-inherit dark:active:bg-inherit",
        rounded ? "rounded-full" : "rounded-lg",
        className,
      )}
      tabIndex={disabled ? -1 : 0}
      role="button"
      aria-pressed={active}
      aria-disabled={disabled}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={iconSizes[size]}
          aria-hidden="true"
          color={contentColorStyles[variant][activeKey] as ColorClass}
        />
      )}
      {children && (
        <span
          className={cn(
            "font-semibold transition-colors",
            contentColorStyles[variant][activeKey],
            disabled &&
              "text-gui-unavailable dark:text-gui-unavailable-dark hover:text-gui-unavailable dark:hover:text-gui-unavailable-dark",
          )}
        >
          {children}
        </span>
      )}
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={iconSizes[size]}
          aria-hidden="true"
          color={contentColorStyles[variant][activeKey] as ColorClass}
        />
      )}
    </div>
  );
};

export default SegmentedControl;
