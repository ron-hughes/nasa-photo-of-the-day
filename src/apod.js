import React from "react"
import ApodCall from "./apod-api"

function Apod(props) {

    return (
        <div className='apod'>
            <div className='apod-image'><img src={`${props.apodURL}`} width='400px' height='400px' /> </div>
            <div className="summary">{props.explanation}</div>
       
        </div>
    ) 

}

export default Apod
