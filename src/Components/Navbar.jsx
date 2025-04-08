import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";
import search from '../assets/search_icon.svg';
import bell from '../assets/bell_icon.svg';
import profile from '../assets/profile_img.png';
import caret from '../assets/caret_icon.svg';
import { GoChevronDown } from "react-icons/go";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Profile dropdown state
  const [openBar, setOpenBar] = useState(false); // Mobile menu state
  const [browseOpen, setBrowseOpen] = useState(false); // Browse dropdown state

  return (
    <div className="container mx-auto bg-transparent absolute flex h-[13vh] justify-between items-center w-full px-4">
      
      {/* Left Side: Logo + Navigation */}
      <div className="flex items-center gap-5">
        <Link to='/Home'>
        <img src={logo} alt="Logo" className="w-24" />

        </Link>
        <div className="text-white font-bold text-sm hidden lg:flex">
          <Link className="m-3" to="/Home">Home</Link>
          <Link className="m-3" to="/Series">Series</Link>
          <Link className="m-3" to="/Movies">Movies</Link>
          <Link className="m-3" to="/NewPopular">New & Popular</Link>
          <Link className="m-3" to="/MyList">My List</Link>
          <Link className="m-3" to="/BrowsebyLanguages">Browse by Languages</Link>
        </div>

        {/* Browse Button (for small screens) */}
        <div className="relative sm:flex lg:hidden z-10">
          <button 
            onClick={() => setBrowseOpen(!browseOpen)} 
        className="text-white flex items-center"
          >
            Browse <GoChevronDown />
          </button>

          {/* Browse Dropdown Menu */}
          {browseOpen && (
            <div className="absolute top-12 left-0 bg-gray-800 text-white rounded-lg shadow-lg w-48">
              <ul className="p-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/Home">Home</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/Series">Series</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/Movies">Movies</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/NewPopular">New & Popular</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/MyList">My List</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/BrowsebyLanguages">Browse by Languages</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Side: Icons + Profile Dropdown */}
      <div className="relative flex gap-4 items-center">

        <SearchBar/>

        <Link to="/Children" className="text-white hidden md:block">Children</Link>
        <img src={bell} alt="Notifications" className="cursor-pointer hidden  md:block xs:flex" />

        {/* Profile & Dropdown */}
        <div className="relative">
          <img src={profile} alt="Profile" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <img src={caret} alt="Dropdown" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-12 right-0 bg-gray-800 text-white rounded-lg shadow-lg w-40 z-50" >
              <ul className="p-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/settings">Settings</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to='/'>
                  <button onClick={() => alert("Logged out")}>Logout</button>

                  </Link>
                  
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link to='/Children'>Children</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
