import React from "react";
import {
  ButtonPropsBase,
  commonButtonInterior,
  commonButtonProps,
} from "./Button";
import cn from "./utils/cn";

export type LinkButtonProps = ButtonPropsBase & {
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkButton: React.FC<LinkButtonProps> = ({
  variant = "primary",
  size,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <a
      {...commonButtonProps({
        variant,
        size,
        leftIcon,
        rightIcon,
        className: cn(className, {
          "ui-button-disabled dark:ui-button-disabled-dark": disabled,
        }),
      })}
      role="button"
      aria-disabled={disabled}
      onClick={handleClick}
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {commonButtonInterior({ leftIcon, rightIcon, children })}
    </a>
  );
};

export default LinkButton;
