import React, { useEffect, useState } from "react";

const TopNow = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "7b311131cd12b5d39e39c971cc4b1e8c";

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        setError("Failed to load trending movies");
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-[#000000] p-6 rounded text-white">
      <h2 className="text-2xl font-bold mb-4">Top Now</h2>

      {/* Scrollable container with hidden scrollbar */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 overflow-x-auto no-scrollbar px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {movies.slice(0, 10).map((movie, index) => (
            <a
              key={movie.id}
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              style={{
                minWidth: "180px", // Bigger width
                maxWidth: "180px",
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/300"
                }
                alt={movie.title}
                className="w-[180px] h-[270px] object-cover rounded-md"
              />
              {/* Large number on the bottom left */}
              <span className="absolute bottom-2 left-2 text-white text-5xl font-bold bg-black/60 px-2 py-1 rounded-lg">
                {index + 1}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* CSS to fully hide scrollbar */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      
    </div>
  );
};

export default TopNow;
