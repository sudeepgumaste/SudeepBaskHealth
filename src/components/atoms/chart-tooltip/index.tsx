import React from "react";
import { TooltipProps } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type Props = TooltipProps<ValueType, NameType> & {
  afterLabel?: string;
  valueFormatter?: (value: ValueType) => string;
};

const ChartTooltip: React.FC<Props> = ({
  active,
  payload,
  label,
  afterLabel,
  valueFormatter,
  labelFormatter,
}) => {
  if (active && payload && payload.length) {
    const formattedLabel = (labelFormatter
      ? labelFormatter(label, payload)
      : label) || payload?.[0].name;

    let formattedValue = valueFormatter
      ? valueFormatter(payload[0]?.value as string | number)
      : payload?.[0].value;
    
      
    return (
      <div className="bg-layer-2 | border border-primary | rounded-md p-3 text-xs | shadow-md | text-left">
        {
          formattedLabel && <p className="font-semibold text-sm | mb-1">{formattedLabel}</p>
        }
        <p className="flex gap-1 items-center | h-5 overflow-hidden">
          <span className="w-4 h-4 | !p-0 | block | bg-primary-accent rounded-[4px]" />
          {formattedValue}&nbsp;
          {afterLabel}
        </p>
      </div>
    );
  }
};

export default ChartTooltip;
