import { useEffect, useState } from "react";
import tempMovieData from "../data/tempMovieData.js";
import tempWatchedData from "../data/tempWatchedData";
import Main from "./Main/Main";
import NavBar from "./NavBar/NavBar";
import Search from "./NavBar/Search.jsx";
import NumResults from "./NavBar/NumResults.jsx";
import Box from "./Main/Box/Box.jsx";
import MovieList from "./Main/Box/MovieList.jsx";
import WatchedSummary from "./Main/WatchedBox/WatchedSummary.jsx";
import WatchedMoviesList from "./Main/WatchedBox/WatchedMoviesList.jsx";
import Loader from "./Loader.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const KEY = "4accf5d1";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const tempQuery = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Respose === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
