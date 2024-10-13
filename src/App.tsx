import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () =>{
    setCounter(val => val -1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 data-testid="counter">{counter}</h1>
        <button onClick={handleIncrement}>SUBTRACT</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn CI/CD
        </a>
      </header>
    </div>
  );
}

export default App;
