import {
  Home,
  Settings,
  ChevronRight,
  ChartNoAxesColumnIncreasing,
  ChartColumn,
  DollarSign,
  Globe,
  Wallet,
  LineChart,
  PieChart,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const menuItems = [
  { title: "Dashboard", icon: Home, link: "/" },
  { title: "Stocks", icon: ChartNoAxesColumnIncreasing, link: "/stock" },
  { title: "Markets", icon: ChartColumn, link: "/market" },
  { title: "Currencies", icon: DollarSign, link: "/currencies" },
  { title: "Global", icon: Globe, link: "/global" },
  { title: "Porfolio", icon: Wallet, link: "/portfolio" },
  { title: "Performance", icon: LineChart, link: "/performance" },
  { title: "Analysis", icon: PieChart, link: "/analysis" },
  { title: "Settings", icon: Settings, link: "/settings" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={twMerge(
        "w-72 bg-white border-r h-full p-4 transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-18"
      )}
    >
      <div className="h-14 border-b mb-4 flex justify-between items-center">
        {open && (
          <h2 className="font-semibold text- tracking-tight text-neutral-700">
            MarketPulse
          </h2>
        )}
        <div
          className="bg-neutral-100 px-2 py-2 justify-center rounded-md cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <ChevronRight
            className={twMerge("transition-transform", !open && "rotate-180")}
          />
        </div>
      </div>

      {/* menu */}
      <nav className="space-y-2">
        {menuItems.map(({ title, icon: Icon, link }) => (
          <NavLink
            key={title}
            to={link}
            className={({ isActive }) =>
              twMerge(
                "w-full flex items-center gap-3 px-4 py-2 rounded-md text-left text-gray-700 hover:bg-gray-100 transition cursor-pointer",
                open ? "justify-start gap-3" : "px-1 justify-center",
                isActive && "bg-gray-100 font-semibold"
              )
            }
          >
            <Icon className="w-5 h-5" />
            {open && <Link to={link}>{title}</Link>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
