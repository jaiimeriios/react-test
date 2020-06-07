import React, { useState } from 'react'
import './index.css'
import logo from './logo.svg'

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (


        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />

            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <h2>{username}</h2>
            <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
            <button onClick={(e) => {setShowPassword(!showPassword)}}>Show/Hide Password</button>
        </div>
    )
}

export default App
