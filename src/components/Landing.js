import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundVideo from "../media/clouds_video.mp4"
import "../styles/Landing.css"
import Navbar from './Navbar';

export default function Landing() {
    const [address, setAddress] = useState('')
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(address)
        navigate(`/${address.toLowerCase()}`)
    }

    return (
        <div className="landing">
            <Navbar/>

            {/* <video src={backgroundVideo} autoPlay muted loop id='video' /> */}

            <div id="landing-main-elements">
                <h1 id="website-title">Current Conditions</h1>

                <div id="landing-search-elements">
                    <form onSubmit={handleSubmit} id="landing-form">
                        <label>
                            Enter zip code, city name, or address
                            <input type="text" name="address" className="landing-input" onChange={e => setAddress(e.target.value)} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}