import PropTypes from "prop-types";

function Reset({ setCounter, setStep }) {
  const handleClick = () => {
    setCounter(0);
    setStep(0);
  };
  return (
    <button className="btn btn-dark mt-4" onClick={handleClick}>
      Reset
    </button>
  );
}

Reset.propTypes = {
  setCounter: PropTypes.func,
  setStep: PropTypes.func,
};

export default Reset;
