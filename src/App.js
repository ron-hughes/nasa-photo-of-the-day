import React, {useState, useEffect} from "react"
import "./App.css"
import Header from "./header"
import Info from "./info"
import Apod from "./apod"
import axios from "axios"

function App() {
  const [apodURL, setApod] = useState()
  
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Rr0SIJ8git2k33KMUdKZNwyk9t1uWKSFK0IiMiFZ')
      .then( res => {
        setApod(res.data.url);
      })
      .catch( err => {

      })
  
  // useEffect(() => {
  //   ApodCall();  
  // }, [])

  return (
    <div className="App">
   
      <Header />
      <hr/>
      <Apod apodURL={apodURL}/>
      <hr />
      <Info/>

    

    </div>
  );
}

export default App;
