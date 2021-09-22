import { useState } from "react";
import { CounterWrapper } from "./CounterStyled";

const Counter = ({ data }) => {
  const [counter, setcounter] = useState(1);

  const increment = () => {
    if (counter !== 7) {
      const resIncrement = counter + 1;
      setcounter(resIncrement);
    }
  };

  const decrement = () => {
    if (counter !== 1) {
      const resDecrement = counter - 1;
      setcounter(resDecrement);
    }
  };

  return (
    <CounterWrapper>
      <div className="CounterInterfaceWrapper">
        <button
          type="button"
          onClick={decrement}
          className="buttonCounter buttonCounterLeft"
        >
          &#60;
        </button>
        <p className="counterNumberContainer">
          <span className="counterDay">{counter}</span>{" "}
          <span className="counterDate">/ 7</span>
        </p>
        <button
          type="button"
          onClick={increment}
          className="buttonCounter buttonCounterRight"
        >
          &gt;
        </button>
      </div>

      <p className="counterDate"></p>
    </CounterWrapper>
  );
};

export default Counter;
