import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
    <h1>Counter App</h1>
    <button onClick={increment}>Add Value</button>
    <h3>Counter value: {count} </h3>
    <button onClick={decrement}>Remove Value</button>
    </>
  )
}

export default App
