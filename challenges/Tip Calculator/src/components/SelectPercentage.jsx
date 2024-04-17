import PropTypes from "prop-types";

function SelectPercentage({ children, percentage, onSelect }) {
  function handleSelect(e) {
    onSelect(Number(e.target.value));
  }

  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={handleSelect}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

SelectPercentage.propTypes = {
  children: PropTypes.array,
  percentage: PropTypes.number,
  onSelect: PropTypes.func,
};

export default SelectPercentage;
