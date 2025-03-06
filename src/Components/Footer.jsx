import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="bg-black text-white  lg:flex lg:justify-center   pb-6 pt-4 grid xs:grid-cols-1">
      <div className="grid lg:grid-cols-4 lg:items-center  xs:grid-cols-1 mt-7 ml-12 xs:absolute xs:left-9 gap-28 text-left xs:ml-0 xs:gap-0  ">
        <div>
          <p className="mb-4 text-[#B2B2B2]">FAQ</p>
          <p className="mb-4 text-[#B2B2B2]">Investor Relations</p>
          <p className="mb-4 text-[#B2B2B2]">Privacy</p>
          <p className="mb-4 text-[#B2B2B2]">Speed Test</p>
        </div>

        <div>
          <p className="mb-4 text-[#B2B2B2]">Help Center</p>
          <p className="mb-4 text-[#B2B2B2]">Jobs</p>
          <p className="mb-4 text-[#B2B2B2]">Cookie Preference</p>
          <p className="mb-4 text-[#B2B2B2]">Legal Notice</p>
        </div>

        <div>
          <p className="mb-4 text-[#B2B2B2]">Account</p>
          <p className="mb-4 text-[#B2B2B2]">Ways to Watch</p>
          <p className="mb-4 text-[#B2B2B2]">Corporate Information</p>
          <p className="mb-4 text-[#B2B2B2]">Only on Netflix</p>
        </div>

        <div>
          <p className="mb-4 text-[#B2B2B2]">Media Center</p>
          <p className="mb-4 text-[#B2B2B2]">Terms of Use</p>
          <p className="mb-4 text-[#B2B2B2]">Contact Us</p>
        </div>

        <div>
          <select className="text-white bg-[#131515] px-6 py-1 border rounded-md mt-4">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
          <p className="mt-4 text-[#B2B2B2]">Netflix Egypt</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;