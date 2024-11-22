import React, { PropsWithChildren } from "react";
import { IconName } from "./Icon/types";
import Icon from "./Icon";
import clsx from "clsx";

export type ButtonType = "priority" | "primary" | "secondary";

type ButtonSize = "lg" | "md" | "sm" | "xs";

type ButtonProps = {
  /**
   * The type of button: priority, primary, or secondary.
   */
  variant?: ButtonType;
  /**
   * The button size: lg, sm, or xs. Leave empty for md.
   */
  size?: ButtonSize;
  /**
   * An icon to render on the left side of the button label.
   */
  leftIcon?: IconName;
  /**
   * An icon to render on the right side of the button label.
   */
  rightIcon?: IconName;
  /**
   * Optional classes to add to the button element.
   */
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// got to go the long way round because of ol' mate Taily Waily
const buttonClasses: Record<ButtonType, Record<ButtonSize, string>> = {
  priority: {
    lg: "ui-button-priority-lg",
    md: "ui-button-priority",
    sm: "ui-button-priority-sm",
    xs: "ui-button-priority-xs",
  },
  primary: {
    lg: "ui-button-primary-lg",
    md: "ui-button-primary",
    sm: "ui-button-primary-sm",
    xs: "ui-button-primary-xs",
  },
  secondary: {
    lg: "ui-button-secondary-lg",
    md: "ui-button-secondary",
    sm: "ui-button-secondary-sm",
    xs: "ui-button-secondary-xs",
  },
};

export const iconModifierClasses: Record<
  ButtonSize,
  { left: string; right: string }
> = {
  lg: { left: "ui-button-lg-left-icon", right: "ui-button-lg-right-icon" },
  md: { left: "ui-button-left-icon", right: "ui-button-right-icon" },
  sm: { left: "ui-button-sm-left-icon", right: "ui-button-sm-right-icon" },
  xs: { left: "", right: "" },
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  size,
  leftIcon,
  rightIcon,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        buttonClasses[variant][size ?? "md"],
        { [iconModifierClasses[size ?? "md"].left]: leftIcon },
        { [iconModifierClasses[size ?? "md"].right]: rightIcon },
        className,
      )}
      {...rest}
    >
      {leftIcon ? <Icon name={leftIcon} /> : null}
      {children}
      {rightIcon ? <Icon name={rightIcon} /> : null}
    </button>
  );
};

export default Button;
