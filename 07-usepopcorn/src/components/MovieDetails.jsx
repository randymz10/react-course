import PropTypes from "prop-types";

function MovieDetails({ selectedId, onCloseMovie }) {
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
};

export default MovieDetails;
