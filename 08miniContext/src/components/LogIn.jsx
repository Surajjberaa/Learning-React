import React, {useContext, useState} from 'react'
import UserContext from '../context/userContext'

function LogIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
       e.preventDefault()
       setUser({username, password})
    }

  return (
    <div>
        <h2>Log In</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' />
        <br />
        <br />
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LogIn