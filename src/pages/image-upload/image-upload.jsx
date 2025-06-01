import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "../../Providers/AuthProvider";

// Configuration
cloudinary.config({
   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// interface CloudinaryUploadResult {
//    public_id: string;
//    [key: string]: any
// }

export async function POST(Request) {
   const { userId } = auth();

   if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
   }

   try {
      const formData = await request.formData();
      const file = formData.get("file");

      if (!file) {
         return Response.json({ error: "File not found" }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const result =
         (await new Promise()) <
         CloudinaryUploadResult >
         ((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
               { folder: "next-cloudinary-uploads" },
               (error, result) => {
                  if (error) reject(error);
                  else resolve(CloudinaryUploadResult);
               }
            );
            uploadStream.end(buffer);
         });
      return Response.json({ publicId: result.public_id }, { status: 200 });
   } catch (error) {
      console.log("upload image failed", error);
      return Response.json({ error: "Upload image failed" }, { status: 500 });
   }
}

// __________________________uploader page-------------------------------------

// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { FaFileAlt } from "react-icons/fa";

// const Uploader = () => {
//    const [loading, setLoading] = useState(false);
//    const [uploadedUrl, setUploadedUrl] = useState("");

//    const handleFileUpload = async (event) => {
//       const file = event.target.files[0];
//       if (!file) return;
//       setLoading(true);

//       const data = new FormData();
//       data.append("file", file);
//       data.append("upload_preset", "First_time_using_cloudinary"); // Your upload preset
//       data.append("cloud_name", "dr0zue9vk"); // Your Cloudinary cloud name

//       const res = await fetch("https://api.cloudinary.com/v1_1/dr0zue9vk/raw/upload", {
//          method: "POST",
//          body: data,
//       });

//       const uploadedFileURL = await res.json();
//       setUploadedUrl(uploadedFileURL.secure_url); // Save to local state
//       localStorage.setItem("uploadedPdfUrl", uploadedFileURL.secure_url); // Save to localStorage
//       setLoading(false);
//    };

//    return (
//       <div>
//          <Navbar />

//          <form>
//             <div className="border-2 border-gray-400 shadow-xl rounded-lg w-[1300px] h-[500px] my-10 mx-auto flex">
//                {/* Upload Section */}
//                <div className="bg-sky-100 rounded-lg pt-44 px-5">
//                   <div className="mx-auto flex flex-col items-center">
//                      {uploadedUrl && (
//                         <p className="text-green-600 mb-2">
//                            PDF Uploaded Successfully! <br />
//                            <a
//                               href={uploadedUrl}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="underline"
//                            >
//                               View Uploaded PDF
//                            </a>
//                         </p>
//                      )}
//                      <p>{loading ? "Uploading..." : <img src="upload.svg" alt="Upload" />}</p>
//                   </div>

//                   <FaFileAlt className="mx-auto text-4xl mb-3" />
//                   <input
//                      onChange={handleFileUpload}
//                      type="file"
//                      accept="application/pdf"
//                      className="file-input file-input-neutral"
//                   />
//                </div>

//                {/* Form Section */}
//                <div className="py-5 px-3">
//                   <h1 className="text-3xl font-semibold">Tell us more about your document</h1>
//                   <p>
//                      This information helps us make recommendations <br /> that are more relevant
//                      for you
//                   </p>

//                   <div className="my-3">
//                      <p>Your school</p>
//                      <input
//                         className="border-2 border-red-600 rounded-lg w-[700px] h-[45px]"
//                         type="text"
//                      />
//                      <p>Please make a selection.</p>
//                   </div>

//                   <div className="flex gap-6 my-3">
//                      <div>
//                         <p>Course</p>
//                         <input className="border-2 rounded-lg w-[545px] h-[45px]" type="text" />
//                      </div>
//                      <div>
//                         <p>Department</p>
//                         <input className="border-2 rounded-lg w-[135px] h-[45px]" type="text" />
//                      </div>
//                   </div>

//                   <div className="flex gap-6 my-3">
//                      <div>
//                         <p>Academic year</p>
//                         <input className="border-2 rounded-lg w-[545px] h-[45px]" type="date" />
//                      </div>
//                      <div>
//                         <p>Doc type</p>
//                         <select defaultValue="Medium" className="select select-bordered">
//                            <option disabled>Type</option>
//                            <option>Assignment</option>
//                            <option>Essay</option>
//                            <option>Lab</option>
//                            <option>Notes</option>
//                            <option>Slides</option>
//                         </select>
//                      </div>
//                   </div>

//                   <button className="btn btn-primary my-3">Submit Details</button>
//                </div>
//             </div>
//          </form>

//          <Footer />
//       </div>
//    );
// };

// export default Uploader;
