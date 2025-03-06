import React, { useState } from "react";
import "../App.css";
import logo from "../assets/logo.png";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import TopNow from "../Components/TopNpw";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { GiMicrophone } from "react-icons/gi";
import { RiUserFollowFill } from "react-icons/ri";
import Accordion1 from "../Components/Accordion1";
import Footer from "../Components/Footer";
import {login,signup} from '../firebase'

const Login = () => {
  const [signState , steSignState] = useState('Sign In')
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      {/* Navbar Section */}
      <div className="barra bg-black xs:h-[60vh] sm:h-[85vh]">
        <div className=" flex  justify-between items-center py-4 px-4 sm:py-6 sm:px-6  md:px-12 lg:px-36">
          <img src={logo} alt="Netflix Logo" className="w-20 xs:w-24 sm:w-32 md:w-40" />
          <div className="flex gap-2 xs:gap-3">
            <select className="text-white bg-[#131515] px-3 xs:px-2 sm:px-4 py-1 border rounded-md text-xs sm:text-sm">
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
            <button className="bg-[#E50914] px-3 xs:px-2 sm:px-4 py-1.5 rounded-md font-bold text-xs sm:text-sm">
              Sign in
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex items-center justify-center py-4 xs:py-8 sm:py-10 px-2 sm:px-4 text-center">
          <div className="max-w-3xl w-full">
            <h1 className="text-white text-lg xs:text-xl sm:text-4xl md:text-6xl font-bold leading-tight xs:mt-12">
              Unlimited movies, TV <br /> shows, and more
            </h1>
            <p className="text-xs xs:text-sm sm:text-lg text-white mt-2 sm:mt-4 font-bold">
              Starts at EGP 100. Cancel anytime.
            </p>
            <p className="text-xs text-white mt-1 sm:mt-2">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <div className="flex lg:flex-row xs:flex-col justify-center mt-3 xs:mt-4 sm:mt-6 gap-2 xs:gap-3 items-center">
              
              <input
                type="email"
                placeholder="Email address"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full xs:w-64 sm:w-72 py-2 xs:py-2.5 sm:py-3 px-2 xs:px-3 border-2 bg-transparent border-gray-500 rounded-md text-white text-xs xs:text-sm"
              />
              <Link to="/require">
                <button className="bg-[#E50914] py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-md hover:bg-[#ff3f3f] font-bold text-xs xs:text-sm sm:text-xl flex items-center justify-center">
                  Get Started <GoChevronRight className="text-lg xs:text-xl sm:text-2xl ml-1 xs:ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="container mx-auto px-4">
        <TopNow />
      </div>

      {/* More Reasons to Join */}
      <h1 className="text-lg xs:text-xl sm:text-3xl text-center mt-10 xs:mt-12 sm:mt-16 mb-4 sm:mb-6">
        More Reasons to Join
      </h1>
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
  {[
    {
      title: "Enjoy on your TV",
      desc: "Watch on Smart TVs, PlayStation, Xbox, Apple TV, and more.",
      icon: <MdOutlineScreenshotMonitor className="absolute bottom-4 right-4 text-4xl sm:text-5xl" />
    },
    {
      title: "Download to watch offline",
      desc: "Save your favorites easily and always have something to watch.",
      icon: <IoMdDownload className="absolute bottom-4 right-4 text-4xl sm:text-5xl" />
    },
    {
      title: "Watch everywhere",
      desc: "Stream on your phone, tablet, laptop, and TV.",
      icon: <GiMicrophone className="absolute bottom-4 right-4 text-4xl sm:text-5xl" />
    },
    {
      title: "Create profiles for kids",
      desc: "Let kids explore their favorite characters in a space made just for them.",
      icon: <RiUserFollowFill className="absolute bottom-4 right-4 text-4xl sm:text-5xl" />
    }
  ].map((item, i) => (
    <div
      key={i}
      className="relative bg-gradient-to-tr from-[#192044] to-[#210f18] p-4 sm:p-6 rounded-2xl h-56 sm:h-64 md:h-72 hover:-translate-y-2 transition duration-500 cursor-pointer w-full"
    >
      <h2 className="text-base xs:text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">
        {item.title}
      </h2>
      <p className="text-xs xs:text-sm">{item.desc}</p>
      {item.icon}
    </div>
  ))}
</div>


      {/* FAQ Section */}
      <h1 className="text-xs xs:text-sm sm:text-lg text-center mt-10 xs:mt-12 sm:mt-16 mb-4 sm:mb-6">
        Frequently Asked Questions
      </h1>
      <div className="container mx-auto px-4">
        <Accordion1 />
      </div>

      {/* Email Subscription Section */}
      <p className="text-center mt-8 xs:mt-10 sm:mt-12 text-sm xs:text-base sm:text-lg">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col xs:flex-row justify-center mt-4 xs:mt-5 sm:mt-6 gap-2 xs:gap-3 px-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full xs:w-64 sm:w-[500px] py-2 xs:py-2.5 sm:py-3 px-2 xs:px-3 border-2 bg-transparent border-gray-500 rounded-md text-white text-xs xs:text-sm"
        />
        <Link>
          <button className="bg-[#E50914] py-2 xs:py-2.5 sm:py-3 px-4 xs:px-5 sm:px-6 rounded-md hover:bg-[#ff3f3f] font-bold text-xs xs:text-sm sm:text-xl flex items-center justify-center">
            Get Started <GoChevronRight className="text-lg xs:text-xl sm:text-2xl ml-1 xs:ml-2" />
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
