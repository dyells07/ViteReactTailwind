import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
    setCounter(prevCounter => prevCounter + 1);
  }
  }

  const removeValue = () => {
    
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Hello hello</h1>
      <h2>Counter value: {counter}</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ flex: 1 }} onClick={addValue}>Add Value {counter}</button>
        <button style={{ flex: 1 }} onClick={removeValue}>Remove Value {counter}</button>
        <p>footer: {counter}</p>
      </div>
    </div>
  );
}

export default App;
