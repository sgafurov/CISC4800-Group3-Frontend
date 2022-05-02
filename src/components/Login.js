import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundVideo from "../media/clouds_video.mp4"
import "../styles/Login.css"
import Navbar from './Navbar';

export default function Login() {
    const [token, setToken] = useState();
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        //compare user from db with the user from the state
    }

    return (
        <div className="login">
            <Navbar />

            <form onSubmit={handleSubmit} className="login-form" action="">
            <h1 className="login-header">Login</h1>
                <label className="login-email">
                    Email
                    <input className="login-input"
                        value={loginData.username}
                        placeholder="Email"
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </label>
                <label className="login-password">
                    Password
                    <input className="login-input"
                        value={loginData.password}
                        placeholder="Password"
                        type="text"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                
                <input type="submit" value="Login" className="login-btns login-submit-btn" />
            </form>
        </div>
    )
}