import React from "react";
import { NavLink } from "react-router-dom";

const ResourVault = () => {
   return (
      <div>
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
            <div className="card card-side bg-base-100 shadow-sm">
               <figure>
                  <img
                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                     alt="Movie"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">university name</h2>
                  <p>document title:name</p>
                  <p>Department Name</p>
                  <p>Document Type</p>
                  <NavLink to={`/resourceUploader`}>
                     <span>
                        <h1>Profile name</h1>
                     </span>
                  </NavLink>
                  <div className="rating">
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="1 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="2 star"
                        defaultChecked
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="3 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="4 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="5 star"
                     />
                  </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Download</button>
                  </div>
               </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
               <figure>
                  <img
                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                     alt="Movie"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">university name</h2>
                  <p>document title:name</p>
                  <p>Department Name</p>
                  <p>Document Type</p>
                  <NavLink>
                     <span>
                        <h1>Profile name</h1>
                     </span>
                  </NavLink>
                  <div className="rating">
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="1 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="2 star"
                        defaultChecked
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="3 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="4 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="5 star"
                     />
                  </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Download</button>
                  </div>
               </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
               <figure>
                  <img
                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                     alt="Movie"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">university name</h2>
                  <p>document title:name</p>
                  <p>Department Name</p>
                  <p>Document Type</p>
                  <NavLink to={`/resourceUploader`}>
                     <span>
                        <h1>Profile name</h1>
                     </span>
                  </NavLink>
                  <div className="rating">
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="1 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="2 star"
                        defaultChecked
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="3 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="4 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="5 star"
                     />
                  </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Download</button>
                  </div>
               </div>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">
               <figure>
                  <img
                     src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                     alt="Movie"
                  />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">university name</h2>
                  <p>document title:name</p>
                  <p>Department Name</p>
                  <p>Document Type</p>
                  <NavLink>
                     <span>
                        <h1>Profile name</h1>
                     </span>
                  </NavLink>
                  <div className="rating">
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="1 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="2 star"
                        defaultChecked
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="3 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="4 star"
                     />
                     <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star"
                        aria-label="5 star"
                     />
                  </div>
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary">Download</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex justify-center">
            <div className="join">
               <button className="join-item btn">«</button>
               <button className="join-item btn">Page 22</button>
               <button className="join-item btn">»</button>
            </div>
         </div>
      </div>
   );
};

export default ResourVault;