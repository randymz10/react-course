import PropTypes from "prop-types";

function Counter({ counter, setCounter, multiply, text}) {
  const handleMinus = () => {
    setCounter(counter - multiply);
  };

  const handlePlus = () => {
    setCounter(counter + multiply);
  };

  return (
    <>
      <button onClick={handleMinus}>-</button>
      {text} {counter}
      <button onClick={handlePlus}>+</button>
    </>
  );
}

Counter.propTypes = {
  counter: PropTypes.number,
  setCounter: PropTypes.func,
  multiply: PropTypes.number,
  text: PropTypes.string,
  haveDay: PropTypes.bool,
  setDay: PropTypes.func,
};

export default Counter;
