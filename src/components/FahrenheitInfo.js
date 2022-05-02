import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import "../styles/WeatherInfo.css"

export default function FahrenheitInfo({weatherData}) {
    return (
        <div className="weather-class">
            <h1>Current Weather: {weatherData.current.temp_f}ºF</h1>
            <h1>Conditions: {weatherData.current.condition.text}</h1>
            <img src={weatherData.current.condition.icon} />
            <h1>Humidity: {weatherData.current.humidity}%</h1>
            <h1>Wind: {weatherData.current.wind_mph}mph</h1>
            <h1>Feels Like: {weatherData.current.feelslike_f}ºF</h1>
        </div>
    )
}