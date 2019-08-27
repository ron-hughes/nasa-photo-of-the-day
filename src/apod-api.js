import React from "react"
import axios from "axios";
import Info from "./info"

function ApodCall(props) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Rr0SIJ8git2k33KMUdKZNwyk9t1uWKSFK0IiMiFZ') 
        .then( res => {
            let url = res.data.url;
            console.log(url)
        })     
}

export default ApodCall