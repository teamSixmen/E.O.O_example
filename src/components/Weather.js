import { useEffect, useState } from "react";
import weatherStyle from "./Weather.module.css";

function Weather(){

    const API_KEY = 'ffd79babc84386065cd8751e4fbb1c66';

    const [position,setPosition] = useState({});
    const [cityName,setCityName] = useState('');
    const [weather,setWeather] = useState({});
    const [temp,setTemp] = useState(0);

    useEffect(
        () => {
            new Promise((resolve,reject) =>{
                navigator.geolocation.getCurrentPosition(currentPosition =>{
                    setPosition({
                        longitude : currentPosition.coords.longitude,
                        latitude : currentPosition.coords.latitude
                    });

                    resolve(currentPosition.coords);
                });
            }).then(coords => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`)
                    .then(response=>response.json())
                    .then(json => {
                        setCityName(json.name);
                        setWeather(json.weather[0]);
                        setTemp(json.main.temp);
                    });
            });
        },
        []
    );

    return (
        <>
            <div className={weatherStyle.WeatherImg}>
                <img src="/images/위치1.png" style={{width:'14px', marginTop:'13px', marginLeft:'20px',paddingLeft:'10px'}}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                {`${cityName}`}
            </div>
            <div className={weatherStyle.WeatherImg}>
                <img style={{width:'40px',marginRight:'-8px',paddingLeft:'60px'}} src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                { weather.main === 'Clouds' && <><label>구름</label></> }
                { weather.main === 'Rain' && <><label>비</label></> }
                { weather.main === 'Snow' && <label>눈</label> }
            </div>
            <div className={weatherStyle.WeatherImg}>
                <img src="/images/온도계.png" style={{width:'25px', marginTop:'7px',marginRight:'-7px'}}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                {(temp-273.15).toFixed(1)}°C
            </div>
        </>
    );
    
}

export default Weather;