import React from "react";
import { TooltipProps } from "recharts";
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { ValueType } from "tailwindcss/types/config";

type Props = TooltipProps<ValueType, NameType> & {
  afterLabel?: string;
};

const ChartTooltip: React.FC<Props> = ({
  active,
  payload,
  label,
  afterLabel,
  labelFormatter,
}) => {
  const formattedLabel = labelFormatter && payload ? labelFormatter(label, payload) : label;

  if (active && payload && payload.length) {
    return (
      <div className="bg-layer-2 | border border-primary | rounded-md p-3 text-xs | shadow-md | text-left">
        <p className="font-semibold text-sm | mb-1">{formattedLabel}</p>
        <p className="flex gap-1 items-center | h-5 overflow-hidden">
          <span className="w-4 max-h-full | block | border border-primary | bg-primary-accent rounded-sm" /> 
          {`${payload[0].value}`}&nbsp;
          {afterLabel}
        </p>
      </div>
    );
  }
};

export default ChartTooltip;
