import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaFileAlt } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Uploader = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="border-2 border-gray-400 shadow-xl rounded-lg w-[1300px] h-[500px] my-10 mx-auto flex">
            <div className="bg-sky-100 rounded-lg pt-44 px-5">
               <FaFileAlt className="mx-auto text-4xl mb-3" />
               <input type="file" className="file-input file-input-neutral" />
            </div>
            <div className=" py-5 px-3">
               <h1 className="text-3xl font-semibold">Tell us more about your document</h1>
               <p>
                  This information helps us make recommendations <br /> that are more relevant for
                  you
               </p>
               <div className="my-3">
                  <p>Your school</p>
                  <input
                     className="border-2 border-red-600 rounded-lg w-[700px] h-[45px]"
                     type="text"
                     name=""
                     id=""
                  />
                  <p>Please make a selection.</p>
               </div>
               <div className="my-3">
                  <p>Course</p>
                  <input
                     className="border-2 rounded-lg w-[700px] h-[45px]"
                     type="text"
                     name=""
                     id=""
                  />
               </div>
               <div className="flex gap-6 my-3">
                  <div>
                     <p>Academic year</p>
                     <input
                        className="border-2 rounded-lg w-[545px] h-[45px]"
                        type="date"
                        name=""
                        id=""
                     />
                  </div>
                  <div>
                     <p>Doc type</p>
                     <select defaultValue="Medium" className="select select-bordered">
                        <option disabled={true}>Type</option>
                        <option>Assignment</option>
                        <option>Essay</option>
                        <option>Lab</option>
                        <option>Notes</option>
                        <option>Slides</option>
                     </select>
                  </div>
               </div>
               <button class="btn btn-primary my-3">Submit Details</button>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Uploader;
