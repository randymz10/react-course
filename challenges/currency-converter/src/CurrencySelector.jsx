function CurrencySelector({value, onAddCurrency, disabled}) {

    function handleOption (e) {
        onAddCurrency(e.target.value);
    }
  
    return (
    <select value={value} onClick={handleOption} disabled={disabled}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

export default CurrencySelector;
