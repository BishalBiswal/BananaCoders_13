import React, { Component } from 'react'
import { useState } from 'react'

function SignUp() {
    async function registeredUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1377/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
                cpassword,
            })
        })
        const data = await response.json()
        console.log(data)
    }
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    return (
        <>
            <h3>Sign Up</h3>
            <form onSubmit={registeredUser}>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder='Email'
                /><br />
                <input value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder='Username'
                /><br />
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                /><br />
                <input value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    type="password"
                    placeholder='Confirm password'
                /><br />
                <input type="submit" value="Sign-Up" />
            </form>
        </>

    )
}
export default SignUp;