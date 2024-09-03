// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
import { useEffect, useState } from "react";
import CurrencySelector from "./CurrencySelector";

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currency, setCurrency] = useState("EUR");
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  function handleCurrency(e) {
    setCurrency(e);
  }

  function handleConvertedCurrecy(e) {
    setConvertedCurrency(e);
  }

  function handleAmount(e) {
    setAmount(Number(e.target.value));
  }

  useEffect(() => {
    async function getConvertedAmount(amount, currency, convertedCurrency) {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${convertedCurrency}`
      );
      const data = await res.json();
      const convertedValue = data.rates[convertedCurrency];
      setConvertedAmount(convertedValue);
      setIsLoading(false);
    }
    if (currency === convertedCurrency) return setConvertedAmount(amount);

    getConvertedAmount(amount, currency, convertedCurrency);
  }, [amount, currency, convertedCurrency]);

  return (
    <>
      {isLoading && <p>Loading..</p>}
      {!isLoading && (
        <div>
          <input
            type="text"
            value={amount}
            onChange={handleAmount}
            disabled={isLoading}
          />
          <CurrencySelector
            value={currency}
            onAddCurrency={handleCurrency}
            disabled={isLoading}
          />
          <CurrencySelector
            value={convertedCurrency}
            onAddCurrency={handleConvertedCurrecy}
            disabled={isLoading}
          />
          <p>
            {convertedAmount} {convertedCurrency}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
