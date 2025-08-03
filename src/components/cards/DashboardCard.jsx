import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const DashboardCard = ({
  title,
  value,
  description,
  Icon,
  trend,
  trendLabel,
  className,
  valueClassName,
}) => {
  const formattedTrend =
    trend !== undefined
      ? trend > 0
        ? `+${trend.toFixed(2)}%`
        : `${trend.toFixed(2)}%`
      : null;
  const isTrendPositive = trend !== undefined ? trend > 0 : null;
  
  return (
    <Card
      className={twMerge(
        "transition-all duration-300 hover:shadow-md overflow-hidden",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className=" size-6 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div
          className="text-2xl font-bold tracking-tight truncate"
          style={{ lineHeight: "1.5" }}
        >
          <span className={valueClassName}>{value}</span>
        </div>

        {(description || trend !== undefined) && (
          <div className="flex items-center text-xs mt-1">
            {trend !== undefined && (
              <span
                className={twMerge(
                  "inline-flex items-center mr-1",
                  isTrendPositive ? "text-green-600" : "text-red-600"
                )}
              >
                {isTrendPositive ? (
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                )}
                {formattedTrend}
              </span>
            )}
            {trendLabel && (
              <span className="text-muted-foreground ml-1">{trendLabel}</span>
            )}
            {description && (
              <p
                className={twMerge(
                  "text-muted-foreground",
                  trend !== undefined ? "ml-2" : ""
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default DashboardCard;
