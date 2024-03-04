import LogIn from "./components/LogIn"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import React, {useState} from "react"
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Chai aur code</h1>
     <LogIn/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
