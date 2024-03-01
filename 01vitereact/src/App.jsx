import { useState } from 'react'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chai/>
    <h1>Chai aur react</h1>
    <p>test paragraph</p>
    </>
  )
}

export default App
