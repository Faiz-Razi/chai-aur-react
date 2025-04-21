import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Faiz',
    age: 34

  }

  let newArr = [1, 2, 3]

  return (
    <>

      <h1 className='bg-green-500 p-4 rounded-lg text-black mb-4'>
        Tailwind Test
      </h1>

      <Card name='Fahad' position='Developer' someObj={newArr} />

      <Card name='Farooq' />

    </>
  )
}

export default App
