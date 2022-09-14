import React from 'react'
import {Box, Stack, Typography, Button} from "@mui/material"
import Banner from "../assets/images/banner.png"



const HeroBanner = () => {
    return (
        <div className="herobanner-container">
            <div className="herobanner-wrapper">
                <img className="hero-banner-img" src={Banner}></img>
                <div className="herobanner-box">
                    <div>Join The Club</div>
                    <div>
                        Time to achieve <br/> your Goals
                    </div>
                    <div>
                        Provide you the most effective workouts
                    </div>

                    <Button className="herobanner-box-button" variant="contained" color="error" onClick={() => window.scrollTo({top: 900, behavior: 'smooth'})}>
                        Explore Exercises
                    </Button>
                    <div className="noselect">
                        Fitness
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default HeroBanner