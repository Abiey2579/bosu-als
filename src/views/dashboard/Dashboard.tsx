import { useEffect } from "react";
import { SideDrawer } from "./components/sidedrawer";
import TopBar from "./components/topbar";
import { useLocation, useNavigate } from "react-router-dom";
import { URIPaths } from "../../util/URIPaths";
import Overview from "./components/Overview";
import GenerateTimeTable from "./components/GenerateTimeTable";

const Dashboard = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  let URIHash = useLocation().hash;
  useEffect(() => {
    if (!location.state) {
      navigateTo(URIPaths.SignIn);
    }
  }, []);
  return (
    <div className="h-screen flex">
      <SideDrawer />
      <div className="relative w-full flex-1 overflow-y-scroll flex flex-col">
        <TopBar />
        {URIHash === "" && <Overview />}
        {URIHash === "#overview" && <Overview />}
        {URIHash === "#create-timetable" && <GenerateTimeTable />}
      </div>
    </div>
  );
};

export default Dashboard;
