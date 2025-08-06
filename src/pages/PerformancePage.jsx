import PerformanceChart from "../components/charts/PerformanceChart";

const PerformancePage = () => {
  return (
    <div>
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Performance
      </h2>

      <div className="w-full mt-6">
        <PerformanceChart />
      </div>
    </div>
  );
};
export default PerformancePage;
