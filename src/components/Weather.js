import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import CelsiusInfo from "./CelsiusInfo";
import FahrenheitInfo from "./FahrenheitInfo";
import ThreeDayForecast from './ThreeDayForecast';
import Navbar from './Navbar';

export default function Weather() {
    let params = useParams()

    const [weatherData, setWeatherData] = useState()
    const [tempF, setTempF] = useState(false)
    const [tempC, setTempC] = useState(false)
    const [forecast, setForecast] = useState([])

    const MY_KEY = process.env.REACT_APP_WEATHER_API_KEY

    useEffect(() => {
        fetchWeatherData()
    }, [])

    const handleTempToggle = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        if (e.target.name === "Fahrenheit") {
            setTempF(true)
            setTempC(false)
        } else {
            setTempC(true)
            setTempF(false)
        }
    }

    const fetchWeatherData = async () => {
        try {
            console.log(params.address)
            // const resWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${params.address}&aqi=no`)
            const resWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${MY_KEY}&q=${params.address}&days=3&aqi=no&alerts=no`)
            const objWeather = await resWeather.json()
            setWeatherData(objWeather)
            setForecast(...forecast, objWeather.forecast.forecastday)
            console.log('objWeather', objWeather)
            console.log('objWeather.forecast.forecastday', objWeather.forecast.forecastday)
        } catch (error) {
            console.log(error)
            alert("No matching location found.")
        }
    }

    return (
        <>
            <Navbar />
            {weatherData ?
                <div>

                    <div className="current-conditions">
                        <h1>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h1>
                        <h2>Current time {weatherData.location.localtime}</h2>
                        <p>Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}   Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</p>

                        <form onClick={handleTempToggle}>
                            <a><button name="Fahrenheit" onChange={e => { setTempF(true); setTempC(false) }}>Fahrenheit</button></a>
                            <button name="Celsius" onChange={e => { setTempC(true); setTempF(false) }}>Celsius</button>
                        </form>

                        {tempF ? <>{FahrenheitInfo({ weatherData })}</> : <>{CelsiusInfo({ weatherData })}</>}
                    </div>

                    <div className="three-day-forecast">
                        <ThreeDayForecast forecast={forecast} />
                    </div>

                </div> : <></>
            }
        </>
    )
}