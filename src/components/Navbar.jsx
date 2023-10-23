import React from "react";
import Profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <nav className="hidden p-4 w-full text-white shadow-md sm:block">
      <div className="container flex justify-end items-center ml-4 space-x-2 md:space-x-4">
        <div className="hidden items-center space-x-4 md:flex">
          <a href="" className="text-gray-400 hover:text-white">
            Gmail
          </a>
          <a href="" className="text-gray-400 hover:text-white">
            Photos
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="hidden pr-1 mt-2 w-10 h-10 rounded-full md:w-14 md:h-10 md:block"
            src={Profile}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
