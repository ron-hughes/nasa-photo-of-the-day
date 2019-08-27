import React from "react"
import ApodCall from "./apod-api"

function Apod(props) {

    return (
        <div className='apod'>
            <div className='apod-image'><img src={`${props.apodURL}`} width='400px' height='400px' /> </div>
            <div className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       
        </div>
    ) 

}

export default Apod
