import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Navbar from './Navbar';
import axios from 'axios';
import http from "../http-common";

export default function Register() {
    let navigate = useNavigate()

    const [enteredUserName, setEnteredUserName] = useState(null)
    const [enteredPassword, setEnteredPassword] = useState(null)

    const registerUser = async (enteredUserName, enteredPassword) => {
        // const hashedPassword = await bcrypt.hash(enteredPassword, 10)

        const res = await axios.post(`https://cisc4800-weather-app.herokuapp.com/register`, { enteredUserName, enteredPassword })

        // const user = {
        //     username : enteredUserName,
        //     password : enteredPassword
        // }

        // axios({
        //     method: 'POST',
        //     url: 'https://cisc4800-weather-app.herokuapp.com/register',
        //     data: {
        //         user
        //     }
        // })
        // .then(data => console.log(data))
        // .catch(err => console.log(err))

        // console.log(res.json)
    }

    return (
        <div className="login">
            <Navbar />

            <h1 className="register-header">Create Account</h1>
            <label className="login-username">
                Username
                <input className="login-input"
                    placeholder="Username"
                    type="text"
                    name="username"
                    required
                    onChange={e => setEnteredUserName(e.target.value)}
                />
            </label>

            <label className="login-password">
                Password
                <input className="login-input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    required
                    onChange={e => setEnteredPassword(e.target.value)}
                />
            </label>

            <button className="register-button"
                onClick={async () => await registerUser(enteredUserName, enteredPassword)}
            ></button>

        </div>
    )
}