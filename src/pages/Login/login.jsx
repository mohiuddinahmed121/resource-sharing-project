import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
   const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

   const location = useLocation();
   const navigate = useNavigate();

   const [loginError, setLoginError] = useState("");
   const [showPassword, setShowPassword] = useState("false");

   const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");

      setLoginError("");
      signIn(email, password)
         .then((result) => {
            console.log(result.user);
            navigate(location.state ? location.state : "/dashboard");
         })
         .catch((error) => {
            setLoginError(error.message);
         });
   };

   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(location.state ? location.state : "/dashboard");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleGithubSignIn = () => {
      signInWithGithub()
         .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(location.state ? location.state : "/dashboard");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div>
         <Navbar></Navbar>
         <div>
            <div className="">
               <h2 className="text-3xl my-10 text-center">Please Login</h2>
               <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                  <div className="form-control">
                     <label className="label mb-2">
                        <span className="label-text">Email</span>
                     </label>
                     <br />
                     <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered mb-3"
                        name="email"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label mb-2">
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
                  <div className="form-control mt-1 text-center">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
               <div className="ml-[230px] mb-10">
                  {loginError && <p className="text-red-600 ml-96">{loginError}</p>}
               </div>
               <div className="text-center mb-10">
                  <p>Or login with</p>
                  <button onClick={handleGoogleSignIn} className="btn  btn-outline mr-10 mt-1">
                     Google
                  </button>
                  <button onClick={handleGithubSignIn} className="btn btn-outline">
                     Github
                  </button>
               </div>
               <p className="text-center mb-8">
                  Don not have an account ?{" "}
                  <Link className="text-blue-600 font-bold" to="/register">
                     Register
                  </Link>
               </p>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Login;
