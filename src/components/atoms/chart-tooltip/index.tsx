import React from "react";
import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

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
          <span className="w-4 h-4 | !p-0 | block | bg-primary-accent rounded-[4px]" /> 
          {`${payload[0].value}`}&nbsp;
          {afterLabel}
        </p>
      </div>
    );
  }
};

export default ChartTooltip;
