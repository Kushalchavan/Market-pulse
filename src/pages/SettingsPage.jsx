import { Bell, Globe, Lock, Settings, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";

const settingsItem = [
  { icon: User, title: "Account" },
  { icon: Bell, title: "Notifications" },
  { icon: Lock, title: "Security" },
  { icon: Globe, title: "Reginal settings" },
  { icon: Settings, title: "Preferences" },
];

const handleSubmit = (e) => {
  e.preventDefault();
};

const SettingsPage = () => {
  return (
    <div className="max-w-screen h-full">
      <h2 className="font-semibold tracking-tight text-2xl text-neutral-600 ">
        Settings
      </h2>

      <div className="mt-5 w-full flex gap-4">
        {/* left */}
        <div className="bg-white w-md h-80 p-4 border shadow-md rounded-sm">
          <h1 className="text-xl font-semibold">Settings</h1>
          <ul>
            {settingsItem.map(({ icon: Icon, title }) => (
              <li
                key={title}
                className="hover:bg-neutral-100 transition p-2 flex gap-3 justify-start items-center mt-3 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
                <span className="text-neutral-700 text-sm ">{title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* right */}
        <div className="w-full bg-white h-auto p-6 border rounded-sm shadow-sm">
          <h2 className="font-semibold text-xl">Account Settings</h2>
          <h3 className="mt-2 tracking-tight">Personal Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-1/2 flex flex-col gap-2">
                <label className="text-sm">First Name</label>
                <Input placeholder="First name" className="w-full" />
              </div>
              <div className=" w-1/2 flex flex-col gap-2">
                <label className="text-sm">Last Name</label>
                <Input placeholder="Last name" className="w-full" />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="w-1/2 flex flex-col gap-2 ">
                <label className="text-sm">Email</label>
                <Input placeholder="Email" type="email" className="w-full" />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label className="text-sm">Phone</label>
                <Input placeholder="+1(555) 1234-567" className="w-full" />
              </div>
            </div>

            <h2 className="mt-6 font-semibold">Display Settings</h2>

            <div className="mt-4 w-full flex justify-between items-center">
              <div>
                <p className="font-semibold">Mode</p>
                <span className="text-sm text-neutral-600">
                  Switch between light and dark theme
                </span>
              </div>
              <Switch />
            </div>

            <div className="mt-4 w-full flex justify-between items-center">
              <div>
                <p className="font-semibold">Compact View</p>
                <span className="text-sm text-neutral-600">
                  Show more data with less spacing
                </span>
              </div>
              <Switch />
            </div>

            <div className="flex gap-4 mt-6">
              <Button className="cursor-pointer">Save Changes</Button>
              <Button className="cursor-pointer" variant="secondary">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
