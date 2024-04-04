import PropTypes from "prop-types";

function Range({ step, setStep }) {
  const handleChange = (e) => {
    setStep(parseInt(e.target.value));
  };

  return (
    <div className="mt-3">
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={handleChange}
      />
      <span>{step}</span>
    </div>
  );
}

Range.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
};

export default Range;
