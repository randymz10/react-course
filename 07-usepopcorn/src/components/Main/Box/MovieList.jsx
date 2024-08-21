import PropTypes from "prop-types";
import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  onCloseMovie: PropTypes.func,
};

export default MovieList;
