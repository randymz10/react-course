import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

WatchedMoviesList.propTypes = {
  watched: PropTypes.array,
};

export default WatchedMoviesList;
