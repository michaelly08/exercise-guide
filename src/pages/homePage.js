import React, {useState} from 'react'
import {Box} from "@mui/material"
import HeroBanner from "../components/heroBanner"
import SearchExercise from "../components/searchExercise"
import Exercises from "../components/exercises"


const HomePage = () => {
    const [exercises, setExercises] = useState([])
    const [bodyPart, setBodyPart] = useState("all")
    return (
        <Box>
            <HeroBanner />
            <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />

        </Box>
    )
}

export default HomePage