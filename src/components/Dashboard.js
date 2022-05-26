import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import UserNavbar from './UserNavbar';
import CitiesList from "./CitiesList";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const location = useLocation()

    return (
        <div className="dashboard">
            <UserNavbar />
            <h1>Hi, {location.state.username}</h1>
            <CitiesList />
        </div>
    )

}