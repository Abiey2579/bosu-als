import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./views/authentication/SignIn";
import Header from "./views/home/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
