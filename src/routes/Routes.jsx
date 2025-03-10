import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
   },
]);

export default routes;
