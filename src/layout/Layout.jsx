import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-auto flex ">
        <Sidebar />
        <Home />
      </div>
    </>
  );
};
export default Layout;
