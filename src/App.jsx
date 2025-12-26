import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const BUTTONS = [
  "C", "⌫", "/", "x", "-",
  "7", "8", "9", "+",
  "4", "5", "6", "=",
  "1", "2", "3", "0", "."
];

const OPERATORS = ["/", "x", "-", "+"];

export default function App() {
  const [expression, setExpression] = useState("");

  const handleInput = (val) => {
    if (val === "C") return setExpression("");

    if (val === "⌫"){
      setExpression(prev => prev.slice(0, -1));
      return;
    } 
    
    if (val === "=") {
      try {
        const result = evaluate(expression.replace(/x/g, "*"));
        setExpression(String(result));
      } catch {
        setExpression("Error");
      }
      return;
    }

    // Prevent double operators
    const lastChar = expression.slice(-1);
    if (OPERATORS.includes(val) && OPERATORS.includes(lastChar)) {
      setExpression(prev => prev.slice(0, -1) + val);
      return;
    }

    setExpression(prev => (prev === "0" ? val : prev + val));
  };

  return (
    <div className="calculator">
      <div className="display-screen">{expression || "0"}</div>
      <div className="buttons-container">
        {BUTTONS.map((btn) => (
          <button 
            key={btn}
            className={`button ${getBtnClass(btn)}`}
            onClick={() => handleInput(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

const getBtnClass = (btn) => {
  if (btn === "C") return "clear-btn";
  if (btn === "=") return "equal-btn";
  if (["+", "-", "x", "/"].includes(btn)) return "operator-btn";
  return "";
};