import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import UserNavbar from './UserNavbar';
import CitiesList from "./CitiesList";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const location = useLocation()
    const [isLoggedin, setIsLoggedin] = useState('');
    let username = location.state.username

    let usernameArray = username.split('')
    username = usernameArray[0].toUpperCase() + username.substring(1).toLowerCase()

    useEffect(() => {
        setIsLoggedin(true)
        localStorage.setItem('token-info', JSON.stringify(username))
        if (console.log(localStorage.getItem('token-info')) == null) {
            setIsLoggedin(false)
        }
    }, username)

    return (
        <div className="dashboard">
            <UserNavbar />
            <h1>Hi, {username}</h1>
            <CitiesList />
        </div>
    )

}