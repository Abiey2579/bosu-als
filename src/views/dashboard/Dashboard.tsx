import { SideDrawer } from "./components/sidedrawer";
import TopBar from "./components/topbar";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="h-screen flex">
      <SideDrawer />
      <div className="relative w-full flex-1 overflow-y-scroll flex flex-col">
        <TopBar />
      </div>
    </div>
  );
};

export default Dashboard;
