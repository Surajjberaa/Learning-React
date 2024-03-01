import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 1

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter += 1
    // console.log("clicked", counter);
    if (counter<20) {
      setCounter(counter + 1)
    }else{
      alert("Counter value can't exceed 20")
    }
    
  }

  const removeValue = () => {
    if (counter<=0) {
      alert("Counter value Can't be negative")
    }else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>

     <button
     onClick={addValue} 
     >Add Value</button>
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
