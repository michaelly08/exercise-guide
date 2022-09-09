import React from 'react'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <div className="bodyPart-container" 
        onClick={() => {
            setBodyPart(item)
            window.scrollTo({top:1100, left: 100, behavior: 'smooth'})
        }}>
            <div className="bodyPart-wrapper">
                <div></div>
                <div className="bodyPart-box">
                    <div>{item}</div>
                </div>
            </div>
        </div>
    )
}

export default BodyPart