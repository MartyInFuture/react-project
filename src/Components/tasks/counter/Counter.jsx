import { useState, useEffect } from "react";
import { CounterWrapper } from "./CounterStyled";
// import {  } from ''
import moment from "moment";

const Counter = ({ data, settargetDate }) => {
  //   console.log(moment().format("L"));
  const [counter, setcounter] = useState(1);
  // const [day, setDay] = useState(0);
  // const [month, setMonth] = useState(0);
  // const [year, setYear] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(null);
  const targetDate = moment(startDate)
    .add(counter - 1, "day")
    .format("DD MM YYYY");
  console.log("targetDate", targetDate);
  // moment('2016-03-12 13:00:00').add(1, 'day').format('LLL')
  // "March 13, 2016 1:00 PM";
  settargetDate(
    moment(startDate)
      .add(counter - 1, "day")
      .format("YYYY-MM-DD")
  );

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setStartDate(data.startDate);
      setDuration(data.duration);
    }
    // data.map((item) => item.hoursWastedPerDay.map((day) => console.log(day)));
    // setDay(Number(data.startDate.slice(8)));
    // setMonth(Number(data.startDate.slice(5, -3)));
    // setYear(Number(data.startDate.slice(0, -6)));
  }, [data]);

  const increment = () => {
    if (counter !== duration) {
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
          <span className="counterDate">/ {duration}</span>
        </p>
        <button
          type="button"
          onClick={increment}
          className="buttonCounter buttonCounterRight"
        >
          &gt;
        </button>
      </div>

      <p className="counterDate">
        {targetDate}
        {/* {counter === 1 && day} {counter > 1 && day + (counter - 1)}. */}
        {/* {month < 10 && <span>0</span>} */}
        {/* {month}.{year} */}
      </p>
    </CounterWrapper>
  );
};

export default Counter;
