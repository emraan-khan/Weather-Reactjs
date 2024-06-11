const baseURL = "https://api.weatherapi.com/v1/current.json?key=8d70ff044b334f3288d61143240706";

export const getWeatherData =async (city)=>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation =async (lat,lon)=>{
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}