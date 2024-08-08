import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";

type Props = {
  checked: boolean;
  onCheckedChange: () => void;
  label?: string;
  labelClassName?: string;
  name?: string;
};

const Switch: React.FC<Props> = ({
  checked,
  onCheckedChange,
  label,
  name,
  labelClassName,
}) => {
  return (
    <div className="flex items-center">
      <RadixSwitch.Root
        name={name}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="inline-flex shrink-0 | h-5 w-[36px] | cursor-pointer items-center rounded-full | shadow-sm | transition-colors | data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-interactive-element-bg"
      >
        <RadixSwitch.Thumb className="pointer-events-none | block h-[18px] w-[18px] | rounded-full | bg-interactive-element-fg shadow-lg transition-transform | data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-[1px]" />
      </RadixSwitch.Root>
      {label && (
        <label
          htmlFor={name}
          className={cn("ml-2 text-sm text-primary", labelClassName)}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default Switch;
