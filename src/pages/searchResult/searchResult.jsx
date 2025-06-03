import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLoaderData } from "react-router-dom";

const searchResult = () => {
   const searchResults = useLoaderData();

   return (
      <div>
         <Navbar></Navbar>
         <div className="mt-10 px-10">
            <div className="flex gap-4 text-blue-500">
               <button>
                  <p>ALL</p>
               </button>
               <button>
                  <p>Assignment</p>
               </button>
               <button>
                  <p>Essay</p>
               </button>
               <button>
                  <p>Lab Report</p>
               </button>
               <button>
                  <p>Note</p>
               </button>
               <button>
                  <p>Slide</p>
               </button>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-4 py-10 px-6">
               {searchResults.length === 0 && <p>No results found</p>}
               {searchResults.map((resource) => (
                  <div key={resource._id} className="card card-side bg-base-200 shadow-sm">
                     <figure>
                        <img
                           src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                           alt="Document Icon"
                           className="h-44 w-full object-cover"
                        />
                     </figure>

                     <div className="card-body">
                        <h2 className="card-title">{resource.school}</h2>
                        <p>Document Title: {resource.pdfName}</p>
                        <p>Course: {resource.course}</p>
                        <p>Department: {resource.department}</p>
                        <p>Document Type: {resource.docType}</p>

                        <div className="card-actions justify-end">
                           <a
                              href={resource.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                           >
                              Download PDF
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default searchResult;
