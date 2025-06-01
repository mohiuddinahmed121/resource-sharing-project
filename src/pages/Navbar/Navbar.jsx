import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      logOut().then().catch();
   };

   useEffect(() => {
      const checkbox = document.querySelector(".theme-controller");

      const toggleTheme = () => {
         const html = document.documentElement;
         const currentTheme = html.getAttribute("data-theme");
         html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
      };

      checkbox?.addEventListener("change", toggleTheme);

      return () => checkbox?.removeEventListener("change", toggleTheme);
   }, []);

   const [search, setSearch] = useState("");
   const navigate = useNavigate();

   const handleSearch = (e) => {
      e.preventDefault();
      if (search.trim()) {
         navigate(`/searchResult?q=${encodeURIComponent(search)}`);
      }
   };

   const navLinks = (
      <>
         <li>
            <NavLink to="/">Home</NavLink>
         </li>
         <li>
            <NavLink to="/about">About</NavLink>
         </li>
         <li>
            <NavLink to="/career">Career</NavLink>
         </li>
         <li>
            <NavLink to="/allResource">Study Resources</NavLink>
         </li>
         <li>
            <NavLink to="/dashboard">Profile</NavLink>
         </li>
      </>
   );
   return (
      <div>
         <div className="navbar bg-base-100 shadow-xl shadow-gray-700">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                     {navLinks}
                  </ul>
               </div>
               <a className="btn btn-ghost text-xl">UniVault</a>
               {/* search bar------------------------------------------------ */}
               <form onSubmit={handleSearch} className="join border-2">
                  <div className="">
                     <label className="input border-2 validator join-item flex items-center justify-center">
                        <input
                           type="text"
                           placeholder="search content"
                           required
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                        />
                     </label>
                     <div className="validator-hint hidden">Enter valid address</div>
                  </div>
                  <button type="submit" className="btn btn-neutral join-item">
                     Search
                  </button>
               </form>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end gap-3">
               <label className="flex cursor-pointer gap-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <circle cx="12" cy="12" r="5" />
                     <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input type="checkbox" className="toggle theme-controller" />
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="20"
                     height="20"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  >
                     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
               </label>
               {user ? (
                  <button onClick={handleSignOut} className="btn">
                     Logout
                  </button>
               ) : (
                  <Link to="/login">
                     <button className="btn">Login</button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
