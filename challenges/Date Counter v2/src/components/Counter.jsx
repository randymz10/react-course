import PropTypes from "prop-types";

function Counter({ counter, setCounter, multiply }) {
  const handleMinus = () => {
    setCounter(counter - multiply);
  };

  const handlePlus = () => {
    setCounter(counter + multiply);
  };

  const handleChange = (e) => {
    const numberValue = Number(e.target.value);

    if (numberValue >= 0 ) {
      setCounter(numberValue);
    } else {
      setCounter(0);
    }
  };
  return (
    <div className="mt-3">
      <button onClick={handleMinus} className="btn btn-dark me-2">
        -
      </button>
      <input type="text" onChange={handleChange} value={counter} />
      <button onClick={handlePlus} className="btn btn-dark ms-2">
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  setCounter: PropTypes.func,
  multiply: PropTypes.number,
};

export default Counter;
