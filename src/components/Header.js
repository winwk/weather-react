import React, { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'
import { TiWeatherCloudy } from "react-icons/ti";


function Header() {

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Weather App <TiWeatherCloudy /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header