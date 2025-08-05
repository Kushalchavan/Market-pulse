import { twMerge } from "tailwind-merge";

const GlobalMarketCard = ({ title, data }) => {
  return (
    <div className="h-full w-full border shadow-sm p-4 rounded-sm bg-white">
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="mt-4 space-y-2">
        {data.map((item) => {
          const isNegative = item.rate.includes("-");
          const isPositive = item.rate.includes("+");

          return (
            <div key={item.id} className="flex justify-between items-center">
              <div>{item.city}</div>
              <span
                className={twMerge(
                  "text-neutral-700",
                  isNegative && "text-red-600",
                  isPositive && "text-green-600"
                )}
              >
                {item.rate}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalMarketCard;
