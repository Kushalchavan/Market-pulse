import { Bell, User } from "lucide-react";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="w-screen h-18 border-b flex justify-between items-center sm:px-10 px-4">
      <div className="flex justify-center items-center gap-9">
        <h1 className="font-bold tracking-tighter text-2xl text-gray-600">
          MarketPulse
        </h1>
        <Input className="w-dvh" />
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className=" relative p-3 rounded-full  cursor-pointer">
          <div className="size-2 bg-blue-700 absolute top-2 right-2 rounded-full animate-pulse"></div>
          <Bell className="size-5 text-gray-600" />
        </div>
        <div className="bg-blue-100 relative p-3 rounded-full  cursor-pointer">
          <User className="size-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
