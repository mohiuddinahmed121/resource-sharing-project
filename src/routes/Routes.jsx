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
import AllResource from "../pages/AllResource/AllResource";
import SearchResult from "../pages/searchResult/searchResult";

const API_URL = import.meta.env.VITE_API_URL;

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch(`${API_URL}/uploadedPdfs`),
   },
   {
      path: "/uploader",
      element: (
         <PrivateRoute>
            <Uploader></Uploader>
         </PrivateRoute>
      ),
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
      path: "/uniprofile/:school", // add the :school param
      element: <UniProfile />,
   },
   {
      path: "/resourVault",
      element: <ResourVault></ResourVault>,
   },
   {
      path: "/resourceUploader",
      element: <ResourceUploader></ResourceUploader>,
   },
   {
      path: "/allResource",
      element: <AllResource></AllResource>,
      loader: () => fetch(`${API_URL}/uploadedPdfs`),
   },
   {
      path: "/searchResult",
      element: <SearchResult />,
      loader: async ({ request }) => {
         const url = new URL(request.url);
         const searchTerm = url.searchParams.get("q");

         const response = await fetch(`${API_URL}/search?q=${searchTerm}`);
         if (!response.ok) {
            throw new Error("Failed to load search results");
         }

         return response.json();
      },
   },
]);

export default routes;
