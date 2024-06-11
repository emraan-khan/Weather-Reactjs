import { createContext, useContext,useState } from "react";
import { getWeatherData, getWeatherDataForLocation } from '../api'


const WeatherContext = createContext();

export const useWeather = () =>{
    return useContext(WeatherContext);
}



export const WeatherProvider =(props)=>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);
    const [locError, setLocError] = useState(null);

    const fetchData = async ()=>{
        setLocError('')
        const response = await getWeatherData(searchCity);
        if(response.error){
            setLocError(response.error.message)
            console.log(response.error.message,"response")
        }
        else
        setData(response);
    }

    const fetchCurrentUserLocation = () =>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then(data => setData(data))
        })
    }

    return <WeatherContext.Provider value={{searchCity,data,fetchData,setSearchCity, fetchCurrentUserLocation, locError, setLocError}}>
        {props.children}
    </WeatherContext.Provider>

}