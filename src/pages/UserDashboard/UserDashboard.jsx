import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaUnlockAlt } from "react-icons/fa";
import img1 from "../../asserts/pexels-minan1398-694740.jpg";
import { Link } from "react-router-dom";
import Uploader from "../Uploader/Uploader";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserDashboard = () => {
   const [uploads, setUploads] = useState([]);
   const { user } = useContext(AuthContext);
   const userEmail = user?.email;

   useEffect(() => {
      if (userEmail) {
         fetch(`http://localhost:5000/uploadsByEmail/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setUploads(data))
            .catch((err) => console.error(err));
      }
   }, [userEmail]);

   return (
      <div>
         <Navbar></Navbar>
         <div className="py-10">
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
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploads.length === 0 ? (
                     <p>No uploads found.</p>
                  ) : (
                     uploads.map((upload) => (
                        <div
                           key={upload._id}
                           className="card bg-base-100 w-80 h-[400px] my-8 shadow-sm border-2"
                        >
                           <figure>
                              <img
                                 src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                 alt="Document Icon"
                                 className="h-44 w-full object-cover"
                              />
                           </figure>
                           <div className="card-body">
                              <h2 className="card-title">{upload.pdfName}</h2>
                              <p>School: {upload.school}</p>
                              <p>Course: {upload.course}</p>
                              <p>Type: {upload.docType}</p>
                              <a
                                 href={upload.pdfUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="btn"
                              >
                                 View Document
                              </a>
                           </div>
                        </div>
                     ))
                  )}
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default UserDashboard;
