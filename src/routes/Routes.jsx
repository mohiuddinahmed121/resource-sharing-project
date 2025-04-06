import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Uploader from "../pages/Uploader/Uploader";
import Login from "../pages/Login/login";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
   },
   {
      path: "/uploader",
      element: <Uploader></Uploader>,
   },
   {
      path: "/login",
      element: <Login></Login>,
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <UserDashboard></UserDashboard>
         </PrivateRoute>
      ),
   },
   {
      path: "/register",
      element: <Register></Register>,
   },
]);

export default routes;
