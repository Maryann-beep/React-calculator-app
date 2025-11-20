import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch {
      setInput('Error');
    }
  };

  const clear = () => setInput('');


  return (
    <>
      <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        {[7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/'].map((val) => (
          <button
            key={val}
            onClick={() => val === '=' ? calculate() : handleClick(val.toString())}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
