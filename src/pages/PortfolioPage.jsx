import { twMerge } from "tailwind-merge";
import PortfolioChart from "../components/charts/PortfolioChart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { mockPortfolio } from "../data/mockPortfolio";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <div>
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Portfolio
      </h2>

      <div className="w-full flex gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[40%]"
        >
          <PortfolioChart />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white p-4 rounded-sm shadow-sm border"
        >
          <h2 className="text-xl font-semibold mt-2 mb-3">Holdings</h2>
          <Table>
            <TableCaption>A list of your recent Holdings </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="text-right">Gain/Loss</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPortfolio.map((data) => {
                const isNegative = data.gainLossPercent < 0;
                const isPositive = data.gainLossPercent > 0;

                return (
                  <TableRow key={data.symbol}>
                    <TableCell className="font-medium">{data.symbol}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.shares}</TableCell>
                    <TableCell>${data.price}</TableCell>
                    <TableCell>${data.volume}</TableCell>
                    <TableCell
                      className={twMerge(
                        "text-right",
                        isNegative && "text-red-600",
                        isPositive && "text-green-600"
                      )}
                    >
                      ${data.gainLoss} ({data.gainLossPercent > 0 ? "+" : ""}
                      {data.gainLossPercent.toFixed(2)}%)
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </div>
  );
};
export default PortfolioPage;
