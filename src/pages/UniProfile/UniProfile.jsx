import { FaSchool } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UniProfile = () => {
   const { school } = useParams();
   const [documents, setDocuments] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchDocuments = async () => {
         try {
            const response = await fetch(
               `${import.meta.env.VITE_API_URL}/uniprofile/${encodeURIComponent(school)}`
            );
            const data = await response.json();
            setDocuments(data);
            setLoading(false);
         } catch (error) {
            console.error("Error fetching documents:", error);
            setLoading(false);
         }
      };

      fetchDocuments();
   }, [school]);

   if (loading) return <p>Loading...</p>;

   return (
      <div>
         <Navbar />
         <div className="mx-auto my-5 py-10 px-6">
            <div className="flex items-center gap-2">
               <p>School</p>
               <FaArrowRight />
               <p>{school}</p>
            </div>

            <div className="flex gap-6 mt-10 mb-10 ml-10 items-center">
               <FaSchool className="text-9xl border-2 p-4" />
               <h1 className="text-5xl">{school}</h1>
            </div>

            <div className="tabs tabs-lift">
               <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab"
                  aria-label="Departments"
                  defaultChecked
               />
               <div className="tab-content bg-base-400 border-base-300 p-6">
                  <h1 className="text-2xl font-bold mb-5">Documents</h1>

                  <div className="grid grid-cols-2 gap-4 py-10 px-6">
                     {documents.length === 0 ? (
                        <p>No documents found.</p>
                     ) : (
                        documents.map((resource) => (
                           <div key={resource._id} className="card card-side bg-base-200 shadow-sm">
                              <figure>
                                 <img
                                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                    alt="Document Icon"
                                    className="h-48 w-full object-cover"
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
                        ))
                     )}
                  </div>
               </div>

               <input type="radio" name="my_tabs_3" className="tab" aria-label="Documents" />
               <div className="tab-content bg-base-400 border-base-300 p-6">
                  {/* You can add more tab content here */}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default UniProfile;
