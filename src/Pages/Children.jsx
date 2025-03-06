import React, { useEffect, useState, useRef } from "react";
import HeroChildren from "../Components/HeroChildren";
import Footer from "../Components/Footer";

const API_KEY = "7b311131cd12b5d39e39c971cc4b1e8c";

const categories = [
  { title: "Kids' Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16,10751&page=1` },
  { title: "Upcoming Kids' Movies", url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&with_genres=16,10751&page=1` },
  { title: "Animated Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=1` },
  { title: "Disney Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=2&page=1` },
  { title: "Pixar Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=3&page=1` },
  { title: "G-Rated Kids' Movies", url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&certification_country=US&certification=G&with_genres=16,10751&page=1` },
];

const Children = () => {
  const [moviesData, setMoviesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const fetchedData = {};
        for (const category of categories) {
          const response = await fetch(category.url);
          const data = await response.json();
          fetchedData[category.title] = data.results || [];
        }
        setMoviesData(fetchedData);
      } catch (error) {
        setError("Failed to load kids' movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p className="text-white text-center">Loading movies...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <HeroChildren />
      {Object.entries(moviesData).map(([categoryTitle, movies]) => (
        <div key={categoryTitle} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{categoryTitle}</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="relative group cursor-pointer min-w-[140px] max-w-[160px]"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setPopupPosition({
                      x: rect.left + window.scrollX,
                      y: Math.max(rect.top + window.scrollY - 230, 10),
                    });
                    setHoveredMovie(movie);
                  }}
                  onMouseLeave={() => setTimeout(() => setHoveredMovie(null), 300)}
                >
                  <a
                    href={`https://www.themoviedb.org/movie/${movie.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300"}
                      alt={movie.title}
                      className="w-[140px] h-[200px] object-cover rounded-md"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {hoveredMovie && <MoviePopup movie={hoveredMovie} position={popupPosition} />}
    </div>
  );
};

const MoviePopup = ({ movie, position }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const popupRef = useRef(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`);
        const data = await res.json();
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        setTrailerKey(trailer ? trailer.key : "");
      } catch (error) {
        console.error("Failed to load trailer:", error);
      }
    };

    fetchTrailer();
  }, [movie]);

  return (
    <div>
<div
      ref={popupRef}
      className="absolute bg-black text-white p-4 rounded-lg shadow-lg z-50 duration-300 w-[300px] cursor-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {trailerKey ? (
        <iframe
          className="w-full h-[170px] rounded"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
          title={movie.title}
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-gray-400">Trailer not available</p>
      )}
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-300 line-clamp-3">{movie.overview || "No description available."}</p>
      
    </div>
    </div>
    
  );
};

export default Children;
