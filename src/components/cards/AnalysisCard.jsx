import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { formatNumber } from "../../lib/helper";
import { twMerge } from "tailwind-merge";

const AnalysisCard = ({ crypto }) => {
  return (
    <Card className="p-5 mt-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <CardTitle className="font-semibold uppercase text-xl">
            {crypto.symbol}
          </CardTitle>
          <CardDescription className="font-bold text-muted-foreground text-md">
            {crypto.name}
          </CardDescription>
        </div>
        {crypto.changePercent > 0 ? (
          <TrendingUp className="size-5 text-green-600" />
        ) : (
          <TrendingDown className="size-5 text-red-600" />
        )}
      </div>

      <div className="flex flex-col justify-start -mt-2">
        <CardTitle className="text-2xl font-bold">
          ${crypto.change.toFixed(2)}
        </CardTitle>
        <CardDescription
          className={twMerge(
            "text-xs",
            crypto.changePercent > 0 ? "text-green-600" : "text-red-600"
          )}
        >
          {crypto.changePercent}%
        </CardDescription>
      </div>

      <div className="-mt-3">
        <div className="flex justify-between items-center text-muted-foreground">
          <p className="text-xs">Volume:</p>
          <p className="text-xs">{formatNumber(crypto.volume)}</p>
        </div>

        <div className="flex justify-between items-center text-muted-foreground">
          <p className="text-xs">Market Cap:</p>
          <p className="text-xs">{formatNumber(crypto.marketCap)}</p>
        </div>
      </div>
    </Card>
  );
};
export default AnalysisCard;
