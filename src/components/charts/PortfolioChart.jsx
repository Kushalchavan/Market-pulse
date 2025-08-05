import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const chartData = [
  { company: "GOOGL", visitors: 275, fill: "#8884d8" },
  { company: "AAPL", visitors: 200, fill: "#82ca9d" },
  { company: "MSFT", visitors: 187, fill: "#ffc658" },
  { company: "NVDA", visitors: 173, fill: "#ff8042" },
  { company: "Other", visitors: 90, fill: "#8dd1e1" },
];

const PortfolioChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">Portfolio Summary</CardTitle>
        <CardDescription className="mt-4">Total value</CardDescription>
        <CardTitle className="text-xl">$12,343.07</CardTitle>
        <CardDescription className="mt-4">Total Gain/Loss</CardDescription>
        <CardTitle className="text-green-600 text-xl">$1,974.34 (+16.85%)</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="company"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default PortfolioChart;
