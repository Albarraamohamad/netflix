import React from "react";
import play from '../assets/play_icon.png';

const PlayButton = () => {
  const handlePlay2 = () => {
    window.open("https://www.themoviedb.org/movie/1408248", "_blank");
  };

  return (
    <button
      onClick={handlePlay2}
      className="flex items-center gap-2 bg-white text-black px-5 sm:px-7 text-base sm:text-lg py-2 font-bold rounded-md"
    >
      <img src={play} alt="Play" className="w-6 sm:w-8" />
      Play
    </button>
  );
};

export default PlayButton;
