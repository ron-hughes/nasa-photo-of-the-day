import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./header"
import Info from "./info"
import ApodCall from "./apod-api"
import Apod from "./apod"

function App() {
  const [apodURL, setApod] = useState('https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_960.jpg')
  
  
  useEffect(() => {
    ApodCall();  
  }, [])

  return (
    <div className="App">
   
      <Header />
      <hr/>
      <Apod apodURL={apodURL}/>
      <hr />
      <Info apodURL={apodURL}/>

    

    </div>
  );
}

export default App;
