import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [number, setNumber] = useState()

  // const [time, setTime] = useState(Date.now());

  function newNumber() {
    const newNumber = Math.floor(Math.random() * 100)
    console.log(newNumber)
    setNumber(newNumber)
  }

  useEffect(() => {
    const interval = setInterval(() => newNumber(), 4000)
    return () => {
      newNumber()
      clearInterval(interval)
    };
  }, [])


  function handleClick(e) {
    e.preventDefault()
    newNumber()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{number}</h1>
        <button onClick={handleClick}>SAPE</button>
      </header>
    </div>
  );
}

export default App;
