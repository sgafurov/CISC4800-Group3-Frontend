import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"

export default function UserNavbar() {
    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const logoutUser = () => {
        localStorage.removeItem('token-info')
    }

    return (
        <div className="navbar">
            <div className="nav-buttons">
                <button onClick={goToHome}>HOME</button>

                <button onClick={logoutUser} id='login'>LOGOUT</button>

            </div>
        </div>
    )
}