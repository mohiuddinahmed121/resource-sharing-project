import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Uploader from "../pages/Uploader/Uploader";
import Login from "../pages/Login/login";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UniProfile from "../pages/UniProfile/UniProfile";
import ResourVault from "../pages/ResourVault/ResourVault";
import ResourceUploader from "../pages/ResourceUploader/ResourceUploader";

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
   {
      path: "/uniprofile",
      element: <UniProfile></UniProfile>,
   },
   {
      path: "/resourVault",
      element: <ResourVault></ResourVault>,
   },
   {
      path: "/resourceUploader",
      element: <ResourceUploader></ResourceUploader>,
   },
]);

export default routes;
