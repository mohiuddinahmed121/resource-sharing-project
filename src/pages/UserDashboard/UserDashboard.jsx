import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaUnlockAlt } from "react-icons/fa";
import img1 from "../../asserts/pexels-minan1398-694740.jpg";
import { Link } from "react-router-dom";
import Uploader from "../Uploader/Uploader";

const UserDashboard = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="py-10 bg-gray-200">
            <div className="bg-sky-200 shadow-lg w-[1100px] h-[200px] rounded-lg mx-auto py-10 pl-6">
               <h1 className="text-7xl font-semibold">Hello there</h1>
            </div>
            {/* --------------------------------------------------------- */}
            <div className="my-14 ml-56">
               <h1 className="text-2xl font-bold mb-5">Recently accessed courses</h1>
               <div className="shadow-2xl w-[200px] h-[100px] rounded-lg py-3 pl-3">
                  <h3 className="text-2xl font-bold">PHY</h3>
                  <p>Course description</p>
               </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className="my-14 ml-56">
               <h1 className="text-2xl font-bold mb-5">Get unstuck on your homework</h1>
               <div className="card bg-base-100 w-[500px] shadow-sm border-2">
                  <div className="card-body">
                     <h2 className="card-title">
                        <FaUnlockAlt className="text-4xl" />
                        Get more Unlocks to access documents you need!
                     </h2>
                     <p>
                        Get unstuck on your homework. Unlock the documents you need to succeed in
                        your classes.
                     </p>
                     <div className="card-actions justify-end">
                        <Link to={`/uploader`}>
                           <button className="btn btn-primary">Upload for Unlocks</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            {/* ---------------------------------------------------- */}
            <div className="my-14 ml-24">
               <h1 className="text-2xl font-bold mb-5">Your uploads</h1>
               <div className="grid grid-cols-3 gap-4">
                  <div className="card bg-base-100 w-96 shadow-sm border-2">
                     <figure>
                        <img src={img1} alt="Shoes" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">PHY</h2>
                        <p>
                           A card component has a figure, a body part, and inside body there are
                           title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Document</div>
                        </div>
                     </div>
                  </div>
                  <div className="card bg-base-100 w-96 shadow-sm border-2">
                     <figure>
                        <img src={img1} alt="Shoes" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">PHY</h2>
                        <p>
                           A card component has a figure, a body part, and inside body there are
                           title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Document</div>
                        </div>
                     </div>
                  </div>
                  <div className="card bg-base-100 w-96 shadow-sm border-2">
                     <figure>
                        <img src={img1} alt="Shoes" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">PHY</h2>
                        <p>
                           A card component has a figure, a body part, and inside body there are
                           title and actions parts
                        </p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Document</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default UserDashboard;
