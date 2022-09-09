import React, {useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"

import { exerciseOptions, fetchData } from "../utils/fetchData" 
import HorizontalScrollbar from "../components/horizontalScrollbar"

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState("")
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
            setBodyParts(["all", ...bodyPartsData])
        }

        fetchExercisesData()
    },[])

    
    const searchText = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    const searchEnter = (e) =>{
        e.preventDefault()
        e.target.reset()
    }

    
    const handleSearch = async () =>{
        try {
            if(search) {
                const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)

                const searchedExercises = exercisesData.filter(
                    (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                )
                window.scrollTo({top: 1100, behavior: 'smooth'})
                setSearch("")
                setExercises(searchedExercises)
                
            }
        }
        catch(err){
            console.log(err)
        }

    }


    return (
        <div className="search-container">
            <div className="search-wrapper">
                <div className="search-box">
                    Explore Exercises That Best Fit You
                </div>
                <div className="search-box-form">

                    <form className="search-form" onSubmit={searchEnter}>
                        <input type="text" placeholder="Search" onChange={searchText}></input>
                        <button type="submit" onClick={handleSearch}><i className='bx bx-search-alt-2'></i></button>
                    </form>
                </div>
            </div>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </div>
    )
}



export default SearchExercise