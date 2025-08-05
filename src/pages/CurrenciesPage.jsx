import { DollarSignIcon } from "lucide-react";
import CurrencieCard from "../components/cards/CurrencieCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { mockCurrencies } from "../data/mockCurrencies";

const CurrenciesPage = () => {
  return (
    <div>
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Currencies Exchange
      </h2>

      <div className="w-full h-auto mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <DollarSignIcon className="h-5 w-5 mr-2 " />
              Currency Exchange
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {mockCurrencies.map((currency) => (
              <CurrencieCard key={currency.symbol} currency={currency} />
            ))}
            <div className="text-xs text-right mt-4 text-muted-foreground">
              Updated: just now
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default CurrenciesPage;
