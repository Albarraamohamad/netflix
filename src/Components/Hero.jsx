import React, { useState } from 'react';
import video from '../assets/SquidGame.mp4';
import img from '../assets/SquidGamePoster.webp';
import play from '../assets/play_icon.png';
import info from '../assets/info_icon.png';
import PlayButton from './PlayButton';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        className={`absolute top-0 left-0 w-full h-[90vh] object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        poster={img} // Display a poster before the video loads
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Video Fallback Image (Smooth Load Effect) */}
      {!isLoaded && (
        <img
          src={img}
          alt="Squid Game Preview"
          className="absolute top-0 left-0 w-full h-[90vh] object-cover"
        />
      )}

      {/* Content Section */}
      <div className="absolute top-60 left-20 text-white z-10">
        <img src={img} alt="Squid Game" className="w-96" />
        <div className="flex gap-3 items-center mt-9 flex-wrap sm:flex-nowrap">
          <PlayButton />
          <button className="bg-gray-500 flex items-center px-5 sm:px-7 py-1 rounded-md">
            <img src={info} alt="More Info" className="w-8 sm:w-10" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

