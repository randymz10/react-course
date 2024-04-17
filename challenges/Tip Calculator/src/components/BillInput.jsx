import PropTypes from "prop-types";

function BillInput({ bill, onSetBill }) {
  
    function handleBill(e) {
    onSetBill(Number(e.target.value));
  }

  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={handleBill}
      />
    </div>
  );
}

BillInput.propTypes = {
  bill: PropTypes.number,
  onSetBill: PropTypes.func,
};

export default BillInput;
