import * as Switch from "@radix-ui/react-switch";
import React from "react";
import cn from "./utils/cn";

type ToggleProps = {
  id: string;
  size?: "sm" | "lg";
  label?: string;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Toggle: React.FC<ToggleProps> = ({
  id,
  size = "lg",
  label,
  className,
  ...props
}) => {
  const rootSize = size === "sm" ? "w-[42px] h-24" : "w-[56px] h-32";
  const thumbSize =
    size === "sm"
      ? "w-[21px] h-[21px] translate-x-1 data-[state=checked]:translate-x-[20px]"
      : "h-[28px] w-[28px] translate-x-2 data-[state=checked]:translate-x-[26px]";

  return (
    <div className="flex items-center">
      <Switch.Root
        className={cn(
          "p-0 bg-neutral-600 rounded-full relative inline-block transition-colors data-[disabled]:bg-gui-unavailable data-[disabled]:cursor-not-allowed data-[state=checked]:bg-orange-600 focus-base",

          className,
          rootSize,
        )}
        id={id}
        {...props}
      >
        <Switch.Thumb
          className={cn(
            `block bg-white data-[disabled]:bg-neutral-500 rounded-full drop-shadow-toggle transition-transform`,
            thumbSize,
          )}
        />
      </Switch.Root>
      {label ? (
        <label className="ml-16" htmlFor={id}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Toggle;
