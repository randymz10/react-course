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

const KEY = "4accf5d1";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const query = "interstellar";

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
