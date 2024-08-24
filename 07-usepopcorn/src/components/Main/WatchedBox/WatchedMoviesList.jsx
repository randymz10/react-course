import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

WatchedMoviesList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func,
};

export default WatchedMoviesList;
