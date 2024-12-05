import * as Switch from "@radix-ui/react-switch";
import React from "react";
import cn from "./utils/cn";

type ToggleProps = {
  id: string;
  size?: string;
  label?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Toggle: React.FC<ToggleProps> = ({
  id,
  size,
  label,
  className,
  ...props
}) => {
  const rootSize = size === "small" ? "w-[42px] h-[24px]" : "w-[56px] h-32";
  const thumbSize =
    size === "small"
      ? "w-[21px] h-[21px] translate-x-1 data-[state=checked]:translate-x-[20px]"
      : "h-[28px] w-[28px] translate-x-2  data-[state=checked]:translate-x-[26px]";

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
          className={`block bg-white data-[disabled]:bg-neutral-500 rounded-full drop-shadow-toggle transition-transform ${thumbSize}`}
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
