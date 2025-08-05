import GlobalMarketCard from "../components/cards/GlobalMarketCard";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const dataofNorthAmerica = [
  { id: 1, city: "United States", rate: "+0.09%" },
  { id: 2, city: "Canada", rate: "N/A" },
];

const dataOfEurope = [
  { id: 1, city: "United Kindom", rate: "+0.82%" },
  { id: 2, city: "Germany", rate: "-0.65%" },
  { id: 3, city: "France", rate: "N/A" },
  { id: 4, city: "Switzerland", rate: "N/A" },
];

const dataOfAsia = [
  { id: 1, city: "Japan", rate: "-0.33%" },
  { id: 2, city: "China", rate: "N/A" },
  { id: 3, city: "Hong Kong", rate: "N/A" },
  { id: 4, city: "Australia", rate: "N/A" },
];

const GlobalPage = () => {
  return (
    <div className="max-w-screen h-full">
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Global Markets
      </h2>

      <div className="w-full border rounded-sm shadow-sm mt-6 bg-white py-2">
        <h2 className="text-xl font-semibold p-3 mt-2">🌐 Markets Overview</h2>
        <div className="w-full grid grid-cols-3 gap-4 rounded-sm p-4 h-60">
          <GlobalMarketCard title="North America" data={dataofNorthAmerica} />
          <GlobalMarketCard title="Europe" data={dataOfEurope} />
          <GlobalMarketCard title="Asia-Pacific" data={dataOfAsia} />
        </div>
      </div>

      <div className="mt-8 w-full h-auto p-4 rounded-sm shadow-sm bg-white border">
        <h2 className="text-xl font-semibold">Economic Calender</h2>
        <div className="w-full h-auto mt-5">
          <Table>
            <TableCaption>A list of Economic calender</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Time</TableHead>
                <TableHead className="font-semibold">Region</TableHead>
                <TableHead className="font-semibold">Event</TableHead>
                <TableHead className="font-semibold">Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>8:30 AM </TableCell>
                <TableCell>United States</TableCell>
                <TableCell>Non-Farm Payrolls</TableCell>
                <TableCell>
                  <Badge variant="destructive">High</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10:00 AM</TableCell>
                <TableCell>Eurozone</TableCell>
                <TableCell>ESB Interest Rate Decision</TableCell>
                <TableCell>
                  <Badge variant="destructive">High</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2:00 PM</TableCell>
                <TableCell>United Kindom</TableCell>
                <TableCell>GDP (QoQ)</TableCell>
                <TableCell>
                  <Badge variant="medium">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5:00 PM</TableCell>
                <TableCell>Russia</TableCell>
                <TableCell>GDP (QoQ)</TableCell>
                <TableCell>
                  <Badge variant="low">Low</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4:00 AM</TableCell>
                <TableCell>China</TableCell>
                <TableCell>ESB interest Rate Decision</TableCell>
                <TableCell>
                  <Badge variant="medium">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11:00 AM</TableCell>
                <TableCell>Japan</TableCell>
                <TableCell>Non-Farm Payrolls</TableCell>
                <TableCell>
                  <Badge variant="destructive">Medium</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default GlobalPage;
