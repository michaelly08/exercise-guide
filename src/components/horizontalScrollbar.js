import React, { useContext } from 'react'
import {Box, Typography} from "@mui/material"
import BodyPart from "./bodyPart"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu"
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCardAbout from "./exerciseCardAbout"



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        {/* <img src={LeftArrowIcon} alt="right-arrow" /> */}
        <i className='bx bx-chevron-left'></i>
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        {/* <img src={RightArrowIcon} alt="right-arrow" /> */}
        <i className='bx bx-chevron-right'></i>
      </Typography>
    );
  };


const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
    return (
        <div className="scroll-menu">
          {isBodyParts && <div className="scroll-menu-title">Select Body Part</div>}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> 
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/> : <ExerciseCardAbout exercise={item}/>}
          </Box>
        ))}
      </ScrollMenu>
      </div>
    )
}

export default HorizontalScrollbar