import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const ResourVault = () => {
   const loadedResource = useLoaderData();
   const [Resource, setResource] = useState(loadedResource);
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   const totalPages = Math.ceil(Resource.length / itemsPerPage);
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const paginatedResources = Resource.slice(startIndex, endIndex);

   const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
         setCurrentPage(newPage);
      }
   };

   return (
      <div>
         {/* Category Buttons */}
         <div className="flex gap-4 text-blue-500 py-4">
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

         {/* Resource Cards */}
         <div className="grid grid-cols-2 gap-4 py-10 px-10">
            {paginatedResources.length > 0 ? (
               paginatedResources.map((resource) => (
                  <div key={resource._id} className="card card-side h-80 bg-base-200 shadow-sm">
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

                        <NavLink to={`/resourceUploader`}>
                           <span>
                              <h1>Profile: {resource.uploaderEmail || "Unknown"}</h1>
                           </span>
                        </NavLink>

                        <div className="rating">
                           <input
                              type="radio"
                              name={`rating-${resource._id}`}
                              className="mask mask-star"
                              aria-label="1 star"
                           />
                           <input
                              type="radio"
                              name={`rating-${resource._id}`}
                              className="mask mask-star"
                              aria-label="2 star"
                              defaultChecked
                           />
                           <input
                              type="radio"
                              name={`rating-${resource._id}`}
                              className="mask mask-star"
                              aria-label="3 star"
                           />
                           <input
                              type="radio"
                              name={`rating-${resource._id}`}
                              className="mask mask-star"
                              aria-label="4 star"
                           />
                           <input
                              type="radio"
                              name={`rating-${resource._id}`}
                              className="mask mask-star"
                              aria-label="5 star"
                           />
                        </div>

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
               ))
            ) : (
               <p className="text-center col-span-2 text-gray-500">No resources found.</p>
            )}
         </div>

         {/* Pagination Controls */}
         <div className="flex justify-center pb-8">
            <div className="join">
               <button
                  className="join-item btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
               >
                  «
               </button>

               {Array.from({ length: totalPages }, (_, i) => (
                  <button
                     key={i + 1}
                     className={`join-item btn ${
                        currentPage === i + 1 ? "btn-active bg-blue-500 text-white" : ""
                     }`}
                     onClick={() => handlePageChange(i + 1)}
                  >
                     Page {i + 1}
                  </button>
               ))}

               <button
                  className="join-item btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
               >
                  »
               </button>
            </div>
         </div>
      </div>
   );
};

export default ResourVault;
