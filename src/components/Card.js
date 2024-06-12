import React from 'react'
import { useWeather } from '../context/Weather';
const Card = () => {
    const weather = useWeather();
    console.log(weather.data);
  return (
    <div className='card'>
      <img src={weather?.data?.current?.condition?.icon}/>
      <h3> {weather?.data?.current?.condition?.text}</h3>
      <h2>{weather.data?.current.temp_c}°C</h2>
      <h5> {weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} </h5>
      <h5>Humidity : {weather.data?.current?.humidity}%</h5>
      <h5>Wind: {weather.data?.current?.wind_kph} kph</h5>
      <h5>Last Updated : {weather.data?.current?.last_updated} </h5>
    </div>
  )
}

export default Card;
