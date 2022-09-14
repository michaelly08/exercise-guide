import { MusicNote } from '@mui/icons-material'
import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {exerciseOptions, fetchData, youtubeOptions} from "../utils/fetchData"
import {Typography, Stack, Button} from "@mui/material"
import HorizontalScrollbar from "../components/horizontalScrollbar"







const ExerciseDetailPage = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideo, setExerciseVideo] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentMuscleExercises, setEquipmentMuscleExercises] = useState([])


    const {id} = useParams()

    

    useEffect(() => {
        const fetchExercisesData= async () => {
            try{
                const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
                const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"
                const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
                setExerciseDetail(exerciseDetailData)

                const exercisevideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}+exercise`, youtubeOptions)
                setExerciseVideo(exercisevideoData.contents)

                const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
                setTargetMuscleExercises(targetMuscleExercisesData)

                const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
                setEquipmentMuscleExercises(equipmentExercisesData)
            } catch(err) {
                console.log(err)
            }
        }



        fetchExercisesData()
    }, [id])

    return (
        <div>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentMuscleExercises={equipmentMuscleExercises}/>
        </div>
    )
}


const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

    
    console.log(exerciseDetail)
    return (
        <div className="exerciseDetail-container">
            <div className="exerciseDetail-wrapper">

                {exerciseDetail.gifUrl ?
                    <div className="exerciseDetail-image">
                        <img src={gifUrl} alt={name} loading="lazy"></img>
                    </div>
                    : <div className="loading-wrapper">
                        <div className="loading"></div>
                    </div>
                    }



                {exerciseDetail.name ?
                    <div className="exerciseDetail-box">
                        <div>
                            <div className="exerciseDetail-name">{name}</div>
                            <div className="exerciseDetail-description">Exercises keeps you strong and healthy. {capitalizeFirst(`${name}`)} {` `} is one of the best exercises to target your {target}.</div>
                        </div>

                        <div>
                            <div className="exerciseDetail-type">Body Part: {capitalizeFirst(`${bodyPart}`)}</div>
                            <div className="exerciseDetail-type">Target: {capitalizeFirst(`${target}`)}</div>
                            <div className="exerciseDetail-type">Equipment: {capitalizeFirst(`${equipment}`)}</div>
                        </div>
                    </div>
                    : <div></div>
                }
                





            </div>
        </div>
    )
}





const ExerciseVideo = ({exerciseVideo, name}) => {

    const loading = () => {
        if (!exerciseVideo.length) {
            return (
                <div className="loading"></div>
            )
        }
    }


    return (
        <div className="exerciseVideo-container">
            <div className="exerciseVideo-wrapper">
                <div className="exerciseVideo-title">
                    Watch <strong>{name}</strong> exercise videos
                </div>

                <div className="exerciseVideo-box">
                    {loading()}
                    {exerciseVideo?.slice(0,3).map((item,index) => (
                        <a key={index} className="exerciseVideo-video"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                            <div>{item.video.channelName}</div>
                        </a>
                    ))}
                </div>



            </div>
        </div>
    )
}


const SimilarExercises = ({targetMuscleExercises, equipmentMuscleExercises}) => {

    return (
        <div className="similarExercises-container">
            <div className="similarExercises-wrapper">


                <div className="similarExercises-title">Similar Muscle Group Exercises</div>
                <div className="similarExercises-box">
                    {targetMuscleExercises.length ?
                    <HorizontalScrollbar data={targetMuscleExercises}/>
                    : <div className="loading-wrapper">
                        <div className="loading"></div>
                    </div>
                    }
                </div>



                <div className="similarExercises-title">Similar Equipment Exercises</div>
                <div className="similarExercises-box">
                    {equipmentMuscleExercises.length ?
                    <HorizontalScrollbar data={equipmentMuscleExercises}/>
                    : <div className="loading-wrapper">
                        <div className="loading"></div>
                    </div>
                    }
                </div>



            </div>
        </div>
    )
}




export default ExerciseDetailPage