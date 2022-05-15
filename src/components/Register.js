import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Navbar from './Navbar';
import axios from 'axios';

export default function Register() {
    let navigate = useNavigate()

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const registerUser = async (event) => {
        // const hashedPassword = await bcrypt.hash(enteredPassword, 10)
        event.preventDefault()
        try {
            //`http://localhost:8080/register`
            //await fetch(`https://cisc4800-weather-app.herokuapp.com/register`
            const result = await fetch(`https://cisc4800-weather-app.herokuapp.com/register`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: enteredUserName,
                    password: enteredPassword
                })
            });
            const resObject = await result.json()
            console.log('line 48 of registerUser', resObject)
            if (resObject.status == 400) {
                throw resObject
            }
            navigate('/login')
        } catch (err) {
            console.log('line 50 of register error', err)
            if (err.status == 400) {
                alert(err.message)
            }
        }
    }

    return (
        <div className="login">
            <Navbar />

            <form onSubmit={registerUser}>
                <ul className="login-form">
                    <h1 className="login-header">Register</h1>

                    <li>
                        <label>Username <span className="required">*</span></label>
                        <input className="login-input"
                            placeholder="Username"
                            type="text"
                            name="username"
                            required
                            onChange={e => setEnteredUserName(e.target.value)}
                        />
                    </li>

                    <li>
                        <label>Password <span className="required">*</span></label>
                        <input className="login-input"
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            onChange={e => setEnteredPassword(e.target.value)}
                        />
                    </li>

                    <li>
                        <input type="submit" value="Register" className="register-button" />
                    </li>
                </ul>
            </form>

        </div>
    )
}