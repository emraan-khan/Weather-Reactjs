import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather';
import { useEffect } from 'react'
import sunOff from "./assets/sunOff.png"
import sunOn from "./assets/sunOn.png"


const App = () => {
  const weather = useWeather();

  const [sun, setSun] = useState(true)

  useEffect(()=>{
    weather.fetchCurrentUserLocation();
  },[])

  return (
    <div className={`App ${sun? 'light':'dark'}`}>
    <div className='title'>
      <h1>Weather Forecast</h1>
      <img src={sun? sunOff: sunOn} className='icon' onClick={()=> setSun(!sun)}/>
    </div>
      <Input />
      <Button onClick={weather.fetchData} value='Search' />
      <Card />
      {/* <Button value='Refresh' /> */}
    </div>
  )
}

export default App
