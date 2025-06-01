import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaFileAlt } from "react-icons/fa";
import { getAuth } from "firebase/auth";

const Uploader = () => {
   const { register, handleSubmit, reset } = useForm();
   const [loading, setLoading] = useState(false);
   const [file, setFile] = useState(null);
   const [uploadedUrl, setUploadedUrl] = useState("");

   const auth = getAuth();

   const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
         setFile(selectedFile);
         setUploadedUrl("");
      }
   };

   const uploadFileToCloudinary = async () => {
      if (!file) return null;

      setLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "First_time_using_cloudinary");
      data.append("cloud_name", "dr0zue9vk");

      try {
         const res = await fetch("https://api.cloudinary.com/v1_1/dr0zue9vk/raw/upload", {
            method: "POST",
            body: data,
         });

         if (!res.ok) throw new Error("Error uploading file to Cloudinary");

         const uploadedFile = await res.json();
         return {
            url: uploadedFile.secure_url,
            name: uploadedFile.original_filename,
         };
      } catch (error) {
         console.error(error);
         Swal.fire("Error uploading file, please try again.");
         return null;
      } finally {
         setLoading(false);
      }
   };

   const onSubmit = async (formData) => {
      if (!file) {
         Swal.fire("Please choose a PDF file!");
         return;
      }

      setLoading(true);

      const uploadedFile = await uploadFileToCloudinary();
      if (!uploadedFile) return;

      const user = auth.currentUser;
      const uploaderEmail = user?.email || "anonymous";

      const documentData = {
         ...formData,
         pdfUrl: uploadedFile.url,
         pdfName: uploadedFile.name,
         uploaderEmail,
         uploadDate: new Date().toISOString(),
      };

      try {
         const response = await fetch("http://localhost:5000/uploadedPdfs", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(documentData),
         });

         const data = await response.json();

         if (data.insertedId) {
            Swal.fire({
               title: "Success!",
               text: "PDF Uploaded Successfully!",
               icon: "success",
               confirmButtonText: "Cool",
            });
            reset();
            setFile(null);
         } else {
            throw new Error("Failed to upload document.");
         }
      } catch (error) {
         console.error(error);
         Swal.fire("Error uploading document!");
      } finally {
         setLoading(false);
      }
   };

   return (
      <div>
         <Navbar />

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-2 border-gray-400 shadow-xl rounded-lg w-[1300px] h-[500px] my-10 mx-auto flex">
               {/* Upload Section */}
               <div className="bg-sky-100 rounded-lg pt-44 px-5">
                  <div className="mx-auto flex flex-col items-center">
                     {uploadedUrl && (
                        <p className="text-green-600 mb-2">
                           PDF Uploaded Successfully! <br />
                           <a
                              href={uploadedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline"
                           >
                              View Uploaded PDF
                           </a>
                        </p>
                     )}
                     <p>{loading ? "Uploading..." : <img src="upload.svg" alt="Upload" />}</p>
                  </div>

                  <FaFileAlt className="mx-auto text-4xl mb-3" />
                  <input
                     onChange={handleFileChange}
                     type="file"
                     accept="application/pdf"
                     className="file-input file-input-neutral"
                  />
               </div>

               {/* Form Section */}
               <div className="py-5 px-3">
                  <h1 className="text-3xl font-semibold">Tell us more about your document</h1>
                  <p>
                     This information helps us make recommendations <br /> that are more relevant
                     for you
                  </p>

                  <div className="my-3">
                     <p>Your school</p>
                     <input
                        {...register("school", { required: true })}
                        className="border-2 border-red-600 rounded-lg w-[700px] h-[45px]"
                        type="text"
                     />
                  </div>

                  <div className="flex gap-6 my-3">
                     <div>
                        <p>Course</p>
                        <input
                           {...register("course", { required: true })}
                           className="border-2 rounded-lg w-[545px] h-[45px]"
                           type="text"
                        />
                     </div>
                     <div>
                        <p>Department</p>
                        <input
                           {...register("department", { required: true })}
                           className="border-2 rounded-lg w-[135px] h-[45px]"
                           type="text"
                        />
                     </div>
                  </div>

                  <div className="flex gap-6 my-3">
                     <div>
                        <p>Academic year</p>
                        <input
                           {...register("academicYear", { required: true })}
                           className="border-2 rounded-lg w-[545px] h-[45px]"
                           type="text"
                        />
                     </div>
                     <div>
                        <p>Doc type</p>
                        <select
                           {...register("docType", { required: true })}
                           defaultValue=""
                           className="select select-bordered"
                        >
                           <option disabled value="">
                              Type
                           </option>
                           <option>Assignment</option>
                           <option>Essay</option>
                           <option>Lab</option>
                           <option>Notes</option>
                           <option>Slides</option>
                        </select>
                     </div>
                  </div>

                  <button type="submit" className="btn btn-primary my-3">
                     Submit Details
                  </button>
               </div>
            </div>
         </form>

         <Footer />
      </div>
   );
};

export default Uploader;
