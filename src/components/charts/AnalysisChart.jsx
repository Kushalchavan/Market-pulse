import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";

const chartData = [
  { month: "January", consumers: 186 },
  { month: "February", consumers: 205 },
  { month: "March", consumers: -207 },
  { month: "April", consumers: 173 },
  { month: "May", consumers: -209 },
  { month: "June", consumers: 214 },
  { month: "July", consumers: -190 },
];

const chartConfig = {
  consumers: {
    label: "consumers",
  },
};

const AnalysisChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Sector Performance (YTD)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-96 w-full bg-neutral-100/50"
          config={chartConfig}
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="consumers">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={
                    item.consumers > 0 ? "var(--chart-1)" : "var(--chart-2)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default AnalysisChart;
