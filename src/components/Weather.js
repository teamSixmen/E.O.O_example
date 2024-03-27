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
                console.log('마운트 시점에 실행되나?');
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
                        if(json.name === 'Banpobondong' || 'Jamwon-dong') {
                            setCityName('서울시 서초구 서초동');
                        }
                        setWeather(json.weather[0]);
                        setTemp(json.main.temp);
                    });
            });
        },
        []
    );

    return (
        <>
            <div style={{display:'inline-block'}}>
                <img src="/images/위치1.png" style={{width:'14px',marginLeft:'25px',marginTop:'13px',marginRight:'8px'}}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                <label>{`${cityName}`}</label>
            </div>
            <div style={{display:'inline-block'}}>
                <img width='40px' src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                { weather.main === 'Clouds' && <><label>&nbsp;구름</label></> }
                { weather.main === 'rain' && <><label>&nbsp;비</label></> }
                { weather.main === 'snow' && <label>&nbsp;눈</label> }
            </div>
            <div style={{display:'inline-block'}}>
                <img src="/images/온도계.png" style={{width:'25px', marginLeft:'25px',marginTop:'7px'}}/>
            </div>
            <div className={weatherStyle.WeatherInfo}>
                {(temp-273.15).toFixed(1)}°C
            </div>
        </>
    );
    
}

export default Weather;