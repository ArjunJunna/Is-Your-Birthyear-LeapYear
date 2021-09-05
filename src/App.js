import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [output, setOutput] = useState("");

  var date;
  function inputDateHandler(e) {
    if (date) {
      var year = Number(date.slice("0", "4"));

      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("leap year");
        setOutput("✨✨✨It is a Leap Year✨✨✨");
      } else {
        console.log("not a leap year");
        setOutput("😭😭😭Not a Leap Year😭😭😭");
      }
    } else {
      setOutput("Please select the date...");
    }
  }

  return (
    <div className="App">
      <div className="content">
        <h1 className="appTitle">Is your Birthyear a Leap Year?</h1>
        <h2>Select your Date of Birth</h2>
        <input
          type="date"
          onChange={(e) => {
            date = e.target.value;
          }}
          required
          className="input"
        />
        <button onClick={inputDateHandler} className="btn">
          CHECK
        </button>
        <div className="output">
          <span className="para">{output}</span>
        </div>
      </div>
    </div>
  );
}
