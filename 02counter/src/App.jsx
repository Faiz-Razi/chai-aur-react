import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5

  const add = () => {
    // counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    console.log('Value Added', counter);
  }

  const min = () => {
    // counter = counter - 1
    setCounter(counter - 1)
    console.log('Value Sub', counter);
  }

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter + 1)
    if (counter < 3) setCounter(counter + 1);
    console.log('Value Added', counter);
  }

  const subValue = () => {
    // counter = counter - 1
    // setCounter(counter - 1)
    if (counter > 0) setCounter(counter - 1);
    console.log('Value Sub', counter);
  }

  function increment() {
    if (counter + 1 > 3) {
      alert("Limit exceed")
    } else {
      setCounter(counter + 1)
      console.log(counter);
    }
  }

  function decrement() {
    if (counter - 1 < 0) {
      alert("Value cannot be negetive")
    } else {
      setCounter(counter - 1)
      console.log(counter)
    }
  }

  return (
    <>

      <h1>Counter value : {counter}</h1>

      <button onClick={add} >
        Add
      </button>

      <button onClick={min} >
        Sub
      </button>


    </>
  )
}

export default App
