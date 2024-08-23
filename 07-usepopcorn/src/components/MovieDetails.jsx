import PropTypes from "prop-types";
import { useEffect } from "react";

function MovieDetails({ selectedId, onCloseMovie, key }) {
  console.log(selectedId)
  useEffect(function () {
    async function getMovieDetails() {
      const res = await fetch(
        `http://www.omdbapi.com/?i=${selectedId}&apikey=${key}`
      );
      const data = await res.json();
      console.log(data);
    }
    getMovieDetails();
  }, []);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}

MovieDetails.propTypes = {
  selectedId: PropTypes.string,
  onCloseMovie: PropTypes.func,
  key: PropTypes.string
};

export default MovieDetails;
