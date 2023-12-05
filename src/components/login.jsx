import React, { useContext, useState } from 'react'
import userContext from '../context/context'

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(userContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password})
    }


  return (
    <div className='login'>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=> setUsername(e.target.value)} /><br />
        <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br />
        <button type='submit' onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login