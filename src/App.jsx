import { useState } from "react";
import { evaluate } from "mathjs"; // mathjs safely evaluates expressions
import "./App.css";

function App() {
  const buttons = [
    "C", "/", "x", "-",
    "7", "8", "9", "+",
    "4", "5", "6", "=",
    "1", "2", "3", "0", "."
  ];

  const [tokens, setTokens] = useState([]); // store everything as tokens
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setTokens([]);
      setDisplay("0");
      return;
    }

    if (value === "=") {
      try {
        // join tokens into a string expression
        const expr = tokens.join(" ").replace(/x/g, "*");
        const result = evaluate(expr);
        setDisplay(String(result));
        setTokens([String(result)]); // allow chaining further calculations
      } catch {
        setDisplay("Error");
        setTokens([]);
      }
      return;
    }

    // otherwise add token
    setTokens((prev) => [...prev, value]);
    setDisplay((prev) =>
      prev === "0" ? value : prev + value
    );
  };

  return (
    <div className="calculator">
      <div className="display-screen">{display}</div>
      <div className="buttons-container">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
