import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/navbar"
import HomePage from "./pages/homePage"
import ExerciseDetailPage from "./pages/exerciseDetailPage"
import Footer from "./components/footer"
import "./styles.css"

import "./App.css"

const App = () => {
    return (
        <div className="whole-project">
            <Navbar/>
            <Routes>
                <Route path ="/" element={<HomePage/>}/>
                <Route path ="/exercise/:id" element={<ExerciseDetailPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App