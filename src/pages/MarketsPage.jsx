import MarketsCard from "../components/cards/MarketsCard";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { mockGlobalMarket } from "../data/mockGlobalMarket";

const MarketsPage = () => {
  return (
    <div>
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Markets Overview
      </h2>

      <div className="mt-6 w-full h-auto">
        <Card className="w-full">
          <CardHeader className="font-semibold text-xl">
            🌐 Global Markets
          </CardHeader>
          <CardContent>
            {mockGlobalMarket.map((data) => (
              <MarketsCard
                key={data.country}
                country={data.country}
                code={data.code}
                value={data.value}
                changePercent={data.changePercent}
                flag={data.flag}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default MarketsPage;
