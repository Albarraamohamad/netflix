import React from "react";

const Footer = () => {
  return (
    <div className="gap-0 p-0 m-0">
      <hr className="px-0 sm:px-16 mt-10" />
      <div className="grid lg:grid-cols-4 gap-5 mt-20 md:grid-cols-4 grid-cols-1 px-0 sm:px-16">
        <div>
          <p className="m-3">FAQ</p>
          <p className="m-3">Investor Relations</p>
          <p className="m-3">Privacy</p>
          <p className="m-3">Speed Test</p>
        </div>

        <div>
          <p className="m-3">Help Center</p>
          <p className="m-3">Jobs</p>
          <p className="m-3">Cookie Preference</p>
          <p className="m-3">Legal Notice</p>
        </div>

        <div>
          <p className="m-3">Account</p>
          <p className="m-3">Ways to Watch</p>
          <p className="m-3">Corporate Information</p>
          <p className="m-3">Only on Netflix</p>
        </div>

        <div>
          <p className="m-3">Media Center</p>
          <p className="m-3">Terms of Use</p>
          <p className="m-3">Contact Us</p>
        </div>

        <div>
          <select className="bg-black">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
          <p className="mt-5 mb-5">Netflix Egypt</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
