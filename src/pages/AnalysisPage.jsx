import { Bitcoin } from "lucide-react";
import AnalysisCard from "../components/cards/AnalysisCard";
import AnalysisChart from "../components/charts/AnalysisChart";
import { mockCryptos } from "../data/mockCryptos";
import { motion } from "framer-motion";

const AnalysisPage = () => {
  return (
    <div>
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Market Analysis
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mt-6"
      >
        <AnalysisChart />
      </motion.div>

      <div className="w-full mt-5 bg-white p-4">
        <h2 className="text-2xl flex gap-2 items-center justify-start mt-3 mb-5 font-semibold">
          <Bitcoin className="text-orange-400" /> Cryptocurrency Analysis
        </h2>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockCryptos.map((crypto) => (
            <AnalysisCard key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AnalysisPage;
