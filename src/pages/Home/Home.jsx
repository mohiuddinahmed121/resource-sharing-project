import Navbar from "../Navbar/Navbar";
import { FaFileAlt } from "react-icons/fa";
import img1 from "../../asserts/pexels-minan1398-694740.jpg";
import Footer from "../Footer/Footer";
import { Link, NavLink } from "react-router-dom";
import Uploader from "../Uploader/Uploader";

const Home = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="my-24">
            <h1 className="text-center font-bold text-5xl mb-4">
               Upload your document to start studying
            </h1>
            <h5 className="text-center text-2xl">
               See answers, explanations, recommendations, <br />
               one-click tutor help, and more
            </h5>
         </div>
         <div className="border-2 shadow-xl rounded-lg py-48 w-[1300px] text-center my-10 mx-auto">
            <form action="">
               <h1 className="border-gray-900 text-4xl font-semibold mb-4">
                  <FaFileAlt className="mx-auto text-4xl mb-3" />
                  Drag and drop or{" "}
                  <Link to={`uploader`} className="text-blue-700 underline">
                     upload
                  </Link>{" "}
                  <br />
                  your study document
               </h1>
               <p>
                  Your document will be shared on UniVault, enriched, and used to extract content to
                  assist in studying. <br />
                  Service Terms, Copyright Policy, Community Guidelines & Honor Code apply
               </p>
            </form>
         </div>
         <div
            className="hero min-h-screen"
            style={{
               backgroundImage: `url(${img1})`,
            }}
         >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
               <div className="">
                  <h1 className="mb-5 text-4xl font-bold">
                     Find materials for your <br /> course at your school
                  </h1>
                  <div className="bg-zinc-800 rounded-lg p-5 h-44 w-[850px]">
                     <div className="flex text-3xl font-bold mb-8 gap-6">
                        <p className="">I am a student at</p>
                        <input className="rounded-lg" type="text" name="" id="" />
                        <p>and</p>
                     </div>
                     <div className="flex text-3xl font-bold gap-6">
                        <p>my course is</p>
                        <input className="rounded-lg" type="text" name="" id="" />
                        <button className="btn btn-primary">Get Course Materials</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-sky-100 py-10 px-16">
            <h1 className="text-4xl font-semibold mb-5">Explore top schools nearby*</h1>
            <p className="mb-10">
               Succeed with study help shared by students from specific schools and courses
            </p>
            <div>
               <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <NavLink
                     to={`/uniprofile`}
                     className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4"
                  >
                     <h3 className="font-semibold text-2xl">University of Asia Pacific</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </NavLink>
                  <div className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4">
                     <h3 className="font-semibold text-2xl">Independent University,Bangladesh</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </div>
                  <div className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4">
                     <h3 className="font-semibold text-2xl">North South University</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </div>
                  <div className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4">
                     <h3 className="font-semibold text-2xl">BRAC University</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </div>
                  <div className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4">
                     <h3 className="font-semibold text-2xl">East West University,Dhaka</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </div>
                  <div className="shadow-xl w-[450px] h-24 rounded-lg bg-white py-4 pl-4">
                     <h3 className="font-semibold text-2xl">Dhaka University</h3>
                     <div className="flex gap-4">
                        <p>
                           <span>188k</span> Documents
                        </p>
                        <p>
                           <span>8k</span> Questions
                        </p>
                     </div>
                  </div>
               </div>
               <button className="btn text-blue-600 ml-[650px]">View more</button>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Home;
