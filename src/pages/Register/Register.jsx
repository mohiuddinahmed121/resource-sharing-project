import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
   const { createUser } = useContext(AuthContext);

   const [registerError, setRegisterError] = useState("");
   const [success, setSuccess] = useState("");
   const [showPassword, setShowPassword] = useState("false");

   const handleRegister = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);

      const name = form.get("name");
      const photo = form.get("photo");
      const email = form.get("email");
      const password = form.get("password");
      console.log(name, photo, email, password);

      setRegisterError("");
      setSuccess("");

      if (password.length < 6) {
         setRegisterError("Password should be at least 6 characters of longer");
         return;
      } else if (!/[A-Z]/.test(password)) {
         setRegisterError("Your password should have at least one upper case characters.");
         return;
      } else if (!/[a-z]/.test(password)) {
         setRegisterError("Your password should have at least one lower case characters.");
         return;
      }

      createUser(email, password)
         .then((result) => {
            console.log(result.user);
            setSuccess("User Created Successfully");
         })
         .catch((error) => {
            setRegisterError(error.message);
         });
   };

   return (
      <div>
         <Navbar></Navbar>
         <div>
            <h2 className="text-3xl my-6 ml-96">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Name</span>
                  </label>
                  <br />
                  <input
                     type="text"
                     placeholder="name"
                     className="input input-bordered"
                     name="name"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="labe mb-1">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <br />
                  <input
                     type="text"
                     placeholder="photo"
                     className="input input-bordered"
                     name="photo"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Email</span>
                  </label>
                  <br />
                  <input
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     name="email"
                     required
                  />
               </div>
               <div className="form-control">
                  <label className="label mb-1">
                     <span className="label-text">Password</span>
                  </label>
                  <br />
                  <div className="relative">
                     <input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        className="input input-bordered w-full"
                        name="password"
                        required
                     />
                     <span
                        className="absolute top-[13px] right-3"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                     </span>
                  </div>
                  <br />
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                     </a>
                  </label>
               </div>
               <div className="form-control mt-3">
                  <button className="btn btn-primary">Register</button>
               </div>
            </form>
            <div className="mb-10">
               {registerError && <p className="text-red-600 ml-96">{registerError}</p>}
               {success && <p className="text-green-600 ml-96">{success}</p>}
            </div>
            <p className="ml-96 mb-8">
               Already have an account ?
               <Link className="text-blue-600 font-bold" to="/login">
                  Login
               </Link>
            </p>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Register;
