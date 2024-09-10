import { useState } from "react";
// import tempMovieData from "../data/tempMovieData.js";
// import tempWatchedData from "../data/tempWatchedData";
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
import MovieDetails from "./MovieDetails.jsx";
import { useMovies } from "../useMovies.js";
// import { useLocalStorageState } from "../useLocalStorageState.js";

// const KEY = "4accf5d1";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const [watched, setWatched] = useState([]);
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = JSON.parse(localStorage.getItem("watched"));
  //   return storedValue;
  // });

  const { movies, isLoading, error } = useMovies(query);
  // const { watched, setWatched } = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

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
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
              onCloseMovie={handleCloseMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
