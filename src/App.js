import './App.css'
import { useState } from "react"


const App = () => {
  const api={
    key:"0394830e8fa7fbd7bc7e58c0e7b384e2",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  function searchPress(){
    fetch(`${api.base}/weather?q=${search}&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))


  }
  return (
    <div className="App">
    <section className='sec1'>
      <h1>Weather App</h1>
    <input type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder='Enter City' />
      <hr /><br />
      <button onClick={searchPress}>Search</button>
      {(typeof weather.main !=="undefined")?(
        <div className='div1'>
          <p>Name:{weather.name}</p>
          <p>Temp:{weather.main.temp}</p>
          <p>Rain Cloud:{weather.weather[0].main}</p>
          <p>Decription:{weather.weather[0].description}</p>
        </div>
      ):("Not Found")}
    </section>
      
    </div>
  )
}

export default App
