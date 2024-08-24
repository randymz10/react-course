import PropTypes from "prop-types";

function Movie({ movie, onSelectMovie }) {
  function handleOnClick() {
    onSelectMovie(movie.imdbID);
  }

  return (
    <li onClick={handleOnClick}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.object,
  onSelectMovie: PropTypes.func,
};

export default Movie;
