import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ResourVault from "../ResourVault/ResourVault";

const AllResource = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="mt-10 mb-10 mx-5">
            <ResourVault></ResourVault>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default AllResource;
