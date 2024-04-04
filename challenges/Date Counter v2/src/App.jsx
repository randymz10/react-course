import { useState } from "react";
import Counter from "./components/Counter";
import Range from "./components/Range";
import Reset from "./components/Reset";

function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + counter);

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <Range step={step} setStep={setStep} />
      <Counter counter={counter} setCounter={setCounter} multiply={step} />

      <div className="mt-3">
        {counter === 0
          ? "Today is "
          : counter > 0
          ? `${counter} from today is `
          : `${Math.abs(counter)} ago was `}
        <span>{date.toDateString()}</span>
      </div>

      {counter !== 0 || step != 1 ? (
        <Reset setCounter={setCounter} setStep={setStep} />
      ) : null}
    </div>
  );
}

export default App;
