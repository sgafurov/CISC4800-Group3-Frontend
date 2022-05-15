import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Navbar from './Navbar';

export default function Login() {

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
            const result = await fetch(`http://localhost:8080/${loginData.username}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const resObject = await result.json()
            console.log('line 34 of login', resObject)
            if (resObject.status == 400) {
                throw resObject
            }
            alert('Success')
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
