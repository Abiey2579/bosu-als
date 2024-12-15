import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./views/authentication/SignIn";
import Header from "./views/home/Header";
import { URIPaths } from "./util/URIPaths";
import Dashboard from "./views/dashboard/Dashboard";
import DownloadTimetable from "./views/download/Download";

const router = createBrowserRouter([
  {
    path: URIPaths.Home,
    element: <Header />,
  },
  {
    path: URIPaths.SignIn,
    element: <SignIn />,
  },
  {
    path: URIPaths.Dashboard,
    element: <Dashboard />,
  },
  {
    path: URIPaths.DownloadTimetable,
    element: <DownloadTimetable />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
