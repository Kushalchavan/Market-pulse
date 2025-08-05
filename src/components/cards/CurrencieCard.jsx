import { twMerge } from "tailwind-merge";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react";

const CurrencieCard = ({ currency }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between p-3 rounded-md bg-secondary/40">
        <div className="flex items-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-700 mr-3">
            {currency.fromCurrency}
          </div>
          <ArrowRightIcon className="h-4 w-4 mx-3 text-muted-foreground" />
          <div className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-700 mr-3">
            {currency.toCurrency}
          </div>
        </div>

        <div className="text-right">
          <div className="font-medium">{currency.rate.toFixed(4)}</div>
          <div
            className={twMerge(
              "flex items-center text-xs justify-end",
              currency.change >= 0 ? "text-green-600" : "text-red-600"
            )}
          >
            {currency.change >= 0 ? (
              <ArrowUpIcon className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownIcon className="h-3 w-3 mr-1" />
            )}
            {currency.change.toFixed(4)} ({currency.changePercent.toFixed(2)}
            %)
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencieCard;
