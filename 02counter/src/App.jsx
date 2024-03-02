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

      // interview question
      // setCounter(counter + 1)
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
      // What will happen now  Ans. The output will still increment only by 1 because fiber in react which send it in a package form so it is only repeating 
      // Now, if you want this situation where you want to increment it by more amount  
      // Ans. setCounter gives you a callback function which holds the previousvalue or you can say the updated value after 1 sum the syntax will be:-
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)
      // setCounter((prevCounter) => prevCounter + 1)

      // These are interview questions that are generally asked (said by Hitesh sir)
      // I'll comment this lines so it does't break the flow of the original program and i can reference from it whenever i want


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
