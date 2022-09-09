import React from 'react'
import {Link} from "react-router-dom";
import {Stack} from "@mui/material"
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/" className="navbar-box">
                    <img src={Logo}></img>
                </Link>
                <div className="navbar-box">
                    <Link to="/" className="link">Home</Link>
                </div>
                <div className="navbar-box" onClick={() => window.scrollTo({top: 900, behavior: 'smooth'})} >
                    <a className="link">Exercises</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar