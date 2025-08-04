import { ArrowDownIcon, ArrowUpIcon, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

const StocksCard = ({ stock }) => {
  const {
    symbol,
    name,
    price,
    change,
    changePercent,
    volume,
    marketCap,
    lastUpdated,
  } = stock;

  const isPositive = change >= 0;
  const priceHistory = Array.from({ length: 12 }, (_, i) => ({
    value: price + (Math.random() - 0.5) * 5,
  }));

  return (
    <Card className="bg-white hover:shadow-md transition-all overflow-hidden ">
      <CardHeader className="flex justify-between items-center pb-2">
        <div>
          <CardTitle className="text-base font-semibold">{symbol}</CardTitle>
          <p className="text-sm text-muted-foreground truncate max-w-[180px]">
            {name}
          </p>
        </div>
        <BarChart3 className="size-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-2xl font-bold">${price.toFixed(2)}</div>
          <div className="flex items-center text-xs">
            <span
              className={cn(
                "inline-flex items-center",
                isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              {isPositive ? (
                <ArrowUpIcon className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDownIcon className="w-3 h-3 mr-1" />
              )}
              {changePercent.toFixed(2)}%
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="text-muted-foreground">Volume:</div>
            <div className="text-right">{volume.toLocaleString()}</div>
            <div className="text-muted-foreground">Mkt Cap:</div>
            <div className="text-right">
              ${(marketCap / 1_000_000_000_000).toFixed(2)}T
            </div>
            <div className="text-muted-foreground">Updated:</div>
            <div className="text-right">
              {formatDistanceToNow(new Date(lastUpdated))} ago
            </div>
          </div>
        </div>
        <div className="h-20">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={priceHistory}>
              <defs>
                <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={isPositive ? "#16a34a" : "#dc2626"}
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="100%"
                    stopColor={isPositive ? "#16a34a" : "#dc2626"}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositive ? "#16a34a" : "#dc2626"}
                fill="url(#trend)"
                strokeWidth={1.5}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StocksCard;
