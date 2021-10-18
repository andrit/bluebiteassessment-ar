import React, { useState } from 'react';
const WeatherEl = (lat:number, lon: number) => {
    const [weatherData, setWeatherData] = useState({}); 
    const getWeather = () => {
        fetch(`http://localhost:3030/integrations/weather?lat=${lat}&lon=${lon}`, {
           method: 'GET'
        })
        .then(response => {
            if(response.ok){ 
                return response.json()
            }
            console.error("response not ok in getWeather")
        })  //try/catch
        .then(data => setWeatherData(data))
        .then(() => console.log("weather data " + weatherData))
        .catch(err => console.log("error getting data " + err));
    }
    //** work on getting correct properties of weatherData and matching design */
    return (
        <>
            <div>
                {/* <h1>{weatherData.currentTemperature ? weatherData.currentTemperature: '76*F'}</h1>
                <h2>{weatherData.currentCity ? weatherData.currentCity: 'Miami'}</h2>
                <h3>{weatherData.todaysDate ? weatherData.todaysDate: 'Tues, Sep 28'}</h3>
                <picture>{weatherData.weatherGraphic ? weatherData.weatherGraphic: 'weather graphic'}</picture> */}
            </div>
        
        </>
    );
};

export default WeatherEl;