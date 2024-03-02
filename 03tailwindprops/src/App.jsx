import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

const myObj = {
  usename: "Suraj",
  password: 123
}

const myArr = [1,2,3]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Chai aur Code" btntext="Click me" />
     <Card username="Hitesh Choudhary" />

    </>
  )
}

export default App
