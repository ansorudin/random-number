import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    let value = e.target.value;

    if (/^[0-9.,]*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setResult(0);
      return;
    }

    const sanitizedValue = inputValue.replace(/[.,]/g, "");
    const reversedValue = sanitizedValue.split("").reverse().join("");
    const difference = Math.abs(Number(sanitizedValue) - Number(reversedValue));
    setResult(difference);
  };

  return (
    <div className="App">
      <main className="content">
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            placeholder="Please input your number"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <h4>Result: {result}</h4>
      </main>
    </div>
  );
}
