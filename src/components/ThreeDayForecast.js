import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/ThreeDayForecast.css'

export default function ThreeDayForecast({ forecast }) {
    const [dayOneForecast, setDayOneForecast] = useState([])
    const [dayTwoForecast, setDayTwoForecast] = useState([])
    const [dayThreeForecast, setDayThreeForecast] = useState([])


    useEffect(() => {
        console.log('ThreeDayForecast forecast props: ', forecast)
        setDayOneForecast(...dayOneForecast, forecast[0].hour)
        setDayTwoForecast(...dayTwoForecast, forecast[1].hour)
        setDayThreeForecast(...dayThreeForecast, forecast[2].hour)
    }, [])

    return (
        <div className="forecasts">
            <div className="title">
                <h1>3 Day Hourly Forecast</h1>
            </div>

            <div className="daily-forecast">
                <h2 className="forecast-date">{forecast[0].date}</h2>

                {dayOneForecast ? dayOneForecast.map((hour, index) => {
                    return (
                        <div key={index} className='hourly-summary'>
                            <h3>{hour.time}</h3>

                            <img src={hour.condition.icon} />
                            <p>{hour.condition.text}</p>

                            <div className="temp">
                                <div className="temp-option">
                                    <h3>F</h3>
                                    <p>{hour.temp_f}°</p>
                                </div>
                                <div className="temp-option">
                                    <h3>C</h3>
                                    <p>{hour.temp_c}°</p>
                                </div>
                            </div>
                        </div>
                    )
                }) : <></>}
            </div>

            <div className="daily-forecast">
                <h2 className="forecast-date">{forecast[1].date}</h2>
                {dayTwoForecast ? dayTwoForecast.map((hour, index) => {
                    return (
                        <div key={index} className='hourly-summary'>
                            <h3>{hour.time}</h3>

                            <img src={hour.condition.icon} />
                            <p>{hour.condition.text}</p>

                            <div className="temp">
                                <div className="temp-option">
                                    <h3>F</h3>
                                    <p>{hour.temp_f}°</p>
                                </div>
                                <div className="temp-option">
                                    <h3>C</h3>
                                    <p>{hour.temp_c}°</p>
                                </div>
                            </div>
                        </div>
                    )
                }) : <></>}
            </div>

            <div className="daily-forecast">
                <h2 className="forecast-date">{forecast[2].date}</h2>
                {dayThreeForecast ? dayThreeForecast.map((hour, index) => {
                    return (
                        <div key={index} className='hourly-summary'>
                            <h3>{hour.time}</h3>

                            <img src={hour.condition.icon} />
                            <p>{hour.condition.text}</p>

                            <div className="temp">
                                <div className="temp-option">
                                    <h3>F</h3>
                                    <p>{hour.temp_f}°</p>
                                </div>
                                <div className="temp-option">
                                    <h3>C</h3>
                                    <p>{hour.temp_c}°</p>
                                </div>
                            </div>
                        </div>
                    )
                }) : <></>}
            </div>
        </div>
    )
}