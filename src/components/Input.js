import React from 'react'
import { useWeather } from '../context/Weather'
import icon from '../location.png'
import '../App.css'
const Input = (props) => {
    const weather = useWeather();

    const handleClearSearch = () => {
        weather.setSearchCity('');
        weather.fetchCurrentUserLocation();
    };

    return (
        <div className='search-div'>
            <input
                className='input-field'
                placeholder='Search Here...'
                value={weather.searchCity || ''}
                onChange={(e) => weather.setSearchCity(e.target.value)}
            />
            <img
                src={icon}
                className='loc'
                onClick={handleClearSearch}
            />    </div>
    )
}

export default Input
