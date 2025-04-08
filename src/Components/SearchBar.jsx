import React, { useState, useEffect, useRef } from "react";
import search_Icon from '../assets/search_icon.svg'
const API_KEY = "7b311131cd12b5d39e39c971cc4b1e8c";

const SearchBar = ({ searchIcon }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  // Handle clicks outside the search box to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch search results from TMDB API
  useEffect(() => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const delayDebounce = setTimeout(fetchMovies, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Icon */}
      <img
        src={search_Icon}
        alt="Search"
        className="cursor-pointer hidden md:block xs:flex"
        onClick={() => setShowSearch(true)}
      />

      {/* Search Input Field */}
      {showSearch && (
        <div className="absolute top-10 right-0 bg-black p-2 rounded shadow-md w-72">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="w-full p-2 bg-gray-800 text-white border-none outline-none rounded"
          />
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 max-h-60 overflow-y-auto bg-gray-900 rounded">
              {searchResults.map((movie) => (
                <a
                  key={movie.id}
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 hover:bg-gray-700 transition"
                >
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : "https://via.placeholder.com/92"}
                    alt={movie.title}
                    className="w-12 h-16 rounded"
                  />
                  <div className="ml-3">
                    <p className="text-white font-semibold">{movie.title}</p>
                    <p className="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
