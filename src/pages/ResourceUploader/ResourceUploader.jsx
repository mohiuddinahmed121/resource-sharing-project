import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaRegUserCircle } from "react-icons/fa";
import ResourVault from "../ResourVault/ResourVault";
import { IoDocumentText } from "react-icons/io5";

const ResourceUploader = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="pb-10">
            <div className="bg-sky-100 flex items-center gap-6 p-16">
               <FaRegUserCircle className="text-9xl" />
               <div>
                  <h1 className="text-5xl font-bold">Person Name</h1>
                  <p className="text-xl">University Name</p>
               </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="mx-auto my-5 py-10 px-10">
               <h1 className="text-2xl mb-10 flex items-center gap-2">
                  <IoDocumentText />
                  Documents
               </h1>
               <hr />
               <ResourVault></ResourVault>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ResourceUploader;
