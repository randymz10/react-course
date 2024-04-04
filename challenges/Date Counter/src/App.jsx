import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const date = new Date();

  date.setDate(date.getDate() + counter);

  return (
    <div>
      <Counter
        counter={step}
        setCounter={setStep}
        multiply={1}
        text={"Step:"}
      />
      <br />
      <Counter
        counter={counter}
        setCounter={setCounter}
        multiply={step}
        text={"Counter:"}
      />
      <br />
      <br />

      <span>
        {counter === 0
          ? "Today is "
          : counter > 0
          ? `${counter} from today is `
          : `${Math.abs(counter)} ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
