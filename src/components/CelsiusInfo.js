import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import "../styles/WeatherInfo.css"

export default function CelsiusInfo({weatherData}) {
    return (
        <div className="weather-class">
            <h2>Current Weather: {weatherData.current.temp_c}ºC</h2>
            <h2>Conditions: {weatherData.current.condition.text}</h2>
            <img src={weatherData.current.condition.icon} />
            <h2>Humidity: {weatherData.current.humidity}%</h2>
            <h2>Wind: {weatherData.current.wind_mph}mph</h2>
            <h2>Feels Like: {weatherData.current.feelslike_c}ºC</h2>
        </div>
    )
}