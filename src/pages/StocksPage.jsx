import StocksCard from "../components/cards/StocksCard";
import StockChart from "../components/charts/StockChart";
import { mockStocks } from "../data/mockStocks";
import { motion } from "framer-motion";

const StocksPage = () => {
  return (
    <div className="max-w-screen h-full">
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Stocks
      </h2>

      <div className="mt-6 w-full h-auto flex gap-4 justify-between items-start">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[50%] h-full flex flex-col gap-4"
        >
          <h2 className="font-semibold text-xl text-muted-foreground">
            All Stocks
          </h2>
          {mockStocks.map((stock) => (
            <StocksCard key={stock.symbol} stock={stock} />
          ))}
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <StockChart />
        </motion.div>
      </div>
    </div>
  );
};
export default StocksPage;
