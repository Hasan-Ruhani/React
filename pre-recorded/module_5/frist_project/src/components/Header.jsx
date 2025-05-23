import { FaSearch, FaCog, FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Header({ toggleSidebar }) {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex items-center justify-between w-full">
      {/* Left Section (Logo + Mobile Menu) */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button (Hidden on larger screens) */}
        <button onClick={toggleSidebar} className="lg:hidden text-gray-600 text-2xl">
          <FiMenu />
        </button>
        {/* Page Title */}
        <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">Overview</h2>
      </div>

      {/* Middle Section (Search Bar - Hidden on Mobile) */}
      <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for something"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section (Icons + Profile) */}
      <div className="flex items-center space-x-6">
        <button className="hidden md:block text-gray-500 hover:text-blue-500 text-xl">
          <FaCog />
        </button>
        <button className="hidden md:block text-red-500 hover:text-red-600 text-xl relative">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
