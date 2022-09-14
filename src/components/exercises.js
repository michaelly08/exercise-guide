import React, {useState, useEffect} from 'react'
import Pagination from "@mui/material/Pagination";
import {Box, Stack, Typography } from "@mui/material"
import ExerciseCard from "./exerciseCard"

import {exerciseOptions, fetchData} from "../utils/fetchData"

const Exercises = ({exercises, setExercises, bodyPart}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [currentExercises, setCurrentExercises] = useState([]);

    const exercisesPerPage = 6;

    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

    

    // const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    // console.log(currentExercises)
    useEffect(() => {
        if(exercises.length) {
            setCurrentExercises(exercises.slice(indexOfFirstExercise, indexOfLastExercise))
        }
        console.log(exercises)
    }, [exercises])
    


    
    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1100, behavior: 'smooth'})
    }

    useEffect(()=> {
        const fetchExercisesData = async () => {
            let exercisesData= []

            if (bodyPart === "all"){
                exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }

            setExercises(exercisesData)
        }
        fetchExercisesData()
    }, [bodyPart])
    


    return (
        <div className="exercises-container">
           <div className="exercises-container-title">Showing Results</div>

           {currentExercises.length ?            
                <div className="exercises-wrapper">
                        {currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise}/>
                    ))}
                </div>
                    : 
                <div className="loading-wrapper">
                    <div className="loading"></div>
                </div>
            }

            <Stack mt="80px" mb="50px" alignItems="center">
                {exercises.length > exercisesPerPage && (
                    <Pagination 
                    color="standard"
                    shape="rounded"
                    defaultPage={1}
                    count={Math.ceil(exercises.length / exercisesPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="small"
                    />
                )}
            </Stack>
        </div>
    )
}

export default Exercises