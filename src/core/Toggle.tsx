import * as Switch from "@radix-ui/react-switch";
import React from "react";
import cn from "./utils/cn";

type ToggleProps = {
  id: string;
  label?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Toggle: React.FC<ToggleProps> = ({ id, label, className, ...props }) => {
  return (
    <div className="flex items-center">
      <Switch.Root
        className={cn(
          "p-0 h-32 w-[56px] bg-neutral-600 rounded-full relative inline-block transition-colors data-[disabled]:bg-gui-unavailable data-[disabled]:cursor-not-allowed data-[state=checked]:bg-orange-600 focus:outline-gui-focus",
          className,
        )}
        id={id}
        {...props}
      >
        <Switch.Thumb className="block h-[28px] w-[28px] bg-white data-[disabled]:bg-neutral-500 rounded-full drop-shadow-toggle translate-x-2 data-[state=checked]:translate-x-[26px] transition-transform" />
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
