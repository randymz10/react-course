import { useState } from "react";
import tempMovieData from "../../../data/tempMovieData.js";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
