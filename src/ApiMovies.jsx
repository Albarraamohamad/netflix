import React, { useEffect, useState, useRef } from "react";
import './App.css';

const MoviePopup = ({ movie, position, setHoveredMovie }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const popupRef = useRef(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=7b311131cd12b5d39e39c971cc4b1e8c`);
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
    <div
      ref={popupRef}
      className="absolute bg-black text-white p-4 rounded-lg shadow-lg z-50 duration-300 w-[300px] cursor-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseEnter={() => clearTimeout(popupRef.current)}
      onMouseLeave={() => {
        setHoveredMovie(null);
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
      <div className="flex justify-between mt-4">
        <button className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700">⭐ Like</button>
        <button className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700">👎 Dislike</button>
        <button className="bg-red-600 px-3 py-1 rounded text-sm hover:bg-red-500">❤️ Favorite</button>
      </div>
    </div>
  );
};

const ApiMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [arabicMovies, setArabicMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const API_KEY = "7b311131cd12b5d39e39c971cc4b1e8c";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&page=1`),
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ar&page=1`),
        ]);

        const data = await Promise.all(responses.map((res) => res.json()));

        setNowPlaying(data[0].results || []);
        setActionMovies(data[1].results || []);
        setComedyMovies(data[2].results || []);
        setArabicMovies(data[3].results || []);
      } catch (error) {
        setError("Failed to load movies");
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
      <MovieRow title="Now Playing" movies={nowPlaying} setHoveredMovie={setHoveredMovie} setPopupPosition={setPopupPosition} />
      <MovieRow title="Action Movies" movies={actionMovies} setHoveredMovie={setHoveredMovie} setPopupPosition={setPopupPosition} />
      <MovieRow title="Comedy Movies" movies={comedyMovies} setHoveredMovie={setHoveredMovie} setPopupPosition={setPopupPosition} />
      <MovieRow title="Arabic Movies" movies={arabicMovies} setHoveredMovie={setHoveredMovie} setPopupPosition={setPopupPosition} />
      {hoveredMovie && <MoviePopup movie={hoveredMovie} position={popupPosition} setHoveredMovie={setHoveredMovie} />}
    </div>
  );
};

const MovieRow = ({ title, movies, setHoveredMovie, setPopupPosition }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
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
              onClick={() => {
                window.location.href = `https://www.themoviedb.org/movie/${movie.id}`;
              }}
            >
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300"}
                alt={movie.title}
                className="w-[140px] h-[200px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
     
      
    </div>
  );
};

export default ApiMovies;
