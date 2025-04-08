import React from "react";
import video from "../assets/Plankton_ The Movie _ Official Trailer _ Netflix.mp4";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HeroChildren = () => {
  return (
    <div>
    
      <div className=" w-[100%] h-screen gap-0 p-0">
      {/* Navbar should be absolute with high z-index to stay above the video */}
      <div className=" absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Video Background - Fullscreen and Responsive */}
      <div className="w-full h-screen  relative">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
     

    </div>
    
    </div>
    
  );
};

export default HeroChildren;
