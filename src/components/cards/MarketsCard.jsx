import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const MarketsCard = ({ country, code, value, changePercent }) => {
  const isPositive = changePercent > 0;
  const isNegative = changePercent < 0;

  return (
    <div className="flex justify-between items-center p-3 border-b bg-white mt-1">
      <div className="flex flex-col">
        <div className="font-medium">{country}</div>
        <p className="text-xs text-muted-foreground">{code}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="font-medium">{value}</div>
        <div
          className={`text-xs flex items-center ${
            isPositive
              ? "text-green-600"
              : isNegative
              ? "text-red-600"
              : "text-muted-foreground"
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon className="h-3 w-3 mr-1" />
          ) : isNegative ? (
            <ArrowDownIcon className="h-3 w-3 mr-1" />
          ) : null}
          {changePercent === 0
            ? "0.00%"
            : `${changePercent > 0 ? "+" : ""}${changePercent.toFixed(2)}%`}
        </div>
      </div>
    </div>
  );
};
export default MarketsCard;
