import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Navbar from './Navbar';

export default function Login() {
    let navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const fetchUser = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://cisc4800-weather-app.herokuapp.com/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData) //login data is currently a JS object. so you have to send it as JSON object
            });
            const resObject = await res.json()
            console.log('line 35 of login', resObject)
            if (resObject.status == 400) {
                throw resObject
            }
            navigate('/dashboard', { state: { username: loginData.username } })
            alert('Success')
        } catch (err) {
            console.log('line 41 of register error', err)
            if (err.status == 400) {
                alert(err.message)
            }
        }
    }

    return (
        <div className="login">

            <Navbar />


            <form onSubmit={fetchUser}>
                <ul className="login-form">
                    <h1 className="login-header">Login</h1>

                    <li>
                        <label>Username <span className="required">*</span></label>
                        <input className="login-input"
                            value={loginData.username}
                            placeholder="Username"
                            type="text"
                            name="username"
                            required
                            onChange={handleChange}
                        />
                    </li>


                    <li>
                        <label>Password <span className="required">*</span></label>
                        <input className="login-input"
                            value={loginData.password}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                            onChange={handleChange}
                        />
                    </li>

                    <li>
                        <input type="submit" value="Login" className="register-button" />
                    </li>
                </ul>
            </form>

        </div>
    )
}
