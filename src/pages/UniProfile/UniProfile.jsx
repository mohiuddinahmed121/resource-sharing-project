import { FaSchool } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ResourVault from "../ResourVault/ResourVault";
import { Link, NavLink } from "react-router-dom";

const UniProfile = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="mx-auto my-5 py-10 px-6">
            <div className="flex items-center gap-2">
               <p>School</p>
               <FaArrowRight />
               <p>University of Asia Pacific</p>
            </div>

            <div className="flex gap-6 mt-10 mb-10 ml-10 items-center">
               <FaSchool className="text-9xl border-2 p-4" />
               <h1 className="text-5xl">University of Asia Pacific</h1>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
               <input type="radio" name="my_tabs_3" className="tab" aria-label="Departments" />
               <div className="tab-content bg-base-400 border-base-300 p-6">
                  {/* tab content 1 */}
                  <div className="">
                     <h1 className="text-2xl font-bold mb-5">Departments</h1>
                     <div className="grid grid-cols-3">
                        <Link to={`/ResourVault`}>
                           <div className="shadow-2xl w-[400px] h-[100px] rounded-lg py-3 pl-3">
                              <h3 className="text-2xl font-bold">CSE</h3>
                              <p>33 Documents</p>
                           </div>
                        </Link>
                        <div className="shadow-2xl w-[400px] h-[100px] rounded-lg py-3 pl-3">
                           <h3 className="text-2xl font-bold">EEE</h3>
                           <p>33 Documents</p>
                        </div>
                        <div className="shadow-2xl w-[400px] h-[100px] rounded-lg py-3 pl-3">
                           <h3 className="text-2xl font-bold">BBA</h3>
                           <p>33 Documents</p>
                        </div>
                     </div>
                  </div>
               </div>

               <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab"
                  aria-label="Documents"
                  defaultChecked
               />
               <div className="tab-content bg-base-400 border-base-300 p-6">
                  {/* tab content 2 */}
                  <ResourVault></ResourVault>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default UniProfile;

