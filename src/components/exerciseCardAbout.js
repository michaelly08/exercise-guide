import React from 'react'
import {Link} from "react-router-dom"

const ExerciseCardAbout = ({exercise}) => {
    // console.log(exercise)


    return (
        <div className="exercise-card-about-container" >
            <Link to={`/exercise/${exercise.id}`} className="exercise-card-wrapper" style={{textDecoration: 'none'}} onClick={() => (window.scrollTo({top: 0, behavior: 'smooth'}))}>
                <img className="exercise-gif" src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>


                    <div className="exercise-card-box"> 
                        <div className="exercise-card-type">{exercise.bodyPart}</div>
                        <div className="exercise-card-type">{exercise.target}</div>
                    </div>


                    <div className="exercise-card-box">
                        <div className="exercise-card-name">{exercise.name}</div>
                    </div>
            </Link>
        </div>
    )
}



export default ExerciseCardAbout